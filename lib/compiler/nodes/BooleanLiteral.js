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
    this.type = 'boolean-literal';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlci9ub2Rlcy9Cb29sZWFuTGl0ZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7OztJQUtuQixjQUFjO1lBQWQsY0FBYzs7QUFFTCxXQUZULGNBQWMsQ0FFSixLQUFLLEVBQUUsUUFBUSxFQUFFOzBCQUYzQixjQUFjOztBQUlkLCtCQUpBLGNBQWMsNkNBSVIsUUFBUSxFQUFFO0FBQ2hCLFFBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7QUFDNUIsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7R0FFdEI7O2VBUkMsY0FBYzs7V0FVUCxxQkFBRzs7QUFFVixhQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FFbkI7OztXQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFVCxhQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FFaEQ7OztTQXBCQyxjQUFjOzs7cUJBd0JMLGNBQWMiLCJmaWxlIjoiQm9vbGVhbkxpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEJvb2xlYW5MaXRlcmFsIFxuICovXG5jbGFzcyBCb29sZWFuTGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGxvY2F0aW9uKSB7XG5cbiAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgIHRoaXMudHlwZSA9ICdib29sZWFuLWxpdGVyYWwnO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgdGhpcy52YWx1ZSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkxpdGVyYWxcbiJdfQ==