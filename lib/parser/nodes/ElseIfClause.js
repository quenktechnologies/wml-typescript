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

var elseifs = 0;
var elseififs = 0;
var elseifelses = 0;

/**
 * ElseIfClause
 * @param {Expression} expression
 * @param {array<Expression>} ithen
 * @param {array<Expression>} ielse
 */

var ElseIfClause = function (_Node) {
    _inherits(ElseIfClause, _Node);

    function ElseIfClause(expression, $then) {
        var $else = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        var location = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        _classCallCheck(this, ElseIfClause);

        var _this = _possibleConstructorReturn(this, (ElseIfClause.__proto__ || Object.getPrototypeOf(ElseIfClause)).call(this));

        _this.type = 'else-if-clause';
        _this.expression = expression;
        _this.then = $then;
        _this.else = $else;
        _this.location = location;

        return _this;
    }

    _createClass(ElseIfClause, [{
        key: 'transpile',
        value: function transpile(o) {

            return 'function elseif' + elseifs++ + '() {' + ('return make.$if(' + this.expression.transpile(o) + ',') + ('function if' + elseififs++ + '() {') + ('return $$box([' + this.then.map(function (t) {
                return t.transpile(o);
            }).join(',') + '])}.bind(this),') + (this.else.transpile(o) + ')}.bind(this)');
        }
    }]);

    return ElseIfClause;
}(_Node3.default);

exports.default = ElseIfClause;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRWxzZUlmQ2xhdXNlLmpzIl0sIm5hbWVzIjpbImVsc2VpZnMiLCJlbHNlaWZpZnMiLCJlbHNlaWZlbHNlcyIsIkVsc2VJZkNsYXVzZSIsImV4cHJlc3Npb24iLCIkdGhlbiIsIiRlbHNlIiwibG9jYXRpb24iLCJ0eXBlIiwidGhlbiIsImVsc2UiLCJvIiwidHJhbnNwaWxlIiwibWFwIiwidCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVUsQ0FBZDtBQUNBLElBQUlDLFlBQVksQ0FBaEI7QUFDQSxJQUFJQyxjQUFjLENBQWxCOztBQUVBOzs7Ozs7O0lBTU1DLFk7OztBQUVGLDBCQUFZQyxVQUFaLEVBQXdCQyxLQUF4QixFQUF1RTtBQUFBLFlBQXhDQyxLQUF3Qyx1RUFBaEMsWUFBVyxDQUFFLENBQW1CO0FBQUEsWUFBakJDLFFBQWlCLHVFQUFOLElBQU07O0FBQUE7O0FBQUE7O0FBSW5FLGNBQUtDLElBQUwsR0FBWSxnQkFBWjtBQUNBLGNBQUtKLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0ssSUFBTCxHQUFZSixLQUFaO0FBQ0EsY0FBS0ssSUFBTCxHQUFZSixLQUFaO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUm1FO0FBVXRFOzs7O2tDQUVTSSxDLEVBQUc7O0FBRVQsbUJBQU8sb0JBQWtCWCxTQUFsQixrQ0FDZ0IsS0FBS0ksVUFBTCxDQUFnQlEsU0FBaEIsQ0FBMEJELENBQTFCLENBRGhCLDJCQUVXVixXQUZYLGlDQUdjLEtBQUtRLElBQUwsQ0FBVUksR0FBVixDQUFjO0FBQUEsdUJBQUdDLEVBQUVGLFNBQUYsQ0FBWUQsQ0FBWixDQUFIO0FBQUEsYUFBZCxFQUFpQ0ksSUFBakMsQ0FBc0MsR0FBdEMsQ0FIZCx5QkFJQSxLQUFLTCxJQUFMLENBQVVFLFNBQVYsQ0FBb0JELENBQXBCLENBSkEsbUJBQVA7QUFNSDs7Ozs7O2tCQUlVUixZIiwiZmlsZSI6IkVsc2VJZkNsYXVzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbnZhciBlbHNlaWZzID0gMDtcbnZhciBlbHNlaWZpZnMgPSAwO1xudmFyIGVsc2VpZmVsc2VzID0gMDtcblxuLyoqXG4gKiBFbHNlSWZDbGF1c2VcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvblxuICogQHBhcmFtIHthcnJheTxFeHByZXNzaW9uPn0gaXRoZW5cbiAqIEBwYXJhbSB7YXJyYXk8RXhwcmVzc2lvbj59IGllbHNlXG4gKi9cbmNsYXNzIEVsc2VJZkNsYXVzZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbiwgJHRoZW4sICRlbHNlID0gZnVuY3Rpb24oKSB7fSwgbG9jYXRpb24gPSBudWxsKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnR5cGUgPSAnZWxzZS1pZi1jbGF1c2UnO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgICAgICB0aGlzLnRoZW4gPSAkdGhlbjtcbiAgICAgICAgdGhpcy5lbHNlID0gJGVsc2U7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIGBmdW5jdGlvbiBlbHNlaWYke2Vsc2VpZnMrK30oKSB7YCArXG4gICAgICAgICAgICBgcmV0dXJuIG1ha2UuJGlmKCR7dGhpcy5leHByZXNzaW9uLnRyYW5zcGlsZShvKX0sYCArXG4gICAgICAgICAgICBgZnVuY3Rpb24gaWYke2Vsc2VpZmlmcysrfSgpIHtgICtcbiAgICAgICAgICAgIGByZXR1cm4gJCRib3goWyR7dGhpcy50aGVuLm1hcCh0PT50LnRyYW5zcGlsZShvKSkuam9pbignLCcpfV0pfS5iaW5kKHRoaXMpLGAgK1xuICAgICAgICAgICAgYCR7dGhpcy5lbHNlLnRyYW5zcGlsZShvKX0pfS5iaW5kKHRoaXMpYDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBFbHNlSWZDbGF1c2VcbiJdfQ==