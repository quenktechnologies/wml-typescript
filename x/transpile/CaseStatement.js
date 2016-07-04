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

var count = 0;

/**
 * CaseStatement 
 * @param {ValueExpression} expression
 * @param {array<Expression>} children 
 * @param {Location} location
 */

var CaseStatement = (function (_Node) {
    _inherits(CaseStatement, _Node);

    function CaseStatement(expression, children, location) {
        _classCallCheck(this, CaseStatement);

        _get(Object.getPrototypeOf(CaseStatement.prototype), 'constructor', this).call(this, location);
        this.expression = expression;
        this.children = children;
        this.location = location;
    }

    _createClass(CaseStatement, [{
        key: 'transpile',
        value: function transpile() {

            count = count + 1;
            return 'function case_statement' + count + '() { return' + ('[' + this.transpileList(this.children) + '];}.bind(this)');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            count = count + 1;

            var node = this.sourceNode(o.fileName, 'function case_statement' + count + '() { return [');

            return this.compileList(this.children, node, o).add('];}.bind(this');
        }
    }]);

    return CaseStatement;
})(_Node3['default']);

exports['default'] = CaseStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQ2FzZVN0YXRlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7O0FBRXpCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBUVIsYUFBYTtjQUFiLGFBQWE7O0FBRUosYUFGVCxhQUFhLENBRUgsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7OEJBRjFDLGFBQWE7O0FBSVgsbUNBSkYsYUFBYSw2Q0FJTCxRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FFNUI7O2lCQVRDLGFBQWE7O2VBV04scUJBQUc7O0FBRVIsaUJBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLG1CQUFPLDRCQUEwQixLQUFLLDBCQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQWdCLENBQUM7U0FFM0Q7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxpQkFBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7O0FBRWxCLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLDhCQUE0QixLQUFLLG1CQUFnQixDQUFDOztBQUV2RixtQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUMvQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7U0FFeEI7OztXQTVCQyxhQUFhOzs7cUJBZ0NKLGFBQWEiLCJmaWxlIjoiQ2FzZVN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbnZhciBjb3VudCA9IDA7XG5cbi8qKlxuICogQ2FzZVN0YXRlbWVudCBcbiAqIEBwYXJhbSB7VmFsdWVFeHByZXNzaW9ufSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge2FycmF5PEV4cHJlc3Npb24+fSBjaGlsZHJlbiBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKi9cbmNsYXNzIENhc2VTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24sIGNoaWxkcmVuLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgY291bnQgPSBjb3VudCArIDE7XG4gICAgICAgIHJldHVybiBgZnVuY3Rpb24gY2FzZV9zdGF0ZW1lbnQke2NvdW50fSgpIHsgcmV0dXJuYCtcbiAgICAgICAgICBgWyR7dGhpcy50cmFuc3BpbGVMaXN0KHRoaXMuY2hpbGRyZW4pfV07fS5iaW5kKHRoaXMpYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsIGBmdW5jdGlvbiBjYXNlX3N0YXRlbWVudCR7Y291bnR9KCkgeyByZXR1cm4gW2ApO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuY2hpbGRyZW4sIG5vZGUsIG8pLlxuICAgICAgICBhZGQoJ107fS5iaW5kKHRoaXMnKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3RhdGVtZW50XG4iXX0=