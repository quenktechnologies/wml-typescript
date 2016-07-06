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
        this.type = 'bind-expression';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQmluZEV4cHJlc3Npb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7Ozs7Ozs7Ozs7SUFRbkIsY0FBYztjQUFkLGNBQWM7O0FBRUwsYUFGVCxjQUFjLENBRUosSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzhCQUZ4QyxjQUFjOztBQUlaLG1DQUpGLGNBQWMsNkNBSU4sUUFBUSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7QUFDOUIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7S0FFekI7O2lCQVZDLGNBQWM7O2VBWVAscUJBQUc7O0FBRVIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2RCxnQkFBSSxHQUFHLEFBQUMsSUFBSSxHQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVuQyxtQkFBVSxJQUFJLENBQUMsSUFBSSxTQUFJLElBQUksQ0FBQyxNQUFNLGNBQVMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLE9BQUk7U0FFbEU7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUUzQyxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDUixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUNoQixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDZCxtQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBRW5EOzs7V0EvQkMsY0FBYzs7O3FCQW1DTCxjQUFjIiwiZmlsZSI6IkJpbmRFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBCaW5kRXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFxuICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFxuICogQHBhcmFtIHthcnJheTxFeHByZXNzaW9uPn0gYXJnc1xuICovXG5jbGFzcyBCaW5kRXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IocGF0aCwgdGFyZ2V0LCBhcmdzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2JpbmQtZXhwcmVzc2lvbic7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLmFyZ3MubWFwKGEgPT4gYS50cmFuc3BpbGUoKSkuam9pbignLCcpO1xuICAgICAgICBhcmdzID0gKGFyZ3MpID8gJyAsJyArIGFyZ3MgOiBhcmdzO1xuXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnBhdGh9LiR7dGhpcy50YXJnZXR9LmJpbmQoJHt0aGlzLnBhdGh9JHthcmdzfSlgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuXG4gICAgICAgIG5vZGUuYWRkKHRoaXMucGF0aCkuXG4gICAgICAgIGFkZCgnLicpLlxuICAgICAgICBhZGQodGhpcy50YXJnZXQpLlxuICAgICAgICBhZGQoJy5iaW5kKCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlTGlzdCh0aGlzLmFyZ3VtZW50cywgbm9kZSwgbylcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCaW5kRXhwcmVzc2lvblxuIl19