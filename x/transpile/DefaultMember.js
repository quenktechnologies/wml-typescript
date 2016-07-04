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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvRGVmYXVsdE1lbWJlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7Ozs7O0lBT25CLGFBQWE7WUFBYixhQUFhOztBQUVOLFdBRlAsYUFBYSxDQUVMLE1BQU0sRUFBRSxRQUFRLEVBQUU7MEJBRjFCLGFBQWE7O0FBSWYsK0JBSkUsYUFBYSw2Q0FJVCxRQUFRLEVBQUU7QUFDaEIsUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7R0FFdEI7O2VBUEcsYUFBYTs7V0FTUixxQkFBRzs7QUFFVixhQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FFcEI7OztXQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFVCxhQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FFakQ7OztTQW5CRyxhQUFhOzs7cUJBdUJKLGFBQWEiLCJmaWxlIjoiRGVmYXVsdE1lbWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogRGVmYXVsdE1lbWJlciBcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZW1iZXIgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgRGVmYXVsdE1lbWJlciBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKG1lbWJlciwgbG9jYXRpb24pIHtcblxuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICB0aGlzLm1lbWJlciA9IG1lbWJlcjtcblxuICB9XG5cbiAgdHJhbnNwaWxlKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubWVtYmVyO1xuICAgIFxuICB9XG5cbiAgY29tcGlsZShvKSB7XG5cbiAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsIHRoaXMubWVtYmVyKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdE1lbWJlclxuXG4iXX0=