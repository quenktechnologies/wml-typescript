'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _preamble = require('../preamble');

var _preamble2 = _interopRequireDefault(_preamble);

var _babelCore = require('babel-core');

var babel = _interopRequireWildcard(_babelCore);

var _babelPresetEs = require('babel-preset-es2015');

var _babelPresetEs2 = _interopRequireDefault(_babelPresetEs);

var _babelPluginTransformExportExtensions = require('babel-plugin-transform-export-extensions');

var _babelPluginTransformExportExtensions2 = _interopRequireDefault(_babelPluginTransformExportExtensions);

var _jsBeautify = require('js-beautify');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var typescript = function typescript() {
  return '\n\n  ids: {[key:string]: WMLElement};\n  widgets: Widget[];\n  tree: HTMLElement;\n  context: object;\n  template: ()=>HTMLElement;\n\n';
};

var es5 = function es5(js) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return babel.transform(js, Object.assign({
    sourceMaps: true,
    presets: [_babelPresetEs2.default],
    plugins: [_babelPluginTransformExportExtensions2.default],
    highlightCode: false
  }, opts)).code;
};

var pretty = _jsBeautify.js_beautify;

/**
 * Template
 * @param {array<Import>} imports
 * @param {array<string>} uses
 * @param {Tag} root
 * @param {Location} location
 */

var Template = function (_Node) {
  _inherits(Template, _Node);

  function Template(imports, uses, exports, root, location) {
    _classCallCheck(this, Template);

    var _this = _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).call(this));

    _this.type = 'template';
    _this.imports = imports;
    _this.uses = uses;
    _this.exports = exports;
    _this.root = root;
    _this.location = location;

    return _this;
  }

  _createClass(Template, [{
    key: 'transpile',
    value: function transpile(o) {

      var str = '';
      var args = this.uses.map(function (p) {
        return p.transpile();
      }).join(',');

      args = args ? ' ,' + args : args;

      var imports = this.imports.map(function (i) {
        return i.transpile();
      });
      var exports = this.exports.map(function (e) {
        return e.transpile();
      });
      var pipeline = [];
      var output = function output(code) {
        return pipeline.reduce(function (p, c) {
          return c(p);
        }, code);
      };

      if (o.es5) pipeline.push(_typeof(o.es5) === 'object' ? function (s) {
        return es5(s, o.es5);
      } : es5);

      if (o.pretty) pipeline.push(pretty);

      return output(imports + ' \n ' + (0, _preamble2.default)(o) + ' \n ' + exports + '\n\n    export class Main ' + (o.typescript ? 'implements View' : '') + '{\n\n      ' + (o.typescript ? typescript() : '') + '\n\n       constructor(context) {\n\n          let view = this;\n\n          this.ids = {};\n          this.widgets = [];\n\n          this.tree = null;\n          this.context = context;\n          this.template = function(){return ' + this.root.transpile() + '};\n\n       }\n\n       static render(context) {\n\n         return (new Main(context)).render();\n\n       }\n\n       ' + (o.typescript ? 'findById(id:string) : WMLElement ' : 'findById(id)') + '{\n\n        return (this.ids[id]) ? this.ids[id] : null;\n\n       }\n\n       render() {\n\n        var tree = null;\n\n        this.ids = {};\n        this.widgets.forEach(w => w.removed());\n        this.widgets = [];\n         console.error(\'this is it \', this);\n        tree = this.template.call(this.context);\n        this.ids[\'root\'] = (this.ids[\'root\'])? this.ids[\'root\']:tree;\n        this.widgets.forEach(w => w.rendered());\n\n        return tree;\n\n      }\n\n     }\n\n     export default Main;\n\n    ');
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      var str = '';
      var args = this.uses.map(function (p) {
        return p.compile(o);
      });

      args = args ? ' ,' + args : args;

      var sn = this.sourceNode(o.fileName, '').add(this.imports.map(function (i) {
        return i.compile(o);
      })).add('\n').add(this.exports.map(function (e) {
        return e.compile(o);
      })).add('\n').add('export').add(' { ');

      this.exports.forEach(function (e) {
        return sn.add('' + e.id).add(',');
      });

      return sn.add('}').add(';').add('\n').add('export default function (make').add(args).add('{ return ').add(this.root.compile(o)).add('; }');
    }
  }]);

  return Template;
}(_Node3.default);

exports.default = Template;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiYmFiZWwiLCJ0eXBlc2NyaXB0IiwiZXM1IiwianMiLCJvcHRzIiwidHJhbnNmb3JtIiwiT2JqZWN0IiwiYXNzaWduIiwic291cmNlTWFwcyIsInByZXNldHMiLCJwbHVnaW5zIiwiaGlnaGxpZ2h0Q29kZSIsImNvZGUiLCJwcmV0dHkiLCJUZW1wbGF0ZSIsImltcG9ydHMiLCJ1c2VzIiwiZXhwb3J0cyIsInJvb3QiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwic3RyIiwiYXJncyIsIm1hcCIsInAiLCJ0cmFuc3BpbGUiLCJqb2luIiwiaSIsImUiLCJwaXBlbGluZSIsIm91dHB1dCIsInJlZHVjZSIsImMiLCJwdXNoIiwicyIsImNvbXBpbGUiLCJzbiIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImFkZCIsImZvckVhY2giLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsSzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBLElBQU1DLGFBQWEsU0FBYkEsVUFBYTtBQUFBO0FBQUEsQ0FBbkI7O0FBVUEsSUFBTUMsTUFBTSxTQUFOQSxHQUFNLENBQUNDLEVBQUQ7QUFBQSxNQUFLQyxJQUFMLHVFQUFZLEVBQVo7QUFBQSxTQUNWSixNQUFNSyxTQUFOLENBQWdCRixFQUFoQixFQUFvQkcsT0FBT0MsTUFBUCxDQUFjO0FBQ2hDQyxnQkFBWSxJQURvQjtBQUVoQ0MsYUFBUyx5QkFGdUI7QUFHaENDLGFBQVMsZ0RBSHVCO0FBSWhDQyxtQkFBZTtBQUppQixHQUFkLEVBS2pCUCxJQUxpQixDQUFwQixFQUtVUSxJQU5BO0FBQUEsQ0FBWjs7QUFRQSxJQUFNQyxnQ0FBTjs7QUFFQTs7Ozs7Ozs7SUFPTUMsUTs7O0FBRUosb0JBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxPQUEzQixFQUFvQ0MsSUFBcEMs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T0gsR0FBR0csR0FBSCxNQUNQQSxHQURPLE1BRVBBLEdBRk8sT0FHUEEsR0FITyxDQUdILCtCQUhHLEVBSVBBLEdBSk8sQ0FJSGpCLElBSkcsRUFLUGlCLEdBTE8sQ0FLSCxXQUxHLEVBTVBBLEdBTk8sQ0FNSCxLQUFLdEIsSUFBTCxDQUFVa0IsT0FBVixDQUFrQmYsQ0FBbEIsQ0FORyxFQU9QbUIsR0FQTyxDQU9ILEtBUEcsQ0FBUDtBQVVEOzs7Ozs7a0JBSVkxQixRIiwiZmlsZSI6IlRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBwcmVhbWJsZSBmcm9tICcuLi9wcmVhbWJsZSc7XG5pbXBvcnQgKiBhcyBiYWJlbCBmcm9tICdiYWJlbC1jb3JlJztcbmltcG9ydCBlczIwMTUgZnJvbSAnYmFiZWwtcHJlc2V0LWVzMjAxNSc7XG5pbXBvcnQgZXhwb3J0cyBmcm9tICdiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLWV4cG9ydC1leHRlbnNpb25zJztcbmltcG9ydCB7XG4gIGpzX2JlYXV0aWZ5XG59IGZyb20gJ2pzLWJlYXV0aWZ5JztcblxuY29uc3QgdHlwZXNjcmlwdCA9ICgpID0+IGBcblxuICBpZHM6IHtba2V5OnN0cmluZ106IFdNTEVsZW1lbnR9O1xuICB3aWRnZXRzOiBXaWRnZXRbXTtcbiAgdHJlZTogSFRNTEVsZW1lbnQ7XG4gIGNvbnRleHQ6IG9iamVjdDtcbiAgdGVtcGxhdGU6ICgpPT5IVE1MRWxlbWVudDtcblxuYDtcblxuY29uc3QgZXM1ID0gKGpzLCBvcHRzID0ge30pID0+XG4gIGJhYmVsLnRyYW5zZm9ybShqcywgT2JqZWN0LmFzc2lnbih7XG4gICAgc291cmNlTWFwczogdHJ1ZSxcbiAgICBwcmVzZXRzOiBbZXMyMDE1XSxcbiAgICBwbHVnaW5zOiBbZXhwb3J0c10sXG4gICAgaGlnaGxpZ2h0Q29kZTogZmFsc2VcbiAgfSwgb3B0cykpLmNvZGU7XG5cbmNvbnN0IHByZXR0eSA9IGpzX2JlYXV0aWZ5O1xuXG4vKipcbiAqIFRlbXBsYXRlXG4gKiBAcGFyYW0ge2FycmF5PEltcG9ydD59IGltcG9ydHNcbiAqIEBwYXJhbSB7YXJyYXk8c3RyaW5nPn0gdXNlc1xuICogQHBhcmFtIHtUYWd9IHJvb3RcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKi9cbmNsYXNzIFRlbXBsYXRlIGV4dGVuZHMgTm9kZSB7XG5cbiAgY29uc3RydWN0b3IoaW1wb3J0cywgdXNlcywgZXhwb3J0cywgcm9vdCwgbG9jYXRpb24pIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnR5cGUgPSAndGVtcGxhdGUnO1xuICAgIHRoaXMuaW1wb3J0cyA9IGltcG9ydHM7XG4gICAgdGhpcy51c2VzID0gdXNlcztcbiAgICB0aGlzLmV4cG9ydHMgPSBleHBvcnRzO1xuICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gIH1cblxuICB0cmFuc3BpbGUobykge1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBhcmdzID0gdGhpcy51c2VzLm1hcChwID0+IHAudHJhbnNwaWxlKCkpLmpvaW4oJywnKTtcblxuICAgIGFyZ3MgPSAoYXJncykgPyAnICwnICsgYXJncyA6IGFyZ3M7XG5cbiAgICBsZXQgaW1wb3J0cyA9IHRoaXMuaW1wb3J0cy5tYXAoaSA9PiBpLnRyYW5zcGlsZSgpKTtcbiAgICBsZXQgZXhwb3J0cyA9IHRoaXMuZXhwb3J0cy5tYXAoZSA9PiBlLnRyYW5zcGlsZSgpKTtcbiAgICBsZXQgcGlwZWxpbmUgPSBbXTtcbiAgICBsZXQgb3V0cHV0ID0gY29kZSA9PiBwaXBlbGluZS5yZWR1Y2UoKHAsIGMpID0+IGMocCksIGNvZGUpO1xuXG4gICAgaWYgKG8uZXM1KVxuICAgICAgcGlwZWxpbmUucHVzaCgodHlwZW9mIG8uZXM1ID09PSAnb2JqZWN0JykgPyBzID0+IGVzNShzLCBvLmVzNSkgOiBlczUpO1xuXG4gICAgaWYgKG8ucHJldHR5KVxuICAgICAgcGlwZWxpbmUucHVzaChwcmV0dHkpO1xuXG4gICAgcmV0dXJuIG91dHB1dChgJHtpbXBvcnRzfSBcXG4gJHtwcmVhbWJsZShvKX0gXFxuICR7ZXhwb3J0c31cblxuICAgIGV4cG9ydCBjbGFzcyBNYWluICR7by50eXBlc2NyaXB0PyAnaW1wbGVtZW50cyBWaWV3JyA6ICcnfXtcblxuICAgICAgJHsoby50eXBlc2NyaXB0KT8gdHlwZXNjcmlwdCgpIDogJyd9XG5cbiAgICAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG5cbiAgICAgICAgICBsZXQgdmlldyA9IHRoaXM7XG5cbiAgICAgICAgICB0aGlzLmlkcyA9IHt9O1xuICAgICAgICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xuXG4gICAgICAgICAgdGhpcy50cmVlID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSBmdW5jdGlvbigpe3JldHVybiAke3RoaXMucm9vdC50cmFuc3BpbGUoKX19O1xuXG4gICAgICAgfVxuXG4gICAgICAgc3RhdGljIHJlbmRlcihjb250ZXh0KSB7XG5cbiAgICAgICAgIHJldHVybiAobmV3IE1haW4oY29udGV4dCkpLnJlbmRlcigpO1xuXG4gICAgICAgfVxuXG4gICAgICAgJHtvLnR5cGVzY3JpcHQ/ICdmaW5kQnlJZChpZDpzdHJpbmcpIDogV01MRWxlbWVudCAnIDogJ2ZpbmRCeUlkKGlkKSd9e1xuXG4gICAgICAgIHJldHVybiAodGhpcy5pZHNbaWRdKSA/IHRoaXMuaWRzW2lkXSA6IG51bGw7XG5cbiAgICAgICB9XG5cbiAgICAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHRyZWUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuaWRzID0ge307XG4gICAgICAgIHRoaXMud2lkZ2V0cy5mb3JFYWNoKHcgPT4gdy5yZW1vdmVkKCkpO1xuICAgICAgICB0aGlzLndpZGdldHMgPSBbXTtcbiAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RoaXMgaXMgaXQgJywgdGhpcyk7XG4gICAgICAgIHRyZWUgPSB0aGlzLnRlbXBsYXRlLmNhbGwodGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5pZHNbJ3Jvb3QnXSA9ICh0aGlzLmlkc1sncm9vdCddKT8gdGhpcy5pZHNbJ3Jvb3QnXTp0cmVlO1xuICAgICAgICB0aGlzLndpZGdldHMuZm9yRWFjaCh3ID0+IHcucmVuZGVyZWQoKSk7XG5cbiAgICAgICAgcmV0dXJuIHRyZWU7XG5cbiAgICAgIH1cblxuICAgICB9XG5cbiAgICAgZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxuICAgIGApO1xuXG4gIH1cblxuICBjb21waWxlKG8pIHtcblxuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgYXJncyA9IHRoaXMudXNlcy5tYXAocCA9PiBwLmNvbXBpbGUobykpO1xuXG4gICAgYXJncyA9IChhcmdzKSA/ICcgLCcgKyBhcmdzIDogYXJncztcblxuICAgIHZhciBzbiA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJykuXG4gICAgYWRkKHRoaXMuaW1wb3J0cy5tYXAoaSA9PiBpLmNvbXBpbGUobykpKS5cbiAgICBhZGQoYFxcbmApLlxuICAgIGFkZCh0aGlzLmV4cG9ydHMubWFwKGUgPT4gZS5jb21waWxlKG8pKSkuXG4gICAgYWRkKGBcXG5gKS5cbiAgICBhZGQoYGV4cG9ydGApLlxuICAgIGFkZChgIHsgYCk7XG5cbiAgICB0aGlzLmV4cG9ydHMuZm9yRWFjaChlID0+IHNuLmFkZChgJHtlLmlkfWApLmFkZChgLGApKTtcblxuICAgIHJldHVybiBzbi5hZGQoYH1gKS5cbiAgICBhZGQoYDtgKS5cbiAgICBhZGQoYFxcbmApLlxuICAgIGFkZCgnZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1ha2UnKS5cbiAgICBhZGQoYXJncykuXG4gICAgYWRkKCd7IHJldHVybiAnKS5cbiAgICBhZGQodGhpcy5yb290LmNvbXBpbGUobykpLlxuICAgIGFkZCgnOyB9Jyk7XG5cblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGVcblxuIl19