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
 * CaseStatement 
 * @param {ValueExpression} expression
 * @param {array<Expression>} children 
 * @param {Location} location
 */

var CaseStatement = (function (_Node) {
    _inherits(CaseStatement, _Node);

    function CaseStatement(expression, ithen, ielse, location) {
        _classCallCheck(this, CaseStatement);

        _get(Object.getPrototypeOf(CaseStatement.prototype), 'constructor', this).call(this, location);
        this.expression = expression;
        this.then = ithen;
        this['else'] = ielse;
    }

    _createClass(CaseStatement, [{
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

    return CaseStatement;
})(_Node3['default']);

exports['default'] = CaseStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQ2FzZUJsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7Ozs7O0lBUW5CLGFBQWE7Y0FBYixhQUFhOztBQUVKLGFBRlQsYUFBYSxDQUVILFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTs4QkFGOUMsYUFBYTs7QUFJWCxtQ0FKRixhQUFhLDZDQUlMLFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixZQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUNsQixZQUFJLFFBQUssR0FBRyxLQUFLLENBQUM7S0FFckI7O2lCQVRDLGFBQWE7O2VBV04scUJBQUc7O0FBRVIsbUJBQU8sc0JBQW9CLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLDRCQUNuQyxLQUFLLG9CQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLHNCQUFrQix1QkFDekQsS0FBSyxvQkFBZSxJQUFJLFFBQUssQ0FBQyxTQUFTLEVBQUUscUJBQWlCLENBQUM7U0FFbkY7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxtQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQ3RDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUN4QixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDL0IsR0FBRyxvQkFBa0IsS0FBSyxrQkFBZSxDQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDekIsR0FBRyxxQ0FBbUMsS0FBSyxrQkFBZSxDQUMxRCxHQUFHLENBQUMsSUFBSSxRQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3pCLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBRTNCOzs7V0E5QkMsYUFBYTs7O3FCQWtDSixhQUFhIiwiZmlsZSI6IkNhc2VCbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQ2FzZVN0YXRlbWVudCBcbiAqIEBwYXJhbSB7VmFsdWVFeHByZXNzaW9ufSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge2FycmF5PEV4cHJlc3Npb24+fSBjaGlsZHJlbiBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKi9cbmNsYXNzIENhc2VTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24sIGl0aGVuLCBpZWxzZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMudGhlbiA9IGl0aGVuO1xuICAgICAgICB0aGlzLmVsc2UgPSBpZWxzZTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gYG1ha2UuaWZjb25kaXRpb24oJHt0aGlzLmV4cHJlc3Npb24udHJhbnNwaWxlKCl9LCBgICtcbiAgICAgICAgICAgIGBmdW5jdGlvbiBpZl8ke3RoZW5zfSgpeyByZXR1cm4gWyR7dGhpcy50aGVuLnRyYW5zcGlsZSgpfV07fS5iaW5kKHRoaXMpLCBgICtcbiAgICAgICAgICAgIGBmdW5jdGlvbiBlbHNlXyR7ZWxzZXN9KCl7IHJldHVybiBbJHt0aGlzLmVsc2UudHJhbnNwaWxlKCl9XTt9LmJpbmQodGhpcykpYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpLlxuICAgICAgICBhZGQoJ21ha2UuaWZjb25kaXRpb24oJykuXG4gICAgICAgIGFkZCh0aGlzLmV4cHJlc3Npb24uY29tcGlsZShvKSkuXG4gICAgICAgIGFkZChgLCBmdW5jdGlvbiBpZl8ke3RoZW5zfSgpeyByZXR1cm4gW2ApLlxuICAgICAgICBhZGQodGhpcy50aGVuLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoYH1dO30uYmluZCh0aGlzKSwgZnVuY3Rpb24gZWxzZV8ke2Vsc2VzfSgpeyByZXR1cm4gW2ApLlxuICAgICAgICBhZGQodGhpcy5lbHNlLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoJ31dO30uYmluZCh0aGlzKSknKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXNlU3RhdGVtZW50XG4iXX0=