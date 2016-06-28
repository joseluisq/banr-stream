var path = require('path')
var banr = require('banr')
var through = require('through2')

module.exports = function (filename) {
  var stream = through()

  if (filename) {
    filename = path.resolve(__dirname, filename)
  }

  var banner = Buffer(banr(filename), 'utf8')
  stream.push(banner)

  return stream
}
