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

        var _this = _possibleConstructorReturn(this, (CaseStatement.__proto__ || Object.getPrototypeOf(CaseStatement)).call(this, location));

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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ2FzZVN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJjb3VudCIsIkNhc2VTdGF0ZW1lbnQiLCJleHByZXNzaW9uIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInR5cGUiLCJ0cmFuc3BpbGVMaXN0IiwibyIsIm5vZGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJjb21waWxlTGlzdCIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUSxDQUFaOztBQUVBOzs7Ozs7O0lBTU1DLGE7OztBQUVGLDJCQUFZQyxVQUFaLEVBQXdCQyxRQUF4QixFQUFrQ0MsUUFBbEMsRUFBNEM7QUFBQTs7QUFBQSxrSUFFbENBLFFBRmtDOztBQUd4QyxjQUFLQyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxjQUFLSCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTndDO0FBUTNDOzs7O29DQUVXOztBQUVSSixvQkFBUUEsUUFBUSxDQUFoQjtBQUNBLG1CQUFPLDRCQUEwQkEsS0FBMUIsMEJBQ0QsS0FBS00sYUFBTCxDQUFtQixLQUFLSCxRQUF4QixDQURDLG9CQUFQO0FBR0g7OztnQ0FFT0ksQyxFQUFHOztBQUVQUCxvQkFBUUEsUUFBUSxDQUFoQjs7QUFFQSxnQkFBSVEsT0FBTyxLQUFLQyxVQUFMLENBQWdCRixFQUFFRyxRQUFsQiw4QkFBc0RWLEtBQXRELG1CQUFYOztBQUVBLG1CQUFPLEtBQUtXLFdBQUwsQ0FBaUIsS0FBS1IsUUFBdEIsRUFBZ0NLLElBQWhDLEVBQXNDRCxDQUF0QyxFQUNQSyxHQURPLENBQ0gsZUFERyxDQUFQO0FBR0g7Ozs7OztrQkFJVVgsYSIsImZpbGUiOiJDYXNlU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxudmFyIGNvdW50ID0gMDtcblxuLyoqXG4gKiBDYXNlU3RhdGVtZW50IFxuICogQHBhcmFtIHtWYWx1ZUV4cHJlc3Npb259IGV4cHJlc3Npb25cbiAqIEBwYXJhbSB7YXJyYXk8RXhwcmVzc2lvbj59IGNoaWxkcmVuIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgQ2FzZVN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbiwgY2hpbGRyZW4sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnY2FzZS1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICBjb3VudCA9IGNvdW50ICsgMTtcbiAgICAgICAgcmV0dXJuIGBmdW5jdGlvbiBjYXNlX3N0YXRlbWVudCR7Y291bnR9KCkgeyByZXR1cm5gK1xuICAgICAgICAgIGBbJHt0aGlzLnRyYW5zcGlsZUxpc3QodGhpcy5jaGlsZHJlbil9XTt9LmJpbmQodGhpcylgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgY291bnQgPSBjb3VudCArIDE7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgYGZ1bmN0aW9uIGNhc2Vfc3RhdGVtZW50JHtjb3VudH0oKSB7IHJldHVybiBbYCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5jaGlsZHJlbiwgbm9kZSwgbykuXG4gICAgICAgIGFkZCgnXTt9LmJpbmQodGhpcycpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VTdGF0ZW1lbnRcbiJdfQ==