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

            return '$$if(' + this.expression.transpile() + ', ' + ('function if' + thenCount++ + '() {') + ('return $$box([' + this.then.map(function (t) {
                return t.transpile(o);
            }).join(',') + '])') + '}.bind(this), ' + (' ' + (this.else ? this.else.transpile(o) : '$$empty') + ')');
        }
    }]);

    return IfStatement;
}(_Node3.default);

exports.default = IfStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSWZTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsidGhlbkNvdW50IiwiSWZTdGF0ZW1lbnQiLCJleHByZXNzaW9uIiwiaXRoZW4iLCJpZWxzZSIsImxvY2F0aW9uIiwidHlwZSIsInRoZW4iLCJlbHNlIiwibyIsInRyYW5zcGlsZSIsIm1hcCIsInQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZLENBQWhCOztBQUVBOzs7Ozs7O0lBTU1DLFc7OztBQUVGLHlCQUFZQyxVQUFaLEVBQXdCQyxLQUF4QixFQUE4RDtBQUFBLFlBQS9CQyxLQUErQix1RUFBdkIsSUFBdUI7QUFBQSxZQUFqQkMsUUFBaUIsdUVBQU4sSUFBTTs7QUFBQTs7QUFBQSw4SEFFcERBLFFBRm9EOztBQUkxRCxjQUFLQyxJQUFMLEdBQVksY0FBWjtBQUNBLGNBQUtKLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0ssSUFBTCxHQUFZSixLQUFaO0FBQ0EsY0FBS0ssSUFBTCxHQUFZSixLQUFaO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUjBEO0FBVTdEOzs7O2tDQUVTSSxDLEVBQUc7O0FBRVQsbUJBQU8sVUFBUSxLQUFLUCxVQUFMLENBQWdCUSxTQUFoQixFQUFSLDJCQUNXVixXQURYLGlDQUVjLEtBQUtPLElBQUwsQ0FBVUksR0FBVixDQUFjO0FBQUEsdUJBQUlDLEVBQUVGLFNBQUYsQ0FBWUQsQ0FBWixDQUFKO0FBQUEsYUFBZCxFQUFrQ0ksSUFBbEMsQ0FBdUMsR0FBdkMsQ0FGZCxzQ0FJQyxLQUFLTCxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVRSxTQUFWLENBQW9CRCxDQUFwQixDQUFaLEdBQXFDLFNBSnRDLFFBQVA7QUFNSDs7Ozs7O2tCQUlVUixXIiwiZmlsZSI6IklmU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxudmFyIHRoZW5Db3VudCA9IDA7XG5cbi8qKlxuICogSWZTdGF0ZW1lbnRcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvblxuICogQHBhcmFtIHthcnJheTxFeHByZXNzaW9uPn0gaXRoZW5cbiAqIEBwYXJhbSB7YXJyYXk8RXhwcmVzc2lvbj59IGllbHNlXG4gKi9cbmNsYXNzIElmU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uLCBpdGhlbiwgaWVsc2UgPSBudWxsLCBsb2NhdGlvbiA9IG51bGwpIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG5cbiAgICAgICAgdGhpcy50eXBlID0gJ2lmLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMudGhlbiA9IGl0aGVuO1xuICAgICAgICB0aGlzLmVsc2UgPSBpZWxzZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gYCQkaWYoJHt0aGlzLmV4cHJlc3Npb24udHJhbnNwaWxlKCl9LCBgICtcbiAgICAgICAgICAgIGBmdW5jdGlvbiBpZiR7dGhlbkNvdW50Kyt9KCkge2AgK1xuICAgICAgICAgICAgYHJldHVybiAkJGJveChbJHt0aGlzLnRoZW4ubWFwKHQgPT50LnRyYW5zcGlsZShvKSkuam9pbignLCcpfV0pYCArXG4gICAgICAgICAgICBgfS5iaW5kKHRoaXMpLCBgICtcbiAgICAgICAgICAgIGAgJHt0aGlzLmVsc2UgPyB0aGlzLmVsc2UudHJhbnNwaWxlKG8pIDogJyQkZW1wdHknfSlgO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IElmU3RhdGVtZW50XG4iXX0=