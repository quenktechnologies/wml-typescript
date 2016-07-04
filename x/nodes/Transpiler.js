'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _parseParser = require('../parse/Parser');

var _parseParser2 = _interopRequireDefault(_parseParser);

var _AbstractSyntaxTree = require('./AbstractSyntaxTree');

var _AbstractSyntaxTree2 = _interopRequireDefault(_AbstractSyntaxTree);

/**
 * Transpiler turns wml markup into javascript.
 *
 * The code produced uses somes ES2015 and should be ran through
 * a transpiler if backward support is desired.
 *
 */

var Transpiler = (function () {
  function Transpiler() {
    _classCallCheck(this, Transpiler);
  }

  _createClass(Transpiler, [{
    key: 'transpile',

    /**
     * transpile a string into js code.
     * @param {string} src 
     */
    value: function transpile(src) {

      return '' + _parseParser2['default'].parse(src, new _AbstractSyntaxTree2['default']());
    }
  }]);

  return Transpiler;
})();

exports['default'] = Transpiler;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9UcmFuc3BpbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzsyQkFBbUIsaUJBQWlCOzs7O2tDQUNMLHNCQUFzQjs7Ozs7Ozs7Ozs7O0lBUy9DLFVBQVU7V0FBVixVQUFVOzBCQUFWLFVBQVU7OztlQUFWLFVBQVU7Ozs7Ozs7V0FNSCxtQkFBQyxHQUFHLEVBQUU7O0FBRVgsYUFBTyxFQUFFLEdBQUMseUJBQU8sS0FBSyxDQUFDLEdBQUcsRUFBRSxxQ0FBd0IsQ0FBQyxDQUFDO0tBRXpEOzs7U0FWQyxVQUFVOzs7cUJBY0QsVUFBVSIsImZpbGUiOiJUcmFuc3BpbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcnNlciBmcm9tICcuLi9wYXJzZS9QYXJzZXInO1xuaW1wb3J0IEFic3RyYWN0U3ludGF4VHJlZSBmcm9tICcuL0Fic3RyYWN0U3ludGF4VHJlZSc7XG5cbi8qKlxuICogVHJhbnNwaWxlciB0dXJucyB3bWwgbWFya3VwIGludG8gamF2YXNjcmlwdC5cbiAqXG4gKiBUaGUgY29kZSBwcm9kdWNlZCB1c2VzIHNvbWVzIEVTMjAxNSBhbmQgc2hvdWxkIGJlIHJhbiB0aHJvdWdoXG4gKiBhIHRyYW5zcGlsZXIgaWYgYmFja3dhcmQgc3VwcG9ydCBpcyBkZXNpcmVkLlxuICpcbiAqL1xuY2xhc3MgVHJhbnNwaWxlciB7XG5cbiAgICAvKipcbiAgICAgKiB0cmFuc3BpbGUgYSBzdHJpbmcgaW50byBqcyBjb2RlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgXG4gICAgICovXG4gICAgdHJhbnNwaWxlKHNyYykge1xuXG4gICAgICAgIHJldHVybiAnJytQYXJzZXIucGFyc2Uoc3JjLCBuZXcgQWJzdHJhY3RTeW50YXhUcmVlKCkpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zcGlsZXJcbiJdfQ==