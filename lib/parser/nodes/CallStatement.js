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
 * CallStatement
 */
var CallStatement = function (_Node) {
    _inherits(CallStatement, _Node);

    function CallStatement(tmpl, args, location) {
        _classCallCheck(this, CallStatement);

        var _this = _possibleConstructorReturn(this, (CallStatement.__proto__ || Object.getPrototypeOf(CallStatement)).call(this));

        _this.type = 'call-statement';
        _this.template = tmpl;
        _this.arguments = args;
        _this.location = location;

        return _this;
    }

    _createClass(CallStatement, [{
        key: 'transpile',
        value: function transpile(o) {

            var args = this.arguments.args.length > 0 ? ',' + this.arguments.map(function (a) {
                return a.transpile(o);
            }).join(',') : '';

            return this.template.transpile(o) + '($$ctx,view' + args + ')';
        }
    }]);

    return CallStatement;
}(_Node3.default);

exports.default = CallStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ2FsbFN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJDYWxsU3RhdGVtZW50IiwidG1wbCIsImFyZ3MiLCJsb2NhdGlvbiIsInR5cGUiLCJ0ZW1wbGF0ZSIsImFyZ3VtZW50cyIsIm8iLCJsZW5ndGgiLCJtYXAiLCJhIiwidHJhbnNwaWxlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxhOzs7QUFFRiwyQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQUE7O0FBQUE7O0FBRzlCLGNBQUtDLElBQUwsR0FBWSxnQkFBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JKLElBQWhCO0FBQ0EsY0FBS0ssU0FBTCxHQUFpQkosSUFBakI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFOOEI7QUFRakM7Ozs7a0NBRVNJLEMsRUFBRzs7QUFFVCxnQkFBSUwsT0FBTyxLQUFLSSxTQUFMLENBQWVKLElBQWYsQ0FBb0JNLE1BQXBCLEdBQTZCLENBQTdCLFNBQ0gsS0FBS0YsU0FBTCxDQUFlRyxHQUFmLENBQW1CO0FBQUEsdUJBQUtDLEVBQUVDLFNBQUYsQ0FBWUosQ0FBWixDQUFMO0FBQUEsYUFBbkIsRUFBd0NLLElBQXhDLENBQTZDLEdBQTdDLENBREcsR0FFUCxFQUZKOztBQUlBLG1CQUFVLEtBQUtQLFFBQUwsQ0FBY00sU0FBZCxDQUF3QkosQ0FBeEIsQ0FBVixtQkFBa0RMLElBQWxEO0FBRUg7Ozs7OztrQkFJVUYsYSIsImZpbGUiOiJDYWxsU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLypcbiAqIENhbGxTdGF0ZW1lbnRcbiAqL1xuY2xhc3MgQ2FsbFN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodG1wbCwgYXJncywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnY2FsbC1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdG1wbDtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIHZhciBhcmdzID0gdGhpcy5hcmd1bWVudHMuYXJncy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgIGAsJHt0aGlzLmFyZ3VtZW50cy5tYXAoYSA9PiBhLnRyYW5zcGlsZShvKSkuam9pbignLCcpfWAgOlxuICAgICAgICAgICAgJyc7XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMudGVtcGxhdGUudHJhbnNwaWxlKG8pfSgkJGN0eCx2aWV3JHthcmdzfSlgO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbGxTdGF0ZW1lbnRcbiJdfQ==