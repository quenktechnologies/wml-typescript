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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL1RyYW5zcGlsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzJCQUFtQixpQkFBaUI7Ozs7a0NBQ0wsc0JBQXNCOzs7Ozs7Ozs7Ozs7SUFTL0MsVUFBVTtXQUFWLFVBQVU7MEJBQVYsVUFBVTs7O2VBQVYsVUFBVTs7Ozs7OztXQU1ILG1CQUFDLEdBQUcsRUFBRTs7QUFFWCxhQUFPLEVBQUUsR0FBQyx5QkFBTyxLQUFLLENBQUMsR0FBRyxFQUFFLHFDQUF3QixDQUFDLENBQUM7S0FFekQ7OztTQVZDLFVBQVU7OztxQkFjRCxVQUFVIiwiZmlsZSI6IlRyYW5zcGlsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyc2VyIGZyb20gJy4uL3BhcnNlL1BhcnNlcic7XG5pbXBvcnQgQWJzdHJhY3RTeW50YXhUcmVlIGZyb20gJy4vQWJzdHJhY3RTeW50YXhUcmVlJztcblxuLyoqXG4gKiBUcmFuc3BpbGVyIHR1cm5zIHdtbCBtYXJrdXAgaW50byBqYXZhc2NyaXB0LlxuICpcbiAqIFRoZSBjb2RlIHByb2R1Y2VkIHVzZXMgc29tZXMgRVMyMDE1IGFuZCBzaG91bGQgYmUgcmFuIHRocm91Z2hcbiAqIGEgdHJhbnNwaWxlciBpZiBiYWNrd2FyZCBzdXBwb3J0IGlzIGRlc2lyZWQuXG4gKlxuICovXG5jbGFzcyBUcmFuc3BpbGVyIHtcblxuICAgIC8qKlxuICAgICAqIHRyYW5zcGlsZSBhIHN0cmluZyBpbnRvIGpzIGNvZGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBcbiAgICAgKi9cbiAgICB0cmFuc3BpbGUoc3JjKSB7XG5cbiAgICAgICAgcmV0dXJuICcnK1BhcnNlci5wYXJzZShzcmMsIG5ldyBBYnN0cmFjdFN5bnRheFRyZWUoKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNwaWxlclxuIl19