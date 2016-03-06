# banr-stream [![Build Status](https://travis-ci.org/joseluisq/banr-stream.svg?branch=master)](https://travis-ci.org/joseluisq/banr-stream)
> Prepend [one-line package.json banner](https://github.com/joseluisq/banr) in pipeline.

![banr-stream](https://cloud.githubusercontent.com/assets/1700322/13168007/7f349674-d6a6-11e5-935d-b3e71aa2a231.png)

## Install

```sh
$ npm install banr-stream --save-dev
```

## Usage

```js
var banr = require('banr-stream');

process.stdin
  .pipe(banr())
  .pipe(process.stdout);
```

Output:

```sh
$ echo "content of my module" | node example/stream.js
/*! MyModule v1.0.0 | MIT (c) 2016 John Doe */
content of my module
```

## Contributions
[Pull requests](https://github.com/joseluisq/banr-stream/pulls) and [issues](https://github.com/joseluisq/banr-stream/issues) are welcome.

## License
MIT license

© 2016 [José Luis Quintana](http://git.io/joseluisq)
