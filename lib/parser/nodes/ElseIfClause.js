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

            return 'function elseif' + elseifs++ + '()' + ('{ return $$if(' + this.expression.transpile(o) + ',') + ('function if' + elseififs++ + '() ') + ('{ return ' + (0, _util.flatten)(this.then, o) + '; }, ') + (this.else.transpile(o) + ');}.bind(this)');
        }
    }]);

    return ElseIfClause;
}(_Node3.default);

exports.default = ElseIfClause;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRWxzZUlmQ2xhdXNlLmpzIl0sIm5hbWVzIjpbImVsc2VpZnMiLCJlbHNlaWZpZnMiLCJlbHNlaWZlbHNlcyIsIkVsc2VJZkNsYXVzZSIsImV4cHJlc3Npb24iLCIkdGhlbiIsIiRlbHNlIiwibG9jYXRpb24iLCJ0eXBlIiwidGhlbiIsImVsc2UiLCJvIiwidHJhbnNwaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxVQUFVLENBQWQ7QUFDQSxJQUFJQyxZQUFZLENBQWhCO0FBQ0EsSUFBSUMsY0FBYyxDQUFsQjs7QUFFQTs7Ozs7OztJQU1NQyxZOzs7QUFFRiwwQkFBWUMsVUFBWixFQUF3QkMsS0FBeEIsRUFBdUU7QUFBQSxZQUF4Q0MsS0FBd0MsdUVBQWhDLFlBQVcsQ0FBRSxDQUFtQjtBQUFBLFlBQWpCQyxRQUFpQix1RUFBTixJQUFNOztBQUFBOztBQUFBOztBQUluRSxjQUFLQyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxjQUFLSixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtLLElBQUwsR0FBWUosS0FBWjtBQUNBLGNBQUtLLElBQUwsR0FBWUosS0FBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVJtRTtBQVV0RTs7OztrQ0FFU0ksQyxFQUFHOztBQUVULG1CQUFPLG9CQUFrQlgsU0FBbEIsOEJBQ2MsS0FBS0ksVUFBTCxDQUFnQlEsU0FBaEIsQ0FBMEJELENBQTFCLENBRGQsMkJBRVdWLFdBRlgsMkJBR1MsbUJBQVEsS0FBS1EsSUFBYixFQUFtQkUsQ0FBbkIsQ0FIVCxlQUlBLEtBQUtELElBQUwsQ0FBVUUsU0FBVixDQUFvQkQsQ0FBcEIsQ0FKQSxvQkFBUDtBQU1IOzs7Ozs7a0JBSVVSLFkiLCJmaWxlIjoiRWxzZUlmQ2xhdXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICcuLi91dGlsJztcblxudmFyIGVsc2VpZnMgPSAwO1xudmFyIGVsc2VpZmlmcyA9IDA7XG52YXIgZWxzZWlmZWxzZXMgPSAwO1xuXG4vKipcbiAqIEVsc2VJZkNsYXVzZVxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge2FycmF5PEV4cHJlc3Npb24+fSBpdGhlblxuICogQHBhcmFtIHthcnJheTxFeHByZXNzaW9uPn0gaWVsc2VcbiAqL1xuY2xhc3MgRWxzZUlmQ2xhdXNlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uLCAkdGhlbiwgJGVsc2UgPSBmdW5jdGlvbigpIHt9LCBsb2NhdGlvbiA9IG51bGwpIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudHlwZSA9ICdlbHNlLWlmLWNsYXVzZSc7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMudGhlbiA9ICR0aGVuO1xuICAgICAgICB0aGlzLmVsc2UgPSAkZWxzZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gYGZ1bmN0aW9uIGVsc2VpZiR7ZWxzZWlmcysrfSgpYCArXG4gICAgICAgICAgICBgeyByZXR1cm4gJCRpZigke3RoaXMuZXhwcmVzc2lvbi50cmFuc3BpbGUobyl9LGAgK1xuICAgICAgICAgICAgYGZ1bmN0aW9uIGlmJHtlbHNlaWZpZnMrK30oKSBgICtcbiAgICAgICAgICAgIGB7IHJldHVybiAke2ZsYXR0ZW4odGhpcy50aGVuLCBvKX07IH0sIGAgK1xuICAgICAgICAgICAgYCR7dGhpcy5lbHNlLnRyYW5zcGlsZShvKX0pO30uYmluZCh0aGlzKWA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWxzZUlmQ2xhdXNlXG4iXX0=