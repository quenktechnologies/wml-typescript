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
  fileName: 'wmloutput.js',
  typescript: false
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


  var output = _Parser2.default.parse(src, nodes).transpile(o);
  return (0, _jsBeautify.js_beautify)(o.es2015 ? es5ify(output) : output);
}

exports.default = compile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJlczVpZnkiLCJjb21waWxlIiwibm9kZXMiLCJiYWJlbCIsIkRFRkFVTFRfT1BUSU9OUyIsImRlYnVnIiwiZXMyMDE1IiwiZmlsZU5hbWUiLCJ0eXBlc2NyaXB0IiwianMiLCJ0cmFuc2Zvcm0iLCJzb3VyY2VNYXBzIiwicHJlc2V0cyIsInBsdWdpbnMiLCJoaWdobGlnaHRDb2RlIiwiY29kZSIsInNyYyIsIm8iLCJhc3QiLCJvdXRwdXQiLCJwYXJzZSIsInRyYW5zcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFnQmdCQSxNLEdBQUFBLE07UUFXQUMsTyxHQUFBQSxPOztBQTNCaEI7Ozs7QUFDQTs7SUFBWUMsSzs7QUFDWjs7SUFBWUMsSzs7QUFDWjs7QUFHQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1DLGtCQUFrQjtBQUN0QkMsU0FBTyxLQURlO0FBRXRCQyxVQUFRLEtBRmM7QUFHdEJDLFlBQVUsY0FIWTtBQUl0QkMsY0FBWTtBQUpVLENBQXhCOztBQU9PLFNBQVNSLE1BQVQsQ0FBZ0JTLEVBQWhCLEVBQW9COztBQUV6QixTQUFPTixNQUFNTyxTQUFOLENBQWdCRCxFQUFoQixFQUFvQjtBQUN6QkUsZ0JBQVksSUFEYTtBQUV6QkMsYUFBUyx5QkFGZ0I7QUFHekJDLGFBQVMsZ0RBSGdCO0FBSXpCQyxtQkFBZTtBQUpVLEdBQXBCLEVBS0pDLElBTEg7QUFPRDs7QUFFTSxTQUFTZCxPQUFULENBQWlCZSxHQUFqQixFQUF3RDtBQUFBLE1BQWxDQyxDQUFrQyx1RUFBOUJiLGVBQThCO0FBQUEsTUFBYmMsR0FBYSx1RUFBUGhCLEtBQU87OztBQUU3RCxNQUFJaUIsU0FBUyxpQkFBT0MsS0FBUCxDQUFhSixHQUFiLEVBQWtCZCxLQUFsQixFQUF5Qm1CLFNBQXpCLENBQW1DSixDQUFuQyxDQUFiO0FBQ0EsU0FBTyw2QkFBYUEsRUFBRVgsTUFBSCxHQUFhTixPQUFPbUIsTUFBUCxDQUFiLEdBQThCQSxNQUExQyxDQUFQO0FBRUQ7O2tCQUVjbEIsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJzZXIgZnJvbSAnLi9wYXJzZXIvUGFyc2VyJztcbmltcG9ydCAqIGFzIG5vZGVzIGZyb20gJy4vcGFyc2VyL25vZGVzJztcbmltcG9ydCAqIGFzIGJhYmVsIGZyb20gJ2JhYmVsLWNvcmUnO1xuaW1wb3J0IHtcbiAganNfYmVhdXRpZnlcbn0gZnJvbSAnanMtYmVhdXRpZnknO1xuaW1wb3J0IGVzMjAxNSBmcm9tICdiYWJlbC1wcmVzZXQtZXMyMDE1JztcbmltcG9ydCBleHBvcnRzIGZyb20gJ2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tZXhwb3J0LWV4dGVuc2lvbnMnO1xuXG5jb25zdCBERUZBVUxUX09QVElPTlMgPSB7XG4gIGRlYnVnOiBmYWxzZSxcbiAgZXMyMDE1OiBmYWxzZSxcbiAgZmlsZU5hbWU6ICd3bWxvdXRwdXQuanMnLFxuICB0eXBlc2NyaXB0OiBmYWxzZVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVzNWlmeShqcykge1xuXG4gIHJldHVybiBiYWJlbC50cmFuc2Zvcm0oanMsIHtcbiAgICBzb3VyY2VNYXBzOiB0cnVlLFxuICAgIHByZXNldHM6IFtlczIwMTVdLFxuICAgIHBsdWdpbnM6IFtleHBvcnRzXSxcbiAgICBoaWdobGlnaHRDb2RlOiBmYWxzZVxuICB9KS5jb2RlO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKHNyYywgbyA9IERFRkFVTFRfT1BUSU9OUywgYXN0ID0gbm9kZXMpIHtcblxuICBsZXQgb3V0cHV0ID0gUGFyc2VyLnBhcnNlKHNyYywgbm9kZXMpLnRyYW5zcGlsZShvKTtcbiAgcmV0dXJuIGpzX2JlYXV0aWZ5KChvLmVzMjAxNSkgPyBlczVpZnkob3V0cHV0KSA6IG91dHB1dCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcGlsZVxuXG4iXX0=