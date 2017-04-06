var banr = require('./')
var test = require('tape')
var concat = require('concat-stream')

test('testing', function (t) {
  t.plan(3)
  var q = banr()
  q.end('EOF')

  q.pipe(concat(function (body) {
    var str = body.toString('utf8')
    var parts = str.split('\n')

    t.equal(parts.length, 2, 'should be 2')
    t.ok(parts[0].match(/^\\*(.+)\*\/$/i), 'should contain the banner')
    t.equal(parts[1], 'EOF', 'should be contain `EOF` string')
  }))
})
