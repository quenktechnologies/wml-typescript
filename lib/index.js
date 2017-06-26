'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compile = compile;

var _Parser = require('./parser/Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _nodes = require('./parser/nodes');

var nodes = _interopRequireWildcard(_nodes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_OPTIONS = {
  debug: false,
  fileName: 'wmloutput.js'
};

function compile(src) {
  var ast = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : nodes;
  var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_OPTIONS;


  return _Parser2.default.parse(src, nodes).transpile();
}

exports.default = compile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb21waWxlIiwibm9kZXMiLCJERUZBVUxUX09QVElPTlMiLCJkZWJ1ZyIsImZpbGVOYW1lIiwic3JjIiwiYXN0IiwibyIsInBhcnNlIiwidHJhbnNwaWxlIl0sIm1hcHBpbmdzIjoiOzs7OztRQVFnQkEsTyxHQUFBQSxPOztBQVJoQjs7OztBQUNBOztJQUFZQyxLOzs7Ozs7QUFFWixJQUFNQyxrQkFBa0I7QUFDdEJDLFNBQU8sS0FEZTtBQUV0QkMsWUFBVTtBQUZZLENBQXhCOztBQUtPLFNBQVNKLE9BQVQsQ0FBaUJLLEdBQWpCLEVBQXdEO0FBQUEsTUFBbENDLEdBQWtDLHVFQUE1QkwsS0FBNEI7QUFBQSxNQUFyQk0sQ0FBcUIsdUVBQWpCTCxlQUFpQjs7O0FBRTdELFNBQU8saUJBQU9NLEtBQVAsQ0FBYUgsR0FBYixFQUFrQkosS0FBbEIsRUFBeUJRLFNBQXpCLEVBQVA7QUFFRDs7a0JBRWNULE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyc2VyIGZyb20gJy4vcGFyc2VyL1BhcnNlcic7XG5pbXBvcnQgKiBhcyBub2RlcyBmcm9tICcuL3BhcnNlci9ub2Rlcyc7XG5cbmNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgZGVidWc6IGZhbHNlLFxuICBmaWxlTmFtZTogJ3dtbG91dHB1dC5qcydcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKHNyYywgYXN0ID0gbm9kZXMsIG8gPSBERUZBVUxUX09QVElPTlMpIHtcblxuICByZXR1cm4gUGFyc2VyLnBhcnNlKHNyYywgbm9kZXMpLnRyYW5zcGlsZSgpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBpbGVcblxuIl19