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
 * BindExpression 
 * @param {string} path 
 * @param {string} target
 * @param {array<Expression>} args
 */
var BindExpression = function (_Node) {
    _inherits(BindExpression, _Node);

    function BindExpression(path, target, args, location) {
        _classCallCheck(this, BindExpression);

        var _this = _possibleConstructorReturn(this, (BindExpression.__proto__ || Object.getPrototypeOf(BindExpression)).call(this, location));

        _this.type = 'bind-expression';
        _this.path = path;
        _this.target = target;
        _this.arguments = args;

        return _this;
    }

    _createClass(BindExpression, [{
        key: 'transpile',
        value: function transpile() {

            var args = this.arguments.map(function (a) {
                return a.transpile();
            }).join(',');
            args = args ? ' ,' + args : args;

            return this.path + '.' + this.target + '.bind(' + this.path + args + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '');

            node.add(this.path).add('.').add(this.target).add('.bind(');
            return this.compileList(this.arguments, node, o);
        }
    }]);

    return BindExpression;
}(_Node3.default);

exports.default = BindExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQmluZEV4cHJlc3Npb24uanMiXSwibmFtZXMiOlsiQmluZEV4cHJlc3Npb24iLCJwYXRoIiwidGFyZ2V0IiwiYXJncyIsImxvY2F0aW9uIiwidHlwZSIsImFyZ3VtZW50cyIsIm1hcCIsImEiLCJ0cmFuc3BpbGUiLCJqb2luIiwibyIsIm5vZGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1NQSxjOzs7QUFFRiw0QkFBWUMsSUFBWixFQUFrQkMsTUFBbEIsRUFBMEJDLElBQTFCLEVBQWdDQyxRQUFoQyxFQUEwQztBQUFBOztBQUFBLG9JQUVoQ0EsUUFGZ0M7O0FBR3RDLGNBQUtDLElBQUwsR0FBWSxpQkFBWjtBQUNBLGNBQUtKLElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtJLFNBQUwsR0FBaUJILElBQWpCOztBQU5zQztBQVF6Qzs7OztvQ0FFVzs7QUFFUixnQkFBSUEsT0FBTyxLQUFLRyxTQUFMLENBQWVDLEdBQWYsQ0FBbUI7QUFBQSx1QkFBS0MsRUFBRUMsU0FBRixFQUFMO0FBQUEsYUFBbkIsRUFBdUNDLElBQXZDLENBQTRDLEdBQTVDLENBQVg7QUFDQVAsbUJBQVFBLElBQUQsR0FBUyxPQUFPQSxJQUFoQixHQUF1QkEsSUFBOUI7O0FBRUEsbUJBQVUsS0FBS0YsSUFBZixTQUF1QixLQUFLQyxNQUE1QixjQUEyQyxLQUFLRCxJQUFoRCxHQUF1REUsSUFBdkQ7QUFFSDs7O2dDQUVPUSxDLEVBQUc7O0FBRVAsZ0JBQUlDLE9BQU8sS0FBS0MsVUFBTCxDQUFnQkYsRUFBRUcsUUFBbEIsRUFBNEIsRUFBNUIsQ0FBWDs7QUFFQUYsaUJBQUtHLEdBQUwsQ0FBUyxLQUFLZCxJQUFkLEVBQ0FjLEdBREEsQ0FDSSxHQURKLEVBRUFBLEdBRkEsQ0FFSSxLQUFLYixNQUZULEVBR0FhLEdBSEEsQ0FHSSxRQUhKO0FBSUEsbUJBQU8sS0FBS0MsV0FBTCxDQUFpQixLQUFLVixTQUF0QixFQUFpQ00sSUFBakMsRUFBdUNELENBQXZDLENBQVA7QUFFSDs7Ozs7O2tCQUlVWCxjIiwiZmlsZSI6IkJpbmRFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBCaW5kRXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFxuICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFxuICogQHBhcmFtIHthcnJheTxFeHByZXNzaW9uPn0gYXJnc1xuICovXG5jbGFzcyBCaW5kRXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IocGF0aCwgdGFyZ2V0LCBhcmdzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2JpbmQtZXhwcmVzc2lvbic7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLmFyZ3VtZW50cy5tYXAoYSA9PiBhLnRyYW5zcGlsZSgpKS5qb2luKCcsJyk7XG4gICAgICAgIGFyZ3MgPSAoYXJncykgPyAnICwnICsgYXJncyA6IGFyZ3M7XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMucGF0aH0uJHt0aGlzLnRhcmdldH0uYmluZCgke3RoaXMucGF0aH0ke2FyZ3N9KWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJyk7XG5cbiAgICAgICAgbm9kZS5hZGQodGhpcy5wYXRoKS5cbiAgICAgICAgYWRkKCcuJykuXG4gICAgICAgIGFkZCh0aGlzLnRhcmdldCkuXG4gICAgICAgIGFkZCgnLmJpbmQoJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuYXJndW1lbnRzLCBub2RlLCBvKVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpbmRFeHByZXNzaW9uXG4iXX0=