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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVW5hcnlFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7Ozs7O0lBUW5CLGVBQWU7WUFBZixlQUFlOztBQUVSLFdBRlAsZUFBZSxDQUVQLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFOzBCQUZsQyxlQUFlOztBQUlqQiwrQkFKRSxlQUFlLDZDQUlYLFFBQVEsRUFBRTtBQUNoQixRQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0dBRTlCOztlQVJHLGVBQWU7O1dBVVYscUJBQUc7O0FBRWQsa0JBQVUsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFHO0tBRS9DOzs7V0FFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVQsYUFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUVuQzs7O1NBckJHLGVBQWU7OztxQkF3Qk4sZUFBZSIsImZpbGUiOiJVbmFyeUV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFVuYXJ5RXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcCBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBVbmFyeUV4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxuICBjb25zdHJ1Y3RvcihvcCwgZXhwcmVzc2lvbiwgbG9jYXRpb24pIHtcblxuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICB0aGlzLm9wID0gb3A7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcblxuICB9XG5cbiAgdHJhbnNwaWxlKCkge1xuXG5yZXR1cm4gYCR7dGhpcy5vcH0ke3RoaXMuZXhwcmVzc2lvbi50cmFuc3BpbGUoKX1gO1xuXG4gIH1cblxuICBjb21waWxlKG8pIHtcblxuICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgdGhpcy5vcCkuXG4gICAgICBhZGQodGhpcy5leHByZXNzaW9uLmNvbXBpbGUobykpO1xuXG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgVW5hcnlFeHByZXNzaW9uXG5cbiJdfQ==