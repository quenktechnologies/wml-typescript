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
var elseCount = 0;

/**
 * IfStatement 
 * @param {Expression} expression
 * @param {array<Expression>} ithen 
 * @param {array<Expression>} ielse 
 */

var IfStatement = function (_Node) {
    _inherits(IfStatement, _Node);

    function IfStatement(expression, ithen, ielse, location) {
        _classCallCheck(this, IfStatement);

        var _this = _possibleConstructorReturn(this, (IfStatement.__proto__ || Object.getPrototypeOf(IfStatement)).call(this, location));

        _this.type = 'if-statement';
        _this.expression = expression;
        _this.then = ithen;
        _this.else = ielse;

        return _this;
    }

    _createClass(IfStatement, [{
        key: 'transpile',
        value: function transpile() {

            var thens = this.then.map(function (c) {
                return c.transpile();
            });
            var elses = this.else.map(function (c) {
                return c.transpile();
            });

            return 'make.$if(' + this.expression.transpile() + ', ' + ('function if_' + thenCount + '(){ return [' + thens + '];}.bind(this), ') + ('function else_' + elseCount + '(){ return [' + elses + '];}.bind(this))');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var thens = this.then.map(function (c) {
                return c.compile(o);
            });
            var elses = this.else.map(function (c) {
                return c.compile();
            });

            return this.sourceNode(o.fileName, '').add('make.$if(').add(this.expression.compile(o)).add(', function if_' + thenCount + '(){ return [').add(thens).add('}];}.bind(this), function else_' + elseCount + '(){ return [').add(elses).add('}];}.bind(this))');
        }
    }]);

    return IfStatement;
}(_Node3.default);

