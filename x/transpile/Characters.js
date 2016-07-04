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
 * Characters 
 */

var Characters = (function (_Node) {
    _inherits(Characters, _Node);

    function Characters(value, location) {
        _classCallCheck(this, Characters);

        _get(Object.getPrototypeOf(Characters.prototype), 'constructor', this).call(this, location);
        this.value = value;
    }

    _createClass(Characters, [{
        key: 'transpile',
        value: function transpile() {

            return 'make.text(`' + this.value + '`)';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, 'make.text(').add('`' + this.value + '`');
        }
    }]);

    return Characters;
})(_Node3['default']);

exports['default'] = Characters;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQ2hhcmFjdGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7OztJQUtuQixVQUFVO2NBQVYsVUFBVTs7QUFFRCxhQUZULFVBQVUsQ0FFQSxLQUFLLEVBQUUsUUFBUSxFQUFFOzhCQUYzQixVQUFVOztBQUlWLG1DQUpBLFVBQVUsNkNBSUosUUFBUSxFQUFFO0FBQ2QsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FFdEI7O2lCQVBDLFVBQVU7O2VBU0gscUJBQUc7O0FBRVIsbUNBQXNCLElBQUksQ0FBQyxLQUFLLFFBQU07U0FFekM7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFWCxtQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLGVBQWUsQ0FDNUMsR0FBRyxPQUFNLElBQUksQ0FBQyxLQUFLLE9BQUssQ0FBQztTQUU1Qjs7O1dBcEJDLFVBQVU7OztxQkF1QkQsVUFBVSIsImZpbGUiOiJDaGFyYWN0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBDaGFyYWN0ZXJzIFxuICovXG5jbGFzcyBDaGFyYWN0ZXJzIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgbG9jYXRpb24pIHtcblxuICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIGBtYWtlLnRleHQoXFxgJHt0aGlzLnZhbHVlfVxcYClgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsIGBtYWtlLnRleHQoYCkuXG4gICAgICAgIGFkZChgXFxgJHt0aGlzLnZhbHVlfVxcYGApO1xuXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJzXG4iXX0=