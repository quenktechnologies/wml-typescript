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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9CaW5kRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7Ozs7OztJQVFuQixjQUFjO2NBQWQsY0FBYzs7QUFFTCxhQUZULGNBQWMsQ0FFSixJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7OEJBRnhDLGNBQWM7O0FBSVosbUNBSkYsY0FBYyw2Q0FJTixRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7S0FFekI7O2lCQVRDLGNBQWM7O2VBV1AscUJBQUc7O0FBRVIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2RCxnQkFBSSxHQUFHLEFBQUMsSUFBSSxHQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVuQyxtQkFBVSxJQUFJLENBQUMsSUFBSSxTQUFJLElBQUksQ0FBQyxNQUFNLGNBQVMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLE9BQUk7U0FFbEU7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUUzQyxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDUixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUNoQixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDZCxtQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBRW5EOzs7V0E5QkMsY0FBYzs7O3FCQWtDTCxjQUFjIiwiZmlsZSI6IkJpbmRFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBCaW5kRXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFxuICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFxuICogQHBhcmFtIHthcnJheTxFeHByZXNzaW9uPn0gYXJnc1xuICovXG5jbGFzcyBCaW5kRXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IocGF0aCwgdGFyZ2V0LCBhcmdzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgYXJncyA9IHRoaXMuYXJncy5tYXAoYSA9PiBhLnRyYW5zcGlsZSgpKS5qb2luKCcsJyk7XG4gICAgICAgIGFyZ3MgPSAoYXJncykgPyAnICwnICsgYXJncyA6IGFyZ3M7XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMucGF0aH0uJHt0aGlzLnRhcmdldH0uYmluZCgke3RoaXMucGF0aH0ke2FyZ3N9KWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJyk7XG5cbiAgICAgICAgbm9kZS5hZGQodGhpcy5wYXRoKS5cbiAgICAgICAgYWRkKCcuJykuXG4gICAgICAgIGFkZCh0aGlzLnRhcmdldCkuXG4gICAgICAgIGFkZCgnLmJpbmQoJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuYXJndW1lbnRzLCBub2RlLCBvKVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpbmRFeHByZXNzaW9uXG4iXX0=