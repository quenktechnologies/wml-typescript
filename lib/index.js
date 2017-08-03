'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compile = undefined;

var _Parser = require('./parser/Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _nodes = require('./parser/nodes');

var nodes = _interopRequireWildcard(_nodes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_OPTIONS = {
  debug: false,
  es5: false,
  main: 'Main',
  module: '@quenk/wml-runtime',
  typescript: false,
  pretty: false
};

var compile = exports.compile = function compile(src) {
  var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : nodes;
  return _Parser2.default.parse(src, nodes).transpile(Object.assign({}, DEFAULT_OPTIONS, o));
};

exports.default = compile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJub2RlcyIsIkRFRkFVTFRfT1BUSU9OUyIsImRlYnVnIiwiZXM1IiwibWFpbiIsIm1vZHVsZSIsInR5cGVzY3JpcHQiLCJwcmV0dHkiLCJjb21waWxlIiwic3JjIiwibyIsImFzdCIsInBhcnNlIiwidHJhbnNwaWxlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7SUFBWUEsSzs7Ozs7O0FBRVosSUFBTUMsa0JBQWtCO0FBQ3RCQyxTQUFPLEtBRGU7QUFFdEJDLE9BQUssS0FGaUI7QUFHdEJDLFFBQU0sTUFIZ0I7QUFJdkJDLFVBQVEsb0JBSmU7QUFLdEJDLGNBQVksS0FMVTtBQU10QkMsVUFBUTtBQU5jLENBQXhCOztBQVNPLElBQU1DLDRCQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLE1BQU1DLENBQU4sdUVBQVUsRUFBVjtBQUFBLE1BQWNDLEdBQWQsdUVBQW9CWCxLQUFwQjtBQUFBLFNBQ3JCLGlCQUFPWSxLQUFQLENBQWFILEdBQWIsRUFBa0JULEtBQWxCLEVBQXlCYSxTQUF6QixDQUFtQ0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JkLGVBQWxCLEVBQW1DUyxDQUFuQyxDQUFuQyxDQURxQjtBQUFBLENBQWhCOztrQkFJUUYsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJzZXIgZnJvbSAnLi9wYXJzZXIvUGFyc2VyJztcbmltcG9ydCAqIGFzIG5vZGVzIGZyb20gJy4vcGFyc2VyL25vZGVzJztcblxuY29uc3QgREVGQVVMVF9PUFRJT05TID0ge1xuICBkZWJ1ZzogZmFsc2UsXG4gIGVzNTogZmFsc2UsXG4gIG1haW46ICdNYWluJyxcbiBtb2R1bGU6ICdAcXVlbmsvd21sLXJ1bnRpbWUnLFxuICB0eXBlc2NyaXB0OiBmYWxzZSxcbiAgcHJldHR5OiBmYWxzZVxufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBpbGUgPSAoc3JjLCBvID0ge30sIGFzdCA9IG5vZGVzKSA9PlxuICBQYXJzZXIucGFyc2Uoc3JjLCBub2RlcykudHJhbnNwaWxlKE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgbykpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBpbGVcblxuIl19