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
 * BinaryExpression 
 */

var BinaryExpression = (function (_Node) {
    _inherits(BinaryExpression, _Node);

    function BinaryExpression(left, op, right, location) {
        _classCallCheck(this, BinaryExpression);

        _get(Object.getPrototypeOf(BinaryExpression.prototype), 'constructor', this).call(this, location);
        this.left = left;
        this.op = op;
        this.right = right;
    }

    _createClass(BinaryExpression, [{
        key: 'transpile',
        value: function transpile() {

            return this.left.transpile() + ' ' + this.op + ' ' + this.right.transpile();
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, '').add(this.left.compile(o)).add(this.op).add(this.right.compile(o));
        }
    }]);

    return BinaryExpression;
})(_Node3['default']);

exports['default'] = BinaryExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL0JpbmFyeUV4cHJlc3Npb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7Ozs7Ozs7SUFLbkIsZ0JBQWdCO2NBQWhCLGdCQUFnQjs7QUFFUCxhQUZULGdCQUFnQixDQUVOLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTs4QkFGckMsZ0JBQWdCOztBQUlkLG1DQUpGLGdCQUFnQiw2Q0FJUixRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsWUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDYixZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUV0Qjs7aUJBVEMsZ0JBQWdCOztlQVdULHFCQUFHOztBQUVSLG1CQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQUksSUFBSSxDQUFDLEVBQUUsU0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFHO1NBRTFFOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsbUJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDekIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FDWixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUUxQjs7O1dBeEJILGdCQUFnQjs7O3FCQTJCSCxnQkFBZ0IiLCJmaWxlIjoiQmluYXJ5RXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQmluYXJ5RXhwcmVzc2lvbiBcbiAqL1xuY2xhc3MgQmluYXJ5RXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobGVmdCwgb3AsIHJpZ2h0LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5vcCA9IG9wO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMubGVmdC50cmFuc3BpbGUoKX0gJHt0aGlzLm9wfSAke3RoaXMucmlnaHQudHJhbnNwaWxlKCl9YDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpLlxuICAgICAgICBhZGQodGhpcy5sZWZ0LmNvbXBpbGUobykpLlxuICAgICAgICBhZGQodGhpcy5vcCkuXG4gICAgICAgIGFkZCh0aGlzLnJpZ2h0LmNvbXBpbGUobykpO1xuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBleHBvcnQgZGVmYXVsdCBCaW5hcnlFeHByZXNzaW9uXG4iXX0=