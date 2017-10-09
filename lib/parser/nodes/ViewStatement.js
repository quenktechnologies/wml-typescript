'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _Templates = require('../Templates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ViewStatement
 * @param {Location} location
 */
var ViewStatement = function (_Node) {
  _inherits(ViewStatement, _Node);

  function ViewStatement(id, generics, context, tag, location) {
    _classCallCheck(this, ViewStatement);

    var _this = _possibleConstructorReturn(this, (ViewStatement.__proto__ || Object.getPrototypeOf(ViewStatement)).call(this));

    _this.type = 'view-statement';
    _this.id = id;
    _this.generics = generics;
    _this.context = context;
    _this.tag = tag;
    _this.location = location;

    return _this;
  }

  _createClass(ViewStatement, [{
    key: 'transpile',
    value: function transpile(o) {

      var g = this.generics.length > 0 ? '<' + this.generics.map(function (g) {
        return g.generics(o);
      }).join(',') + '>' : '';

      return (0, _Templates.view)(this.id.transpile(o), g, this.context.transpile(o), this.tag, o);
    }
  }]);

  return ViewStatement;
}(_Node3.default);

exports.default = ViewStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVmlld1N0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJWaWV3U3RhdGVtZW50IiwiaWQiLCJnZW5lcmljcyIsImNvbnRleHQiLCJ0YWciLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwiZyIsImxlbmd0aCIsIm1hcCIsImpvaW4iLCJ0cmFuc3BpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztBQUdBOzs7O0lBSU1BLGE7OztBQUVKLHlCQUFZQyxFQUFaLEVBQWdCQyxRQUFoQixFQUEwQkMsT0FBMUIsRUFBbUNDLEdBQW5DLEVBQXdDQyxRQUF4QyxFQUFrRDtBQUFBOztBQUFBOztBQUloRCxVQUFLQyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxVQUFLTCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFVBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVRnRDtBQVdqRDs7Ozs4QkFFU0UsQyxFQUFHOztBQUVQLFVBQUlDLElBQUksS0FBS04sUUFBTCxDQUFjTyxNQUFkLEdBQXVCLENBQXZCLFNBQ0YsS0FBS1AsUUFBTCxDQUFjUSxHQUFkLENBQWtCO0FBQUEsZUFBR0YsRUFBRU4sUUFBRixDQUFXSyxDQUFYLENBQUg7QUFBQSxPQUFsQixFQUFvQ0ksSUFBcEMsQ0FBeUMsR0FBekMsQ0FERSxTQUVOLEVBRkY7O0FBSUosYUFBTyxxQkFDSCxLQUFLVixFQUFMLENBQVFXLFNBQVIsQ0FBa0JMLENBQWxCLENBREcsRUFFSEMsQ0FGRyxFQUdILEtBQUtMLE9BQUwsQ0FBYVMsU0FBYixDQUF1QkwsQ0FBdkIsQ0FIRyxFQUlILEtBQUtILEdBSkYsRUFLSEcsQ0FMRyxDQUFQO0FBT0Q7Ozs7OztrQkFJWVAsYSIsImZpbGUiOiJWaWV3U3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCB7dmlldyBhcyB2aWV3Rm5cbn0gZnJvbSAnLi4vVGVtcGxhdGVzJztcblxuLyoqXG4gKiBWaWV3U3RhdGVtZW50XG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBWaWV3U3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgY29uc3RydWN0b3IoaWQsIGdlbmVyaWNzLCBjb250ZXh0LCB0YWcsIGxvY2F0aW9uKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gJ3ZpZXctc3RhdGVtZW50JztcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5nZW5lcmljcyA9IGdlbmVyaWNzO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy50YWcgPSB0YWc7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gIH1cblxuICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIGxldCBnID0gdGhpcy5nZW5lcmljcy5sZW5ndGggPiAwID9cbiAgICAgICAgICBgPCR7dGhpcy5nZW5lcmljcy5tYXAoZz0+Zy5nZW5lcmljcyhvKSkuam9pbignLCcpfT5gIDpcbiAgICAgICAgICAnJztcblxuICAgIHJldHVybiB2aWV3Rm4oXG4gICAgICAgIHRoaXMuaWQudHJhbnNwaWxlKG8pLFxuICAgICAgICBnLFxuICAgICAgICB0aGlzLmNvbnRleHQudHJhbnNwaWxlKG8pLFxuICAgICAgICB0aGlzLnRhZyxcbiAgICAgICAgbyk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdTdGF0ZW1lbnRcblxuIl19