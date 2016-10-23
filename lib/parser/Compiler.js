'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _nodes = require('./nodes');

var nodes = _interopRequireWildcard(_nodes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Compiler turns wml markup into javascript.
 *
 * The code produced uses somes ES2015 and should be ran through
 * a compiler if backward support is desired
 *
 */
var Compiler = function () {
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


            return _Parser2.default.parse(src, nodes).transpile();
        }
    }]);

    return Compiler;
}();

exports.default = Compiler;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvQ29tcGlsZXIuanMiXSwibmFtZXMiOlsibm9kZXMiLCJDb21waWxlciIsInNyYyIsIm8iLCJkZWJ1ZyIsImZpbGVOYW1lIiwicGFyc2UiLCJ0cmFuc3BpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7SUFBWUEsSzs7Ozs7Ozs7QUFFWjs7Ozs7OztJQU9NQyxROzs7Ozs7Ozs7QUFFRjs7Ozs7Z0NBS1FDLEcsRUFBS0MsQyxFQUFHO0FBQUEsdUJBSVJBLEtBQUs7QUFDTEMsdUJBQU8sS0FERjtBQUVMQywwQkFBVTtBQUZMLGFBSkc7O0FBQUEsZ0JBR1JELEtBSFEsUUFHUkEsS0FIUTs7O0FBU1osbUJBQU8saUJBQU9FLEtBQVAsQ0FBYUosR0FBYixFQUFrQkYsS0FBbEIsRUFBeUJPLFNBQXpCLEVBQVA7QUFFSDs7Ozs7O2tCQUlVTixRIiwiZmlsZSI6IkNvbXBpbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcnNlciBmcm9tICcuL1BhcnNlcic7XG5pbXBvcnQgKiBhcyBub2RlcyBmcm9tICcuL25vZGVzJztcblxuLyoqXG4gKiBDb21waWxlciB0dXJucyB3bWwgbWFya3VwIGludG8gamF2YXNjcmlwdC5cbiAqXG4gKiBUaGUgY29kZSBwcm9kdWNlZCB1c2VzIHNvbWVzIEVTMjAxNSBhbmQgc2hvdWxkIGJlIHJhbiB0aHJvdWdoXG4gKiBhIGNvbXBpbGVyIGlmIGJhY2t3YXJkIHN1cHBvcnQgaXMgZGVzaXJlZFxuICpcbiAqL1xuY2xhc3MgQ29tcGlsZXIge1xuXG4gICAgLyoqXG4gICAgICogY29tcGlsZSBhIHN0cmluZyBpbnRvIGpzIGNvZGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbyBcbiAgICAgKi9cbiAgICBjb21waWxlKHNyYywgbykge1xuXG4gICAgICAgIHZhciB7XG4gICAgICAgICAgICBkZWJ1Z1xuICAgICAgICB9ID0gbyB8fCB7XG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgICAgICBmaWxlTmFtZTogJ3dtbG91dHB1dC5qcydcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gUGFyc2VyLnBhcnNlKHNyYywgbm9kZXMpLnRyYW5zcGlsZSgpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBpbGVyXG4iXX0=