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

            return 'function elseif' + elseifs++ + '()' + ('{ return $$if(' + this.expression.transpile(o) + ',') + ('function if' + elseififs++ + '() ') + ('{ return ' + (0, _util.flatten)(this.then, o) + '; }.bind(this), ') + (this.else.transpile(o) + ');}.bind(this)');
        }
    }]);

    return ElseIfClause;
}(_Node3.default);

exports.default = ElseIfClause;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRWxzZUlmQ2xhdXNlLmpzIl0sIm5hbWVzIjpbImVsc2VpZnMiLCJlbHNlaWZpZnMiLCJlbHNlaWZlbHNlcyIsIkVsc2VJZkNsYXVzZSIsImV4cHJlc3Npb24iLCIkdGhlbiIsIiRlbHNlIiwibG9jYXRpb24iLCJ0eXBlIiwidGhlbiIsImVsc2UiLCJvIiwidHJhbnNwaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxVQUFVLENBQWQ7QUFDQSxJQUFJQyxZQUFZLENBQWhCO0FBQ0EsSUFBSUMsY0FBYyxDQUFsQjs7QUFFQTs7Ozs7OztJQU1NQyxZOzs7QUFFRiwwQkFBWUMsVUFBWixFQUF3QkMsS0FBeEIsRUFBdUU7QUFBQSxZQUF4Q0MsS0FBd0MsdUVBQWhDLFlBQVcsQ0FBRSxDQUFtQjtBQUFBLFlBQWpCQyxRQUFpQix1RUFBTixJQUFNOztBQUFBOztBQUFBOztBQUluRSxjQUFLQyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxjQUFLSixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtLLElBQUwsR0FBWUosS0FBWjtBQUNBLGNBQUtLLElBQUwsR0FBWUosS0FBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVJtRTtBQVV0RTs7OztrQ0FFU0ksQyxFQUFHOztBQUVULG1CQUFPLG9CQUFrQlgsU0FBbEIsOEJBQ2MsS0FBS0ksVUFBTCxDQUFnQlEsU0FBaEIsQ0FBMEJELENBQTFCLENBRGQsMkJBRVdWLFdBRlgsMkJBR1MsbUJBQVEsS0FBS1EsSUFBYixFQUFtQkUsQ0FBbkIsQ0FIVCwwQkFJQSxLQUFLRCxJQUFMLENBQVVFLFNBQVYsQ0FBb0JELENBQXBCLENBSkEsb0JBQVA7QUFNSDs7Ozs7O2tCQUlVUixZIiwiZmlsZSI6IkVsc2VJZkNsYXVzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnLi4vdXRpbCc7XG5cbnZhciBlbHNlaWZzID0gMDtcbnZhciBlbHNlaWZpZnMgPSAwO1xudmFyIGVsc2VpZmVsc2VzID0gMDtcblxuLyoqXG4gKiBFbHNlSWZDbGF1c2VcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvblxuICogQHBhcmFtIHthcnJheTxFeHByZXNzaW9uPn0gaXRoZW5cbiAqIEBwYXJhbSB7YXJyYXk8RXhwcmVzc2lvbj59IGllbHNlXG4gKi9cbmNsYXNzIEVsc2VJZkNsYXVzZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbiwgJHRoZW4sICRlbHNlID0gZnVuY3Rpb24oKSB7fSwgbG9jYXRpb24gPSBudWxsKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnR5cGUgPSAnZWxzZS1pZi1jbGF1c2UnO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgICAgICB0aGlzLnRoZW4gPSAkdGhlbjtcbiAgICAgICAgdGhpcy5lbHNlID0gJGVsc2U7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIGBmdW5jdGlvbiBlbHNlaWYke2Vsc2VpZnMrK30oKWAgK1xuICAgICAgICAgICAgYHsgcmV0dXJuICQkaWYoJHt0aGlzLmV4cHJlc3Npb24udHJhbnNwaWxlKG8pfSxgICtcbiAgICAgICAgICAgIGBmdW5jdGlvbiBpZiR7ZWxzZWlmaWZzKyt9KCkgYCArXG4gICAgICAgICAgICBgeyByZXR1cm4gJHtmbGF0dGVuKHRoaXMudGhlbiwgbyl9OyB9LmJpbmQodGhpcyksIGAgK1xuICAgICAgICAgICAgYCR7dGhpcy5lbHNlLnRyYW5zcGlsZShvKX0pO30uYmluZCh0aGlzKWA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWxzZUlmQ2xhdXNlXG4iXX0=