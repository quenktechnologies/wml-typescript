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

var count = 0;
/**
 * ForStatement
 */

var ForStatement = function (_Node) {
    _inherits(ForStatement, _Node);

    function ForStatement(variable, index, array, src, children, otherwise, location) {
        _classCallCheck(this, ForStatement);

        var _this = _possibleConstructorReturn(this, (ForStatement.__proto__ || Object.getPrototypeOf(ForStatement)).call(this, location));

        _this.type = 'for-statement';
        _this.variable = variable;
        _this.index = index;
        _this.array = array;
        _this.src = src;
        _this.children = children;
        _this.otherwise = otherwise;

        return _this;
    }

    _createClass(ForStatement, [{
        key: 'transpile',
        value: function transpile(o) {

            var variable = this.variable.transpile(o);
            var index = this.index ? this.index.transpile(o) : '_';
            var array = this.array ? this.array.transpile(o) : '__';
            var src = this.src.transpile(o);
            var otherwise = this.otherwise.map(function (c) {
                return c.transpile(o);
            });

            count = count + 1;

            return '$$for(' + src + ',' + ('function for' + count + ' (' + variable + ', ' + index + ', ' + array + ') {') + ('return $$box([' + this.children.map(function (c) {
                return c.transpile(o);
            }).join(',') + '])}') + ('.bind(this), function otherwise' + count + '() {') + ('return $$box([' + this.otherwise.map(function (c) {
                return c.transpile(o);
            }).join(',') + '])}.bind(this))');
        }
    }]);

    return ForStatement;
}(_Node3.default);

exports.default = ForStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRm9yU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbImNvdW50IiwiRm9yU3RhdGVtZW50IiwidmFyaWFibGUiLCJpbmRleCIsImFycmF5Iiwic3JjIiwiY2hpbGRyZW4iLCJvdGhlcndpc2UiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwidHJhbnNwaWxlIiwibWFwIiwiYyIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVEsQ0FBWjtBQUNBOzs7O0lBR01DLFk7OztBQUVGLDBCQUFZQyxRQUFaLEVBQXNCQyxLQUF0QixFQUE2QkMsS0FBN0IsRUFBb0NDLEdBQXBDLEVBQXlDQyxRQUF6QyxFQUFtREMsU0FBbkQsRUFBOERDLFFBQTlELEVBQXdFO0FBQUE7O0FBQUEsZ0lBRTlEQSxRQUY4RDs7QUFHcEUsY0FBS0MsSUFBTCxHQUFZLGVBQVo7QUFDQSxjQUFLUCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7O0FBVG9FO0FBV3ZFOzs7O2tDQUVTRyxDLEVBQUc7O0FBRVQsZ0JBQUlSLFdBQVcsS0FBS0EsUUFBTCxDQUFjUyxTQUFkLENBQXdCRCxDQUF4QixDQUFmO0FBQ0EsZ0JBQUlQLFFBQVEsS0FBS0EsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV1EsU0FBWCxDQUFxQkQsQ0FBckIsQ0FBYixHQUF1QyxHQUFuRDtBQUNBLGdCQUFJTixRQUFRLEtBQUtBLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdPLFNBQVgsQ0FBcUJELENBQXJCLENBQWIsR0FBdUMsSUFBbkQ7QUFDQSxnQkFBSUwsTUFBTSxLQUFLQSxHQUFMLENBQVNNLFNBQVQsQ0FBbUJELENBQW5CLENBQVY7QUFDQSxnQkFBSUgsWUFBWSxLQUFLQSxTQUFMLENBQWVLLEdBQWYsQ0FBbUI7QUFBQSx1QkFBS0MsRUFBRUYsU0FBRixDQUFZRCxDQUFaLENBQUw7QUFBQSxhQUFuQixDQUFoQjs7QUFFQVYsb0JBQVFBLFFBQVEsQ0FBaEI7O0FBRUEsbUJBQU8sV0FBU0ssR0FBVCwyQkFDWUwsS0FEWixVQUNzQkUsUUFEdEIsVUFDbUNDLEtBRG5DLFVBQzZDQyxLQUQ3QyxnQ0FFYyxLQUFLRSxRQUFMLENBQWNNLEdBQWQsQ0FBa0I7QUFBQSx1QkFBR0MsRUFBRUYsU0FBRixDQUFZRCxDQUFaLENBQUg7QUFBQSxhQUFsQixFQUFxQ0ksSUFBckMsQ0FBMEMsR0FBMUMsQ0FGZCxpREFHK0JkLEtBSC9CLGlDQUljLEtBQUtPLFNBQUwsQ0FBZUssR0FBZixDQUFtQjtBQUFBLHVCQUFHQyxFQUFFRixTQUFGLENBQVlELENBQVosQ0FBSDtBQUFBLGFBQW5CLEVBQXNDSSxJQUF0QyxDQUEyQyxHQUEzQyxDQUpkLHFCQUFQO0FBTUg7Ozs7OztrQkFJVWIsWSIsImZpbGUiOiJGb3JTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG52YXIgY291bnQgPSAwO1xuLyoqXG4gKiBGb3JTdGF0ZW1lbnRcbiAqL1xuY2xhc3MgRm9yU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSwgaW5kZXgsIGFycmF5LCBzcmMsIGNoaWxkcmVuLCBvdGhlcndpc2UsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnZm9yLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgICAgIHRoaXMuc3JjID0gc3JjO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIHRoaXMub3RoZXJ3aXNlID0gb3RoZXJ3aXNlO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICB2YXIgdmFyaWFibGUgPSB0aGlzLnZhcmlhYmxlLnRyYW5zcGlsZShvKTtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleCA/IHRoaXMuaW5kZXgudHJhbnNwaWxlKG8pIDogJ18nO1xuICAgICAgICB2YXIgYXJyYXkgPSB0aGlzLmFycmF5ID8gdGhpcy5hcnJheS50cmFuc3BpbGUobykgOiAnX18nO1xuICAgICAgICB2YXIgc3JjID0gdGhpcy5zcmMudHJhbnNwaWxlKG8pO1xuICAgICAgICB2YXIgb3RoZXJ3aXNlID0gdGhpcy5vdGhlcndpc2UubWFwKGMgPT4gYy50cmFuc3BpbGUobykpO1xuXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuXG4gICAgICAgIHJldHVybiBgJCRmb3IoJHtzcmN9LGAgK1xuICAgICAgICAgICAgYGZ1bmN0aW9uIGZvciR7Y291bnR9ICgke3ZhcmlhYmxlfSwgJHtpbmRleH0sICR7YXJyYXl9KSB7YCArXG4gICAgICAgICAgICBgcmV0dXJuICQkYm94KFske3RoaXMuY2hpbGRyZW4ubWFwKGM9PmMudHJhbnNwaWxlKG8pKS5qb2luKCcsJyl9XSl9YCArXG4gICAgICAgICAgICBgLmJpbmQodGhpcyksIGZ1bmN0aW9uIG90aGVyd2lzZSR7Y291bnR9KCkge2AgK1xuICAgICAgICAgICAgYHJldHVybiAkJGJveChbJHt0aGlzLm90aGVyd2lzZS5tYXAoYz0+Yy50cmFuc3BpbGUobykpLmpvaW4oJywnKX1dKX0uYmluZCh0aGlzKSlgO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvclN0YXRlbWVudFxuIl19