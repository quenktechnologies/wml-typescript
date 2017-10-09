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
        value: function transpile(o) {

            return '(' + this.logic.transpile(o) + ')? ' + this.iftrue.transpile(o) + ' : ' + this.iffalse.transpile(o);
        }
    }]);

    return TernaryExpression;
}(_Node3.default);

exports.default = TernaryExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGVybmFyeUV4cHJlc3Npb24uanMiXSwibmFtZXMiOlsiVGVybmFyeUV4cHJlc3Npb24iLCJsb2dpYyIsImlmdHJ1ZSIsImlmZmFsc2UiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwidHJhbnNwaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTU1BLGlCOzs7QUFFRiwrQkFBWUMsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkJDLE9BQTNCLEVBQW9DQyxRQUFwQyxFQUE4QztBQUFBOztBQUFBLDBJQUV0Q0EsUUFGc0M7O0FBRzVDLGNBQUtDLElBQUwsR0FBWSxvQkFBWjtBQUNFLGNBQUtKLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLE9BQUwsR0FBZUEsT0FBZjs7QUFOMEM7QUFRN0M7Ozs7a0NBRVNHLEMsRUFBRzs7QUFFVCx5QkFBVyxLQUFLTCxLQUFMLENBQVdNLFNBQVgsQ0FBcUJELENBQXJCLENBQVgsV0FBd0MsS0FBS0osTUFBTCxDQUFZSyxTQUFaLENBQXNCRCxDQUF0QixDQUF4QyxXQUFzRSxLQUFLSCxPQUFMLENBQWFJLFNBQWIsQ0FBdUJELENBQXZCLENBQXRFO0FBRUg7Ozs7OztrQkFJVU4saUIiLCJmaWxlIjoiVGVybmFyeUV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFRlcm5hcnlFeHByZXNzaW9uXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGxvZ2ljXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGlmdHJ1ZVxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBpZmZhbHNlXG4gKi9cbmNsYXNzIFRlcm5hcnlFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2dpYywgaWZ0cnVlLCBpZmZhbHNlLCBsb2NhdGlvbikge1xuXG4gICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICB0aGlzLnR5cGUgPSAndGVybmFyeS1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5sb2dpYyA9IGxvZ2ljO1xuICAgICAgICB0aGlzLmlmdHJ1ZSA9IGlmdHJ1ZTtcbiAgICAgICAgdGhpcy5pZmZhbHNlID0gaWZmYWxzZTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIGAoJHt0aGlzLmxvZ2ljLnRyYW5zcGlsZShvKX0pPyAke3RoaXMuaWZ0cnVlLnRyYW5zcGlsZShvKX0gOiAke3RoaXMuaWZmYWxzZS50cmFuc3BpbGUobyl9YDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXJuYXJ5RXhwcmVzc2lvblxuIl19