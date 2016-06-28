var banr = require('../')

process.stdin
  .pipe(banr())
  .pipe(process.stdout)
