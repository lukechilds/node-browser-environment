# node-browser-environment [![Build Status](https://travis-ci.org/lukechilds/node-browser-environment.svg?branch=master)](https://travis-ci.org/lukechilds/node-browser-environment) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/node-browser-environment/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/node-browser-environment?branch=master)

Simulates a global browser environment using [`jsdom`](https://github.com/tmpvar/jsdom).

> ❗️**Warning**
>
> This module adds global variables that would normally be present in a browser to the current node instance. This allows code that requires a browser environment to run in node, however as it's making global changes it may have adverse affects.

## Install

```shell
npm install --save node-browser-environment
```

## Usage

```js
// Setup global browser environment
require('node-browser-environment')();

// or if you're using ES6 modules
import browserEnv from 'node-browser-environment';
browserEnv();

// Now you have access to a browser like environment:

typeof document;
// 'object'

typeof window;
// 'object'

var div = document.createElement('div');
// HTMLDivElement

div instanceof HTMLElement
// true

```

## License

MIT © Luke Childs
