'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.es5ify = es5ify;
exports.compile = compile;

var _Parser = require('./parser/Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _nodes = require('./parser/nodes');

var nodes = _interopRequireWildcard(_nodes);

var _babelCore = require('babel-core');

var babel = _interopRequireWildcard(_babelCore);

var _babelPresetEs = require('babel-preset-es2015');

var _babelPresetEs2 = _interopRequireDefault(_babelPresetEs);

var _babelPluginTransformExportExtensions = require('babel-plugin-transform-export-extensions');

var _babelPluginTransformExportExtensions2 = _interopRequireDefault(_babelPluginTransformExportExtensions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_OPTIONS = {
  debug: false,
  es2015: false,
  fileName: 'wmloutput.js'
};

function es5ify(js) {

  return babel.transform(js, {
    sourceMaps: true,
    presets: [_babelPresetEs2.default],
    plugins: [_babelPluginTransformExportExtensions2.default],
    highlightCode: false
  }).code;
}

function compile(src) {
  var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;
  var ast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : nodes;


  var output = _Parser2.default.parse(src, nodes).transpile();
  return o.es2015 ? es5ify(output) : output;
}

exports.default = compile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJlczVpZnkiLCJjb21waWxlIiwibm9kZXMiLCJiYWJlbCIsIkRFRkFVTFRfT1BUSU9OUyIsImRlYnVnIiwiZXMyMDE1IiwiZmlsZU5hbWUiLCJqcyIsInRyYW5zZm9ybSIsInNvdXJjZU1hcHMiLCJwcmVzZXRzIiwicGx1Z2lucyIsImhpZ2hsaWdodENvZGUiLCJjb2RlIiwic3JjIiwibyIsImFzdCIsIm91dHB1dCIsInBhcnNlIiwidHJhbnNwaWxlIl0sIm1hcHBpbmdzIjoiOzs7OztRQVlnQkEsTSxHQUFBQSxNO1FBV0FDLE8sR0FBQUEsTzs7QUF2QmhCOzs7O0FBQ0E7O0lBQVlDLEs7O0FBQ1o7O0lBQVlDLEs7O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQyxrQkFBa0I7QUFDdEJDLFNBQU8sS0FEZTtBQUV0QkMsVUFBUSxLQUZjO0FBR3RCQyxZQUFVO0FBSFksQ0FBeEI7O0FBTU8sU0FBU1AsTUFBVCxDQUFnQlEsRUFBaEIsRUFBb0I7O0FBRXpCLFNBQU9MLE1BQU1NLFNBQU4sQ0FBZ0JELEVBQWhCLEVBQW9CO0FBQ3pCRSxnQkFBWSxJQURhO0FBRXpCQyxhQUFTLHlCQUZnQjtBQUd6QkMsYUFBUyxnREFIZ0I7QUFJekJDLG1CQUFlO0FBSlUsR0FBcEIsRUFLSkMsSUFMSDtBQU9EOztBQUVNLFNBQVNiLE9BQVQsQ0FBaUJjLEdBQWpCLEVBQXdEO0FBQUEsTUFBbENDLENBQWtDLHVFQUE5QlosZUFBOEI7QUFBQSxNQUFiYSxHQUFhLHVFQUFQZixLQUFPOzs7QUFFN0QsTUFBSWdCLFNBQVMsaUJBQU9DLEtBQVAsQ0FBYUosR0FBYixFQUFrQmIsS0FBbEIsRUFBeUJrQixTQUF6QixFQUFiO0FBQ0EsU0FBUUosRUFBRVYsTUFBSCxHQUFhTixPQUFPa0IsTUFBUCxDQUFiLEdBQThCQSxNQUFyQztBQUVEOztrQkFFY2pCLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyc2VyIGZyb20gJy4vcGFyc2VyL1BhcnNlcic7XG5pbXBvcnQgKiBhcyBub2RlcyBmcm9tICcuL3BhcnNlci9ub2Rlcyc7XG5pbXBvcnQgKiBhcyBiYWJlbCBmcm9tICdiYWJlbC1jb3JlJztcbmltcG9ydCBlczIwMTUgZnJvbSAnYmFiZWwtcHJlc2V0LWVzMjAxNSc7XG5pbXBvcnQgZXhwb3J0cyBmcm9tICdiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLWV4cG9ydC1leHRlbnNpb25zJztcblxuY29uc3QgREVGQVVMVF9PUFRJT05TID0ge1xuICBkZWJ1ZzogZmFsc2UsXG4gIGVzMjAxNTogZmFsc2UsXG4gIGZpbGVOYW1lOiAnd21sb3V0cHV0LmpzJ1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVzNWlmeShqcykge1xuXG4gIHJldHVybiBiYWJlbC50cmFuc2Zvcm0oanMsIHtcbiAgICBzb3VyY2VNYXBzOiB0cnVlLFxuICAgIHByZXNldHM6IFtlczIwMTVdLFxuICAgIHBsdWdpbnM6IFtleHBvcnRzXSxcbiAgICBoaWdobGlnaHRDb2RlOiBmYWxzZVxuICB9KS5jb2RlO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKHNyYywgbyA9IERFRkFVTFRfT1BUSU9OUywgYXN0ID0gbm9kZXMpIHtcblxuICBsZXQgb3V0cHV0ID0gUGFyc2VyLnBhcnNlKHNyYywgbm9kZXMpLnRyYW5zcGlsZSgpO1xuICByZXR1cm4gKG8uZXMyMDE1KSA/IGVzNWlmeShvdXRwdXQpIDogb3V0cHV0O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBpbGVcblxuIl19