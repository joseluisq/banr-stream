# banr-stream [![Build Status](https://travis-ci.org/joseluisq/banr-stream.svg?branch=master)](https://travis-ci.org/joseluisq/banr-stream) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
> Prepend [one-line package.json banner](https://github.com/joseluisq/banr) in pipeline.

![banr-stream](https://cloud.githubusercontent.com/assets/1700322/13168007/7f349674-d6a6-11e5-935d-b3e71aa2a231.png)

## Install

[Yarn](https://yarnpkg.com)

```sh
yarn add banr-stream --dev
```

[NPM](https://www.npmjs.com)

```sh
npm install banr-stream --save-dev
```

## Usage

### CLI

`--file` is optional. More info check out [banr](https://github.com/joseluisq/banr).

```sh
Options:

  --file=FILE, -f FILE
```

Example:

```sh
$ echo "MY CONTENT FILE" | banr-stream
/*! Banr-stream v1.0.2 | MIT (c) 2016 José Luis Quintana */
MY AWESOME CONTENT FILE
```

### API

```js
var banr = require('banr-stream');

process.stdin
  .pipe(banr())
  .pipe(process.stdout);
```

Example:

```sh
$ echo "content of my module" | node example/stream.js
/*! MyModule v1.0.0 | MIT (c) 2017 John Doe */
content of my module
```

## License
MIT license

© 2017 [José Luis Quintana](http://git.io/joseluisq)
