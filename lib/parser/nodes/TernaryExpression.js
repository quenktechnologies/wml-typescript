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
 * TernaryExpression 
 * @param {Expression} logic 
 * @param {Expression} iftrue 
 * @param {Expression} iffalse 
 */
var TernaryExpression = function (_Node) {
    _inherits(TernaryExpression, _Node);

    function TernaryExpression(logic, iftrue, iffalse, location) {
        _classCallCheck(this, TernaryExpression);

        var _this = _possibleConstructorReturn(this, (TernaryExpression.__proto__ || Object.getPrototypeOf(TernaryExpression)).call(this, location));

        _this.type = 'ternary-expression';
        _this.logic = logic;
        _this.iftrue = iftrue;
        _this.iffalse = iffalse;

        return _this;
    }

    _createClass(TernaryExpression, [{
        key: 'transpile',
        value: function transpile() {

            return '(' + this.logic.transpile() + ')? ' + this.iftrue.transpile() + ' : ' + this.iffalse.transpile();
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, '(').add(this.logic.compile(o)).add(')?').add(this.iftrue.compile(o)).add(':').add(this.iffalse.compile(o));
        }
    }]);

    return TernaryExpression;
}(_Node3.default);

exports.default = TernaryExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGVybmFyeUV4cHJlc3Npb24uanMiXSwibmFtZXMiOlsiVGVybmFyeUV4cHJlc3Npb24iLCJsb2dpYyIsImlmdHJ1ZSIsImlmZmFsc2UiLCJsb2NhdGlvbiIsInR5cGUiLCJ0cmFuc3BpbGUiLCJvIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiY29tcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1NQSxpQjs7O0FBRUYsK0JBQVlDLEtBQVosRUFBbUJDLE1BQW5CLEVBQTJCQyxPQUEzQixFQUFvQ0MsUUFBcEMsRUFBOEM7QUFBQTs7QUFBQSwwSUFFdENBLFFBRnNDOztBQUc1QyxjQUFLQyxJQUFMLEdBQVksb0JBQVo7QUFDRSxjQUFLSixLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxjQUFLQyxPQUFMLEdBQWVBLE9BQWY7O0FBTjBDO0FBUTdDOzs7O29DQUVXOztBQUVSLHlCQUFXLEtBQUtGLEtBQUwsQ0FBV0ssU0FBWCxFQUFYLFdBQXVDLEtBQUtKLE1BQUwsQ0FBWUksU0FBWixFQUF2QyxXQUFvRSxLQUFLSCxPQUFMLENBQWFHLFNBQWIsRUFBcEU7QUFFSDs7O2dDQUVPQyxDLEVBQUc7O0FBRVQsbUJBQU8sS0FBS0MsVUFBTCxDQUFnQkQsRUFBRUUsUUFBbEIsRUFBNEIsR0FBNUIsRUFDTEMsR0FESyxDQUNELEtBQUtULEtBQUwsQ0FBV1UsT0FBWCxDQUFtQkosQ0FBbkIsQ0FEQyxFQUVMRyxHQUZLLENBRUQsSUFGQyxFQUdMQSxHQUhLLENBR0QsS0FBS1IsTUFBTCxDQUFZUyxPQUFaLENBQW9CSixDQUFwQixDQUhDLEVBSUxHLEdBSkssQ0FJRCxHQUpDLEVBS0xBLEdBTEssQ0FLRCxLQUFLUCxPQUFMLENBQWFRLE9BQWIsQ0FBcUJKLENBQXJCLENBTEMsQ0FBUDtBQU9EOzs7Ozs7a0JBSVVQLGlCIiwiZmlsZSI6IlRlcm5hcnlFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBUZXJuYXJ5RXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gbG9naWMgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGlmdHJ1ZSBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gaWZmYWxzZSBcbiAqL1xuY2xhc3MgVGVybmFyeUV4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGxvZ2ljLCBpZnRydWUsIGlmZmFsc2UsIGxvY2F0aW9uKSB7XG5cbiAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgIHRoaXMudHlwZSA9ICd0ZXJuYXJ5LWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLmxvZ2ljID0gbG9naWM7XG4gICAgICAgIHRoaXMuaWZ0cnVlID0gaWZ0cnVlO1xuICAgICAgICB0aGlzLmlmZmFsc2UgPSBpZmZhbHNlO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiBgKCR7dGhpcy5sb2dpYy50cmFuc3BpbGUoKX0pPyAke3RoaXMuaWZ0cnVlLnRyYW5zcGlsZSgpfSA6ICR7dGhpcy5pZmZhbHNlLnRyYW5zcGlsZSgpfWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnKCcpLlxuICAgICAgICBhZGQodGhpcy5sb2dpYy5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKCcpPycpLlxuICAgICAgICBhZGQodGhpcy5pZnRydWUuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCgnOicpLlxuICAgICAgICBhZGQodGhpcy5pZmZhbHNlLmNvbXBpbGUobykpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm5hcnlFeHByZXNzaW9uXG4iXX0=