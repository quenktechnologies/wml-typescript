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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvTWV0aG9kRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7Ozs7O0lBT25CLGdCQUFnQjtjQUFoQixnQkFBZ0I7O0FBRVAsYUFGVCxnQkFBZ0IsQ0FFTixJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTs4QkFGaEMsZ0JBQWdCOztBQUlkLG1DQUpGLGdCQUFnQiw2Q0FJUixRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsWUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7S0FFekI7O2lCQVJDLGdCQUFnQjs7ZUFVVCxxQkFBRzs7QUFFUixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsbUJBQVUsSUFBSSxDQUFDLElBQUksU0FBSSxJQUFJLENBQUMsSUFBSSxPQUFJO1NBRXZDOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWxELGdCQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUVkLG1CQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQ2hELEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUdaOzs7V0EzQkMsZ0JBQWdCOzs7cUJBOEJQLGdCQUFnQiIsImZpbGUiOiJNZXRob2RFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBNZXRob2RFeHByZXNzaW9uIFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggXG4gKiBAcGFyYW0ge2FycmF5fSBhcmdzIFxuICovXG5jbGFzcyBNZXRob2RFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXRoLCBhcmdzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHZhciBhcmdzID0gdGhpcy50cmFuc3BpbGVMaXN0KHRoaXMuYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMucGF0aH0oJHt0aGlzLmFyZ3N9KWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCB0aGlzLnBhdGgpO1xuXG4gICAgICAgIG5vZGUuYWRkKCcoJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5hcmd1bWVudHMsIG5vZGUsIG8pLlxuICAgICAgICBhZGQoJyknKTtcblxuXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBNZXRob2RFeHByZXNzaW9uXG4iXX0=