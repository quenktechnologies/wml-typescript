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
 * MethodExpression 
 * @param {string} path 
 * @param {array} args 
 */

var MethodExpression = (function (_Node) {
    _inherits(MethodExpression, _Node);

    function MethodExpression(path, args, location) {
        _classCallCheck(this, MethodExpression);

        _get(Object.getPrototypeOf(MethodExpression.prototype), 'constructor', this).call(this, location);
        this.path = path;
        this.arguments = args;
    }

    _createClass(MethodExpression, [{
        key: 'transpile',
        value: function transpile() {

            var args = this.transpileList(this.arguments);
            return this.path + '(' + this.args + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, this.path);

            node.add('(');

            return this.compileList(this.arguments, node, o).add(')');
        }
    }]);

    return MethodExpression;
})(_Node3['default']);

exports['default'] = MethodExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9NZXRob2RFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7Ozs7SUFPbkIsZ0JBQWdCO2NBQWhCLGdCQUFnQjs7QUFFUCxhQUZULGdCQUFnQixDQUVOLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzhCQUZoQyxnQkFBZ0I7O0FBSWQsbUNBSkYsZ0JBQWdCLDZDQUlSLFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztLQUV6Qjs7aUJBUkMsZ0JBQWdCOztlQVVULHFCQUFHOztBQUVSLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QyxtQkFBVSxJQUFJLENBQUMsSUFBSSxTQUFJLElBQUksQ0FBQyxJQUFJLE9BQUk7U0FFdkM7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFbEQsZ0JBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRWQsbUJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FDaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBR1o7OztXQTNCQyxnQkFBZ0I7OztxQkE4QlAsZ0JBQWdCIiwiZmlsZSI6Ik1ldGhvZEV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIE1ldGhvZEV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBcbiAqIEBwYXJhbSB7YXJyYXl9IGFyZ3MgXG4gKi9cbmNsYXNzIE1ldGhvZEV4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHBhdGgsIGFyZ3MsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLnRyYW5zcGlsZUxpc3QodGhpcy5hcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5wYXRofSgke3RoaXMuYXJnc30pYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsIHRoaXMucGF0aCk7XG5cbiAgICAgICAgbm9kZS5hZGQoJygnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlTGlzdCh0aGlzLmFyZ3VtZW50cywgbm9kZSwgbykuXG4gICAgICAgIGFkZCgnKScpO1xuXG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IE1ldGhvZEV4cHJlc3Npb25cbiJdfQ==