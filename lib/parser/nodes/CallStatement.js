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

/*
 * IncludeStatement
 */
var IncludeStatement = function (_Node) {
    _inherits(IncludeStatement, _Node);

    function IncludeStatement(tmpl, args, location) {
        _classCallCheck(this, IncludeStatement);

        var _this = _possibleConstructorReturn(this, (IncludeStatement.__proto__ || Object.getPrototypeOf(IncludeStatement)).call(this));

        _this.type = 'include-statement';
        _this.template = tmpl;
        _this.arguments = args;
        _this.location = location;

        return _this;
    }

    _createClass(IncludeStatement, [{
        key: 'transpile',
        value: function transpile(o) {

            var args = this.arguments.map(function (a) {
                return a.transpile(o);
            }).join(',');

            return this.template.transpile(o) + '.call(this,view,' + args + ')';
        }
    }]);

    return IncludeStatement;
}(_Node3.default);

exports.default = IncludeStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ2FsbFN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJJbmNsdWRlU3RhdGVtZW50IiwidG1wbCIsImFyZ3MiLCJsb2NhdGlvbiIsInR5cGUiLCJ0ZW1wbGF0ZSIsImFyZ3VtZW50cyIsIm8iLCJtYXAiLCJhIiwidHJhbnNwaWxlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxnQjs7O0FBRUYsOEJBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCQyxRQUF4QixFQUFrQztBQUFBOztBQUFBOztBQUc5QixjQUFLQyxJQUFMLEdBQVksbUJBQVo7QUFDQSxjQUFLQyxRQUFMLEdBQWdCSixJQUFoQjtBQUNBLGNBQUtLLFNBQUwsR0FBaUJKLElBQWpCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTjhCO0FBUWpDOzs7O2tDQUVTSSxDLEVBQUc7O0FBRVQsZ0JBQUlMLE9BQU8sS0FBS0ksU0FBTCxDQUFlRSxHQUFmLENBQW1CO0FBQUEsdUJBQUtDLEVBQUVDLFNBQUYsQ0FBWUgsQ0FBWixDQUFMO0FBQUEsYUFBbkIsRUFBd0NJLElBQXhDLENBQTZDLEdBQTdDLENBQVg7O0FBRUEsbUJBQVUsS0FBS04sUUFBTCxDQUFjSyxTQUFkLENBQXdCSCxDQUF4QixDQUFWLHdCQUF1REwsSUFBdkQ7QUFFSDs7Ozs7O2tCQUlVRixnQiIsImZpbGUiOiJDYWxsU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLypcbiAqIEluY2x1ZGVTdGF0ZW1lbnRcbiAqL1xuY2xhc3MgSW5jbHVkZVN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodG1wbCwgYXJncywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW5jbHVkZS1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdG1wbDtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIHZhciBhcmdzID0gdGhpcy5hcmd1bWVudHMubWFwKGEgPT4gYS50cmFuc3BpbGUobykpLmpvaW4oJywnKTtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy50ZW1wbGF0ZS50cmFuc3BpbGUobyl9LmNhbGwodGhpcyx2aWV3LCR7YXJnc30pYDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmNsdWRlU3RhdGVtZW50XG4iXX0=