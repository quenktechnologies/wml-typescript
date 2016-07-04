'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

/**
 * UnaryExpression 
 * @param {string} op 
 * @param {Expression} expression 
 * @param {Location} location 
 */

var UnaryExpression = (function (_Node) {
  _inherits(UnaryExpression, _Node);

  function UnaryExpression(op, expression, location) {
    _classCallCheck(this, UnaryExpression);

    _get(Object.getPrototypeOf(UnaryExpression.prototype), 'constructor', this).call(this, location);
    this.op = op;
    this.expression = expression;
  }

  _createClass(UnaryExpression, [{
    key: 'transpile',
    value: function transpile() {

      return '' + this.op + this.expression.transpile();
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      return this.sourceNode(o.fileName, this.op).add(this.expression.compile(o));
    }
  }]);

  return UnaryExpression;
})(_Node3['default']);

exports['default'] = UnaryExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL1VuYXJ5RXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7Ozs7OztJQVFuQixlQUFlO1lBQWYsZUFBZTs7QUFFUixXQUZQLGVBQWUsQ0FFUCxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTswQkFGbEMsZUFBZTs7QUFJakIsK0JBSkUsZUFBZSw2Q0FJWCxRQUFRLEVBQUU7QUFDaEIsUUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDYixRQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztHQUU5Qjs7ZUFSRyxlQUFlOztXQVVWLHFCQUFHOztBQUVkLGtCQUFVLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBRztLQUUvQzs7O1dBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVULGFBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FFbkM7OztTQXJCRyxlQUFlOzs7cUJBd0JOLGVBQWUiLCJmaWxlIjoiVW5hcnlFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBVbmFyeUV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge3N0cmluZ30gb3AgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgVW5hcnlFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgY29uc3RydWN0b3Iob3AsIGV4cHJlc3Npb24sIGxvY2F0aW9uKSB7XG5cbiAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgdGhpcy5vcCA9IG9wO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG5cbiAgfVxuXG4gIHRyYW5zcGlsZSgpIHtcblxucmV0dXJuIGAke3RoaXMub3B9JHt0aGlzLmV4cHJlc3Npb24udHJhbnNwaWxlKCl9YDtcblxuICB9XG5cbiAgY29tcGlsZShvKSB7XG5cbiAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsIHRoaXMub3ApLlxuICAgICAgYWRkKHRoaXMuZXhwcmVzc2lvbi5jb21waWxlKG8pKTtcblxuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFVuYXJ5RXhwcmVzc2lvblxuXG4iXX0=