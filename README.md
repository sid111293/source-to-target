# source-to-target

The source-to-target module is used to transform one object to another format object.

## Installation

Using npm:
```shell
$ npm i -g npm
$ npm i source-to-target
```
Note: add `--save` if you are using npm < 5.0.0

In Node.js:
```js
const transformer = require('source-to-target');
```
## Use
```
Suppose we have a object like: {a:1, b: 2} which need
to transform in a format like: { g1: 1, g2: 2}. 

Here g1 is same as a and g2 is same as b.
```
    transformer(sourceData, targetToSourceMapObject)
    Example: transformer({a:1,b:2}, {g1:"a", g2: "b"}) // return {g1: 1, g2: 2}