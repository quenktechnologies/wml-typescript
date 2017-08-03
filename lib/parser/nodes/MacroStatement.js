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
 * MacroStatement
 */
var MacroStatement = function (_Node) {
    _inherits(MacroStatement, _Node);

    function MacroStatement(id, args, children, location) {
        _classCallCheck(this, MacroStatement);

        var _this = _possibleConstructorReturn(this, (MacroStatement.__proto__ || Object.getPrototypeOf(MacroStatement)).call(this));

        _this.type = 'macro-statement';
        _this.id = id;
        _this.children = children;
        _this.arguments = args;
        _this.location = location;

        return _this;
    }

    _createClass(MacroStatement, [{
        key: 'transpile',
        value: function transpile(o) {

            var args = ['view' + (o.typescript ? ':AppView<Z>' : '')].concat(this.arguments.map(function (a) {
                return a.transpile(o);
            }));
            var kids = this.children.map(function (c) {
                return c.transpile(o);
            }).join(',');

            return '\n        export function ' + this.id + (o.typescript ? '<Z>' : '') + '(' + args + ') {\n        return $$box([' + kids + ']);}\n        ';
        }
    }]);

    return MacroStatement;
}(_Node3.default);

exports.default = MacroStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTWFjcm9TdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiTWFjcm9TdGF0ZW1lbnQiLCJpZCIsImFyZ3MiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwidHlwZSIsImFyZ3VtZW50cyIsIm8iLCJ0eXBlc2NyaXB0IiwiY29uY2F0IiwibWFwIiwiYSIsInRyYW5zcGlsZSIsImtpZHMiLCJjIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxjOzs7QUFFRiw0QkFBWUMsRUFBWixFQUFnQkMsSUFBaEIsRUFBc0JDLFFBQXRCLEVBQWdDQyxRQUFoQyxFQUEwQztBQUFBOztBQUFBOztBQUl0QyxjQUFLQyxJQUFMLEdBQVksaUJBQVo7QUFDQSxjQUFLSixFQUFMLEdBQVVBLEVBQVY7QUFDQSxjQUFLRSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUtHLFNBQUwsR0FBaUJKLElBQWpCO0FBQ0EsY0FBS0UsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUnNDO0FBVXpDOzs7O2tDQUVTRyxDLEVBQUc7O0FBRVQsZ0JBQUlMLE9BQU8sV0FBUUssRUFBRUMsVUFBRixHQUFhLGFBQWIsR0FBMkIsRUFBbkMsR0FBeUNDLE1BQXpDLENBQWdELEtBQUtILFNBQUwsQ0FBZUksR0FBZixDQUFtQjtBQUFBLHVCQUFLQyxFQUFFQyxTQUFGLENBQVlMLENBQVosQ0FBTDtBQUFBLGFBQW5CLENBQWhELENBQVg7QUFDQSxnQkFBSU0sT0FBTyxLQUFLVixRQUFMLENBQWNPLEdBQWQsQ0FBa0I7QUFBQSx1QkFBS0ksRUFBRUYsU0FBRixDQUFZTCxDQUFaLENBQUw7QUFBQSxhQUFsQixFQUF1Q1EsSUFBdkMsQ0FBNEMsR0FBNUMsQ0FBWDs7QUFFQSxrREFDa0IsS0FBS2QsRUFEdkIsSUFDNEJNLEVBQUVDLFVBQUYsR0FBYSxLQUFiLEdBQW1CLEVBRC9DLFVBQ3FETixJQURyRCxtQ0FFZ0JXLElBRmhCO0FBS0g7Ozs7OztrQkFJVWIsYyIsImZpbGUiOiJNYWNyb1N0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogTWFjcm9TdGF0ZW1lbnRcbiAqL1xuY2xhc3MgTWFjcm9TdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGlkLCBhcmdzLCBjaGlsZHJlbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudHlwZSA9ICdtYWNyby1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIGxldCBhcmdzID0gW2B2aWV3JHtvLnR5cGVzY3JpcHQ/JzpBcHBWaWV3PFo+JzonJ31gXS5jb25jYXQodGhpcy5hcmd1bWVudHMubWFwKGEgPT4gYS50cmFuc3BpbGUobykpKTtcbiAgICAgICAgbGV0IGtpZHMgPSB0aGlzLmNoaWxkcmVuLm1hcChjID0+IGMudHJhbnNwaWxlKG8pKS5qb2luKCcsJyk7XG5cbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uICR7dGhpcy5pZH0ke28udHlwZXNjcmlwdD8nPFo+JzonJ30oJHthcmdzfSkge1xuICAgICAgICByZXR1cm4gJCRib3goWyR7a2lkc31dKTt9XG4gICAgICAgIGA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFjcm9TdGF0ZW1lbnRcbiJdfQ==