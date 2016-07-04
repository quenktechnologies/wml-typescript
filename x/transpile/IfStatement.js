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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvSWZTdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7OztBQUV6QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Ozs7Ozs7OztJQVFSLFdBQVc7Y0FBWCxXQUFXOztBQUVGLGFBRlQsV0FBVyxDQUVELFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTs4QkFGOUMsV0FBVzs7QUFJVCxtQ0FKRixXQUFXLDZDQUlILFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixZQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUNsQixZQUFJLFFBQUssR0FBRyxLQUFLLENBQUM7S0FFckI7O2lCQVRDLFdBQVc7O2VBV0oscUJBQUc7O0FBRVIsbUJBQU8sc0JBQW9CLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLDRCQUNuQyxLQUFLLG9CQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLHNCQUFrQix1QkFDekQsS0FBSyxvQkFBZSxJQUFJLFFBQUssQ0FBQyxTQUFTLEVBQUUscUJBQWlCLENBQUM7U0FFbkY7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxtQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQ3RDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUN4QixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDL0IsR0FBRyxvQkFBa0IsS0FBSyxrQkFBZSxDQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDekIsR0FBRyxxQ0FBbUMsS0FBSyxrQkFBZSxDQUMxRCxHQUFHLENBQUMsSUFBSSxRQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3pCLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBRTNCOzs7V0E5QkMsV0FBVzs7O3FCQWtDRixXQUFXIiwiZmlsZSI6IklmU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxudmFyIHRoZW5zID0gMDtcbnZhciBlbHNlcyA9IDA7XG5cbi8qKlxuICogSWZTdGF0ZW1lbnQgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGV4cHJlc3Npb25cbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gaXRoZW4gXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGllbHNlIFxuICovXG5jbGFzcyBJZlN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbiwgaXRoZW4sIGllbHNlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy50aGVuID0gaXRoZW47XG4gICAgICAgIHRoaXMuZWxzZSA9IGllbHNlO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiBgbWFrZS5pZmNvbmRpdGlvbigke3RoaXMuZXhwcmVzc2lvbi50cmFuc3BpbGUoKX0sIGAgK1xuICAgICAgICAgICAgYGZ1bmN0aW9uIGlmXyR7dGhlbnN9KCl7IHJldHVybiBbJHt0aGlzLnRoZW4udHJhbnNwaWxlKCl9XTt9LmJpbmQodGhpcyksIGAgK1xuICAgICAgICAgICAgYGZ1bmN0aW9uIGVsc2VfJHtlbHNlc30oKXsgcmV0dXJuIFske3RoaXMuZWxzZS50cmFuc3BpbGUoKX1dO30uYmluZCh0aGlzKSlgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJykuXG4gICAgICAgIGFkZCgnbWFrZS5pZmNvbmRpdGlvbignKS5cbiAgICAgICAgYWRkKHRoaXMuZXhwcmVzc2lvbi5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKGAsIGZ1bmN0aW9uIGlmXyR7dGhlbnN9KCl7IHJldHVybiBbYCkuXG4gICAgICAgIGFkZCh0aGlzLnRoZW4uY29tcGlsZShvKSkuXG4gICAgICAgIGFkZChgfV07fS5iaW5kKHRoaXMpLCBmdW5jdGlvbiBlbHNlXyR7ZWxzZXN9KCl7IHJldHVybiBbYCkuXG4gICAgICAgIGFkZCh0aGlzLmVsc2UuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCgnfV07fS5iaW5kKHRoaXMpKScpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IElmU3RhdGVtZW50XG4iXX0=