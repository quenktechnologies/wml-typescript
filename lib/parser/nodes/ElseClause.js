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

            return 'function else_clause' + elses++ + '() {' + ('return $$box([' + this.children.map(function (c) {
                return c.transpile(o);
            }).join(',') + ']);') + '}.bind(this)';
        }
    }]);

    return ElseClause;
}(_Node3.default);

exports.default = ElseClause;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRWxzZUNsYXVzZS5qcyJdLCJuYW1lcyI6WyJlbHNlcyIsIkVsc2VDbGF1c2UiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwidHlwZSIsIm8iLCJtYXAiLCJjIiwidHJhbnNwaWxlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUSxDQUFaOztBQUVBOzs7OztJQUlNQyxVOzs7QUFFRiwwQkFBMEM7QUFBQSxZQUE5QkMsUUFBOEIsdUVBQW5CLEVBQW1CO0FBQUEsWUFBZkMsUUFBZSx1RUFBSixFQUFJOztBQUFBOztBQUFBOztBQUl0QyxjQUFLQyxJQUFMLEdBQVksYUFBWjtBQUNBLGNBQUtGLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTnNDO0FBUXpDOzs7O2tDQUVTRSxDLEVBQUc7O0FBRVQsbUJBQU8seUJBQXVCTCxPQUF2QixnQ0FDYyxLQUFLRSxRQUFMLENBQWNJLEdBQWQsQ0FBa0I7QUFBQSx1QkFBR0MsRUFBRUMsU0FBRixDQUFZSCxDQUFaLENBQUg7QUFBQSxhQUFsQixFQUFxQ0ksSUFBckMsQ0FBMEMsR0FBMUMsQ0FEZCwwQkFBUDtBQUlIOzs7Ozs7a0JBSVVSLFUiLCJmaWxlIjoiRWxzZUNsYXVzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbnZhciBlbHNlcyA9IDA7XG5cbi8qKlxuICogRWxzZUNsYXVzZVxuICogQHBhcmFtIHthcnJheTxDaGlsZD59XG4gKi9cbmNsYXNzIEVsc2VDbGF1c2UgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNoaWxkcmVuID0gW10sIGxvY2F0aW9uID0ge30pIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudHlwZSA9ICdlbHNlLWNsYXVzZSc7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gYGZ1bmN0aW9uIGVsc2VfY2xhdXNlJHtlbHNlcysrfSgpIHtgICtcbiAgICAgICAgICAgIGByZXR1cm4gJCRib3goWyR7dGhpcy5jaGlsZHJlbi5tYXAoYz0+Yy50cmFuc3BpbGUobykpLmpvaW4oJywnKX1dKTtgICtcbiAgICAgICAgICAgIGB9LmJpbmQodGhpcylgO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsc2VDbGF1c2VcbiJdfQ==