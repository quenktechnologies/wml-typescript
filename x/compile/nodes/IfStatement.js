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

var thens = 0;
var elses = 0;

/**
 * IfStatement 
 * @param {Expression} expression
 * @param {Expression} ithen 
 * @param {Expression} ielse 
 */

var IfStatement = (function (_Node) {
    _inherits(IfStatement, _Node);

    function IfStatement(expression, ithen, ielse, location) {
        _classCallCheck(this, IfStatement);

        _get(Object.getPrototypeOf(IfStatement.prototype), 'constructor', this).call(this, location);
        this.expression = expression;
        this.then = ithen;
        this['else'] = ielse;
    }

    _createClass(IfStatement, [{
        key: 'transpile',
        value: function transpile() {

            return 'make.ifcondition(' + this.expression.transpile() + ', ' + ('function if_' + thens + '(){ return [' + this.then.transpile() + '];}.bind(this), ') + ('function else_' + elses + '(){ return [' + this['else'].transpile() + '];}.bind(this))');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, '').add('make.ifcondition(').add(this.expression.compile(o)).add(', function if_' + thens + '(){ return [').add(this.then.compile(o)).add('}];}.bind(this), function else_' + elses + '(){ return [').add(this['else'].compile(o)).add('}];}.bind(this))');
        }
    }]);

    return IfStatement;
})(_Node3['default']);

exports['default'] = IfStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL0lmU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7QUFFekIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFRUixXQUFXO2NBQVgsV0FBVzs7QUFFRixhQUZULFdBQVcsQ0FFRCxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7OEJBRjlDLFdBQVc7O0FBSVQsbUNBSkYsV0FBVyw2Q0FJSCxRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsWUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7QUFDbEIsWUFBSSxRQUFLLEdBQUcsS0FBSyxDQUFDO0tBRXJCOztpQkFUQyxXQUFXOztlQVdKLHFCQUFHOztBQUVSLG1CQUFPLHNCQUFvQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSw0QkFDbkMsS0FBSyxvQkFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxzQkFBa0IsdUJBQ3pELEtBQUssb0JBQWUsSUFBSSxRQUFLLENBQUMsU0FBUyxFQUFFLHFCQUFpQixDQUFDO1NBRW5GOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsbUJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUN0QyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQy9CLEdBQUcsb0JBQWtCLEtBQUssa0JBQWUsQ0FDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3pCLEdBQUcscUNBQW1DLEtBQUssa0JBQWUsQ0FDMUQsR0FBRyxDQUFDLElBQUksUUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN6QixHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUUzQjs7O1dBOUJDLFdBQVc7OztxQkFrQ0YsV0FBVyIsImZpbGUiOiJJZlN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbnZhciB0aGVucyA9IDA7XG52YXIgZWxzZXMgPSAwO1xuXG4vKipcbiAqIElmU3RhdGVtZW50IFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGl0aGVuIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBpZWxzZSBcbiAqL1xuY2xhc3MgSWZTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24sIGl0aGVuLCBpZWxzZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMudGhlbiA9IGl0aGVuO1xuICAgICAgICB0aGlzLmVsc2UgPSBpZWxzZTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gYG1ha2UuaWZjb25kaXRpb24oJHt0aGlzLmV4cHJlc3Npb24udHJhbnNwaWxlKCl9LCBgICtcbiAgICAgICAgICAgIGBmdW5jdGlvbiBpZl8ke3RoZW5zfSgpeyByZXR1cm4gWyR7dGhpcy50aGVuLnRyYW5zcGlsZSgpfV07fS5iaW5kKHRoaXMpLCBgICtcbiAgICAgICAgICAgIGBmdW5jdGlvbiBlbHNlXyR7ZWxzZXN9KCl7IHJldHVybiBbJHt0aGlzLmVsc2UudHJhbnNwaWxlKCl9XTt9LmJpbmQodGhpcykpYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpLlxuICAgICAgICBhZGQoJ21ha2UuaWZjb25kaXRpb24oJykuXG4gICAgICAgIGFkZCh0aGlzLmV4cHJlc3Npb24uY29tcGlsZShvKSkuXG4gICAgICAgIGFkZChgLCBmdW5jdGlvbiBpZl8ke3RoZW5zfSgpeyByZXR1cm4gW2ApLlxuICAgICAgICBhZGQodGhpcy50aGVuLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoYH1dO30uYmluZCh0aGlzKSwgZnVuY3Rpb24gZWxzZV8ke2Vsc2VzfSgpeyByZXR1cm4gW2ApLlxuICAgICAgICBhZGQodGhpcy5lbHNlLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoJ31dO30uYmluZCh0aGlzKSknKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJZlN0YXRlbWVudFxuIl19