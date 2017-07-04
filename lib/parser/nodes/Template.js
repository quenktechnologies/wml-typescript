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

      return output(imports + ' \n ' + (0, _preamble2.default)(o) + ' \n ' + exports + '\n\n    export class Main ' + (o.typescript ? 'implements View' : '') + '{\n\n      ' + (o.typescript ? typescript() : '') + '\n\n       constructor(context) {\n\n          let view = this;\n\n          this.ids = {};\n          this.widgets = [];\n\n          this.tree = null;\n          this.context = context;\n          this.template = function(){\n            return ' + rootElement(this.root, o) + '\n          }\n\n       }\n\n       static render(context) {\n\n         return (new Main(context)).render();\n\n       }\n\n       ' + (o.typescript ? 'register(id:string, w:WMLElement): Main' : 'register(id, w)') + '{\n\n\n         if (this.ids.hasOwnProperty(id))\n           throw new Error(\'Duplicate id \\\'\' +id+\'\\\' detected!\');\n\n         this.ids[id] = w;\n         return this;\n\n       }\n\n       ' + (o.typescript ? 'findById(id:string) : WMLElement ' : 'findById(id)') + '{\n\n        return (this.ids[id]) ? this.ids[id] : null;\n\n       }\n\n       ' + (o.typescript ? 'invalidate(): void' : 'invalidate()') + ' {\n\n        var childs;\n        var parent = this.tree.parentNode;\n        var realFirstChild;\n        var realFirstChildIndex;\n\n         if (this.tree == null)\n           throw new ReferenceError(\'Cannot invalidate a view that has not been rendered!\');\n\n         if (this.tree.parentNode == null)\n           throw new ReferenceError(\'Attempt to invalidate a view that has not been inserted to DOM!\');\n\n         childs = ' + (o.typescript ? '(<Element> this.tree.parentNode)' : 'this.tree.parentNode') + '.children;\n\n         //for some reason the reference stored does not have the correct parent node.\n         //we do this to get a \'live\' version of the node.\n         for (let i = 0; i < childs.length; i++)\n           if (childs[i] === this.tree) {\n             realFirstChild = childs[i];\n             realFirstChildIndex = i;\n           }\n\n         parent.replaceChild(this.render(), realFirstChild);\n\n       }\n\n       render() {\n\n        this.ids = {};\n        this.widgets.forEach(w => w.removed());\n        this.widgets = [];\n        this.tree = this.template.call(this.context);\n        this.ids[\'root\'] = (this.ids[\'root\'])? this.ids[\'root\']:this.tree;\n        this.widgets.forEach(w => w.rendered());\n\n        return this.tree;\n\n      }\n\n     }\n\n     export default Main;\n\n    ');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiYmFiZWwiLCJ0eXBlc2NyaXB0IiwiZXM1IiwianMiLCJvcHRzIiwidHJhbnNmb3JtIiwiT2JqZWN0IiwiYXNzaWduIiwic291cmNlTWFwcyIsInByZXNldHMiLCJwbHVnaW5zIiwiaGlnaGxpZ2h0Q29kZSIsImNvZGUiLCJwcmV0dHkiLCJyb290RWxlbWVudCIsInJvb3QiLCJvIiwidHJhbnNwaWxlIiwiVGVtcGxhdGUiLCJpbXBvcnRzIiwidXNlcyIsImV4cG9ydHMiLCJsb2NhdGlvbiIsInR5cGUiLCJzdHIiLCJhcmdzIiwibWFwIiwicCIsImpvaW4iLCJpIiwiZSIsInBpcGVsaW5lIiwib3V0cHV0IiwicmVkdWNlIiwiYyIsInB1c2giLCJzIiwiY29tcGlsZSIsInNuIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiZm9yRWFjaCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxLOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhO0FBQUE7QUFBQSxDQUFuQjs7QUFVQSxJQUFNQyxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsRUFBRDtBQUFBLE1BQUtDLElBQUwsdUVBQVksRUFBWjtBQUFBLFNBQ1ZKLE1BQU1LLFNBQU4sQ0FBZ0JGLEVBQWhCLEVBQW9CRyxPQUFPQyxNQUFQLENBQWM7QUFDaENDLGdCQUFZLElBRG9CO0FBRWhDQyxhQUFTLHlCQUZ1QjtBQUdoQ0MsYUFBUyxnREFIdUI7QUFJaENDLG1CQUFlO0FBSmlCLEdBQWQsRUFLakJQLElBTGlCLENBQXBCLEVBS1VRLElBTkE7QUFBQSxDQUFaOztBQVFBLElBQU1DLGdDQUFOOztBQUVBLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxTQUNsQkQsT0FB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TCxDQUFhTyxHQUFiLENBQWlCO0FBQUEsZUFBS0csRUFBRVEsT0FBRixDQUFVckIsQ0FBVixDQUFMO0FBQUEsT0FBakIsQ0FESyxFQUVUeUIsR0FGUyxPQUdUQSxHQUhTLENBR0wsS0FBS3BCLE9BQUwsQ0FBYUssR0FBYixDQUFpQjtBQUFBLGVBQUtJLEVBQUVPLE9BQUYsQ0FBVXJCLENBQVYsQ0FBTDtBQUFBLE9BQWpCLENBSEssRUFJVHlCLEdBSlMsT0FLVEEsR0FMUyxXQU1UQSxHQU5TLE9BQVQ7O0FBUUEsV0FBS3BCLE9BQUwsQ0FBYXFCLE9BQWIsQ0FBcUI7QUFBQSxlQUFLSixHQUFHRyxHQUFILE1BQVVYLEVBQUVhLEVBQVosRUFBa0JGLEdBQWxCLEtBQUw7QUFBQSxPQUFyQjs7QUFFQSxhQUFPSCxHQUFHRyxHQUFILE1BQ1BBLEdBRE8sTUFFUEEsR0FGTyxPQUdQQSxHQUhPLENBR0gsK0JBSEcsRUFJUEEsR0FKTyxDQUlIaEIsSUFKRyxFQUtQZ0IsR0FMTyxDQUtILFdBTEcsRUFNUEEsR0FOTyxDQU1ILEtBQUsxQixJQUFMLENBQVVzQixPQUFWLENBQWtCckIsQ0FBbEIsQ0FORyxFQU9QeUIsR0FQTyxDQU9ILEtBUEcsQ0FBUDtBQVVEOzs7Ozs7a0JBSVl2QixRIiwiZmlsZSI6IlRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBwcmVhbWJsZSBmcm9tICcuLi9wcmVhbWJsZSc7XG5pbXBvcnQgKiBhcyBiYWJlbCBmcm9tICdiYWJlbC1jb3JlJztcbmltcG9ydCBlczIwMTUgZnJvbSAnYmFiZWwtcHJlc2V0LWVzMjAxNSc7XG5pbXBvcnQgZXhwb3J0cyBmcm9tICdiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLWV4cG9ydC1leHRlbnNpb25zJztcbmltcG9ydCB7XG4gIGpzX2JlYXV0aWZ5XG59IGZyb20gJ2pzLWJlYXV0aWZ5JztcblxuY29uc3QgdHlwZXNjcmlwdCA9ICgpID0+IGBcblxuICBpZHM6IHtba2V5OnN0cmluZ106IFdNTEVsZW1lbnR9O1xuICB3aWRnZXRzOiBXaWRnZXRbXTtcbiAgdHJlZTogSFRNTEVsZW1lbnQ7XG4gIGNvbnRleHQ6IG9iamVjdDtcbiAgdGVtcGxhdGU6ICgpPT5IVE1MRWxlbWVudDtcblxuYDtcblxuY29uc3QgZXM1ID0gKGpzLCBvcHRzID0ge30pID0+XG4gIGJhYmVsLnRyYW5zZm9ybShqcywgT2JqZWN0LmFzc2lnbih7XG4gICAgc291cmNlTWFwczogdHJ1ZSxcbiAgICBwcmVzZXRzOiBbZXMyMDE1XSxcbiAgICBwbHVnaW5zOiBbZXhwb3J0c10sXG4gICAgaGlnaGxpZ2h0Q29kZTogZmFsc2VcbiAgfSwgb3B0cykpLmNvZGU7XG5cbmNvbnN0IHByZXR0eSA9IGpzX2JlYXV0aWZ5O1xuXG5jb25zdCByb290RWxlbWVudCA9IChyb290LCBvKSA9PlxuICByb290ID8gcm9vdC50cmFuc3BpbGUoKSA6IChvLnR5cGVzY3JpcHQpID9cbiAgJzxIVE1MRWxlbWVudD48Tm9kZT5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCknIDpcbiAgJ2RvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSc7XG5cbi8qKlxuICogVGVtcGxhdGVcbiAqIEBwYXJhbSB7YXJyYXk8SW1wb3J0Pn0gaW1wb3J0c1xuICogQHBhcmFtIHthcnJheTxzdHJpbmc+fSB1c2VzXG4gKiBAcGFyYW0ge1RhZ30gcm9vdFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgVGVtcGxhdGUgZXh0ZW5kcyBOb2RlIHtcblxuICBjb25zdHJ1Y3RvcihpbXBvcnRzLCB1c2VzLCBleHBvcnRzLCByb290LCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZSA9ICd0ZW1wbGF0ZSc7XG4gICAgdGhpcy5pbXBvcnRzID0gaW1wb3J0cztcbiAgICB0aGlzLnVzZXMgPSB1c2VzO1xuICAgIHRoaXMuZXhwb3J0cyA9IGV4cG9ydHM7XG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgfVxuXG4gIHRyYW5zcGlsZShvKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIGFyZ3MgPSB0aGlzLnVzZXMubWFwKHAgPT4gcC50cmFuc3BpbGUoKSkuam9pbignLCcpO1xuXG4gICAgYXJncyA9IChhcmdzKSA/ICcgLCcgKyBhcmdzIDogYXJncztcblxuICAgIGxldCBpbXBvcnRzID0gdGhpcy5pbXBvcnRzLm1hcChpID0+IGkudHJhbnNwaWxlKCkpLmpvaW4oJycpO1xuICAgIGxldCBleHBvcnRzID0gdGhpcy5leHBvcnRzLm1hcChlID0+IGUudHJhbnNwaWxlKCkpLmpvaW4oJycpO1xuICAgIGxldCBwaXBlbGluZSA9IFtdO1xuICAgIGxldCBvdXRwdXQgPSBjb2RlID0+IHBpcGVsaW5lLnJlZHVjZSgocCwgYykgPT4gYyhwKSwgY29kZSk7XG5cbiAgICBpZiAoby5lczUpXG4gICAgICBwaXBlbGluZS5wdXNoKCh0eXBlb2Ygby5lczUgPT09ICdvYmplY3QnKSA/IHMgPT4gZXM1KHMsIG8uZXM1KSA6IGVzNSk7XG5cbiAgICBpZiAoby5wcmV0dHkpXG4gICAgICBwaXBlbGluZS5wdXNoKHByZXR0eSk7XG5cbiAgICByZXR1cm4gb3V0cHV0KGAke2ltcG9ydHN9IFxcbiAke3ByZWFtYmxlKG8pfSBcXG4gJHtleHBvcnRzfVxuXG4gICAgZXhwb3J0IGNsYXNzIE1haW4gJHtvLnR5cGVzY3JpcHQ/ICdpbXBsZW1lbnRzIFZpZXcnIDogJyd9e1xuXG4gICAgICAkeyhvLnR5cGVzY3JpcHQpPyB0eXBlc2NyaXB0KCkgOiAnJ31cblxuICAgICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcblxuICAgICAgICAgIGxldCB2aWV3ID0gdGhpcztcblxuICAgICAgICAgIHRoaXMuaWRzID0ge307XG4gICAgICAgICAgdGhpcy53aWRnZXRzID0gW107XG5cbiAgICAgICAgICB0aGlzLnRyZWUgPSBudWxsO1xuICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4gJHtyb290RWxlbWVudCh0aGlzLnJvb3QsIG8pfVxuICAgICAgICAgIH1cblxuICAgICAgIH1cblxuICAgICAgIHN0YXRpYyByZW5kZXIoY29udGV4dCkge1xuXG4gICAgICAgICByZXR1cm4gKG5ldyBNYWluKGNvbnRleHQpKS5yZW5kZXIoKTtcblxuICAgICAgIH1cblxuICAgICAgICR7by50eXBlc2NyaXB0PyAncmVnaXN0ZXIoaWQ6c3RyaW5nLCB3OldNTEVsZW1lbnQpOiBNYWluJyA6ICdyZWdpc3RlcihpZCwgdyknfXtcblxuXG4gICAgICAgICBpZiAodGhpcy5pZHMuaGFzT3duUHJvcGVydHkoaWQpKVxuICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSBpZCBcXFxcJycgK2lkKydcXFxcJyBkZXRlY3RlZCEnKTtcblxuICAgICAgICAgdGhpcy5pZHNbaWRdID0gdztcbiAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgfVxuXG4gICAgICAgJHtvLnR5cGVzY3JpcHQ/ICdmaW5kQnlJZChpZDpzdHJpbmcpIDogV01MRWxlbWVudCAnIDogJ2ZpbmRCeUlkKGlkKSd9e1xuXG4gICAgICAgIHJldHVybiAodGhpcy5pZHNbaWRdKSA/IHRoaXMuaWRzW2lkXSA6IG51bGw7XG5cbiAgICAgICB9XG5cbiAgICAgICAke28udHlwZXNjcmlwdD8gJ2ludmFsaWRhdGUoKTogdm9pZCcgOiAnaW52YWxpZGF0ZSgpJ30ge1xuXG4gICAgICAgIHZhciBjaGlsZHM7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnRyZWUucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIHJlYWxGaXJzdENoaWxkO1xuICAgICAgICB2YXIgcmVhbEZpcnN0Q2hpbGRJbmRleDtcblxuICAgICAgICAgaWYgKHRoaXMudHJlZSA9PSBudWxsKVxuICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoJ0Nhbm5vdCBpbnZhbGlkYXRlIGEgdmlldyB0aGF0IGhhcyBub3QgYmVlbiByZW5kZXJlZCEnKTtcblxuICAgICAgICAgaWYgKHRoaXMudHJlZS5wYXJlbnROb2RlID09IG51bGwpXG4gICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcignQXR0ZW1wdCB0byBpbnZhbGlkYXRlIGEgdmlldyB0aGF0IGhhcyBub3QgYmVlbiBpbnNlcnRlZCB0byBET00hJyk7XG5cbiAgICAgICAgIGNoaWxkcyA9ICR7by50eXBlc2NyaXB0PyAnKDxFbGVtZW50PiB0aGlzLnRyZWUucGFyZW50Tm9kZSknIDogJ3RoaXMudHJlZS5wYXJlbnROb2RlJ30uY2hpbGRyZW47XG5cbiAgICAgICAgIC8vZm9yIHNvbWUgcmVhc29uIHRoZSByZWZlcmVuY2Ugc3RvcmVkIGRvZXMgbm90IGhhdmUgdGhlIGNvcnJlY3QgcGFyZW50IG5vZGUuXG4gICAgICAgICAvL3dlIGRvIHRoaXMgdG8gZ2V0IGEgJ2xpdmUnIHZlcnNpb24gb2YgdGhlIG5vZGUuXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgaWYgKGNoaWxkc1tpXSA9PT0gdGhpcy50cmVlKSB7XG4gICAgICAgICAgICAgcmVhbEZpcnN0Q2hpbGQgPSBjaGlsZHNbaV07XG4gICAgICAgICAgICAgcmVhbEZpcnN0Q2hpbGRJbmRleCA9IGk7XG4gICAgICAgICAgIH1cblxuICAgICAgICAgcGFyZW50LnJlcGxhY2VDaGlsZCh0aGlzLnJlbmRlcigpLCByZWFsRmlyc3RDaGlsZCk7XG5cbiAgICAgICB9XG5cbiAgICAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdGhpcy5pZHMgPSB7fTtcbiAgICAgICAgdGhpcy53aWRnZXRzLmZvckVhY2godyA9PiB3LnJlbW92ZWQoKSk7XG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLnRyZWUgPSB0aGlzLnRlbXBsYXRlLmNhbGwodGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5pZHNbJ3Jvb3QnXSA9ICh0aGlzLmlkc1sncm9vdCddKT8gdGhpcy5pZHNbJ3Jvb3QnXTp0aGlzLnRyZWU7XG4gICAgICAgIHRoaXMud2lkZ2V0cy5mb3JFYWNoKHcgPT4gdy5yZW5kZXJlZCgpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy50cmVlO1xuXG4gICAgICB9XG5cbiAgICAgfVxuXG4gICAgIGV4cG9ydCBkZWZhdWx0IE1haW47XG5cbiAgICBgKTtcblxuICB9XG5cbiAgY29tcGlsZShvKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIGFyZ3MgPSB0aGlzLnVzZXMubWFwKHAgPT4gcC5jb21waWxlKG8pKTtcblxuICAgIGFyZ3MgPSAoYXJncykgPyAnICwnICsgYXJncyA6IGFyZ3M7XG5cbiAgICB2YXIgc24gPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpLlxuICAgIGFkZCh0aGlzLmltcG9ydHMubWFwKGkgPT4gaS5jb21waWxlKG8pKSkuXG4gICAgYWRkKGBcXG5gKS5cbiAgICBhZGQodGhpcy5leHBvcnRzLm1hcChlID0+IGUuY29tcGlsZShvKSkpLlxuICAgIGFkZChgXFxuYCkuXG4gICAgYWRkKGBleHBvcnRgKS5cbiAgICBhZGQoYCB7IGApO1xuXG4gICAgdGhpcy5leHBvcnRzLmZvckVhY2goZSA9PiBzbi5hZGQoYCR7ZS5pZH1gKS5hZGQoYCxgKSk7XG5cbiAgICByZXR1cm4gc24uYWRkKGB9YCkuXG4gICAgYWRkKGA7YCkuXG4gICAgYWRkKGBcXG5gKS5cbiAgICBhZGQoJ2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtYWtlJykuXG4gICAgYWRkKGFyZ3MpLlxuICAgIGFkZCgneyByZXR1cm4gJykuXG4gICAgYWRkKHRoaXMucm9vdC5jb21waWxlKG8pKS5cbiAgICBhZGQoJzsgfScpO1xuXG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlXG5cbiJdfQ==