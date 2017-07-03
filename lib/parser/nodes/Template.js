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

var rootElement = function rootElement(root, o) {
  return root ? root.transpile() : o.typescript ? '<HTMLElement><Node>document.createDocumentFragment()' : 'document.createDocumentFragment()';
};

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
      }).join('');
      var exports = this.exports.map(function (e) {
        return e.transpile();
      }).join('');
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

      return output(imports + ' \n ' + (0, _preamble2.default)(o) + ' \n ' + exports + '\n\n    export class Main ' + (o.typescript ? 'implements View' : '') + '{\n\n      ' + (o.typescript ? typescript() : '') + '\n\n       constructor(context) {\n\n          let view = this;\n\n          this.ids = {};\n          this.widgets = [];\n\n          this.tree = null;\n          this.context = context;\n          this.template = function(){\n            return ' + rootElement(this.root, o) + '\n          }\n\n       }\n\n       static render(context) {\n\n         return (new Main(context)).render();\n\n       }\n\n       ' + (o.typescript ? 'register(id:string, w:WMLElement): Main' : 'register(id, w)') + '{\n\n\n         if (this.ids.hasOwnProperty(id))\n           throw new Error(\'Duplicate id \\\'\' +id+\'\\\' detected!\');\n\n         this.ids[id] = w;\n         return this;\n\n       }\n\n       ' + (o.typescript ? 'findById(id:string) : WMLElement ' : 'findById(id)') + '{\n\n        return (this.ids[id]) ? this.ids[id] : null;\n\n       }\n\n       render() {\n\n        var tree = null;\n\n        this.ids = {};\n        this.widgets.forEach(w => w.removed());\n        this.widgets = [];\n\n        tree = this.template.call(this.context);\n\n        this.ids[\'root\'] = (this.ids[\'root\'])? this.ids[\'root\']:tree;\n        this.widgets.forEach(w => w.rendered());\n\n        return tree;\n\n      }\n\n     }\n\n     export default Main;\n\n    ');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiYmFiZWwiLCJ0eXBlc2NyaXB0IiwiZXM1IiwianMiLCJvcHRzIiwidHJhbnNmb3JtIiwiT2JqZWN0IiwiYXNzaWduIiwic291cmNlTWFwcyIsInByZXNldHMiLCJwbHVnaW5zIiwiaGlnaGxpZ2h0Q29kZSIsImNvZGUiLCJwcmV0dHkiLCJyb290RWxlbWVudCIsInJvb3QiLCJvIiwidHJhbnNwaWxlIiwiVGVtcGxhdGUiLCJpbXBvcnRzIiwidXNlcyIsImV4cG9ydHMiLCJsb2NhdGlvbiIsInR5cGUiLCJzdHIiLCJhcmdzIiwibWFwIiwicCIsImpvaW4iLCJpIiwiZSIsInBpcGVsaW5lIiwib3V0cHV0IiwicmVkdWNlIiwiYyIsInB1c2giLCJzIiwiY29tcGlsZSIsInNuIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiZm9yRWFjaCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxLOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhO0FBQUE7QUFBQSxDQUFuQjs7QUFVQSxJQUFNQyxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsRUFBRDtBQUFBLE1BQUtDLElBQUwsdUVBQVksRUFBWjtBQUFBLFNBQ1ZKLE1BQU1LLFNBQU4sQ0FBZ0JGLEVBQWhCLEVBQW9CRyxPQUFPQyxNQUFQLENBQWM7QUFDaENDLGdCQUFZLElBRG9CO0FBRWhDQyxhQUFTLHlCQUZ1QjtBQUdoQ0MsYUFBUyxnREFIdUI7QUFJaENDLG1CQUFlO0FBSmlCLEdBQWQsRUFLakJQLElBTGlCLENBQXBCLEVBS1VRLElBTkE7QUFBQSxDQUFaOztBQVFBLElBQU1DLGdDQUFOOztBQUVBLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxTQUNsQkQsT0FB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R1RBLEdBSFMsQ0FHTCxLQUFLcEIsT0FBTCxDQUFhSyxHQUFiLENBQWlCO0FBQUEsZUFBS0ksRUFBRU8sT0FBRixDQUFVckIsQ0FBVixDQUFMO0FBQUEsT0FBakIsQ0FISyxFQUlUeUIsR0FKUyxPQUtUQSxHQUxTLFdBTVRBLEdBTlMsT0FBVDs7QUFRQSxXQUFLcEIsT0FBTCxDQUFhcUIsT0FBYixDQUFxQjtBQUFBLGVBQUtKLEdBQUdHLEdBQUgsTUFBVVgsRUFBRWEsRUFBWixFQUFrQkYsR0FBbEIsS0FBTDtBQUFBLE9BQXJCOztBQUVBLGFBQU9ILEdBQUdHLEdBQUgsTUFDUEEsR0FETyxNQUVQQSxHQUZPLE9BR1BBLEdBSE8sQ0FHSCwrQkFIRyxFQUlQQSxHQUpPLENBSUhoQixJQUpHLEVBS1BnQixHQUxPLENBS0gsV0FMRyxFQU1QQSxHQU5PLENBTUgsS0FBSzFCLElBQUwsQ0FBVXNCLE9BQVYsQ0FBa0JyQixDQUFsQixDQU5HLEVBT1B5QixHQVBPLENBT0gsS0FQRyxDQUFQO0FBVUQ7Ozs7OztrQkFJWXZCLFEiLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IHByZWFtYmxlIGZyb20gJy4uL3ByZWFtYmxlJztcbmltcG9ydCAqIGFzIGJhYmVsIGZyb20gJ2JhYmVsLWNvcmUnO1xuaW1wb3J0IGVzMjAxNSBmcm9tICdiYWJlbC1wcmVzZXQtZXMyMDE1JztcbmltcG9ydCBleHBvcnRzIGZyb20gJ2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tZXhwb3J0LWV4dGVuc2lvbnMnO1xuaW1wb3J0IHtcbiAganNfYmVhdXRpZnlcbn0gZnJvbSAnanMtYmVhdXRpZnknO1xuXG5jb25zdCB0eXBlc2NyaXB0ID0gKCkgPT4gYFxuXG4gIGlkczoge1trZXk6c3RyaW5nXTogV01MRWxlbWVudH07XG4gIHdpZGdldHM6IFdpZGdldFtdO1xuICB0cmVlOiBIVE1MRWxlbWVudDtcbiAgY29udGV4dDogb2JqZWN0O1xuICB0ZW1wbGF0ZTogKCk9PkhUTUxFbGVtZW50O1xuXG5gO1xuXG5jb25zdCBlczUgPSAoanMsIG9wdHMgPSB7fSkgPT5cbiAgYmFiZWwudHJhbnNmb3JtKGpzLCBPYmplY3QuYXNzaWduKHtcbiAgICBzb3VyY2VNYXBzOiB0cnVlLFxuICAgIHByZXNldHM6IFtlczIwMTVdLFxuICAgIHBsdWdpbnM6IFtleHBvcnRzXSxcbiAgICBoaWdobGlnaHRDb2RlOiBmYWxzZVxuICB9LCBvcHRzKSkuY29kZTtcblxuY29uc3QgcHJldHR5ID0ganNfYmVhdXRpZnk7XG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gKHJvb3QsIG8pID0+XG4gIHJvb3QgPyByb290LnRyYW5zcGlsZSgpIDogKG8udHlwZXNjcmlwdCkgP1xuICAnPEhUTUxFbGVtZW50PjxOb2RlPmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKScgOlxuICAnZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpJztcblxuLyoqXG4gKiBUZW1wbGF0ZVxuICogQHBhcmFtIHthcnJheTxJbXBvcnQ+fSBpbXBvcnRzXG4gKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IHVzZXNcbiAqIEBwYXJhbSB7VGFnfSByb290XG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBUZW1wbGF0ZSBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKGltcG9ydHMsIHVzZXMsIGV4cG9ydHMsIHJvb3QsIGxvY2F0aW9uKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gJ3RlbXBsYXRlJztcbiAgICB0aGlzLmltcG9ydHMgPSBpbXBvcnRzO1xuICAgIHRoaXMudXNlcyA9IHVzZXM7XG4gICAgdGhpcy5leHBvcnRzID0gZXhwb3J0cztcbiAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICB9XG5cbiAgdHJhbnNwaWxlKG8pIHtcblxuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgYXJncyA9IHRoaXMudXNlcy5tYXAocCA9PiBwLnRyYW5zcGlsZSgpKS5qb2luKCcsJyk7XG5cbiAgICBhcmdzID0gKGFyZ3MpID8gJyAsJyArIGFyZ3MgOiBhcmdzO1xuXG4gICAgbGV0IGltcG9ydHMgPSB0aGlzLmltcG9ydHMubWFwKGkgPT4gaS50cmFuc3BpbGUoKSkuam9pbignJyk7XG4gICAgbGV0IGV4cG9ydHMgPSB0aGlzLmV4cG9ydHMubWFwKGUgPT4gZS50cmFuc3BpbGUoKSkuam9pbignJyk7XG4gICAgbGV0IHBpcGVsaW5lID0gW107XG4gICAgbGV0IG91dHB1dCA9IGNvZGUgPT4gcGlwZWxpbmUucmVkdWNlKChwLCBjKSA9PiBjKHApLCBjb2RlKTtcblxuICAgIGlmIChvLmVzNSlcbiAgICAgIHBpcGVsaW5lLnB1c2goKHR5cGVvZiBvLmVzNSA9PT0gJ29iamVjdCcpID8gcyA9PiBlczUocywgby5lczUpIDogZXM1KTtcblxuICAgIGlmIChvLnByZXR0eSlcbiAgICAgIHBpcGVsaW5lLnB1c2gocHJldHR5KTtcblxuICAgIHJldHVybiBvdXRwdXQoYCR7aW1wb3J0c30gXFxuICR7cHJlYW1ibGUobyl9IFxcbiAke2V4cG9ydHN9XG5cbiAgICBleHBvcnQgY2xhc3MgTWFpbiAke28udHlwZXNjcmlwdD8gJ2ltcGxlbWVudHMgVmlldycgOiAnJ317XG5cbiAgICAgICR7KG8udHlwZXNjcmlwdCk/IHR5cGVzY3JpcHQoKSA6ICcnfVxuXG4gICAgICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuXG4gICAgICAgICAgbGV0IHZpZXcgPSB0aGlzO1xuXG4gICAgICAgICAgdGhpcy5pZHMgPSB7fTtcbiAgICAgICAgICB0aGlzLndpZGdldHMgPSBbXTtcblxuICAgICAgICAgIHRoaXMudHJlZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiAke3Jvb3RFbGVtZW50KHRoaXMucm9vdCwgbyl9XG4gICAgICAgICAgfVxuXG4gICAgICAgfVxuXG4gICAgICAgc3RhdGljIHJlbmRlcihjb250ZXh0KSB7XG5cbiAgICAgICAgIHJldHVybiAobmV3IE1haW4oY29udGV4dCkpLnJlbmRlcigpO1xuXG4gICAgICAgfVxuXG4gICAgICAgJHtvLnR5cGVzY3JpcHQ/ICdyZWdpc3RlcihpZDpzdHJpbmcsIHc6V01MRWxlbWVudCk6IE1haW4nIDogJ3JlZ2lzdGVyKGlkLCB3KSd9e1xuXG5cbiAgICAgICAgIGlmICh0aGlzLmlkcy5oYXNPd25Qcm9wZXJ0eShpZCkpXG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRHVwbGljYXRlIGlkIFxcXFwnJyAraWQrJ1xcXFwnIGRldGVjdGVkIScpO1xuXG4gICAgICAgICB0aGlzLmlkc1tpZF0gPSB3O1xuICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICB9XG5cbiAgICAgICAke28udHlwZXNjcmlwdD8gJ2ZpbmRCeUlkKGlkOnN0cmluZykgOiBXTUxFbGVtZW50ICcgOiAnZmluZEJ5SWQoaWQpJ317XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLmlkc1tpZF0pID8gdGhpcy5pZHNbaWRdIDogbnVsbDtcblxuICAgICAgIH1cblxuICAgICAgIHJlbmRlcigpIHtcblxuICAgICAgICB2YXIgdHJlZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5pZHMgPSB7fTtcbiAgICAgICAgdGhpcy53aWRnZXRzLmZvckVhY2godyA9PiB3LnJlbW92ZWQoKSk7XG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xuXG4gICAgICAgIHRyZWUgPSB0aGlzLnRlbXBsYXRlLmNhbGwodGhpcy5jb250ZXh0KTtcblxuICAgICAgICB0aGlzLmlkc1sncm9vdCddID0gKHRoaXMuaWRzWydyb290J10pPyB0aGlzLmlkc1sncm9vdCddOnRyZWU7XG4gICAgICAgIHRoaXMud2lkZ2V0cy5mb3JFYWNoKHcgPT4gdy5yZW5kZXJlZCgpKTtcblxuICAgICAgICByZXR1cm4gdHJlZTtcblxuICAgICAgfVxuXG4gICAgIH1cblxuICAgICBleHBvcnQgZGVmYXVsdCBNYWluO1xuXG4gICAgYCk7XG5cbiAgfVxuXG4gIGNvbXBpbGUobykge1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBhcmdzID0gdGhpcy51c2VzLm1hcChwID0+IHAuY29tcGlsZShvKSk7XG5cbiAgICBhcmdzID0gKGFyZ3MpID8gJyAsJyArIGFyZ3MgOiBhcmdzO1xuXG4gICAgdmFyIHNuID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKS5cbiAgICBhZGQodGhpcy5pbXBvcnRzLm1hcChpID0+IGkuY29tcGlsZShvKSkpLlxuICAgIGFkZChgXFxuYCkuXG4gICAgYWRkKHRoaXMuZXhwb3J0cy5tYXAoZSA9PiBlLmNvbXBpbGUobykpKS5cbiAgICBhZGQoYFxcbmApLlxuICAgIGFkZChgZXhwb3J0YCkuXG4gICAgYWRkKGAgeyBgKTtcblxuICAgIHRoaXMuZXhwb3J0cy5mb3JFYWNoKGUgPT4gc24uYWRkKGAke2UuaWR9YCkuYWRkKGAsYCkpO1xuXG4gICAgcmV0dXJuIHNuLmFkZChgfWApLlxuICAgIGFkZChgO2ApLlxuICAgIGFkZChgXFxuYCkuXG4gICAgYWRkKCdleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWFrZScpLlxuICAgIGFkZChhcmdzKS5cbiAgICBhZGQoJ3sgcmV0dXJuICcpLlxuICAgIGFkZCh0aGlzLnJvb3QuY29tcGlsZShvKSkuXG4gICAgYWRkKCc7IH0nKTtcblxuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZVxuXG4iXX0=