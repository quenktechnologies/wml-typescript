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
 * CallExpression
 */
var CallExpression = function (_Node) {
    _inherits(CallExpression, _Node);

    function CallExpression(callee, hints, args, location) {
        _classCallCheck(this, CallExpression);

        var _this = _possibleConstructorReturn(this, (CallExpression.__proto__ || Object.getPrototypeOf(CallExpression)).call(this));

        _this.type = 'function-expression';
        _this.callee = callee;
        _this.hints = hints;
        _this.arguments = args;
        _this.location = location;

        return _this;
    }

    _createClass(CallExpression, [{
        key: 'transpile',
        value: function transpile(o) {

            var callee = this.callee.transpile(o);
            var args = this.arguments.map(function (a) {
                return a.transpile(o);
            });
            var hints = this.hints.map(function (h) {
                return h.transpile(o);
            }).join(',');

            return '' + callee + (hints ? '<' + hints + '>' : '') + '(' + args + ')';
        }
    }]);

    return CallExpression;
}(_Node3.default);

exports.default = CallExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ2FsbEV4cHJlc3Npb24uanMiXSwibmFtZXMiOlsiQ2FsbEV4cHJlc3Npb24iLCJjYWxsZWUiLCJoaW50cyIsImFyZ3MiLCJsb2NhdGlvbiIsInR5cGUiLCJhcmd1bWVudHMiLCJvIiwidHJhbnNwaWxlIiwibWFwIiwiYSIsImgiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGM7OztBQUVGLDRCQUFZQyxNQUFaLEVBQW9CQyxLQUFwQixFQUEyQkMsSUFBM0IsRUFBaUNDLFFBQWpDLEVBQTJDO0FBQUE7O0FBQUE7O0FBR3ZDLGNBQUtDLElBQUwsR0FBWSxxQkFBWjtBQUNBLGNBQUtKLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtJLFNBQUwsR0FBaUJILElBQWpCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUHVDO0FBUzFDOzs7O2tDQUVTRyxDLEVBQUc7O0FBRVQsZ0JBQUlOLFNBQVMsS0FBS0EsTUFBTCxDQUFZTyxTQUFaLENBQXNCRCxDQUF0QixDQUFiO0FBQ0EsZ0JBQUlKLE9BQU8sS0FBS0csU0FBTCxDQUFlRyxHQUFmLENBQW1CO0FBQUEsdUJBQUtDLEVBQUVGLFNBQUYsQ0FBWUQsQ0FBWixDQUFMO0FBQUEsYUFBbkIsQ0FBWDtBQUNBLGdCQUFJTCxRQUFRLEtBQUtBLEtBQUwsQ0FBV08sR0FBWCxDQUFlO0FBQUEsdUJBQUtFLEVBQUVILFNBQUYsQ0FBWUQsQ0FBWixDQUFMO0FBQUEsYUFBZixFQUFvQ0ssSUFBcEMsQ0FBeUMsR0FBekMsQ0FBWjs7QUFFQSx3QkFBVVgsTUFBVixJQUFtQkMsUUFBTSxNQUFJQSxLQUFKLEdBQVUsR0FBaEIsR0FBb0IsRUFBdkMsVUFBNkNDLElBQTdDO0FBRUg7Ozs7OztrQkFJVUgsYyIsImZpbGUiOiJDYWxsRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQ2FsbEV4cHJlc3Npb25cbiAqL1xuY2xhc3MgQ2FsbEV4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgaGludHMsIGFyZ3MsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2Z1bmN0aW9uLWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICAgICAgdGhpcy5oaW50cyA9IGhpbnRzO1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIGNhbGxlZSA9IHRoaXMuY2FsbGVlLnRyYW5zcGlsZShvKTtcbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLmFyZ3VtZW50cy5tYXAoYSA9PiBhLnRyYW5zcGlsZShvKSk7XG4gICAgICAgIHZhciBoaW50cyA9IHRoaXMuaGludHMubWFwKGggPT4gaC50cmFuc3BpbGUobykpLmpvaW4oJywnKTtcblxuICAgICAgICByZXR1cm4gYCR7Y2FsbGVlfSR7aGludHM/JzwnK2hpbnRzKyc+JzonJ30oJHthcmdzfSlgO1xuXG4gICAgfVxuXG5cbn1cbmV4cG9ydCBkZWZhdWx0IENhbGxFeHByZXNzaW9uXG4iXX0=