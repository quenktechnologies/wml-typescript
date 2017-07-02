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
  typescript: false,
  pretty: false
};

var compile = exports.compile = function compile(src) {
  var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;
  var ast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : nodes;
  return _Parser2.default.parse(src, nodes).transpile(o);
};

exports.default = compile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJub2RlcyIsIkRFRkFVTFRfT1BUSU9OUyIsImRlYnVnIiwiZXM1IiwibWFpbiIsInR5cGVzY3JpcHQiLCJwcmV0dHkiLCJjb21waWxlIiwic3JjIiwibyIsImFzdCIsInBhcnNlIiwidHJhbnNwaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7SUFBWUEsSzs7Ozs7O0FBRVosSUFBTUMsa0JBQWtCO0FBQ3RCQyxTQUFPLEtBRGU7QUFFdEJDLE9BQUssS0FGaUI7QUFHdEJDLFFBQU0sTUFIZ0I7QUFJdEJDLGNBQVksS0FKVTtBQUt0QkMsVUFBUTtBQUxjLENBQXhCOztBQVFPLElBQU1DLDRCQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLE1BQU1DLENBQU4sdUVBQVVSLGVBQVY7QUFBQSxNQUEyQlMsR0FBM0IsdUVBQWlDVixLQUFqQztBQUFBLFNBQ3JCLGlCQUFPVyxLQUFQLENBQWFILEdBQWIsRUFBa0JSLEtBQWxCLEVBQXlCWSxTQUF6QixDQUFtQ0gsQ0FBbkMsQ0FEcUI7QUFBQSxDQUFoQjs7a0JBSVFGLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyc2VyIGZyb20gJy4vcGFyc2VyL1BhcnNlcic7XG5pbXBvcnQgKiBhcyBub2RlcyBmcm9tICcuL3BhcnNlci9ub2Rlcyc7XG5cbmNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgZGVidWc6IGZhbHNlLFxuICBlczU6IGZhbHNlLFxuICBtYWluOiAnTWFpbicsXG4gIHR5cGVzY3JpcHQ6IGZhbHNlLFxuICBwcmV0dHk6IGZhbHNlXG59O1xuXG5leHBvcnQgY29uc3QgY29tcGlsZSA9IChzcmMsIG8gPSBERUZBVUxUX09QVElPTlMsIGFzdCA9IG5vZGVzKSA9PlxuICBQYXJzZXIucGFyc2Uoc3JjLCBub2RlcykudHJhbnNwaWxlKG8pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBpbGVcblxuIl19