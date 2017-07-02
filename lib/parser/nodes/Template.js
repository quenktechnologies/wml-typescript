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

      return output(imports + ' \n ' + (0, _preamble2.default)(o) + ' \n ' + exports + '\n\n    export class Main ' + (o.typescript ? 'implements View' : '') + '{\n\n      ' + (o.typescript ? typescript() : '') + '\n\n       constructor(context) {\n\n          let view = this;\n\n          this.ids = {};\n          this.widgets = [];\n\n          this.tree = null;\n          this.context = context;\n          this.template = function(){return ' + this.root.transpile() + '};\n\n       }\n\n       static render(context) {\n\n         return (new Main(context)).render();\n\n       }\n\n       ' + (o.typescript ? 'findById(id:string) : WMLElement ' : 'findById(id)') + '{\n\n        return (this.ids[id]) ? this.ids[id] : null;\n\n       }\n\n       render() {\n\n        var tree = null;\n\n        this.ids = {};\n        this.widgets.forEach(w => w.removed());\n        this.widgets = [];\n\n        tree = this.template.call(this.context);\n\n        this.ids[\'root\'] = (this.ids[\'root\'])? this.ids[\'root\']:tree;\n        this.widgets.forEach(w => w.rendered());\n\n        return tree;\n\n      }\n\n     }\n\n     export default Main;\n\n    ');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiYmFiZWwiLCJ0eXBlc2NyaXB0IiwiZXM1IiwianMiLCJvcHRzIiwidHJhbnNmb3JtIiwiT2JqZWN0IiwiYXNzaWduIiwic291cmNlTWFwcyIsInByZXNldHMiLCJwbHVnaW5zIiwiaGlnaGxpZ2h0Q29kZSIsImNvZGUiLCJwcmV0dHkiLCJUZW1wbGF0ZSIsImltcG9ydHMiLCJ1c2VzIiwiZXhwb3J0cyIsInJvb3QiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwic3RyIiwiYXJncyIsIm1hcCIsInAiLCJ0cmFuc3BpbGUiLCJqb2luIiwiaSIsImUiLCJwaXBlbGluZSIsIm91dHB1dCIsInJlZHVjZSIsImMiLCJwdXNoIiwicyIsImNvbXBpbGUiLCJzbiIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImFkZCIsImZvckVhY2giLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsSzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBLElBQU1DLGFBQWEsU0FBYkEsVUFBYTtBQUFBO0FBQUEsQ0FBbkI7O0FBVUEsSUFBTUMsTUFBTSxTQUFOQSxHQUFNLENBQUNDLEVBQUQ7QUFBQSxNQUFLQyxJQUFMLHVFQUFZLEVBQVo7QUFBQSxTQUNWSixNQUFNSyxTQUFOLENBQWdCRixFQUFoQixFQUFvQkcsT0FBT0MsTUFBUCxDQUFjO0FBQ2hDQyxnQkFBWSxJQURvQjtBQUVoQ0MsYUFBUyx5QkFGdUI7QUFHaENDLGFBQVMsZ0RBSHVCO0FBSWhDQyxtQkFBZTtBQUppQixHQUFkLEVBS2pCUCxJQUxpQixDQUFwQixFQUtVUSxJQU5BO0FBQUEsQ0FBWjs7QUFRQSxJQUFNQyxnQ0FBTjs7QUFFQTs7Ozs7Ozs7SUFPTUMsUTs7O0FBRUosb0JBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxPQUEzQixFQUFvQ0MsSUFBcEMs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SCxHQUFHRyxHQUFILE1BQ1BBLEdBRE8sTUFFUEEsR0FGTyxPQUdQQSxHQUhPLENBR0gsK0JBSEcsRUFJUEEsR0FKTyxDQUlIakIsSUFKRyxFQUtQaUIsR0FMTyxDQUtILFdBTEcsRUFNUEEsR0FOTyxDQU1ILEtBQUt0QixJQUFMLENBQVVrQixPQUFWLENBQWtCZixDQUFsQixDQU5HLEVBT1BtQixHQVBPLENBT0gsS0FQRyxDQUFQO0FBVUQ7Ozs7OztrQkFJWTFCLFEiLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IHByZWFtYmxlIGZyb20gJy4uL3ByZWFtYmxlJztcbmltcG9ydCAqIGFzIGJhYmVsIGZyb20gJ2JhYmVsLWNvcmUnO1xuaW1wb3J0IGVzMjAxNSBmcm9tICdiYWJlbC1wcmVzZXQtZXMyMDE1JztcbmltcG9ydCBleHBvcnRzIGZyb20gJ2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tZXhwb3J0LWV4dGVuc2lvbnMnO1xuaW1wb3J0IHtcbiAganNfYmVhdXRpZnlcbn0gZnJvbSAnanMtYmVhdXRpZnknO1xuXG5jb25zdCB0eXBlc2NyaXB0ID0gKCkgPT4gYFxuXG4gIGlkczoge1trZXk6c3RyaW5nXTogV01MRWxlbWVudH07XG4gIHdpZGdldHM6IFdpZGdldFtdO1xuICB0cmVlOiBIVE1MRWxlbWVudDtcbiAgY29udGV4dDogb2JqZWN0O1xuICB0ZW1wbGF0ZTogKCk9PkhUTUxFbGVtZW50O1xuXG5gO1xuXG5jb25zdCBlczUgPSAoanMsIG9wdHMgPSB7fSkgPT5cbiAgYmFiZWwudHJhbnNmb3JtKGpzLCBPYmplY3QuYXNzaWduKHtcbiAgICBzb3VyY2VNYXBzOiB0cnVlLFxuICAgIHByZXNldHM6IFtlczIwMTVdLFxuICAgIHBsdWdpbnM6IFtleHBvcnRzXSxcbiAgICBoaWdobGlnaHRDb2RlOiBmYWxzZVxuICB9LCBvcHRzKSkuY29kZTtcblxuY29uc3QgcHJldHR5ID0ganNfYmVhdXRpZnk7XG5cbi8qKlxuICogVGVtcGxhdGVcbiAqIEBwYXJhbSB7YXJyYXk8SW1wb3J0Pn0gaW1wb3J0c1xuICogQHBhcmFtIHthcnJheTxzdHJpbmc+fSB1c2VzXG4gKiBAcGFyYW0ge1RhZ30gcm9vdFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgVGVtcGxhdGUgZXh0ZW5kcyBOb2RlIHtcblxuICBjb25zdHJ1Y3RvcihpbXBvcnRzLCB1c2VzLCBleHBvcnRzLCByb290LCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZSA9ICd0ZW1wbGF0ZSc7XG4gICAgdGhpcy5pbXBvcnRzID0gaW1wb3J0cztcbiAgICB0aGlzLnVzZXMgPSB1c2VzO1xuICAgIHRoaXMuZXhwb3J0cyA9IGV4cG9ydHM7XG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgfVxuXG4gIHRyYW5zcGlsZShvKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIGFyZ3MgPSB0aGlzLnVzZXMubWFwKHAgPT4gcC50cmFuc3BpbGUoKSkuam9pbignLCcpO1xuXG4gICAgYXJncyA9IChhcmdzKSA/ICcgLCcgKyBhcmdzIDogYXJncztcblxuICAgIGxldCBpbXBvcnRzID0gdGhpcy5pbXBvcnRzLm1hcChpID0+IGkudHJhbnNwaWxlKCkpO1xuICAgIGxldCBleHBvcnRzID0gdGhpcy5leHBvcnRzLm1hcChlID0+IGUudHJhbnNwaWxlKCkpO1xuICAgIGxldCBwaXBlbGluZSA9IFtdO1xuICAgIGxldCBvdXRwdXQgPSBjb2RlID0+IHBpcGVsaW5lLnJlZHVjZSgocCwgYykgPT4gYyhwKSwgY29kZSk7XG5cbiAgICBpZiAoby5lczUpXG4gICAgICBwaXBlbGluZS5wdXNoKCh0eXBlb2Ygby5lczUgPT09ICdvYmplY3QnKSA/IHMgPT4gZXM1KHMsIG8uZXM1KSA6IGVzNSk7XG5cbiAgICBpZiAoby5wcmV0dHkpXG4gICAgICBwaXBlbGluZS5wdXNoKHByZXR0eSk7XG5cbiAgICByZXR1cm4gb3V0cHV0KGAke2ltcG9ydHN9IFxcbiAke3ByZWFtYmxlKG8pfSBcXG4gJHtleHBvcnRzfVxuXG4gICAgZXhwb3J0IGNsYXNzIE1haW4gJHtvLnR5cGVzY3JpcHQ/ICdpbXBsZW1lbnRzIFZpZXcnIDogJyd9e1xuXG4gICAgICAkeyhvLnR5cGVzY3JpcHQpPyB0eXBlc2NyaXB0KCkgOiAnJ31cblxuICAgICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcblxuICAgICAgICAgIGxldCB2aWV3ID0gdGhpcztcblxuICAgICAgICAgIHRoaXMuaWRzID0ge307XG4gICAgICAgICAgdGhpcy53aWRnZXRzID0gW107XG5cbiAgICAgICAgICB0aGlzLnRyZWUgPSBudWxsO1xuICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCl7cmV0dXJuICR7dGhpcy5yb290LnRyYW5zcGlsZSgpfX07XG5cbiAgICAgICB9XG5cbiAgICAgICBzdGF0aWMgcmVuZGVyKGNvbnRleHQpIHtcblxuICAgICAgICAgcmV0dXJuIChuZXcgTWFpbihjb250ZXh0KSkucmVuZGVyKCk7XG5cbiAgICAgICB9XG5cbiAgICAgICAke28udHlwZXNjcmlwdD8gJ2ZpbmRCeUlkKGlkOnN0cmluZykgOiBXTUxFbGVtZW50ICcgOiAnZmluZEJ5SWQoaWQpJ317XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLmlkc1tpZF0pID8gdGhpcy5pZHNbaWRdIDogbnVsbDtcblxuICAgICAgIH1cblxuICAgICAgIHJlbmRlcigpIHtcblxuICAgICAgICB2YXIgdHJlZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5pZHMgPSB7fTtcbiAgICAgICAgdGhpcy53aWRnZXRzLmZvckVhY2godyA9PiB3LnJlbW92ZWQoKSk7XG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xuXG4gICAgICAgIHRyZWUgPSB0aGlzLnRlbXBsYXRlLmNhbGwodGhpcy5jb250ZXh0KTtcblxuICAgICAgICB0aGlzLmlkc1sncm9vdCddID0gKHRoaXMuaWRzWydyb290J10pPyB0aGlzLmlkc1sncm9vdCddOnRyZWU7XG4gICAgICAgIHRoaXMud2lkZ2V0cy5mb3JFYWNoKHcgPT4gdy5yZW5kZXJlZCgpKTtcblxuICAgICAgICByZXR1cm4gdHJlZTtcblxuICAgICAgfVxuXG4gICAgIH1cblxuICAgICBleHBvcnQgZGVmYXVsdCBNYWluO1xuXG4gICAgYCk7XG5cbiAgfVxuXG4gIGNvbXBpbGUobykge1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBhcmdzID0gdGhpcy51c2VzLm1hcChwID0+IHAuY29tcGlsZShvKSk7XG5cbiAgICBhcmdzID0gKGFyZ3MpID8gJyAsJyArIGFyZ3MgOiBhcmdzO1xuXG4gICAgdmFyIHNuID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKS5cbiAgICBhZGQodGhpcy5pbXBvcnRzLm1hcChpID0+IGkuY29tcGlsZShvKSkpLlxuICAgIGFkZChgXFxuYCkuXG4gICAgYWRkKHRoaXMuZXhwb3J0cy5tYXAoZSA9PiBlLmNvbXBpbGUobykpKS5cbiAgICBhZGQoYFxcbmApLlxuICAgIGFkZChgZXhwb3J0YCkuXG4gICAgYWRkKGAgeyBgKTtcblxuICAgIHRoaXMuZXhwb3J0cy5mb3JFYWNoKGUgPT4gc24uYWRkKGAke2UuaWR9YCkuYWRkKGAsYCkpO1xuXG4gICAgcmV0dXJuIHNuLmFkZChgfWApLlxuICAgIGFkZChgO2ApLlxuICAgIGFkZChgXFxuYCkuXG4gICAgYWRkKCdleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWFrZScpLlxuICAgIGFkZChhcmdzKS5cbiAgICBhZGQoJ3sgcmV0dXJuICcpLlxuICAgIGFkZCh0aGlzLnJvb3QuY29tcGlsZShvKSkuXG4gICAgYWRkKCc7IH0nKTtcblxuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZVxuXG4iXX0=