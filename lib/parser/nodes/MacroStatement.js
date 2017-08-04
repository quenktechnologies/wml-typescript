'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * MacroStatement
 */
var MacroStatement = function (_Node) {
    _inherits(MacroStatement, _Node);

    function MacroStatement(id, generics, params, children, location) {
        _classCallCheck(this, MacroStatement);

        var _this = _possibleConstructorReturn(this, (MacroStatement.__proto__ || Object.getPrototypeOf(MacroStatement)).call(this));

        _this.type = 'macro-statement';
        _this.id = id;
        _this.children = children;
        _this.generics = generics;
        _this.parameters = params;
        _this.location = location;

        return _this;
    }

    _createClass(MacroStatement, [{
        key: 'transpile',
        value: function transpile(o) {

            var generics = this.generics.map(function (g) {
                return g.transpile(o);
            }).concat('Z').join(',');

            var args = ['view' + (o.typescript ? ':AppView<Z>' : '')].concat(this.parameters.map(function (a) {
                return a.transpile(o);
            }));

            return 'export function ' + this.id + (o.typescript ? '<' + generics + '>' : '') + '(' + args + ')' + ('{ return ' + (0, _util.flatten)(this.children, o) + '; } ');
        }
    }]);

    return MacroStatement;
}(_Node3.default);

exports.default = MacroStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTWFjcm9TdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiTWFjcm9TdGF0ZW1lbnQiLCJpZCIsImdlbmVyaWNzIiwicGFyYW1zIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInR5cGUiLCJwYXJhbWV0ZXJzIiwibyIsIm1hcCIsImciLCJ0cmFuc3BpbGUiLCJjb25jYXQiLCJqb2luIiwiYXJncyIsInR5cGVzY3JpcHQiLCJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGM7OztBQUVGLDRCQUFZQyxFQUFaLEVBQWdCQyxRQUFoQixFQUEwQkMsTUFBMUIsRUFBa0NDLFFBQWxDLEVBQTRDQyxRQUE1QyxFQUFzRDtBQUFBOztBQUFBOztBQUlsRCxjQUFLQyxJQUFMLEdBQVksaUJBQVo7QUFDQSxjQUFLTCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxjQUFLRyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUtGLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS0ssVUFBTCxHQUFrQkosTUFBbEI7QUFDQSxjQUFLRSxRQUFMLEdBQWdCQSxRQUFoQjs7QUFUa0Q7QUFXckQ7Ozs7a0NBRVNHLEMsRUFBRzs7QUFFVCxnQkFBSU4sV0FBVyxLQUFLQSxRQUFMLENBQWNPLEdBQWQsQ0FBa0I7QUFBQSx1QkFBS0MsRUFBRUMsU0FBRixDQUFZSCxDQUFaLENBQUw7QUFBQSxhQUFsQixFQUF1Q0ksTUFBdkMsQ0FBOEMsR0FBOUMsRUFBbURDLElBQW5ELENBQXdELEdBQXhELENBQWY7O0FBRUEsZ0JBQUlDLE9BQU8sV0FBUU4sRUFBRU8sVUFBRixHQUFhLGFBQWIsR0FBMkIsRUFBbkMsR0FDTkgsTUFETSxDQUNDLEtBQUtMLFVBQUwsQ0FBZ0JFLEdBQWhCLENBQW9CO0FBQUEsdUJBQUtPLEVBQUVMLFNBQUYsQ0FBWUgsQ0FBWixDQUFMO0FBQUEsYUFBcEIsQ0FERCxDQUFYOztBQUdBLG1CQUFPLHFCQUFtQixLQUFLUCxFQUF4QixJQUE2Qk8sRUFBRU8sVUFBRixHQUFhLE1BQUliLFFBQUosR0FBYSxHQUExQixHQUE4QixFQUEzRCxVQUFpRVksSUFBakUsd0JBQ1MsbUJBQVEsS0FBS1YsUUFBYixFQUF1QkksQ0FBdkIsQ0FEVCxVQUFQO0FBR0g7Ozs7OztrQkFJVVIsYyIsImZpbGUiOiJNYWNyb1N0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnLi4vdXRpbCc7XG5cbi8qKlxuICogTWFjcm9TdGF0ZW1lbnRcbiAqL1xuY2xhc3MgTWFjcm9TdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGlkLCBnZW5lcmljcywgcGFyYW1zLCBjaGlsZHJlbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudHlwZSA9ICdtYWNyby1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgdGhpcy5nZW5lcmljcyA9IGdlbmVyaWNzO1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbXM7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgbGV0IGdlbmVyaWNzID0gdGhpcy5nZW5lcmljcy5tYXAoZyA9PiBnLnRyYW5zcGlsZShvKSkuY29uY2F0KCdaJykuam9pbignLCcpO1xuXG4gICAgICAgIGxldCBhcmdzID0gW2B2aWV3JHtvLnR5cGVzY3JpcHQ/JzpBcHBWaWV3PFo+JzonJ31gXVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnBhcmFtZXRlcnMubWFwKGEgPT4gYS50cmFuc3BpbGUobykpKTtcblxuICAgICAgICByZXR1cm4gYGV4cG9ydCBmdW5jdGlvbiAke3RoaXMuaWR9JHtvLnR5cGVzY3JpcHQ/JzwnK2dlbmVyaWNzKyc+JzonJ30oJHthcmdzfSlgICtcbiAgICAgICAgICAgIGB7IHJldHVybiAke2ZsYXR0ZW4odGhpcy5jaGlsZHJlbiwgbyl9OyB9IGA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFjcm9TdGF0ZW1lbnRcbiJdfQ==