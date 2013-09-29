/*
 * eof
 * https://github.com/maksimrv/eof
 *
 * Copyright (c) 2013 Maksim Ryzhikov
 * Licensed under the MIT license.
 */

(function(exports) {
    'use strict';
    var VerEx = require('verbal-expressions');
    var beautify = require('js-beautify');

    var fnBodyEx = new VerEx()
        .anything()
        .find(/\W*\/\*\W*/g)
        .or()
        .find(/\*\/\W*/g)
        .anything();

    var textFormater = function(content) {
        return content.trim().replace(/^\s*/gm, '');
    };

    var format = function(format) {
        if (format === 'javascript') {
            return beautify.js_beautify(this.toString());
        }
        if (format === 'text') {
            return textFormater(this.toString());
        }
        return this.toString();
    };

    var Template = function(text) {
        var template = Object(text.toString());
        template.format = format;
        return template;
    };


    var EOF = {
        /**
         * @desc Extract template from function body
         * @param {[Function]} template The function which contains template
         * @return {String} Return template
         */
        extract: function(template) {
            template = fnBodyEx.replace(template.toString(), '');
            template = new Template(template);
            return template;
        }
    };

    /**
     * Export module
     */
    exports.extract = EOF.extract;
    return EOF;
}(exports));
