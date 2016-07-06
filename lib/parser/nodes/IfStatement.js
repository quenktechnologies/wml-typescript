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

var thenCount = 0;
var elseCount = 0;

/**
 * IfStatement 
 * @param {Expression} expression
 * @param {array<Expression>} ithen 
 * @param {array<Expression>} ielse 
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

            var thens = this.then.map(function (c) {
                return c.transpile();
            });
            var elses = this['else'].map(function (c) {
                return c.transpile();
            });

            return 'make.$if(' + this.expression.transpile() + ', ' + ('function if_' + thenCount + '(){ return [' + thens + '];}.bind(this), ') + ('function else_' + elseCount + '(){ return [' + elses + '];}.bind(this))');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var thens = this.then.map(function (c) {
                return c.compile(o);
            });
            var elses = this['else'].map(function (c) {
                return c.compile();
            });

            return this.sourceNode(o.fileName, '').add('make.$if(').add(this.expression.compile(o)).add(', function if_' + thenCount + '(){ return [').add(thens).add('}];}.bind(this), function else_' + elseCount + '(){ return [').add(elses).add('}];}.bind(this))');
        }
    }]);

    return IfStatement;
})(_Node3['default']);

exports['default'] = IfStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSWZTdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7OztBQUV6QixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDbEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFRWixXQUFXO2NBQVgsV0FBVzs7QUFFRixhQUZULFdBQVcsQ0FFRCxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7OEJBRjlDLFdBQVc7O0FBSVQsbUNBSkYsV0FBVyw2Q0FJSCxRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7QUFDM0IsWUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsWUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7QUFDbEIsWUFBSSxRQUFLLEdBQUcsS0FBSyxDQUFDO0tBRXJCOztpQkFWQyxXQUFXOztlQVlKLHFCQUFHOztBQUVSLGdCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUFBLENBQUMsQ0FBQztBQUM5QyxnQkFBSSxLQUFLLEdBQUcsSUFBSSxRQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQUEsQ0FBQyxDQUFDOztBQUU5QyxtQkFBTyxjQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLDRCQUMzQixTQUFTLG9CQUFlLEtBQUssc0JBQWtCLHVCQUM3QyxTQUFTLG9CQUFlLEtBQUsscUJBQWlCLENBQUM7U0FFdkU7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxnQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO3VCQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQUEsQ0FBQyxDQUFDO0FBQzdDLGdCQUFJLEtBQUssR0FBRyxJQUFJLFFBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO3VCQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7YUFBQSxDQUFDLENBQUM7O0FBRTVDLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FDdEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDL0IsR0FBRyxvQkFBa0IsU0FBUyxrQkFBZSxDQUM3QyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQ1YsR0FBRyxxQ0FBbUMsU0FBUyxrQkFBZSxDQUM5RCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQ1YsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FFM0I7OztXQXJDQyxXQUFXOzs7cUJBeUNGLFdBQVciLCJmaWxlIjoiSWZTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG52YXIgdGhlbkNvdW50ID0gMDtcbnZhciBlbHNlQ291bnQgPSAwO1xuXG4vKipcbiAqIElmU3RhdGVtZW50IFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge2FycmF5PEV4cHJlc3Npb24+fSBpdGhlbiBcbiAqIEBwYXJhbSB7YXJyYXk8RXhwcmVzc2lvbj59IGllbHNlIFxuICovXG5jbGFzcyBJZlN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbiwgaXRoZW4sIGllbHNlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2lmLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgIHRoaXMudGhlbiA9IGl0aGVuO1xuICAgICAgICB0aGlzLmVsc2UgPSBpZWxzZTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgdGhlbnMgPSB0aGlzLnRoZW4ubWFwKGMgPT4gYy50cmFuc3BpbGUoKSk7XG4gICAgICAgIHZhciBlbHNlcyA9IHRoaXMuZWxzZS5tYXAoYyA9PiBjLnRyYW5zcGlsZSgpKTtcblxuICAgICAgICByZXR1cm4gYG1ha2UuJGlmKCR7dGhpcy5leHByZXNzaW9uLnRyYW5zcGlsZSgpfSwgYCArXG4gICAgICAgICAgICBgZnVuY3Rpb24gaWZfJHt0aGVuQ291bnR9KCl7IHJldHVybiBbJHt0aGVuc31dO30uYmluZCh0aGlzKSwgYCArXG4gICAgICAgICAgICBgZnVuY3Rpb24gZWxzZV8ke2Vsc2VDb3VudH0oKXsgcmV0dXJuIFske2Vsc2VzfV07fS5iaW5kKHRoaXMpKWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgdGhlbnMgPSB0aGlzLnRoZW4ubWFwKGMgPT4gYy5jb21waWxlKG8pKTtcbiAgICAgICAgdmFyIGVsc2VzID0gdGhpcy5lbHNlLm1hcChjID0+IGMuY29tcGlsZSgpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKS5cbiAgICAgICAgYWRkKCdtYWtlLiRpZignKS5cbiAgICAgICAgYWRkKHRoaXMuZXhwcmVzc2lvbi5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKGAsIGZ1bmN0aW9uIGlmXyR7dGhlbkNvdW50fSgpeyByZXR1cm4gW2ApLlxuICAgICAgICBhZGQodGhlbnMpLlxuICAgICAgICBhZGQoYH1dO30uYmluZCh0aGlzKSwgZnVuY3Rpb24gZWxzZV8ke2Vsc2VDb3VudH0oKXsgcmV0dXJuIFtgKS5cbiAgICAgICAgYWRkKGVsc2VzKS5cbiAgICAgICAgYWRkKCd9XTt9LmJpbmQodGhpcykpJyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSWZTdGF0ZW1lbnRcbiJdfQ==