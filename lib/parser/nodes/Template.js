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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiYmFiZWwiLCJ0eXBlc2NyaXB0IiwiZXM1IiwianMiLCJvcHRzIiwidHJhbnNmb3JtIiwiT2JqZWN0IiwiYXNzaWduIiwic291cmNlTWFwcyIsInByZXNldHMiLCJwbHVnaW5zIiwiaGlnaGxpZ2h0Q29kZSIsImNvZGUiLCJwcmV0dHkiLCJUZW1wbGF0ZSIsImltcG9ydHMiLCJ1c2VzIiwiZXhwb3J0cyIsInJvb3QiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwic3RyIiwiYXJncyIsIm1hcCIsInAiLCJ0cmFuc3BpbGUiLCJqb2luIiwiaSIsImUiLCJwaXBlbGluZSIsIm91dHB1dCIsInJlZHVjZSIsImMiLCJwdXNoIiwicyIsImNvbXBpbGUiLCJzbiIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImFkZCIsImZvckVhY2giLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsSzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBLElBQU1DLGFBQWEsU0FBYkEsVUFBYTtBQUFBO0FBQUEsQ0FBbkI7O0FBVUEsSUFBTUMsTUFBTSxTQUFOQSxHQUFNLENBQUNDLEVBQUQ7QUFBQSxNQUFLQyxJQUFMLHVFQUFZLEVBQVo7QUFBQSxTQUNWSixNQUFNSyxTQUFOLENBQWdCRixFQUFoQixFQUFvQkcsT0FBT0MsTUFBUCxDQUFjO0FBQ2hDQyxnQkFBWSxJQURvQjtBQUVoQ0MsYUFBUyx5QkFGdUI7QUFHaENDLGFBQVMsZ0RBSHVCO0FBSWhDQyxtQkFBZTtBQUppQixHQUFkLEVBS2pCUCxJQUxpQixDQUFwQixFQUtVUSxJQU5BO0FBQUEsQ0FBWjs7QUFRQSxJQUFNQyxnQ0FBTjs7QUFFQTs7Ozs7Ozs7SUFPTUMsUTs7O0FBRUosb0JBQVlDLE9BQVosRUFBcUJDLElBQXJCLEVBQTJCQyxPQUEzQixFQUFvQ0MsSUFBcEMsRUFBMENDLFFBQTFDLEVBQW9EO0FBQUE7O0FBQUE7O0FBSWxELFVBQUtDLElBQUwsR0FBWSxVQUFaO0FBQ0EsVUFBS0wsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBVGtEO0FBV25EOzs7OzhCQUVTRSxDLEVBQUc7O0FBRVgsVUFBSUMsTUFBTSxFQUFWO0FBQ0EsVUFBSUMsT0FBTyxLQUFLUCxJQUFMLENBQVVRLEdBQVYsQ0FBYztBQUFBLGVBQUtDLEVBQUVDLFNBQUYsRUFBTDtBQUFBLE9BQWQsRUFBa0NDLElBQWxDLENBQXVDLEdBQXZDLENBQVg7O0FBRUFKLGFBQVFBLElBQUQsR0FBUyxPQUFPQSxJQUFoQixHQUF1QkEsSUFBOUI7O0FBRUEsVUFBSVIsVUFBVSxLQUFLQSxPQUFMLENBQWFTLEdBQWIsQ0FBaUI7QUFBQSxlQUFLSSxFQUFFRixTQUFGLEVBQUw7QUFBQSxPQUFqQixFQUFxQ0MsSUFBckMsQ0FBMEMsRUFBMUMsQ0FBZDtBQUNBLFVBQUlWLFVBQVUsS0FBS0EsT0FBTCxDQUFhTyxHQUFiLENBQWlCO0FBQUEsZUFBS0ssRUFBRUgsU0FBRixFQUFMO0FBQUEsT0FBakIsRUFBcUNDLElBQXJDLENBQTBDLEVBQTFDLENBQWQ7QUFDQSxVQUFJRyxXQUFXLEVBQWY7QUFDQSxVQUFJQyxTQUFTLFNBQVRBLE1BQVM7QUFBQSxlQUFRRCxTQUFTRSxNQUFULENBQWdCLFVBQUNQLENBQUQsRUFBSVEsQ0FBSjtBQUFBLGlCQUFVQSxFQUFFUixDQUFGLENBQVY7QUFBQSxTQUFoQixFQUFnQ2IsSUFBaEMsQ0FBUjtBQUFBLE9BQWI7O0FBRUEsVUFBSVMsRUFBRW5CLEdBQU4sRUFDRTRCLFNBQVNJLElBQVQsQ0FBZSxRQUFPYixFQUFFbkIsR0FBVCxNQUFpQixRQUFsQixHQUE4QjtBQUFBLGVBQUtBLElBQUlpQyxDQUFKLEVBQU9kLEVBQUVuQixHQUFULENBQUw7QUFBQSxPQUE5QixHQUFtREEsR0FBakU7O0FBRUYsVUFBSW1CLEVBQUVSLE1BQU4sRUFDRWlCLFNBQVNJLElBQVQsQ0FBY3JCLE1BQWQ7O0FBRUYsYUFBT2tCLE9BQVVoQixPQUFWLFlBQXdCLHdCQUFTTSxDQUFULENBQXhCLFlBQTBDSixPQUExQyxtQ0FFYUksRUFBRXBCLFVBQUYsR0FBYyxpQkFBZCxHQUFrQyxFQUYvQyxxQkFJRm9CLEVBQUVwQixVQUFILEdBQWdCQSxZQUFoQixHQUErQixFQUo1QixrUEFlbUMsS0FBS2lCLElBQUwsQ0FBVVEsU0FBVixFQWZuQyxrSUF5QkZMLEVBQUVwQixVQUFGLEdBQWMsbUNBQWQsR0FBb0QsY0F6QmxELDJlQUFQO0FBc0REOzs7NEJBRU9vQixDLEVBQUc7O0FBRVQsVUFBSUMsTUFBTSxFQUFWO0FBQ0EsVUFBSUMsT0FBTyxLQUFLUCxJQUFMLENBQVVRLEdBQVYsQ0FBYztBQUFBLGVBQUtDLEVBQUVXLE9BQUYsQ0FBVWYsQ0FBVixDQUFMO0FBQUEsT0FBZCxDQUFYOztBQUVBRSxhQUFRQSxJQUFELEdBQVMsT0FBT0EsSUFBaEIsR0FBdUJBLElBQTlCOztBQUVBLFVBQUljLEtBQUssS0FBS0MsVUFBTCxDQUFnQmpCLEVBQUVrQixRQUFsQixFQUE0QixFQUE1QixFQUNUQyxHQURTLENBQ0wsS0FBS3pCLE9BQUwsQ0FBYVMsR0FBYixDQUFpQjtBQUFBLGVBQUtJLEVBQUVRLE9BQUYsQ0FBVWYsQ0FBVixDQUFMO0FBQUEsT0FBakIsQ0FESyxFQUVUbUIsR0FGUyxPQUdUQSxHQUhTLENBR0wsS0FBS3ZCLE9BQUwsQ0FBYU8sR0FBYixDQUFpQjtBQUFBLGVBQUtLLEVBQUVPLE9BQUYsQ0FBVWYsQ0FBVixDQUFMO0FBQUEsT0FBakIsQ0FISyxFQUlUbUIsR0FKUyxPQUtUQSxHQUxTLFdBTVRBLEdBTlMsT0FBVDs7QUFRQSxXQUFLdkIsT0FBTCxDQUFhd0IsT0FBYixDQUFxQjtBQUFBLGVBQUtKLEdBQUdHLEdBQUgsTUFBVVgsRUFBRWEsRUFBWixFQUFrQkYsR0FBbEIsS0FBTDtBQUFBLE9BQXJCOztBQUVBLGFBQU9ILEdBQUdHLEdBQUgsTUFDUEEsR0FETyxNQUVQQSxHQUZPLE9BR1BBLEdBSE8sQ0FHSCwrQkFIRyxFQUlQQSxHQUpPLENBSUhqQixJQUpHLEVBS1BpQixHQUxPLENBS0gsV0FMRyxFQU1QQSxHQU5PLENBTUgsS0FBS3RCLElBQUwsQ0FBVWtCLE9BQVYsQ0FBa0JmLENBQWxCLENBTkcsRUFPUG1CLEdBUE8sQ0FPSCxLQVBHLENBQVA7QUFVRDs7Ozs7O2tCQUlZMUIsUSIsImZpbGUiOiJUZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgcHJlYW1ibGUgZnJvbSAnLi4vcHJlYW1ibGUnO1xuaW1wb3J0ICogYXMgYmFiZWwgZnJvbSAnYmFiZWwtY29yZSc7XG5pbXBvcnQgZXMyMDE1IGZyb20gJ2JhYmVsLXByZXNldC1lczIwMTUnO1xuaW1wb3J0IGV4cG9ydHMgZnJvbSAnYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1leHBvcnQtZXh0ZW5zaW9ucyc7XG5pbXBvcnQge1xuICBqc19iZWF1dGlmeVxufSBmcm9tICdqcy1iZWF1dGlmeSc7XG5cbmNvbnN0IHR5cGVzY3JpcHQgPSAoKSA9PiBgXG5cbiAgaWRzOiB7W2tleTpzdHJpbmddOiBXTUxFbGVtZW50fTtcbiAgd2lkZ2V0czogV2lkZ2V0W107XG4gIHRyZWU6IEhUTUxFbGVtZW50O1xuICBjb250ZXh0OiBvYmplY3Q7XG4gIHRlbXBsYXRlOiAoKT0+SFRNTEVsZW1lbnQ7XG5cbmA7XG5cbmNvbnN0IGVzNSA9IChqcywgb3B0cyA9IHt9KSA9PlxuICBiYWJlbC50cmFuc2Zvcm0oanMsIE9iamVjdC5hc3NpZ24oe1xuICAgIHNvdXJjZU1hcHM6IHRydWUsXG4gICAgcHJlc2V0czogW2VzMjAxNV0sXG4gICAgcGx1Z2luczogW2V4cG9ydHNdLFxuICAgIGhpZ2hsaWdodENvZGU6IGZhbHNlXG4gIH0sIG9wdHMpKS5jb2RlO1xuXG5jb25zdCBwcmV0dHkgPSBqc19iZWF1dGlmeTtcblxuLyoqXG4gKiBUZW1wbGF0ZVxuICogQHBhcmFtIHthcnJheTxJbXBvcnQ+fSBpbXBvcnRzXG4gKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IHVzZXNcbiAqIEBwYXJhbSB7VGFnfSByb290XG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBUZW1wbGF0ZSBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKGltcG9ydHMsIHVzZXMsIGV4cG9ydHMsIHJvb3QsIGxvY2F0aW9uKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gJ3RlbXBsYXRlJztcbiAgICB0aGlzLmltcG9ydHMgPSBpbXBvcnRzO1xuICAgIHRoaXMudXNlcyA9IHVzZXM7XG4gICAgdGhpcy5leHBvcnRzID0gZXhwb3J0cztcbiAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICB9XG5cbiAgdHJhbnNwaWxlKG8pIHtcblxuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgYXJncyA9IHRoaXMudXNlcy5tYXAocCA9PiBwLnRyYW5zcGlsZSgpKS5qb2luKCcsJyk7XG5cbiAgICBhcmdzID0gKGFyZ3MpID8gJyAsJyArIGFyZ3MgOiBhcmdzO1xuXG4gICAgbGV0IGltcG9ydHMgPSB0aGlzLmltcG9ydHMubWFwKGkgPT4gaS50cmFuc3BpbGUoKSkuam9pbignJyk7XG4gICAgbGV0IGV4cG9ydHMgPSB0aGlzLmV4cG9ydHMubWFwKGUgPT4gZS50cmFuc3BpbGUoKSkuam9pbignJyk7XG4gICAgbGV0IHBpcGVsaW5lID0gW107XG4gICAgbGV0IG91dHB1dCA9IGNvZGUgPT4gcGlwZWxpbmUucmVkdWNlKChwLCBjKSA9PiBjKHApLCBjb2RlKTtcblxuICAgIGlmIChvLmVzNSlcbiAgICAgIHBpcGVsaW5lLnB1c2goKHR5cGVvZiBvLmVzNSA9PT0gJ29iamVjdCcpID8gcyA9PiBlczUocywgby5lczUpIDogZXM1KTtcblxuICAgIGlmIChvLnByZXR0eSlcbiAgICAgIHBpcGVsaW5lLnB1c2gocHJldHR5KTtcblxuICAgIHJldHVybiBvdXRwdXQoYCR7aW1wb3J0c30gXFxuICR7cHJlYW1ibGUobyl9IFxcbiAke2V4cG9ydHN9XG5cbiAgICBleHBvcnQgY2xhc3MgTWFpbiAke28udHlwZXNjcmlwdD8gJ2ltcGxlbWVudHMgVmlldycgOiAnJ317XG5cbiAgICAgICR7KG8udHlwZXNjcmlwdCk/IHR5cGVzY3JpcHQoKSA6ICcnfVxuXG4gICAgICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuXG4gICAgICAgICAgbGV0IHZpZXcgPSB0aGlzO1xuXG4gICAgICAgICAgdGhpcy5pZHMgPSB7fTtcbiAgICAgICAgICB0aGlzLndpZGdldHMgPSBbXTtcblxuICAgICAgICAgIHRoaXMudHJlZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gZnVuY3Rpb24oKXtyZXR1cm4gJHt0aGlzLnJvb3QudHJhbnNwaWxlKCl9fTtcblxuICAgICAgIH1cblxuICAgICAgIHN0YXRpYyByZW5kZXIoY29udGV4dCkge1xuXG4gICAgICAgICByZXR1cm4gKG5ldyBNYWluKGNvbnRleHQpKS5yZW5kZXIoKTtcblxuICAgICAgIH1cblxuICAgICAgICR7by50eXBlc2NyaXB0PyAnZmluZEJ5SWQoaWQ6c3RyaW5nKSA6IFdNTEVsZW1lbnQgJyA6ICdmaW5kQnlJZChpZCknfXtcblxuICAgICAgICByZXR1cm4gKHRoaXMuaWRzW2lkXSkgPyB0aGlzLmlkc1tpZF0gOiBudWxsO1xuXG4gICAgICAgfVxuXG4gICAgICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciB0cmVlID0gbnVsbDtcblxuICAgICAgICB0aGlzLmlkcyA9IHt9O1xuICAgICAgICB0aGlzLndpZGdldHMuZm9yRWFjaCh3ID0+IHcucmVtb3ZlZCgpKTtcbiAgICAgICAgdGhpcy53aWRnZXRzID0gW107XG5cbiAgICAgICAgdHJlZSA9IHRoaXMudGVtcGxhdGUuY2FsbCh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuaWRzWydyb290J10gPSAodGhpcy5pZHNbJ3Jvb3QnXSk/IHRoaXMuaWRzWydyb290J106dHJlZTtcbiAgICAgICAgdGhpcy53aWRnZXRzLmZvckVhY2godyA9PiB3LnJlbmRlcmVkKCkpO1xuXG4gICAgICAgIHJldHVybiB0cmVlO1xuXG4gICAgICB9XG5cbiAgICAgfVxuXG4gICAgIGV4cG9ydCBkZWZhdWx0IE1haW47XG5cbiAgICBgKTtcblxuICB9XG5cbiAgY29tcGlsZShvKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIGFyZ3MgPSB0aGlzLnVzZXMubWFwKHAgPT4gcC5jb21waWxlKG8pKTtcblxuICAgIGFyZ3MgPSAoYXJncykgPyAnICwnICsgYXJncyA6IGFyZ3M7XG5cbiAgICB2YXIgc24gPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpLlxuICAgIGFkZCh0aGlzLmltcG9ydHMubWFwKGkgPT4gaS5jb21waWxlKG8pKSkuXG4gICAgYWRkKGBcXG5gKS5cbiAgICBhZGQodGhpcy5leHBvcnRzLm1hcChlID0+IGUuY29tcGlsZShvKSkpLlxuICAgIGFkZChgXFxuYCkuXG4gICAgYWRkKGBleHBvcnRgKS5cbiAgICBhZGQoYCB7IGApO1xuXG4gICAgdGhpcy5leHBvcnRzLmZvckVhY2goZSA9PiBzbi5hZGQoYCR7ZS5pZH1gKS5hZGQoYCxgKSk7XG5cbiAgICByZXR1cm4gc24uYWRkKGB9YCkuXG4gICAgYWRkKGA7YCkuXG4gICAgYWRkKGBcXG5gKS5cbiAgICBhZGQoJ2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtYWtlJykuXG4gICAgYWRkKGFyZ3MpLlxuICAgIGFkZCgneyByZXR1cm4gJykuXG4gICAgYWRkKHRoaXMucm9vdC5jb21waWxlKG8pKS5cbiAgICBhZGQoJzsgfScpO1xuXG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlXG5cbiJdfQ==