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
 * MethodExpression
 * @param {string} path
 * @param {array} args
 */
var MethodExpression = function (_Node) {
    _inherits(MethodExpression, _Node);

    function MethodExpression(path, args, location) {
        _classCallCheck(this, MethodExpression);

        var _this = _possibleConstructorReturn(this, (MethodExpression.__proto__ || Object.getPrototypeOf(MethodExpression)).call(this, location));

        _this.type = 'method-expression';
        _this.path = path;
        _this.arguments = args;

        return _this;
    }

    _createClass(MethodExpression, [{
        key: 'transpile',
        value: function transpile(o) {

            var args = this.arguments.map(function (m) {
                return m.transpile(o);
            }).join(',');
            return this.path + '(' + args + ')';
        }
    }]);

    return MethodExpression;
}(_Node3.default);

exports.default = MethodExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTWV0aG9kRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJNZXRob2RFeHByZXNzaW9uIiwicGF0aCIsImFyZ3MiLCJsb2NhdGlvbiIsInR5cGUiLCJhcmd1bWVudHMiLCJvIiwibWFwIiwibSIsInRyYW5zcGlsZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7OztJQUtNQSxnQjs7O0FBRUYsOEJBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCQyxRQUF4QixFQUFrQztBQUFBOztBQUFBLHdJQUV4QkEsUUFGd0I7O0FBRzlCLGNBQUtDLElBQUwsR0FBWSxtQkFBWjtBQUNBLGNBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtJLFNBQUwsR0FBaUJILElBQWpCOztBQUw4QjtBQU9qQzs7OztrQ0FFU0ksQyxFQUFHOztBQUVULGdCQUFJSixPQUFPLEtBQUtHLFNBQUwsQ0FBZUUsR0FBZixDQUFtQjtBQUFBLHVCQUFLQyxFQUFFQyxTQUFGLENBQVlILENBQVosQ0FBTDtBQUFBLGFBQW5CLEVBQXdDSSxJQUF4QyxDQUE2QyxHQUE3QyxDQUFYO0FBQ0EsbUJBQVUsS0FBS1QsSUFBZixTQUF1QkMsSUFBdkI7QUFFSDs7Ozs7O2tCQUdVRixnQiIsImZpbGUiOiJNZXRob2RFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBNZXRob2RFeHByZXNzaW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogQHBhcmFtIHthcnJheX0gYXJnc1xuICovXG5jbGFzcyBNZXRob2RFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXRoLCBhcmdzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ21ldGhvZC1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICB2YXIgYXJncyA9IHRoaXMuYXJndW1lbnRzLm1hcChtID0+IG0udHJhbnNwaWxlKG8pKS5qb2luKCcsJyk7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnBhdGh9KCR7YXJnc30pYDtcblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgTWV0aG9kRXhwcmVzc2lvblxuIl19