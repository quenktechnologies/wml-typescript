'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _nodesAbstractSyntaxTree = require('./nodes/AbstractSyntaxTree');

var _nodesAbstractSyntaxTree2 = _interopRequireDefault(_nodesAbstractSyntaxTree);

/**
 * Compiler turns wml markup into javascript.
 *
 * The code produced uses somes ES2015 and should be ran through
 * a compiler if backward support is desired
 *
 */

var Compiler = (function () {
    function Compiler() {
        _classCallCheck(this, Compiler);
    }

    _createClass(Compiler, [{
        key: 'compile',

        /**
         * compile a string into js code.
         * @param {string} src 
         * @param {object} o 
         */
        value: function compile(src, o) {
            var _ref = o || {
                debug: false,
                fileName: 'wmloutput.js'
            };

            var debug = _ref.debug;

            return _Parser2['default'].parse(src, new _nodesAbstractSyntaxTree2['default']()).transpile();
        }
    }]);

    return Compiler;
})();

exports['default'] = Compiler;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvQ29tcGlsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3NCQUFtQixVQUFVOzs7O3VDQUNFLDRCQUE0Qjs7Ozs7Ozs7Ozs7O0lBU3JELFFBQVE7YUFBUixRQUFROzhCQUFSLFFBQVE7OztpQkFBUixRQUFROzs7Ozs7OztlQU9ILGlCQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUU7dUJBSVIsQ0FBQyxJQUFJO0FBQ0wscUJBQUssRUFBRSxLQUFLO0FBQ1osd0JBQVEsRUFBRSxjQUFjO2FBQzNCOztnQkFKRyxLQUFLLFFBQUwsS0FBSzs7QUFNVCxtQkFBTyxvQkFBTyxLQUFLLENBQUMsR0FBRyxFQUFFLDBDQUF3QixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FFbEU7OztXQWxCQyxRQUFROzs7cUJBc0JDLFFBQVEiLCJmaWxlIjoiQ29tcGlsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyc2VyIGZyb20gJy4vUGFyc2VyJztcbmltcG9ydCBBYnN0cmFjdFN5bnRheFRyZWUgZnJvbSAnLi9ub2Rlcy9BYnN0cmFjdFN5bnRheFRyZWUnO1xuXG4vKipcbiAqIENvbXBpbGVyIHR1cm5zIHdtbCBtYXJrdXAgaW50byBqYXZhc2NyaXB0LlxuICpcbiAqIFRoZSBjb2RlIHByb2R1Y2VkIHVzZXMgc29tZXMgRVMyMDE1IGFuZCBzaG91bGQgYmUgcmFuIHRocm91Z2hcbiAqIGEgY29tcGlsZXIgaWYgYmFja3dhcmQgc3VwcG9ydCBpcyBkZXNpcmVkXG4gKlxuICovXG5jbGFzcyBDb21waWxlciB7XG5cbiAgICAvKipcbiAgICAgKiBjb21waWxlIGEgc3RyaW5nIGludG8ganMgY29kZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvIFxuICAgICAqL1xuICAgIGNvbXBpbGUoc3JjLCBvKSB7XG5cbiAgICAgICAgdmFyIHtcbiAgICAgICAgICAgIGRlYnVnXG4gICAgICAgIH0gPSBvIHx8IHtcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVOYW1lOiAnd21sb3V0cHV0LmpzJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBQYXJzZXIucGFyc2Uoc3JjLCBuZXcgQWJzdHJhY3RTeW50YXhUcmVlKCkpLnRyYW5zcGlsZSgpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBpbGVyXG4iXX0=