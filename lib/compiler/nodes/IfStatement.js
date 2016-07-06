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
        this.type = 'if-statement';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlci9ub2Rlcy9JZlN0YXRlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7O0FBRXpCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBUVIsV0FBVztjQUFYLFdBQVc7O0FBRUYsYUFGVCxXQUFXLENBRUQsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFOzhCQUY5QyxXQUFXOztBQUlULG1DQUpGLFdBQVcsNkNBSUgsUUFBUSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO0FBQzNCLFlBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzdCLFlBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLFlBQUksUUFBSyxHQUFHLEtBQUssQ0FBQztLQUVyQjs7aUJBVkMsV0FBVzs7ZUFZSixxQkFBRzs7QUFFUixtQkFBTyxzQkFBb0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsNEJBQ25DLEtBQUssb0JBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsc0JBQWtCLHVCQUN6RCxLQUFLLG9CQUFlLElBQUksUUFBSyxDQUFDLFNBQVMsRUFBRSxxQkFBaUIsQ0FBQztTQUVuRjs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FDdEMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQ3hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMvQixHQUFHLG9CQUFrQixLQUFLLGtCQUFlLENBQ3pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN6QixHQUFHLHFDQUFtQyxLQUFLLGtCQUFlLENBQzFELEdBQUcsQ0FBQyxJQUFJLFFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDekIsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FFM0I7OztXQS9CQyxXQUFXOzs7cUJBbUNGLFdBQVciLCJmaWxlIjoiSWZTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG52YXIgdGhlbnMgPSAwO1xudmFyIGVsc2VzID0gMDtcblxuLyoqXG4gKiBJZlN0YXRlbWVudCBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvblxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBpdGhlbiBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gaWVsc2UgXG4gKi9cbmNsYXNzIElmU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uLCBpdGhlbiwgaWVsc2UsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaWYtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy50aGVuID0gaXRoZW47XG4gICAgICAgIHRoaXMuZWxzZSA9IGllbHNlO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiBgbWFrZS5pZmNvbmRpdGlvbigke3RoaXMuZXhwcmVzc2lvbi50cmFuc3BpbGUoKX0sIGAgK1xuICAgICAgICAgICAgYGZ1bmN0aW9uIGlmXyR7dGhlbnN9KCl7IHJldHVybiBbJHt0aGlzLnRoZW4udHJhbnNwaWxlKCl9XTt9LmJpbmQodGhpcyksIGAgK1xuICAgICAgICAgICAgYGZ1bmN0aW9uIGVsc2VfJHtlbHNlc30oKXsgcmV0dXJuIFske3RoaXMuZWxzZS50cmFuc3BpbGUoKX1dO30uYmluZCh0aGlzKSlgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJykuXG4gICAgICAgIGFkZCgnbWFrZS5pZmNvbmRpdGlvbignKS5cbiAgICAgICAgYWRkKHRoaXMuZXhwcmVzc2lvbi5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKGAsIGZ1bmN0aW9uIGlmXyR7dGhlbnN9KCl7IHJldHVybiBbYCkuXG4gICAgICAgIGFkZCh0aGlzLnRoZW4uY29tcGlsZShvKSkuXG4gICAgICAgIGFkZChgfV07fS5iaW5kKHRoaXMpLCBmdW5jdGlvbiBlbHNlXyR7ZWxzZXN9KCl7IHJldHVybiBbYCkuXG4gICAgICAgIGFkZCh0aGlzLmVsc2UuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCgnfV07fS5iaW5kKHRoaXMpKScpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IElmU3RhdGVtZW50XG4iXX0=