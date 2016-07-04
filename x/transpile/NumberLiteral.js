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
 * NumberLiteral 
 */

var NumberLiteral = (function (_Node) {
    _inherits(NumberLiteral, _Node);

    function NumberLiteral(value, location) {
        _classCallCheck(this, NumberLiteral);

        _get(Object.getPrototypeOf(NumberLiteral.prototype), 'constructor', this).call(this, value);
        this.value = value;
        this.location = location;
    }

    _createClass(NumberLiteral, [{
        key: 'transpile',
        value: function transpile() {

            return parseFloat(this.value);
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, parseFloat(this.value));
        }
    }]);

    return NumberLiteral;
})(_Node3['default']);

exports['default'] = NumberLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvTnVtYmVyTGl0ZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7OztJQUtuQixhQUFhO2NBQWIsYUFBYTs7QUFFSixhQUZULGFBQWEsQ0FFSCxLQUFLLEVBQUUsUUFBUSxFQUFFOzhCQUYzQixhQUFhOztBQUliLG1DQUpBLGFBQWEsNkNBSVAsS0FBSyxFQUFFO0FBQ1gsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FFNUI7O2lCQVJDLGFBQWE7O2VBVU4scUJBQUc7O0FBRVIsbUJBQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUVqQzs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVULG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FFNUQ7OztXQXBCQyxhQUFhOzs7cUJBd0JKLGFBQWEiLCJmaWxlIjoiTnVtYmVyTGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogTnVtYmVyTGl0ZXJhbCBcbiAqL1xuY2xhc3MgTnVtYmVyTGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGxvY2F0aW9uKSB7XG5cbiAgICAgIHN1cGVyKHZhbHVlKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy52YWx1ZSk7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCBwYXJzZUZsb2F0KHRoaXMudmFsdWUpKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJMaXRlcmFsXG4iXX0=