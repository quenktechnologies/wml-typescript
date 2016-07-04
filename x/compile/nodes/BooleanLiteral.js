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
 * BooleanLiteral 
 */

var BooleanLiteral = (function (_Node) {
  _inherits(BooleanLiteral, _Node);

  function BooleanLiteral(value, location) {
    _classCallCheck(this, BooleanLiteral);

    _get(Object.getPrototypeOf(BooleanLiteral.prototype), 'constructor', this).call(this, location);
    this.value = value;
  }

  _createClass(BooleanLiteral, [{
    key: 'transpile',
    value: function transpile() {

      return this.value;
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      return this.sourceNode(o.fileName, this.value);
    }
  }]);

  return BooleanLiteral;
})(_Node3['default']);

exports['default'] = BooleanLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL0Jvb2xlYW5MaXRlcmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7O0lBS25CLGNBQWM7WUFBZCxjQUFjOztBQUVMLFdBRlQsY0FBYyxDQUVKLEtBQUssRUFBRSxRQUFRLEVBQUU7MEJBRjNCLGNBQWM7O0FBSWQsK0JBSkEsY0FBYyw2Q0FJUixRQUFRLEVBQUU7QUFDZCxRQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztHQUV0Qjs7ZUFQQyxjQUFjOztXQVNQLHFCQUFHOztBQUVWLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUVuQjs7O1dBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVULGFBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUVoRDs7O1NBbkJDLGNBQWM7OztxQkF1QkwsY0FBYyIsImZpbGUiOiJCb29sZWFuTGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQm9vbGVhbkxpdGVyYWwgXG4gKi9cbmNsYXNzIEJvb2xlYW5MaXRlcmFsIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgbG9jYXRpb24pIHtcblxuICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgdGhpcy52YWx1ZSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkxpdGVyYWxcbiJdfQ==