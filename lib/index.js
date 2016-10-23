'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
  var ast = arguments.length <= 1 || arguments[1] === undefined ? nodes : arguments[1];
  var o = arguments.length <= 2 || arguments[2] === undefined ? DEFAULT_OPTIONS : arguments[2];


  return _Parser2.default.parse(src, nodes).transpile();
}

exports.default = compile;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJub2RlcyIsIkRFRkFVTFRfT1BUSU9OUyIsImRlYnVnIiwiZmlsZU5hbWUiLCJjb21waWxlIiwic3JjIiwiYXN0IiwibyIsInBhcnNlIiwidHJhbnNwaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztJQUFZQSxLOzs7Ozs7QUFFWixJQUFNQyxrQkFBa0I7QUFDdEJDLFNBQU8sS0FEZTtBQUV0QkMsWUFBVTtBQUZZLENBQXhCOztBQUtBLFNBQVNDLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXdEO0FBQUEsTUFBbENDLEdBQWtDLHlEQUE1Qk4sS0FBNEI7QUFBQSxNQUFyQk8sQ0FBcUIseURBQWpCTixlQUFpQjs7O0FBRXRELFNBQU8saUJBQU9PLEtBQVAsQ0FBYUgsR0FBYixFQUFrQkwsS0FBbEIsRUFBeUJTLFNBQXpCLEVBQVA7QUFFRDs7a0JBRWNMLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyc2VyIGZyb20gJy4vcGFyc2VyL1BhcnNlcic7XG5pbXBvcnQgKiBhcyBub2RlcyBmcm9tICcuL3BhcnNlci9ub2Rlcyc7XG5cbmNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgZGVidWc6IGZhbHNlLFxuICBmaWxlTmFtZTogJ3dtbG91dHB1dC5qcydcbn07XG5cbmZ1bmN0aW9uIGNvbXBpbGUoc3JjLCBhc3QgPSBub2RlcywgbyA9IERFRkFVTFRfT1BUSU9OUykge1xuXG4gIHJldHVybiBQYXJzZXIucGFyc2Uoc3JjLCBub2RlcykudHJhbnNwaWxlKCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcGlsZVxuXG4iXX0=