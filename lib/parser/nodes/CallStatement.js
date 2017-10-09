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

        _this.type = 'include-statement';
        _this.template = tmpl;
        _this.arguments = args;
        _this.location = location;

        return _this;
    }

    _createClass(CallStatement, [{
        key: 'transpile',
        value: function transpile(o) {

            var args = this.arguments.map(function (a) {
                return a.transpile(o);
            }).join(',');

            return this.template.transpile(o) + '.call(this,view,' + args + ')';
        }
    }]);

    return CallStatement;
}(_Node3.default);

exports.default = CallStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ2FsbFN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJDYWxsU3RhdGVtZW50IiwidG1wbCIsImFyZ3MiLCJsb2NhdGlvbiIsInR5cGUiLCJ0ZW1wbGF0ZSIsImFyZ3VtZW50cyIsIm8iLCJtYXAiLCJhIiwidHJhbnNwaWxlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxhOzs7QUFFRiwyQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQUE7O0FBQUE7O0FBRzlCLGNBQUtDLElBQUwsR0FBWSxtQkFBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JKLElBQWhCO0FBQ0EsY0FBS0ssU0FBTCxHQUFpQkosSUFBakI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFOOEI7QUFRakM7Ozs7a0NBRVNJLEMsRUFBRzs7QUFFVCxnQkFBSUwsT0FBTyxLQUFLSSxTQUFMLENBQWVFLEdBQWYsQ0FBbUI7QUFBQSx1QkFBS0MsRUFBRUMsU0FBRixDQUFZSCxDQUFaLENBQUw7QUFBQSxhQUFuQixFQUF3Q0ksSUFBeEMsQ0FBNkMsR0FBN0MsQ0FBWDs7QUFFQSxtQkFBVSxLQUFLTixRQUFMLENBQWNLLFNBQWQsQ0FBd0JILENBQXhCLENBQVYsd0JBQXVETCxJQUF2RDtBQUVIOzs7Ozs7a0JBSVVGLGEiLCJmaWxlIjoiQ2FsbFN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qXG4gKiBDYWxsU3RhdGVtZW50XG4gKi9cbmNsYXNzIENhbGxTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHRtcGwsIGFyZ3MsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2luY2x1ZGUtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRtcGw7XG4gICAgICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICB2YXIgYXJncyA9IHRoaXMuYXJndW1lbnRzLm1hcChhID0+IGEudHJhbnNwaWxlKG8pKS5qb2luKCcsJyk7XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMudGVtcGxhdGUudHJhbnNwaWxlKG8pfS5jYWxsKHRoaXMsdmlldywke2FyZ3N9KWA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsbFN0YXRlbWVudFxuIl19