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

            return 'function elseif' + elseifs++ + '()' + ('{ return $$if(' + this.expression.transpile(o) + ',') + ('function if' + elseififs++ + '() ') + ('{ return ' + (0, _util.flatten)(this.then, o) + '; }, ') + (this.else.transpile(o) + ');}');
        }
    }]);

    return ElseIfClause;
}(_Node3.default);

exports.default = ElseIfClause;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRWxzZUlmQ2xhdXNlLmpzIl0sIm5hbWVzIjpbImVsc2VpZnMiLCJlbHNlaWZpZnMiLCJlbHNlaWZlbHNlcyIsIkVsc2VJZkNsYXVzZSIsImV4cHJlc3Npb24iLCIkdGhlbiIsIiRlbHNlIiwibG9jYXRpb24iLCJ0eXBlIiwidGhlbiIsImVsc2UiLCJvIiwidHJhbnNwaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxVQUFVLENBQWQ7QUFDQSxJQUFJQyxZQUFZLENBQWhCO0FBQ0EsSUFBSUMsY0FBYyxDQUFsQjs7QUFFQTs7Ozs7OztJQU1NQyxZOzs7QUFFRiwwQkFBWUMsVUFBWixFQUF3QkMsS0FBeEIsRUFBdUU7QUFBQSxZQUF4Q0MsS0FBd0MsdUVBQWhDLFlBQVcsQ0FBRSxDQUFtQjtBQUFBLFlBQWpCQyxRQUFpQix1RUFBTixJQUFNOztBQUFBOztBQUFBOztBQUluRSxjQUFLQyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxjQUFLSixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtLLElBQUwsR0FBWUosS0FBWjtBQUNBLGNBQUtLLElBQUwsR0FBWUosS0FBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVJtRTtBQVV0RTs7OztrQ0FFU0ksQyxFQUFHOztBQUVULG1CQUFPLG9CQUFrQlgsU0FBbEIsOEJBQ2MsS0FBS0ksVUFBTCxDQUFnQlEsU0FBaEIsQ0FBMEJELENBQTFCLENBRGQsMkJBRVdWLFdBRlgsMkJBR1MsbUJBQVEsS0FBS1EsSUFBYixFQUFtQkUsQ0FBbkIsQ0FIVCxlQUlBLEtBQUtELElBQUwsQ0FBVUUsU0FBVixDQUFvQkQsQ0FBcEIsQ0FKQSxTQUFQO0FBTUg7Ozs7OztrQkFJVVIsWSIsImZpbGUiOiJFbHNlSWZDbGF1c2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4uL3V0aWwnO1xuXG52YXIgZWxzZWlmcyA9IDA7XG52YXIgZWxzZWlmaWZzID0gMDtcbnZhciBlbHNlaWZlbHNlcyA9IDA7XG5cbi8qKlxuICogRWxzZUlmQ2xhdXNlXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGV4cHJlc3Npb25cbiAqIEBwYXJhbSB7YXJyYXk8RXhwcmVzc2lvbj59IGl0aGVuXG4gKiBAcGFyYW0ge2FycmF5PEV4cHJlc3Npb24+fSBpZWxzZVxuICovXG5jbGFzcyBFbHNlSWZDbGF1c2UgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24sICR0aGVuLCAkZWxzZSA9IGZ1bmN0aW9uKCkge30sIGxvY2F0aW9uID0gbnVsbCkge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy50eXBlID0gJ2Vsc2UtaWYtY2xhdXNlJztcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy50aGVuID0gJHRoZW47XG4gICAgICAgIHRoaXMuZWxzZSA9ICRlbHNlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIHJldHVybiBgZnVuY3Rpb24gZWxzZWlmJHtlbHNlaWZzKyt9KClgICtcbiAgICAgICAgICAgIGB7IHJldHVybiAkJGlmKCR7dGhpcy5leHByZXNzaW9uLnRyYW5zcGlsZShvKX0sYCArXG4gICAgICAgICAgICBgZnVuY3Rpb24gaWYke2Vsc2VpZmlmcysrfSgpIGAgK1xuICAgICAgICAgICAgYHsgcmV0dXJuICR7ZmxhdHRlbih0aGlzLnRoZW4sIG8pfTsgfSwgYCArXG4gICAgICAgICAgICBgJHt0aGlzLmVsc2UudHJhbnNwaWxlKG8pfSk7fWA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWxzZUlmQ2xhdXNlXG4iXX0=