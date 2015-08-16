# log-output-phantom [![Build Status](https://travis-ci.org/rafaelrinaldi/log-output-phantom.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/log-output-phantom)

> [PhantomJS](http://phantomjs.org) adapter for [`log-output`](http://github.com/rafaelrinaldi/log-output).

## Install

```sh
$ npm install log-output-phantom --save
```

## Usage

```javascript
var logOutput = require('log-output');
var phantomAdapter = require('log-output-phantom');

logOutput.adapter(phantomAdapter());
logOutput('yay'); // yay
```

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
