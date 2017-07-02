'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _preamble = require('../preamble');

var _preamble2 = _interopRequireDefault(_preamble);

var _jsBeautify = require('js-beautify');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var typescript = function typescript() {
  return '\n\n  ids: object;\n  widgets: View[];\n  tree: HTMLElement;\n  context: object;\n  template: ()=>HTMLElement;\n\n';
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
      });
      var exports = this.exports.map(function (e) {
        return e.transpile();
      });

      return imports + ' \n ' + (0, _preamble2.default)() + ' \n ' + exports + '\n    export class Main {\n\n      ' + (o.typescript ? typescript() : '') + '\n\n       constructor(context) {\n\n          let view = this;\n\n          this.ids = {};\n          this.widgets = [];\n\n          this.tree = null;\n          this.context = context;\n          this.template = function(){return ' + this.root.transpile() + '};\n\n       }\n\n       static render(context) {\n\n         return (new Main(context)).render();\n\n       }\n\n       findById(id) {\n\n        return (this.ids[id]) ? this.ids[id] : null;\n\n       }\n\n       render() {\n\n        var tree = null;\n\n        this.ids = {};\n        this.widgets.forEach(w => w.removed());\n        this.widgets = [];\n\n        tree = this.template.call(this.context);\n        this.ids.root = (this.ids.root)? this.ids.root:tree;\n        this.widgets.forEach(w => w.rendered());\n\n        return tree;\n\n      }\n\n     }\n\n     export default Main;\n\n    ';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGVtcGxhdGUuanMiXSwibmFtZXMiOlsidHlwZXNjcmlwdCIsIlRlbXBsYXRlIiwiaW1wb3J0cyIsInVzZXMiLCJleHBvcnRzIiwicm9vdCIsImxvY2F0aW9uIiwidHlwZSIsIm8iLCJzdHIiLCJhcmdzIiwibWFwIiwicCIsInRyYW5zcGlsZSIsImpvaW4iLCJpIiwiZSIsImNvbXBpbGUiLCJzbiIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImFkZCIsImZvckVhY2giLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFJQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWE7QUFBQTtBQUFBLENBQW5COztBQVVBOzs7Ozs7OztJQU9NQyxROzs7QUFFSixvQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLE9BQTNCLEVBQW9DQyxJQUFwQyxFQUEwQ0MsUUFBMUMsRUFBb0Q7QUFBQTs7QUFBQTs7QUFJbEQsVUFBS0MsSUFBTCxHQUFZLFVBQVo7QUFDQSxVQUFLTCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFUa0Q7QUFXbkQ7Ozs7OEJBRVNFLEMsRUFBRzs7QUFFWCxVQUFJQyxNQUFNLEVBQVY7QUFDQSxVQUFJQyxPQUFPLEtBQUtQLElBQUwsQ0FBVVEsR0FBVixDQUFjO0FBQUEsZUFBS0MsRUFBRUMsU0FBRixFQUFMO0FBQUEsT0FBZCxFQUFrQ0MsSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBWDs7QUFFQUosYUFBUUEsSUFBRCxHQUFTLE9BQU9BLElBQWhCLEdBQXVCQSxJQUE5Qjs7QUFFQSxVQUFJUixVQUFVLEtBQUtBLE9BQUwsQ0FBYVMsR0FBYixDQUFpQjtBQUFBLGVBQUtJLEVBQUVGLFNBQUYsRUFBTDtBQUFBLE9BQWpCLENBQWQ7QUFDQSxVQUFJVCxVQUFVLEtBQUtBLE9BQUwsQ0FBYU8sR0FBYixDQUFpQjtBQUFBLGVBQUtLLEVBQUVILFNBQUYsRUFBTDtBQUFBLE9BQWpCLENBQWQ7O0FBRUEsYUFBVVgsT0FBVixZQUF3Qix5QkFBeEIsWUFBeUNFLE9BQXpDLDRDQUdLSSxFQUFFUixVQUFILEdBQWdCQSxZQUFoQixHQUErQixFQUhuQyxrUEFjMEMsS0FBS0ssSUFBTCxDQUFVUSxTQUFWLEVBZDFDO0FBb0REOzs7NEJBRU9MLEMsRUFBRzs7QUFFVCxVQUFJQyxNQUFNLEVBQVY7QUFDQSxVQUFJQyxPQUFPLEtBQUtQLElBQUwsQ0FBVVEsR0FBVixDQUFjO0FBQUEsZUFBS0MsRUFBRUssT0FBRixDQUFVVCxDQUFWLENBQUw7QUFBQSxPQUFkLENBQVg7O0FBRUFFLGFBQVFBLElBQUQsR0FBUyxPQUFPQSxJQUFoQixHQUF1QkEsSUFBOUI7O0FBRUEsVUFBSVEsS0FBSyxLQUFLQyxVQUFMLENBQWdCWCxFQUFFWSxRQUFsQixFQUE0QixFQUE1QixFQUNUQyxHQURTLENBQ0wsS0FBS25CLE9BQUwsQ0FBYVMsR0FBYixDQUFpQjtBQUFBLGVBQUtJLEVBQUVFLE9BQUYsQ0FBVVQsQ0FBVixDQUFMO0FBQUEsT0FBakIsQ0FESyxFQUVUYSxHQUZTLE9BR1RBLEdBSFMsQ0FHTCxLQUFLakIsT0FBTCxDQUFhTyxHQUFiLENBQWlCO0FBQUEsZUFBS0ssRUFBRUMsT0FBRixDQUFVVCxDQUFWLENBQUw7QUFBQSxPQUFqQixDQUhLLEVBSVRhLEdBSlMsT0FLVEEsR0FMUyxXQU1UQSxHQU5TLE9BQVQ7O0FBUUEsV0FBS2pCLE9BQUwsQ0FBYWtCLE9BQWIsQ0FBcUI7QUFBQSxlQUFLSixHQUFHRyxHQUFILE1BQVVMLEVBQUVPLEVBQVosRUFBa0JGLEdBQWxCLEtBQUw7QUFBQSxPQUFyQjs7QUFFQSxhQUFPSCxHQUFHRyxHQUFILE1BQ1BBLEdBRE8sTUFFUEEsR0FGTyxPQUdQQSxHQUhPLENBR0gsK0JBSEcsRUFJUEEsR0FKTyxDQUlIWCxJQUpHLEVBS1BXLEdBTE8sQ0FLSCxXQUxHLEVBTVBBLEdBTk8sQ0FNSCxLQUFLaEIsSUFBTCxDQUFVWSxPQUFWLENBQWtCVCxDQUFsQixDQU5HLEVBT1BhLEdBUE8sQ0FPSCxLQVBHLENBQVA7QUFVRDs7Ozs7O2tCQUlZcEIsUSIsImZpbGUiOiJUZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgcHJlYW1ibGUgZnJvbSAnLi4vcHJlYW1ibGUnO1xuaW1wb3J0IHtcbiAganNfYmVhdXRpZnlcbn0gZnJvbSAnanMtYmVhdXRpZnknO1xuXG5jb25zdCB0eXBlc2NyaXB0ID0gKCkgPT4gYFxuXG4gIGlkczogb2JqZWN0O1xuICB3aWRnZXRzOiBWaWV3W107XG4gIHRyZWU6IEhUTUxFbGVtZW50O1xuICBjb250ZXh0OiBvYmplY3Q7XG4gIHRlbXBsYXRlOiAoKT0+SFRNTEVsZW1lbnQ7XG5cbmA7XG5cbi8qKlxuICogVGVtcGxhdGVcbiAqIEBwYXJhbSB7YXJyYXk8SW1wb3J0Pn0gaW1wb3J0c1xuICogQHBhcmFtIHthcnJheTxzdHJpbmc+fSB1c2VzXG4gKiBAcGFyYW0ge1RhZ30gcm9vdFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgVGVtcGxhdGUgZXh0ZW5kcyBOb2RlIHtcblxuICBjb25zdHJ1Y3RvcihpbXBvcnRzLCB1c2VzLCBleHBvcnRzLCByb290LCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZSA9ICd0ZW1wbGF0ZSc7XG4gICAgdGhpcy5pbXBvcnRzID0gaW1wb3J0cztcbiAgICB0aGlzLnVzZXMgPSB1c2VzO1xuICAgIHRoaXMuZXhwb3J0cyA9IGV4cG9ydHM7XG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgfVxuXG4gIHRyYW5zcGlsZShvKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIGFyZ3MgPSB0aGlzLnVzZXMubWFwKHAgPT4gcC50cmFuc3BpbGUoKSkuam9pbignLCcpO1xuXG4gICAgYXJncyA9IChhcmdzKSA/ICcgLCcgKyBhcmdzIDogYXJncztcblxuICAgIGxldCBpbXBvcnRzID0gdGhpcy5pbXBvcnRzLm1hcChpID0+IGkudHJhbnNwaWxlKCkpO1xuICAgIGxldCBleHBvcnRzID0gdGhpcy5leHBvcnRzLm1hcChlID0+IGUudHJhbnNwaWxlKCkpO1xuXG4gICAgcmV0dXJuIGAke2ltcG9ydHN9IFxcbiAke3ByZWFtYmxlKCl9IFxcbiAke2V4cG9ydHN9XG4gICAgZXhwb3J0IGNsYXNzIE1haW4ge1xuXG4gICAgICAkeyhvLnR5cGVzY3JpcHQpPyB0eXBlc2NyaXB0KCkgOiAnJ31cblxuICAgICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcblxuICAgICAgICAgIGxldCB2aWV3ID0gdGhpcztcblxuICAgICAgICAgIHRoaXMuaWRzID0ge307XG4gICAgICAgICAgdGhpcy53aWRnZXRzID0gW107XG5cbiAgICAgICAgICB0aGlzLnRyZWUgPSBudWxsO1xuICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCl7cmV0dXJuICR7dGhpcy5yb290LnRyYW5zcGlsZSgpfX07XG5cbiAgICAgICB9XG5cbiAgICAgICBzdGF0aWMgcmVuZGVyKGNvbnRleHQpIHtcblxuICAgICAgICAgcmV0dXJuIChuZXcgTWFpbihjb250ZXh0KSkucmVuZGVyKCk7XG5cbiAgICAgICB9XG5cbiAgICAgICBmaW5kQnlJZChpZCkge1xuXG4gICAgICAgIHJldHVybiAodGhpcy5pZHNbaWRdKSA/IHRoaXMuaWRzW2lkXSA6IG51bGw7XG5cbiAgICAgICB9XG5cbiAgICAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHRyZWUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuaWRzID0ge307XG4gICAgICAgIHRoaXMud2lkZ2V0cy5mb3JFYWNoKHcgPT4gdy5yZW1vdmVkKCkpO1xuICAgICAgICB0aGlzLndpZGdldHMgPSBbXTtcblxuICAgICAgICB0cmVlID0gdGhpcy50ZW1wbGF0ZS5jYWxsKHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMuaWRzLnJvb3QgPSAodGhpcy5pZHMucm9vdCk/IHRoaXMuaWRzLnJvb3Q6dHJlZTtcbiAgICAgICAgdGhpcy53aWRnZXRzLmZvckVhY2godyA9PiB3LnJlbmRlcmVkKCkpO1xuXG4gICAgICAgIHJldHVybiB0cmVlO1xuXG4gICAgICB9XG5cbiAgICAgfVxuXG4gICAgIGV4cG9ydCBkZWZhdWx0IE1haW47XG5cbiAgICBgO1xuXG4gIH1cblxuICBjb21waWxlKG8pIHtcblxuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgYXJncyA9IHRoaXMudXNlcy5tYXAocCA9PiBwLmNvbXBpbGUobykpO1xuXG4gICAgYXJncyA9IChhcmdzKSA/ICcgLCcgKyBhcmdzIDogYXJncztcblxuICAgIHZhciBzbiA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJykuXG4gICAgYWRkKHRoaXMuaW1wb3J0cy5tYXAoaSA9PiBpLmNvbXBpbGUobykpKS5cbiAgICBhZGQoYFxcbmApLlxuICAgIGFkZCh0aGlzLmV4cG9ydHMubWFwKGUgPT4gZS5jb21waWxlKG8pKSkuXG4gICAgYWRkKGBcXG5gKS5cbiAgICBhZGQoYGV4cG9ydGApLlxuICAgIGFkZChgIHsgYCk7XG5cbiAgICB0aGlzLmV4cG9ydHMuZm9yRWFjaChlID0+IHNuLmFkZChgJHtlLmlkfWApLmFkZChgLGApKTtcblxuICAgIHJldHVybiBzbi5hZGQoYH1gKS5cbiAgICBhZGQoYDtgKS5cbiAgICBhZGQoYFxcbmApLlxuICAgIGFkZCgnZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1ha2UnKS5cbiAgICBhZGQoYXJncykuXG4gICAgYWRkKCd7IHJldHVybiAnKS5cbiAgICBhZGQodGhpcy5yb290LmNvbXBpbGUobykpLlxuICAgIGFkZCgnOyB9Jyk7XG5cblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGVcblxuIl19