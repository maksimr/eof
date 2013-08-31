'use strict';

var eof = require('../lib/eof.js');
var beautify = require('js-beautify');

exports['eof'] = {
    'extract text template': function(test) {
        test.expect(1);
        test.equal(eof.extract(function() {
            /*
               Hello World
         */
        }).trim(), 'Hello World', 'should extract text templat');
        test.done();
    },
    'extract javascript template': function(test) {
        test.expect(1);
        test.equal(eof.extract(function() {
            /*
                var max = function() {
                    return Math.max.apply(null, arguments);
                };
         */
        }).format('javascript'), beautify.js_beautify('var max = function () {return Math.max.apply(null, arguments);};'), 'should extract javascript template');
        test.done();
    }
};
