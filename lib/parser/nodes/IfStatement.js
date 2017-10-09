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

var thenCount = 0;

/**
 * IfStatement
 * @param {Expression} expression
 * @param {array<Expression>} ithen
 * @param {array<Expression>} ielse
 */

var IfStatement = function (_Node) {
    _inherits(IfStatement, _Node);

    function IfStatement(expression, ithen) {
        var ielse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var location = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        _classCallCheck(this, IfStatement);

        var _this = _possibleConstructorReturn(this, (IfStatement.__proto__ || Object.getPrototypeOf(IfStatement)).call(this, location));

        _this.type = 'if-statement';
        _this.expression = expression;
        _this.then = ithen;
        _this.else = ielse;
        _this.location = location;

        return _this;
    }

    _createClass(IfStatement, [{
        key: 'transpile',
        value: function transpile(o) {

            return '$$if(' + this.expression.transpile(o) + ', ' + ('function if' + thenCount++ + '()') + ('{ return ' + (0, _util.flatten)(this.then, o) + ' },') + ((this.else ? this.else.transpile(o) : '$$empty') + ')');
        }
    }]);

    return IfStatement;
}(_Node3.default);

exports.default = IfStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSWZTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsidGhlbkNvdW50IiwiSWZTdGF0ZW1lbnQiLCJleHByZXNzaW9uIiwiaXRoZW4iLCJpZWxzZSIsImxvY2F0aW9uIiwidHlwZSIsInRoZW4iLCJlbHNlIiwibyIsInRyYW5zcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWSxDQUFoQjs7QUFFQTs7Ozs7OztJQU1NQyxXOzs7QUFFRix5QkFBWUMsVUFBWixFQUF3QkMsS0FBeEIsRUFBOEQ7QUFBQSxZQUEvQkMsS0FBK0IsdUVBQXZCLElBQXVCO0FBQUEsWUFBakJDLFFBQWlCLHVFQUFOLElBQU07O0FBQUE7O0FBQUEsOEhBRXBEQSxRQUZvRDs7QUFJMUQsY0FBS0MsSUFBTCxHQUFZLGNBQVo7QUFDQSxjQUFLSixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtLLElBQUwsR0FBWUosS0FBWjtBQUNBLGNBQUtLLElBQUwsR0FBWUosS0FBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVIwRDtBQVU3RDs7OztrQ0FFU0ksQyxFQUFHOztBQUVULG1CQUFPLFVBQVEsS0FBS1AsVUFBTCxDQUFnQlEsU0FBaEIsQ0FBMEJELENBQTFCLENBQVIsMkJBQ1dULFdBRFgsMEJBRVMsbUJBQVEsS0FBS08sSUFBYixFQUFtQkUsQ0FBbkIsQ0FGVCxjQUdBLEtBQUtELElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVFLFNBQVYsQ0FBb0JELENBQXBCLENBQVosR0FBcUMsU0FIckMsUUFBUDtBQUtIOzs7Ozs7a0JBSVVSLFciLCJmaWxlIjoiSWZTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4uL3V0aWwnO1xuXG52YXIgdGhlbkNvdW50ID0gMDtcblxuLyoqXG4gKiBJZlN0YXRlbWVudFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge2FycmF5PEV4cHJlc3Npb24+fSBpdGhlblxuICogQHBhcmFtIHthcnJheTxFeHByZXNzaW9uPn0gaWVsc2VcbiAqL1xuY2xhc3MgSWZTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24sIGl0aGVuLCBpZWxzZSA9IG51bGwsIGxvY2F0aW9uID0gbnVsbCkge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcblxuICAgICAgICB0aGlzLnR5cGUgPSAnaWYtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy50aGVuID0gaXRoZW47XG4gICAgICAgIHRoaXMuZWxzZSA9IGllbHNlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIHJldHVybiBgJCRpZigke3RoaXMuZXhwcmVzc2lvbi50cmFuc3BpbGUobyl9LCBgICtcbiAgICAgICAgICAgIGBmdW5jdGlvbiBpZiR7dGhlbkNvdW50Kyt9KClgICtcbiAgICAgICAgICAgIGB7IHJldHVybiAke2ZsYXR0ZW4odGhpcy50aGVuLCBvKX0gfSxgICtcbiAgICAgICAgICAgIGAke3RoaXMuZWxzZSA/IHRoaXMuZWxzZS50cmFuc3BpbGUobykgOiAnJCRlbXB0eSd9KWA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSWZTdGF0ZW1lbnRcbiJdfQ==