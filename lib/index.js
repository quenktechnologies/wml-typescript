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

var _jsBeautify = require('js-beautify');

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
  return (0, _jsBeautify.js_beautify)(o.es2015 ? es5ify(output) : output);
}

exports.default = compile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJlczVpZnkiLCJjb21waWxlIiwibm9kZXMiLCJiYWJlbCIsIkRFRkFVTFRfT1BUSU9OUyIsImRlYnVnIiwiZXMyMDE1IiwiZmlsZU5hbWUiLCJqcyIsInRyYW5zZm9ybSIsInNvdXJjZU1hcHMiLCJwcmVzZXRzIiwicGx1Z2lucyIsImhpZ2hsaWdodENvZGUiLCJjb2RlIiwic3JjIiwibyIsImFzdCIsIm91dHB1dCIsInBhcnNlIiwidHJhbnNwaWxlIl0sIm1hcHBpbmdzIjoiOzs7OztRQWFnQkEsTSxHQUFBQSxNO1FBV0FDLE8sR0FBQUEsTzs7QUF4QmhCOzs7O0FBQ0E7O0lBQVlDLEs7O0FBQ1o7O0lBQVlDLEs7O0FBQ1o7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQyxrQkFBa0I7QUFDdEJDLFNBQU8sS0FEZTtBQUV0QkMsVUFBUSxLQUZjO0FBR3RCQyxZQUFVO0FBSFksQ0FBeEI7O0FBTU8sU0FBU1AsTUFBVCxDQUFnQlEsRUFBaEIsRUFBb0I7O0FBRXpCLFNBQU9MLE1BQU1NLFNBQU4sQ0FBZ0JELEVBQWhCLEVBQW9CO0FBQ3pCRSxnQkFBWSxJQURhO0FBRXpCQyxhQUFTLHlCQUZnQjtBQUd6QkMsYUFBUyxnREFIZ0I7QUFJekJDLG1CQUFlO0FBSlUsR0FBcEIsRUFLSkMsSUFMSDtBQU9EOztBQUVNLFNBQVNiLE9BQVQsQ0FBaUJjLEdBQWpCLEVBQXdEO0FBQUEsTUFBbENDLENBQWtDLHVFQUE5QlosZUFBOEI7QUFBQSxNQUFiYSxHQUFhLHVFQUFQZixLQUFPOzs7QUFFN0QsTUFBSWdCLFNBQVMsaUJBQU9DLEtBQVAsQ0FBYUosR0FBYixFQUFrQmIsS0FBbEIsRUFBeUJrQixTQUF6QixFQUFiO0FBQ0EsU0FBTyw2QkFBYUosRUFBRVYsTUFBSCxHQUFhTixPQUFPa0IsTUFBUCxDQUFiLEdBQThCQSxNQUExQyxDQUFQO0FBRUQ7O2tCQUVjakIsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJzZXIgZnJvbSAnLi9wYXJzZXIvUGFyc2VyJztcbmltcG9ydCAqIGFzIG5vZGVzIGZyb20gJy4vcGFyc2VyL25vZGVzJztcbmltcG9ydCAqIGFzIGJhYmVsIGZyb20gJ2JhYmVsLWNvcmUnO1xuaW1wb3J0IHtqc19iZWF1dGlmeX0gZnJvbSAnanMtYmVhdXRpZnknO1xuaW1wb3J0IGVzMjAxNSBmcm9tICdiYWJlbC1wcmVzZXQtZXMyMDE1JztcbmltcG9ydCBleHBvcnRzIGZyb20gJ2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tZXhwb3J0LWV4dGVuc2lvbnMnO1xuXG5jb25zdCBERUZBVUxUX09QVElPTlMgPSB7XG4gIGRlYnVnOiBmYWxzZSxcbiAgZXMyMDE1OiBmYWxzZSxcbiAgZmlsZU5hbWU6ICd3bWxvdXRwdXQuanMnXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZXM1aWZ5KGpzKSB7XG5cbiAgcmV0dXJuIGJhYmVsLnRyYW5zZm9ybShqcywge1xuICAgIHNvdXJjZU1hcHM6IHRydWUsXG4gICAgcHJlc2V0czogW2VzMjAxNV0sXG4gICAgcGx1Z2luczogW2V4cG9ydHNdLFxuICAgIGhpZ2hsaWdodENvZGU6IGZhbHNlXG4gIH0pLmNvZGU7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUoc3JjLCBvID0gREVGQVVMVF9PUFRJT05TLCBhc3QgPSBub2Rlcykge1xuXG4gIGxldCBvdXRwdXQgPSBQYXJzZXIucGFyc2Uoc3JjLCBub2RlcykudHJhbnNwaWxlKCk7XG4gIHJldHVybiBqc19iZWF1dGlmeSgoby5lczIwMTUpID8gZXM1aWZ5KG91dHB1dCkgOiBvdXRwdXQpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBpbGVcblxuIl19