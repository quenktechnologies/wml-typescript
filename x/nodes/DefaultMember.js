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
 * DefaultMember 
 * @param {string} member 
 * @param {Location} location 
 */

var DefaultMember = (function (_Node) {
  _inherits(DefaultMember, _Node);

  function DefaultMember(member, location) {
    _classCallCheck(this, DefaultMember);

    _get(Object.getPrototypeOf(DefaultMember.prototype), 'constructor', this).call(this, location);
    this.member = member;
  }

  _createClass(DefaultMember, [{
    key: 'transpile',
    value: function transpile() {

      return this.member;
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      return this.sourceNode(o.fileName, this.member);
    }
  }]);

  return DefaultMember;
})(_Node3['default']);

exports['default'] = DefaultMember;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9EZWZhdWx0TWVtYmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7Ozs7SUFPbkIsYUFBYTtZQUFiLGFBQWE7O0FBRU4sV0FGUCxhQUFhLENBRUwsTUFBTSxFQUFFLFFBQVEsRUFBRTswQkFGMUIsYUFBYTs7QUFJZiwrQkFKRSxhQUFhLDZDQUlULFFBQVEsRUFBRTtBQUNoQixRQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztHQUV0Qjs7ZUFQRyxhQUFhOztXQVNSLHFCQUFHOztBQUVWLGFBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUVwQjs7O1dBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVULGFBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUVqRDs7O1NBbkJHLGFBQWE7OztxQkF1QkosYUFBYSIsImZpbGUiOiJEZWZhdWx0TWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBEZWZhdWx0TWVtYmVyIFxuICogQHBhcmFtIHtzdHJpbmd9IG1lbWJlciBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBEZWZhdWx0TWVtYmVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgY29uc3RydWN0b3IobWVtYmVyLCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIobG9jYXRpb24pO1xuICAgIHRoaXMubWVtYmVyID0gbWVtYmVyO1xuXG4gIH1cblxuICB0cmFuc3BpbGUoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5tZW1iZXI7XG4gICAgXG4gIH1cblxuICBjb21waWxlKG8pIHtcblxuICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgdGhpcy5tZW1iZXIpO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0TWVtYmVyXG5cbiJdfQ==