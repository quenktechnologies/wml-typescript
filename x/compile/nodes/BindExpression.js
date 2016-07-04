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
 * BindExpression 
 * @param {string} path 
 * @param {string} target
 * @param {array<Expression>} args
 */

var BindExpression = (function (_Node) {
    _inherits(BindExpression, _Node);

    function BindExpression(path, target, args, location) {
        _classCallCheck(this, BindExpression);

        _get(Object.getPrototypeOf(BindExpression.prototype), 'constructor', this).call(this, location);
        this.path = path;
        this.target = target;
        this.arguments = args;
    }

    _createClass(BindExpression, [{
        key: 'transpile',
        value: function transpile() {

            var args = this.args.map(function (a) {
                return a.transpile();
            }).join(',');
            args = args ? ' ,' + args : args;

            return this.path + '.' + this.target + '.bind(' + this.path + args + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '');

            node.add(this.path).add('.').add(this.target).add('.bind(');
            return this.compileList(this.arguments, node, o);
        }
    }]);

    return BindExpression;
})(_Node3['default']);

exports['default'] = BindExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL0JpbmRFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7Ozs7O0lBUW5CLGNBQWM7Y0FBZCxjQUFjOztBQUVMLGFBRlQsY0FBYyxDQUVKLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTs4QkFGeEMsY0FBYzs7QUFJWixtQ0FKRixjQUFjLDZDQUlOLFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztLQUV6Qjs7aUJBVEMsY0FBYzs7ZUFXUCxxQkFBRzs7QUFFUixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO3VCQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7YUFBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZELGdCQUFJLEdBQUcsQUFBQyxJQUFJLEdBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRW5DLG1CQUFVLElBQUksQ0FBQyxJQUFJLFNBQUksSUFBSSxDQUFDLE1BQU0sY0FBUyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksT0FBSTtTQUVsRTs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7O0FBRTNDLGdCQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUNSLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQ2hCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNkLG1CQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FFbkQ7OztXQTlCQyxjQUFjOzs7cUJBa0NMLGNBQWMiLCJmaWxlIjoiQmluZEV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEJpbmRFeHByZXNzaW9uIFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0XG4gKiBAcGFyYW0ge2FycmF5PEV4cHJlc3Npb24+fSBhcmdzXG4gKi9cbmNsYXNzIEJpbmRFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXRoLCB0YXJnZXQsIGFyZ3MsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHZhciBhcmdzID0gdGhpcy5hcmdzLm1hcChhID0+IGEudHJhbnNwaWxlKCkpLmpvaW4oJywnKTtcbiAgICAgICAgYXJncyA9IChhcmdzKSA/ICcgLCcgKyBhcmdzIDogYXJncztcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy5wYXRofS4ke3RoaXMudGFyZ2V0fS5iaW5kKCR7dGhpcy5wYXRofSR7YXJnc30pYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKTtcblxuICAgICAgICBub2RlLmFkZCh0aGlzLnBhdGgpLlxuICAgICAgICBhZGQoJy4nKS5cbiAgICAgICAgYWRkKHRoaXMudGFyZ2V0KS5cbiAgICAgICAgYWRkKCcuYmluZCgnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5hcmd1bWVudHMsIG5vZGUsIG8pXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmluZEV4cHJlc3Npb25cbiJdfQ==