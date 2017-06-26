'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

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

      this.imports.forEach(function (i) {
        return str = str + i.transpile();
      });
      str = str + '\n';
      this.exports.forEach(function (e) {
        return str = str + e.transpile();
      });

      return str + '\nexport default function (make' + args + ') { return ' + this.root.transpile() + '; }';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiVGVtcGxhdGUiLCJpbXBvcnRzIiwidXNlcyIsImV4cG9ydHMiLCJyb290IiwibG9jYXRpb24iLCJ0eXBlIiwic3RyIiwiYXJncyIsIm1hcCIsInAiLCJ0cmFuc3BpbGUiLCJqb2luIiwiZm9yRWFjaCIsImkiLCJlIiwibyIsImNvbXBpbGUiLCJzbiIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImFkZCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU9NQSxROzs7QUFFSixvQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLE9BQTNCLEVBQW9DQyxJQUFwQyxFQUEwQ0MsUUFBMUMsRUFBb0Q7QUFBQTs7QUFBQTs7QUFJbEQsVUFBS0MsSUFBTCxHQUFZLFVBQVo7QUFDQSxVQUFLTCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFUa0Q7QUFXbkQ7Ozs7Z0NBRVc7O0FBRVYsVUFBSUUsTUFBTSxFQUFWO0FBQ0EsVUFBSUMsT0FBTyxLQUFLTixJQUFMLENBQVVPLEdBQVYsQ0FBYztBQUFBLGVBQUtDLEVBQUVDLFNBQUYsRUFBTDtBQUFBLE9BQWQsRUFBa0NDLElBQWxDLENBQXVDLEdBQXZDLENBQVg7O0FBRUFKLGFBQVFBLElBQUQsR0FBUyxPQUFPQSxJQUFoQixHQUF1QkEsSUFBOUI7O0FBRUEsV0FBS1AsT0FBTCxDQUFhWSxPQUFiLENBQXFCO0FBQUEsZUFBS04sTUFBTUEsTUFBTU8sRUFBRUgsU0FBRixFQUFqQjtBQUFBLE9BQXJCO0FBQ0FKLFlBQVNBLEdBQVQ7QUFDQSxXQUFLSixPQUFMLENBQWFVLE9BQWIsQ0FBcUI7QUFBQSxlQUFLTixNQUFNQSxNQUFNUSxFQUFFSixTQUFGLEVBQWpCO0FBQUEsT0FBckI7O0FBRUEsYUFBVUosR0FBVix1Q0FBK0NDLElBQS9DLG1CQUFpRSxLQUFLSixJQUFMLENBQVVPLFNBQVYsRUFBakU7QUFFRDs7OzRCQUVPSyxDLEVBQUc7O0FBRVQsVUFBSVQsTUFBTSxFQUFWO0FBQ0EsVUFBSUMsT0FBTyxLQUFLTixJQUFMLENBQVVPLEdBQVYsQ0FBYztBQUFBLGVBQUtDLEVBQUVPLE9BQUYsQ0FBVUQsQ0FBVixDQUFMO0FBQUEsT0FBZCxDQUFYOztBQUVBUixhQUFRQSxJQUFELEdBQVMsT0FBT0EsSUFBaEIsR0FBdUJBLElBQTlCOztBQUVBLFVBQUlVLEtBQUssS0FBS0MsVUFBTCxDQUFnQkgsRUFBRUksUUFBbEIsRUFBNEIsRUFBNUIsRUFDVEMsR0FEUyxDQUNMLEtBQUtwQixPQUFMLENBQWFRLEdBQWIsQ0FBaUI7QUFBQSxlQUFLSyxFQUFFRyxPQUFGLENBQVVELENBQVYsQ0FBTDtBQUFBLE9BQWpCLENBREssRUFFVEssR0FGUyxPQUdUQSxHQUhTLENBR0wsS0FBS2xCLE9BQUwsQ0FBYU0sR0FBYixDQUFpQjtBQUFBLGVBQUtNLEVBQUVFLE9BQUYsQ0FBVUQsQ0FBVixDQUFMO0FBQUEsT0FBakIsQ0FISyxFQUlUSyxHQUpTLE9BS1RBLEdBTFMsV0FNVEEsR0FOUyxPQUFUOztBQVFBLFdBQUtsQixPQUFMLENBQWFVLE9BQWIsQ0FBcUI7QUFBQSxlQUFLSyxHQUFHRyxHQUFILE1BQVVOLEVBQUVPLEVBQVosRUFBa0JELEdBQWxCLEtBQUw7QUFBQSxPQUFyQjs7QUFFQSxhQUFPSCxHQUFHRyxHQUFILE1BQ1BBLEdBRE8sTUFFUEEsR0FGTyxPQUdQQSxHQUhPLENBR0gsK0JBSEcsRUFJUEEsR0FKTyxDQUlIYixJQUpHLEVBS1BhLEdBTE8sQ0FLSCxXQUxHLEVBTVBBLEdBTk8sQ0FNSCxLQUFLakIsSUFBTCxDQUFVYSxPQUFWLENBQWtCRCxDQUFsQixDQU5HLEVBT1BLLEdBUE8sQ0FPSCxLQVBHLENBQVA7QUFVRDs7Ozs7O2tCQUlZckIsUSIsImZpbGUiOiJUZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogVGVtcGxhdGVcbiAqIEBwYXJhbSB7YXJyYXk8SW1wb3J0Pn0gaW1wb3J0c1xuICogQHBhcmFtIHthcnJheTxzdHJpbmc+fSB1c2VzXG4gKiBAcGFyYW0ge1RhZ30gcm9vdFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgVGVtcGxhdGUgZXh0ZW5kcyBOb2RlIHtcblxuICBjb25zdHJ1Y3RvcihpbXBvcnRzLCB1c2VzLCBleHBvcnRzLCByb290LCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZSA9ICd0ZW1wbGF0ZSc7XG4gICAgdGhpcy5pbXBvcnRzID0gaW1wb3J0cztcbiAgICB0aGlzLnVzZXMgPSB1c2VzO1xuICAgIHRoaXMuZXhwb3J0cyA9IGV4cG9ydHM7XG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgfVxuXG4gIHRyYW5zcGlsZSgpIHtcblxuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgYXJncyA9IHRoaXMudXNlcy5tYXAocCA9PiBwLnRyYW5zcGlsZSgpKS5qb2luKCcsJyk7XG5cbiAgICBhcmdzID0gKGFyZ3MpID8gJyAsJyArIGFyZ3MgOiBhcmdzO1xuXG4gICAgdGhpcy5pbXBvcnRzLmZvckVhY2goaSA9PiBzdHIgPSBzdHIgKyBpLnRyYW5zcGlsZSgpKTtcbiAgICBzdHIgPSBgJHtzdHJ9XFxuYDtcbiAgICB0aGlzLmV4cG9ydHMuZm9yRWFjaChlID0+IHN0ciA9IHN0ciArIGUudHJhbnNwaWxlKCkpO1xuXG4gICAgcmV0dXJuIGAke3N0cn1cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWFrZSR7YXJnc30pIHsgcmV0dXJuICR7dGhpcy5yb290LnRyYW5zcGlsZSgpfTsgfWA7XG5cbiAgfVxuXG4gIGNvbXBpbGUobykge1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBhcmdzID0gdGhpcy51c2VzLm1hcChwID0+IHAuY29tcGlsZShvKSk7XG5cbiAgICBhcmdzID0gKGFyZ3MpID8gJyAsJyArIGFyZ3MgOiBhcmdzO1xuXG4gICAgdmFyIHNuID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKS5cbiAgICBhZGQodGhpcy5pbXBvcnRzLm1hcChpID0+IGkuY29tcGlsZShvKSkpLlxuICAgIGFkZChgXFxuYCkuXG4gICAgYWRkKHRoaXMuZXhwb3J0cy5tYXAoZSA9PiBlLmNvbXBpbGUobykpKS5cbiAgICBhZGQoYFxcbmApLlxuICAgIGFkZChgZXhwb3J0YCkuXG4gICAgYWRkKGAgeyBgKTtcblxuICAgIHRoaXMuZXhwb3J0cy5mb3JFYWNoKGUgPT4gc24uYWRkKGAke2UuaWR9YCkuYWRkKGAsYCkpO1xuXG4gICAgcmV0dXJuIHNuLmFkZChgfWApLlxuICAgIGFkZChgO2ApLlxuICAgIGFkZChgXFxuYCkuXG4gICAgYWRkKCdleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWFrZScpLlxuICAgIGFkZChhcmdzKS5cbiAgICBhZGQoJ3sgcmV0dXJuICcpLlxuICAgIGFkZCh0aGlzLnJvb3QuY29tcGlsZShvKSkuXG4gICAgYWRkKCc7IH0nKTtcblxuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZVxuXG4iXX0=