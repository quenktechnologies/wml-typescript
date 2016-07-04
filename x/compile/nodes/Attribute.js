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
 * Attribute 
 */

var Attribute = (function (_Node) {
    _inherits(Attribute, _Node);

    function Attribute(name, namespace, value, location) {
        _classCallCheck(this, Attribute);

        _get(Object.getPrototypeOf(Attribute.prototype), 'constructor', this).call(this, location);
        this.name = name;
        this.namespace = namespace;
        this.value = value;
    }

    _createClass(Attribute, [{
        key: 'transpile',
        value: function transpile() {

            return '' + this.value.transpile();
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, this.value);
        }
    }]);

    return Attribute;
})(_Node3['default']);

exports['default'] = Attribute;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL0F0dHJpYnV0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7OztJQUtuQixTQUFTO2NBQVQsU0FBUzs7QUFFQSxhQUZULFNBQVMsQ0FFQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7OEJBRjVDLFNBQVM7O0FBSVAsbUNBSkYsU0FBUyw2Q0FJRCxRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsWUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0IsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FFdEI7O2lCQVRDLFNBQVM7O2VBV0YscUJBQUc7O0FBRVIsd0JBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBRztTQUV0Qzs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FFbEQ7OztXQXJCQyxTQUFTOzs7cUJBeUJBLFNBQVMiLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBBdHRyaWJ1dGUgXG4gKi9cbmNsYXNzIEF0dHJpYnV0ZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgbmFtZXNwYWNlLCB2YWx1ZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMudmFsdWUudHJhbnNwaWxlKCl9YDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgdGhpcy52YWx1ZSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRlXG4iXX0=