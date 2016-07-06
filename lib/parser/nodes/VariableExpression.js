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
 * VariableExpression 
 * @param {string} name
 */

var VariableExpression = (function (_Node) {
    _inherits(VariableExpression, _Node);

    function VariableExpression(name, location) {
        _classCallCheck(this, VariableExpression);

        _get(Object.getPrototypeOf(VariableExpression.prototype), 'constructor', this).call(this, location);
        this.type = 'variable-expression';
        this.name = name;
    }

    _createClass(VariableExpression, [{
        key: 'transpile',
        value: function transpile() {

            return this.name;
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, this.name);
        }
    }]);

    return VariableExpression;
})(_Node3['default']);

exports['default'] = VariableExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVmFyaWFibGVFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7OztJQU1uQixrQkFBa0I7Y0FBbEIsa0JBQWtCOztBQUVULGFBRlQsa0JBQWtCLENBRVIsSUFBSSxFQUFFLFFBQVEsRUFBRTs4QkFGMUIsa0JBQWtCOztBQUloQixtQ0FKRixrQkFBa0IsNkNBSVYsUUFBUSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7QUFDbEMsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FFcEI7O2lCQVJDLGtCQUFrQjs7ZUFVWCxxQkFBRzs7QUFFUixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBRXBCOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsbUJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUVqRDs7O1dBcEJDLGtCQUFrQjs7O3FCQXdCVCxrQkFBa0IiLCJmaWxlIjoiVmFyaWFibGVFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBWYXJpYWJsZUV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5jbGFzcyBWYXJpYWJsZUV4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAndmFyaWFibGUtZXhwcmVzc2lvbic7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgdGhpcy5uYW1lKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBWYXJpYWJsZUV4cHJlc3Npb25cbiJdfQ==