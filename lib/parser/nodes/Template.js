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
    value: function transpile() {

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

      return imports + ' \n ' + (0, _preamble2.default)() + ' \n ' + exports + '\n    export class Main {\n\n       constructor(context) {\n\n          let view = this;\n\n          this.ids = {};\n          this.widgets = [];\n\n          this.tree = null;\n          this.context = context;\n          this.template = function(){return ' + this.root.transpile() + '};\n\n       }\n\n       static render(context) {\n\n         return (new Main(context)).render();\n\n       }\n\n       findById(id) {\n\n        return (this.ids[id]) ? this.ids[id] : null;\n\n       }\n\n       render() {\n\n        var tree = null;\n\n        this.ids = {};\n        this.widgets.forEach(w => w.removed());\n        this.widgets = [];\n\n        tree = this.template.call(this.context);\n        this.ids.root = (this.ids.root)? this.ids.root:tree;\n        this.widgets.forEach(w => w.rendered());\n\n        return tree;\n\n      }\n\n     }\n\n     export default Main;\n\n    ';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiVGVtcGxhdGUiLCJpbXBvcnRzIiwidXNlcyIsImV4cG9ydHMiLCJyb290IiwibG9jYXRpb24iLCJ0eXBlIiwic3RyIiwiYXJncyIsIm1hcCIsInAiLCJ0cmFuc3BpbGUiLCJqb2luIiwiaSIsImUiLCJvIiwiY29tcGlsZSIsInNuIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiZm9yRWFjaCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUtBOzs7Ozs7O0lBT01BLFE7OztBQUVKLG9CQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsT0FBM0IsRUFBb0NDLElBQXBDLEVBQTBDQyxRQUExQyxFQUFvRDtBQUFBOztBQUFBOztBQUlsRCxVQUFLQyxJQUFMLEdBQVksVUFBWjtBQUNBLFVBQUtMLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVRrRDtBQVduRDs7OztnQ0FFVzs7QUFFVixVQUFJRSxNQUFNLEVBQVY7QUFDQSxVQUFJQyxPQUFPLEtBQUtOLElBQUwsQ0FBVU8sR0FBVixDQUFjO0FBQUEsZUFBS0MsRUFBRUMsU0FBRixFQUFMO0FBQUEsT0FBZCxFQUFrQ0MsSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBWDs7QUFFQUosYUFBUUEsSUFBRCxHQUFTLE9BQU9BLElBQWhCLEdBQXVCQSxJQUE5Qjs7QUFFQSxVQUFJUCxVQUFVLEtBQUtBLE9BQUwsQ0FBYVEsR0FBYixDQUFpQjtBQUFBLGVBQUtJLEVBQUVGLFNBQUYsRUFBTDtBQUFBLE9BQWpCLENBQWQ7QUFDQSxVQUFJUixVQUFVLEtBQUtBLE9BQUwsQ0FBYU0sR0FBYixDQUFpQjtBQUFBLGVBQUtLLEVBQUVILFNBQUYsRUFBTDtBQUFBLE9BQWpCLENBQWQ7O0FBRUEsYUFBVVYsT0FBVixZQUF3Qix5QkFBeEIsWUFBeUNFLE9BQXpDLDBRQVkwQyxLQUFLQyxJQUFMLENBQVVPLFNBQVYsRUFaMUM7QUFrREQ7Ozs0QkFFT0ksQyxFQUFHOztBQUVULFVBQUlSLE1BQU0sRUFBVjtBQUNBLFVBQUlDLE9BQU8sS0FBS04sSUFBTCxDQUFVTyxHQUFWLENBQWM7QUFBQSxlQUFLQyxFQUFFTSxPQUFGLENBQVVELENBQVYsQ0FBTDtBQUFBLE9BQWQsQ0FBWDs7QUFFQVAsYUFBUUEsSUFBRCxHQUFTLE9BQU9BLElBQWhCLEdBQXVCQSxJQUE5Qjs7QUFFQSxVQUFJUyxLQUFLLEtBQUtDLFVBQUwsQ0FBZ0JILEVBQUVJLFFBQWxCLEVBQTRCLEVBQTVCLEVBQ1RDLEdBRFMsQ0FDTCxLQUFLbkIsT0FBTCxDQUFhUSxHQUFiLENBQWlCO0FBQUEsZUFBS0ksRUFBRUcsT0FBRixDQUFVRCxDQUFWLENBQUw7QUFBQSxPQUFqQixDQURLLEVBRVRLLEdBRlMsT0FHVEEsR0FIUyxDQUdMLEtBQUtqQixPQUFMLENBQWFNLEdBQWIsQ0FBaUI7QUFBQSxlQUFLSyxFQUFFRSxPQUFGLENBQVVELENBQVYsQ0FBTDtBQUFBLE9BQWpCLENBSEssRUFJVEssR0FKUyxPQUtUQSxHQUxTLFdBTVRBLEdBTlMsT0FBVDs7QUFRQSxXQUFLakIsT0FBTCxDQUFha0IsT0FBYixDQUFxQjtBQUFBLGVBQUtKLEdBQUdHLEdBQUgsTUFBVU4sRUFBRVEsRUFBWixFQUFrQkYsR0FBbEIsS0FBTDtBQUFBLE9BQXJCOztBQUVBLGFBQU9ILEdBQUdHLEdBQUgsTUFDUEEsR0FETyxNQUVQQSxHQUZPLE9BR1BBLEdBSE8sQ0FHSCwrQkFIRyxFQUlQQSxHQUpPLENBSUhaLElBSkcsRUFLUFksR0FMTyxDQUtILFdBTEcsRUFNUEEsR0FOTyxDQU1ILEtBQUtoQixJQUFMLENBQVVZLE9BQVYsQ0FBa0JELENBQWxCLENBTkcsRUFPUEssR0FQTyxDQU9ILEtBUEcsQ0FBUDtBQVVEOzs7Ozs7a0JBSVlwQixRIiwiZmlsZSI6IlRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBwcmVhbWJsZSBmcm9tICcuLi9wcmVhbWJsZSc7XG5pbXBvcnQge1xuICBqc19iZWF1dGlmeVxufSBmcm9tICdqcy1iZWF1dGlmeSc7XG5cblxuLyoqXG4gKiBUZW1wbGF0ZVxuICogQHBhcmFtIHthcnJheTxJbXBvcnQ+fSBpbXBvcnRzXG4gKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IHVzZXNcbiAqIEBwYXJhbSB7VGFnfSByb290XG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBUZW1wbGF0ZSBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKGltcG9ydHMsIHVzZXMsIGV4cG9ydHMsIHJvb3QsIGxvY2F0aW9uKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gJ3RlbXBsYXRlJztcbiAgICB0aGlzLmltcG9ydHMgPSBpbXBvcnRzO1xuICAgIHRoaXMudXNlcyA9IHVzZXM7XG4gICAgdGhpcy5leHBvcnRzID0gZXhwb3J0cztcbiAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICB9XG5cbiAgdHJhbnNwaWxlKCkge1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBhcmdzID0gdGhpcy51c2VzLm1hcChwID0+IHAudHJhbnNwaWxlKCkpLmpvaW4oJywnKTtcblxuICAgIGFyZ3MgPSAoYXJncykgPyAnICwnICsgYXJncyA6IGFyZ3M7XG5cbiAgICBsZXQgaW1wb3J0cyA9IHRoaXMuaW1wb3J0cy5tYXAoaSA9PiBpLnRyYW5zcGlsZSgpKTtcbiAgICBsZXQgZXhwb3J0cyA9IHRoaXMuZXhwb3J0cy5tYXAoZSA9PiBlLnRyYW5zcGlsZSgpKTtcblxuICAgIHJldHVybiBgJHtpbXBvcnRzfSBcXG4gJHtwcmVhbWJsZSgpfSBcXG4gJHtleHBvcnRzfVxuICAgIGV4cG9ydCBjbGFzcyBNYWluIHtcblxuICAgICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcblxuICAgICAgICAgIGxldCB2aWV3ID0gdGhpcztcblxuICAgICAgICAgIHRoaXMuaWRzID0ge307XG4gICAgICAgICAgdGhpcy53aWRnZXRzID0gW107XG5cbiAgICAgICAgICB0aGlzLnRyZWUgPSBudWxsO1xuICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCl7cmV0dXJuICR7dGhpcy5yb290LnRyYW5zcGlsZSgpfX07XG5cbiAgICAgICB9XG5cbiAgICAgICBzdGF0aWMgcmVuZGVyKGNvbnRleHQpIHtcblxuICAgICAgICAgcmV0dXJuIChuZXcgTWFpbihjb250ZXh0KSkucmVuZGVyKCk7XG5cbiAgICAgICB9XG5cbiAgICAgICBmaW5kQnlJZChpZCkge1xuXG4gICAgICAgIHJldHVybiAodGhpcy5pZHNbaWRdKSA/IHRoaXMuaWRzW2lkXSA6IG51bGw7XG5cbiAgICAgICB9XG5cbiAgICAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHRyZWUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuaWRzID0ge307XG4gICAgICAgIHRoaXMud2lkZ2V0cy5mb3JFYWNoKHcgPT4gdy5yZW1vdmVkKCkpO1xuICAgICAgICB0aGlzLndpZGdldHMgPSBbXTtcblxuICAgICAgICB0cmVlID0gdGhpcy50ZW1wbGF0ZS5jYWxsKHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMuaWRzLnJvb3QgPSAodGhpcy5pZHMucm9vdCk/IHRoaXMuaWRzLnJvb3Q6dHJlZTtcbiAgICAgICAgdGhpcy53aWRnZXRzLmZvckVhY2godyA9PiB3LnJlbmRlcmVkKCkpO1xuXG4gICAgICAgIHJldHVybiB0cmVlO1xuXG4gICAgICB9XG5cbiAgICAgfVxuXG4gICAgIGV4cG9ydCBkZWZhdWx0IE1haW47XG5cbiAgICBgO1xuXG4gIH1cblxuICBjb21waWxlKG8pIHtcblxuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgYXJncyA9IHRoaXMudXNlcy5tYXAocCA9PiBwLmNvbXBpbGUobykpO1xuXG4gICAgYXJncyA9IChhcmdzKSA/ICcgLCcgKyBhcmdzIDogYXJncztcblxuICAgIHZhciBzbiA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJykuXG4gICAgYWRkKHRoaXMuaW1wb3J0cy5tYXAoaSA9PiBpLmNvbXBpbGUobykpKS5cbiAgICBhZGQoYFxcbmApLlxuICAgIGFkZCh0aGlzLmV4cG9ydHMubWFwKGUgPT4gZS5jb21waWxlKG8pKSkuXG4gICAgYWRkKGBcXG5gKS5cbiAgICBhZGQoYGV4cG9ydGApLlxuICAgIGFkZChgIHsgYCk7XG5cbiAgICB0aGlzLmV4cG9ydHMuZm9yRWFjaChlID0+IHNuLmFkZChgJHtlLmlkfWApLmFkZChgLGApKTtcblxuICAgIHJldHVybiBzbi5hZGQoYH1gKS5cbiAgICBhZGQoYDtgKS5cbiAgICBhZGQoYFxcbmApLlxuICAgIGFkZCgnZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1ha2UnKS5cbiAgICBhZGQoYXJncykuXG4gICAgYWRkKCd7IHJldHVybiAnKS5cbiAgICBhZGQodGhpcy5yb290LmNvbXBpbGUobykpLlxuICAgIGFkZCgnOyB9Jyk7XG5cblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGVcblxuIl19