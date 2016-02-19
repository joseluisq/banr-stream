var banr = require('banr');
var through = require('through2');
var banner = Buffer(banr(), 'utf8');

module.exports = function() {
  var stream = through();
  stream.push(banner);
  return stream;
};
