'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _parser = require('../parser');

var wml = _interopRequireWildcard(_parser);

var _ScriptWriter = require('./ScriptWriter');

var _ScriptWriter2 = _interopRequireDefault(_ScriptWriter);

/**
 * Transpiler turns a wml AST into javascript.
 *
 * The code produced is es6 (ES2015) format and 
 * intentioned to be used as part of a bundling process that
 * includes something like babel.
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

      var w = new _ScriptWriter2['default']();
      var ast = wml.parser.parse(src);

      w.writeImports(ast.imports);
      w.writeTree(ast.tree);
      return w.finish();
    }
  }]);

  return Transpiler;
})();

exports['default'] = Transpiler;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGVyL1RyYW5zcGlsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7c0JBQXFCLFdBQVc7O0lBQXBCLEdBQUc7OzRCQUNVLGdCQUFnQjs7Ozs7Ozs7Ozs7O0lBU25DLFVBQVU7V0FBVixVQUFVOzBCQUFWLFVBQVU7OztlQUFWLFVBQVU7Ozs7Ozs7V0FNSCxtQkFBQyxHQUFHLEVBQUU7O0FBRVgsVUFBSSxDQUFDLEdBQUcsK0JBQWtCLENBQUM7QUFDM0IsVUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRWhDLE9BQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVCLE9BQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RCLGFBQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBRXJCOzs7U0FmQyxVQUFVOzs7cUJBbUJELFVBQVUiLCJmaWxlIjoiVHJhbnNwaWxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdtbCBmcm9tICcuLi9wYXJzZXInO1xuaW1wb3J0IFNjcmlwdFdyaXRlciBmcm9tICcuL1NjcmlwdFdyaXRlcic7XG5cbi8qKlxuICogVHJhbnNwaWxlciB0dXJucyBhIHdtbCBBU1QgaW50byBqYXZhc2NyaXB0LlxuICpcbiAqIFRoZSBjb2RlIHByb2R1Y2VkIGlzIGVzNiAoRVMyMDE1KSBmb3JtYXQgYW5kIFxuICogaW50ZW50aW9uZWQgdG8gYmUgdXNlZCBhcyBwYXJ0IG9mIGEgYnVuZGxpbmcgcHJvY2VzcyB0aGF0XG4gKiBpbmNsdWRlcyBzb21ldGhpbmcgbGlrZSBiYWJlbC5cbiAqL1xuY2xhc3MgVHJhbnNwaWxlciB7XG5cbiAgICAvKipcbiAgICAgKiB0cmFuc3BpbGUgYSBzdHJpbmcgaW50byBqcyBjb2RlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgXG4gICAgICovXG4gICAgdHJhbnNwaWxlKHNyYykge1xuXG4gICAgICAgIHZhciB3ID0gbmV3IFNjcmlwdFdyaXRlcigpO1xuICAgICAgICB2YXIgYXN0ID0gd21sLnBhcnNlci5wYXJzZShzcmMpO1xuXG4gICAgICAgIHcud3JpdGVJbXBvcnRzKGFzdC5pbXBvcnRzKTtcbiAgICAgICAgdy53cml0ZVRyZWUoYXN0LnRyZWUpO1xuICAgICAgICByZXR1cm4gdy5maW5pc2goKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc3BpbGVyXG4iXX0=