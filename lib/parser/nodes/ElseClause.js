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

var elses = 0;

/**
 * ElseClause
 * @param {array<Child>}
 */

var ElseClause = function (_Node) {
    _inherits(ElseClause, _Node);

    function ElseClause() {
        var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, ElseClause);

        var _this = _possibleConstructorReturn(this, (ElseClause.__proto__ || Object.getPrototypeOf(ElseClause)).call(this));

        _this.type = 'else-clause';
        _this.children = children;
        _this.location = location;

        return _this;
    }

    _createClass(ElseClause, [{
        key: 'transpile',
        value: function transpile(o) {

            return 'function else_clause' + elses++ + '()' + ('{ return ' + (0, _util.flatten)(this.children, o) + ' }');
        }
    }]);

    return ElseClause;
}(_Node3.default);

exports.default = ElseClause;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRWxzZUNsYXVzZS5qcyJdLCJuYW1lcyI6WyJlbHNlcyIsIkVsc2VDbGF1c2UiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwidHlwZSIsIm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztBQUNBLElBQUlBLFFBQVEsQ0FBWjs7QUFFQTs7Ozs7SUFJTUMsVTs7O0FBRUYsMEJBQTBDO0FBQUEsWUFBOUJDLFFBQThCLHVFQUFuQixFQUFtQjtBQUFBLFlBQWZDLFFBQWUsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFJdEMsY0FBS0MsSUFBTCxHQUFZLGFBQVo7QUFDQSxjQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQU5zQztBQVF6Qzs7OztrQ0FFU0UsQyxFQUFHOztBQUVULG1CQUFPLHlCQUF1QkwsT0FBdkIseUJBQ1MsbUJBQVEsS0FBS0UsUUFBYixFQUF1QkcsQ0FBdkIsQ0FEVCxRQUFQO0FBR0g7Ozs7OztrQkFJVUosVSIsImZpbGUiOiJFbHNlQ2xhdXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICcuLi91dGlsJztcbnZhciBlbHNlcyA9IDA7XG5cbi8qKlxuICogRWxzZUNsYXVzZVxuICogQHBhcmFtIHthcnJheTxDaGlsZD59XG4gKi9cbmNsYXNzIEVsc2VDbGF1c2UgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNoaWxkcmVuID0gW10sIGxvY2F0aW9uID0ge30pIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudHlwZSA9ICdlbHNlLWNsYXVzZSc7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gYGZ1bmN0aW9uIGVsc2VfY2xhdXNlJHtlbHNlcysrfSgpYCArXG4gICAgICAgICAgICBgeyByZXR1cm4gJHtmbGF0dGVuKHRoaXMuY2hpbGRyZW4sIG8pfSB9YDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBFbHNlQ2xhdXNlXG4iXX0=