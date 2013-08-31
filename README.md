# eof

[![Build Status](https://travis-ci.org/maksimr/eof.png?branch=master)](https://travis-ci.org/maksimr/eof) [![Build Status](https://drone.io/github.com/maksimr/eof/status.png)](https://drone.io/github.com/maksimr/eof/latest)

Create template from function body.

## Getting Started

Install the module with: `npm install eof`

```javascript
  var eof = require('eof');
  eof.extract(function() {
    /*
      Hello World
    */
  });
```

## Examples

Extract simple text template

```javascript
  var eof = require('eof');
  eof.extract(function() {
    /*
      Hello World
    */
  });
```
Extract javascript template. And format it throught js-beautify

```javascript
  var eof = require('eof');
  eof.extract(function() {
    /*
        var max = function() {
            return Math.max.apply(null, arguments);
        };
    */
  }).format('javascript');
```

You can look at **test** directory for live example

## License
Copyright (c) 2013 Maksim Ryzhikov  
Licensed under the MIT license.
