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

var count = 0;

/**
 * CaseStatement
 * @param {ValueExpression} expression
 * @param {array<Expression>} children
 * @param {Location} location
 */

var CaseStatement = function (_Node) {
    _inherits(CaseStatement, _Node);

    function CaseStatement(expression, children, location) {
        _classCallCheck(this, CaseStatement);

        var _this = _possibleConstructorReturn(this, (CaseStatement.__proto__ || Object.getPrototypeOf(CaseStatement)).call(this));

        _this.type = 'case-statement';
        _this.expression = expression;
        _this.children = children;
        _this.location = location;

        return _this;
    }

    _createClass(CaseStatement, [{
        key: 'transpile',
        value: function transpile() {

            count = count + 1;
            return 'function case_statement' + count + '() { ' + ('return $box([' + this.children.map(function (c) {
                return c.transpile(o);
            }).join(',') + ']);}.bind(this)');
        }
    }]);

    return CaseStatement;
}(_Node3.default);

exports.default = CaseStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ2FzZVN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJjb3VudCIsIkNhc2VTdGF0ZW1lbnQiLCJleHByZXNzaW9uIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInR5cGUiLCJtYXAiLCJjIiwidHJhbnNwaWxlIiwibyIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVEsQ0FBWjs7QUFFQTs7Ozs7OztJQU1NQyxhOzs7QUFFRiwyQkFBWUMsVUFBWixFQUF3QkMsUUFBeEIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQUE7O0FBQUE7O0FBSXhDLGNBQUtDLElBQUwsR0FBWSxnQkFBWjtBQUNBLGNBQUtILFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFQd0M7QUFTM0M7Ozs7b0NBRVc7O0FBRVJKLG9CQUFRQSxRQUFRLENBQWhCO0FBQ0EsbUJBQU8sNEJBQTBCQSxLQUExQixnQ0FDYSxLQUFLRyxRQUFMLENBQWNHLEdBQWQsQ0FBa0I7QUFBQSx1QkFBR0MsRUFBRUMsU0FBRixDQUFZQyxDQUFaLENBQUg7QUFBQSxhQUFsQixFQUFxQ0MsSUFBckMsQ0FBMEMsR0FBMUMsQ0FEYixxQkFBUDtBQUdIOzs7Ozs7a0JBSWNULGEiLCJmaWxlIjoiQ2FzZVN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbnZhciBjb3VudCA9IDA7XG5cbi8qKlxuICogQ2FzZVN0YXRlbWVudFxuICogQHBhcmFtIHtWYWx1ZUV4cHJlc3Npb259IGV4cHJlc3Npb25cbiAqIEBwYXJhbSB7YXJyYXk8RXhwcmVzc2lvbj59IGNoaWxkcmVuXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBDYXNlU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uLCBjaGlsZHJlbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudHlwZSA9ICdjYXNlLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuICAgICAgICByZXR1cm4gYGZ1bmN0aW9uIGNhc2Vfc3RhdGVtZW50JHtjb3VudH0oKSB7IGAgK1xuICAgICAgICAgICAgYHJldHVybiAkYm94KFske3RoaXMuY2hpbGRyZW4ubWFwKGM9PmMudHJhbnNwaWxlKG8pKS5qb2luKCcsJyl9XSk7fS5iaW5kKHRoaXMpYDtcblxuICAgIH1cblxufVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgQ2FzZVN0YXRlbWVudFxuIl19