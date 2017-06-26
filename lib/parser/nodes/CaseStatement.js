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
            return 'function case_statement' + count + '() { return' + ('[' + this.transpileList(this.children) + '];}.bind(this)');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            count = count + 1;

            var node = this.sourceNode(o.fileName, 'function case_statement' + count + '() { return [');

            return this.compileList(this.children, node, o).add('];}.bind(this');
        }
    }]);

    return CaseStatement;
}(_Node3.default);

exports.default = CaseStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ2FzZVN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJjb3VudCIsIkNhc2VTdGF0ZW1lbnQiLCJleHByZXNzaW9uIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInR5cGUiLCJ0cmFuc3BpbGVMaXN0IiwibyIsIm5vZGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJjb21waWxlTGlzdCIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUSxDQUFaOztBQUVBOzs7Ozs7O0lBTU1DLGE7OztBQUVGLDJCQUFZQyxVQUFaLEVBQXdCQyxRQUF4QixFQUFrQ0MsUUFBbEMsRUFBNEM7QUFBQTs7QUFBQTs7QUFJeEMsY0FBS0MsSUFBTCxHQUFZLGdCQUFaO0FBQ0EsY0FBS0gsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVB3QztBQVMzQzs7OztvQ0FFVzs7QUFFUkosb0JBQVFBLFFBQVEsQ0FBaEI7QUFDQSxtQkFBTyw0QkFBMEJBLEtBQTFCLDBCQUNELEtBQUtNLGFBQUwsQ0FBbUIsS0FBS0gsUUFBeEIsQ0FEQyxvQkFBUDtBQUdIOzs7Z0NBRU9JLEMsRUFBRzs7QUFFUFAsb0JBQVFBLFFBQVEsQ0FBaEI7O0FBRUEsZ0JBQUlRLE9BQU8sS0FBS0MsVUFBTCxDQUFnQkYsRUFBRUcsUUFBbEIsOEJBQXNEVixLQUF0RCxtQkFBWDs7QUFFQSxtQkFBTyxLQUFLVyxXQUFMLENBQWlCLEtBQUtSLFFBQXRCLEVBQWdDSyxJQUFoQyxFQUFzQ0QsQ0FBdEMsRUFDUEssR0FETyxDQUNILGVBREcsQ0FBUDtBQUdIOzs7Ozs7a0JBSVVYLGEiLCJmaWxlIjoiQ2FzZVN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbnZhciBjb3VudCA9IDA7XG5cbi8qKlxuICogQ2FzZVN0YXRlbWVudFxuICogQHBhcmFtIHtWYWx1ZUV4cHJlc3Npb259IGV4cHJlc3Npb25cbiAqIEBwYXJhbSB7YXJyYXk8RXhwcmVzc2lvbj59IGNoaWxkcmVuXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBDYXNlU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uLCBjaGlsZHJlbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudHlwZSA9ICdjYXNlLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuICAgICAgICByZXR1cm4gYGZ1bmN0aW9uIGNhc2Vfc3RhdGVtZW50JHtjb3VudH0oKSB7IHJldHVybmArXG4gICAgICAgICAgYFske3RoaXMudHJhbnNwaWxlTGlzdCh0aGlzLmNoaWxkcmVuKX1dO30uYmluZCh0aGlzKWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICBjb3VudCA9IGNvdW50ICsgMTtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCBgZnVuY3Rpb24gY2FzZV9zdGF0ZW1lbnQke2NvdW50fSgpIHsgcmV0dXJuIFtgKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlTGlzdCh0aGlzLmNoaWxkcmVuLCBub2RlLCBvKS5cbiAgICAgICAgYWRkKCddO30uYmluZCh0aGlzJyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FzZVN0YXRlbWVudFxuIl19