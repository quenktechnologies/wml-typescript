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
    this.type = 'default-member';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRGVmYXVsdE1lbWJlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7Ozs7O0lBT25CLGFBQWE7WUFBYixhQUFhOztBQUVOLFdBRlAsYUFBYSxDQUVMLE1BQU0sRUFBRSxRQUFRLEVBQUU7MEJBRjFCLGFBQWE7O0FBSWYsK0JBSkUsYUFBYSw2Q0FJVCxRQUFRLEVBQUU7QUFDaEIsUUFBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztBQUM3QixRQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztHQUV0Qjs7ZUFSRyxhQUFhOztXQVVSLHFCQUFHOztBQUVWLGFBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUVwQjs7O1dBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVULGFBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUVqRDs7O1NBcEJHLGFBQWE7OztxQkF3QkosYUFBYSIsImZpbGUiOiJEZWZhdWx0TWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBEZWZhdWx0TWVtYmVyIFxuICogQHBhcmFtIHtzdHJpbmd9IG1lbWJlciBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBEZWZhdWx0TWVtYmVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgY29uc3RydWN0b3IobWVtYmVyLCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIobG9jYXRpb24pO1xuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0LW1lbWJlcic7XG4gICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XG5cbiAgfVxuXG4gIHRyYW5zcGlsZSgpIHtcblxuICAgIHJldHVybiB0aGlzLm1lbWJlcjtcbiAgICBcbiAgfVxuXG4gIGNvbXBpbGUobykge1xuXG4gICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCB0aGlzLm1lbWJlcik7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRNZW1iZXJcblxuIl19