exports.default = IfStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSWZTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsidGhlbkNvdW50IiwiZWxzZUNvdW50IiwiSWZTdGF0ZW1lbnQiLCJleHByZXNzaW9uIiwiaXRoZW4iLCJpZWxzZSIsImxvY2F0aW9uIiwidHlwZSIsInRoZW4iLCJlbHNlIiwidGhlbnMiLCJtYXAiLCJjIiwidHJhbnNwaWxlIiwiZWxzZXMiLCJvIiwiY29tcGlsZSIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWSxDQUFoQjtBQUNBLElBQUlDLFlBQVksQ0FBaEI7O0FBRUE7Ozs7Ozs7SUFNTUMsVzs7O0FBRUYseUJBQVlDLFVBQVosRUFBd0JDLEtBQXhCLEVBQStCQyxLQUEvQixFQUFzQ0MsUUFBdEMsRUFBZ0Q7QUFBQTs7QUFBQSw4SEFFdENBLFFBRnNDOztBQUc1QyxjQUFLQyxJQUFMLEdBQVksY0FBWjtBQUNBLGNBQUtKLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0ssSUFBTCxHQUFZSixLQUFaO0FBQ0EsY0FBS0ssSUFBTCxHQUFZSixLQUFaOztBQU40QztBQVEvQzs7OztvQ0FFVzs7QUFFUixnQkFBSUssUUFBUSxLQUFLRixJQUFMLENBQVVHLEdBQVYsQ0FBYztBQUFBLHVCQUFLQyxFQUFFQyxTQUFGLEVBQUw7QUFBQSxhQUFkLENBQVo7QUFDQSxnQkFBSUMsUUFBUSxLQUFLTCxJQUFMLENBQVVFLEdBQVYsQ0FBYztBQUFBLHVCQUFLQyxFQUFFQyxTQUFGLEVBQUw7QUFBQSxhQUFkLENBQVo7O0FBRUEsbUJBQU8sY0FBWSxLQUFLVixVQUFMLENBQWdCVSxTQUFoQixFQUFaLDRCQUNZYixTQURaLG9CQUNvQ1UsS0FEcEMsNkNBRWNULFNBRmQsb0JBRXNDYSxLQUZ0QyxxQkFBUDtBQUlIOzs7Z0NBRU9DLEMsRUFBRzs7QUFFUCxnQkFBSUwsUUFBUSxLQUFLRixJQUFMLENBQVVHLEdBQVYsQ0FBYztBQUFBLHVCQUFLQyxFQUFFSSxPQUFGLENBQVVELENBQVYsQ0FBTDtBQUFBLGFBQWQsQ0FBWjtBQUNBLGdCQUFJRCxRQUFRLEtBQUtMLElBQUwsQ0FBVUUsR0FBVixDQUFjO0FBQUEsdUJBQUtDLEVBQUVJLE9BQUYsRUFBTDtBQUFBLGFBQWQsQ0FBWjs7QUFFQSxtQkFBTyxLQUFLQyxVQUFMLENBQWdCRixFQUFFRyxRQUFsQixFQUE0QixFQUE1QixFQUNQQyxHQURPLENBQ0gsV0FERyxFQUVQQSxHQUZPLENBRUgsS0FBS2hCLFVBQUwsQ0FBZ0JhLE9BQWhCLENBQXdCRCxDQUF4QixDQUZHLEVBR1BJLEdBSE8sb0JBR2NuQixTQUhkLG1CQUlQbUIsR0FKTyxDQUlIVCxLQUpHLEVBS1BTLEdBTE8scUNBSytCbEIsU0FML0IsbUJBTVBrQixHQU5PLENBTUhMLEtBTkcsRUFPUEssR0FQTyxDQU9ILGtCQVBHLENBQVA7QUFTSDs7Ozs7O2tCQUlVakIsVyIsImZpbGUiOiJJZlN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbnZhciB0aGVuQ291bnQgPSAwO1xudmFyIGVsc2VDb3VudCA9IDA7XG5cbi8qKlxuICogSWZTdGF0ZW1lbnQgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGV4cHJlc3Npb25cbiAqIEBwYXJhbSB7YXJyYXk8RXhwcmVzc2lvbj59IGl0aGVuIFxuICogQHBhcmFtIHthcnJheTxFeHByZXNzaW9uPn0gaWVsc2UgXG4gKi9cbmNsYXNzIElmU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uLCBpdGhlbiwgaWVsc2UsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaWYtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy50aGVuID0gaXRoZW47XG4gICAgICAgIHRoaXMuZWxzZSA9IGllbHNlO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHZhciB0aGVucyA9IHRoaXMudGhlbi5tYXAoYyA9PiBjLnRyYW5zcGlsZSgpKTtcbiAgICAgICAgdmFyIGVsc2VzID0gdGhpcy5lbHNlLm1hcChjID0+IGMudHJhbnNwaWxlKCkpO1xuXG4gICAgICAgIHJldHVybiBgbWFrZS4kaWYoJHt0aGlzLmV4cHJlc3Npb24udHJhbnNwaWxlKCl9LCBgICtcbiAgICAgICAgICAgIGBmdW5jdGlvbiBpZl8ke3RoZW5Db3VudH0oKXsgcmV0dXJuIFske3RoZW5zfV07fS5iaW5kKHRoaXMpLCBgICtcbiAgICAgICAgICAgIGBmdW5jdGlvbiBlbHNlXyR7ZWxzZUNvdW50fSgpeyByZXR1cm4gWyR7ZWxzZXN9XTt9LmJpbmQodGhpcykpYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciB0aGVucyA9IHRoaXMudGhlbi5tYXAoYyA9PiBjLmNvbXBpbGUobykpO1xuICAgICAgICB2YXIgZWxzZXMgPSB0aGlzLmVsc2UubWFwKGMgPT4gYy5jb21waWxlKCkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpLlxuICAgICAgICBhZGQoJ21ha2UuJGlmKCcpLlxuICAgICAgICBhZGQodGhpcy5leHByZXNzaW9uLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoYCwgZnVuY3Rpb24gaWZfJHt0aGVuQ291bnR9KCl7IHJldHVybiBbYCkuXG4gICAgICAgIGFkZCh0aGVucykuXG4gICAgICAgIGFkZChgfV07fS5iaW5kKHRoaXMpLCBmdW5jdGlvbiBlbHNlXyR7ZWxzZUNvdW50fSgpeyByZXR1cm4gW2ApLlxuICAgICAgICBhZGQoZWxzZXMpLlxuICAgICAgICBhZGQoJ31dO30uYmluZCh0aGlzKSknKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJZlN0YXRlbWVudFxuIl19