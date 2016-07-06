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
 * TernaryExpression 
 * @param {Expression} logic 
 * @param {Expression} iftrue 
 * @param {Expression} iffalse 
 */

var TernaryExpression = (function (_Node) {
    _inherits(TernaryExpression, _Node);

    function TernaryExpression(logic, iftrue, iffalse, location) {
        _classCallCheck(this, TernaryExpression);

        _get(Object.getPrototypeOf(TernaryExpression.prototype), 'constructor', this).call(this, location);
        this.type = 'ternary-expression';
        this.logic = logic;
        this.iftrue = iftrue;
        this.iffalse = iffalse;
    }

    _createClass(TernaryExpression, [{
        key: 'transpile',
        value: function transpile() {

            return '(' + this.logic.transpile() + ')? ' + this.iftrue.transpile() + ' : ' + this.iffalse.transpile();
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, '(').add(this.logic.compile(o)).add(')?').add(this.iftrue.compile(o)).add(':').add(this.iffalse.compile(o));
        }
    }]);

    return TernaryExpression;
})(_Node3['default']);

exports['default'] = TernaryExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlci9ub2Rlcy9UZXJuYXJ5RXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7Ozs7OztJQVFuQixpQkFBaUI7Y0FBakIsaUJBQWlCOztBQUVSLGFBRlQsaUJBQWlCLENBRVAsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFOzhCQUY1QyxpQkFBaUI7O0FBSWpCLG1DQUpBLGlCQUFpQiw2Q0FJWCxRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQztBQUMvQixZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUUxQjs7aUJBVkMsaUJBQWlCOztlQVlWLHFCQUFHOztBQUVSLHlCQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFdBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsV0FBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFHO1NBRWxHOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVQsbUJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDMUIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUNULEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQ1IsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFaEM7OztXQTNCQyxpQkFBaUI7OztxQkErQlIsaUJBQWlCIiwiZmlsZSI6IlRlcm5hcnlFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBUZXJuYXJ5RXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gbG9naWMgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGlmdHJ1ZSBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gaWZmYWxzZSBcbiAqL1xuY2xhc3MgVGVybmFyeUV4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGxvZ2ljLCBpZnRydWUsIGlmZmFsc2UsIGxvY2F0aW9uKSB7XG5cbiAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgIHRoaXMudHlwZSA9ICd0ZXJuYXJ5LWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLmxvZ2ljID0gbG9naWM7XG4gICAgICAgIHRoaXMuaWZ0cnVlID0gaWZ0cnVlO1xuICAgICAgICB0aGlzLmlmZmFsc2UgPSBpZmZhbHNlO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiBgKCR7dGhpcy5sb2dpYy50cmFuc3BpbGUoKX0pPyAke3RoaXMuaWZ0cnVlLnRyYW5zcGlsZSgpfSA6ICR7dGhpcy5pZmZhbHNlLnRyYW5zcGlsZSgpfWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnKCcpLlxuICAgICAgICBhZGQodGhpcy5sb2dpYy5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKCcpPycpLlxuICAgICAgICBhZGQodGhpcy5pZnRydWUuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCgnOicpLlxuICAgICAgICBhZGQodGhpcy5pZmZhbHNlLmNvbXBpbGUobykpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm5hcnlFeHByZXNzaW9uXG4iXX0=