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
 * Filter 
 */

var Filter = (function (_Node) {
    _inherits(Filter, _Node);

    function Filter(name, args, location) {
        _classCallCheck(this, Filter);

        _get(Object.getPrototypeOf(Filter.prototype), 'constructor', this).call(this, location);
        this.name = name;
        this.arguments = args;
    }

    _createClass(Filter, [{
        key: 'addValue',
        value: function addValue(o) {

            this.arguments = [o].concat(this.arguments);
            return this;
        }
    }, {
        key: 'transpile',
        value: function transpile() {

            var args = this.arguments.slice();
            return this.name + '.apply(this, [' + this.transpileList(this.arguments) + '])';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '');

            node.add(this.name + '.apply(this,').add('[');

            return this.compileList(this.arguments, node, o).add('])');
        }
    }]);

    return Filter;
})(_Node3['default']);

exports['default'] = Filter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL0ZpbHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7OztJQUtuQixNQUFNO2NBQU4sTUFBTTs7QUFFRyxhQUZULE1BQU0sQ0FFSSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTs4QkFGaEMsTUFBTTs7QUFJSixtQ0FKRixNQUFNLDZDQUlFLFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztLQUV6Qjs7aUJBUkMsTUFBTTs7ZUFVQSxrQkFBQyxDQUFDLEVBQUU7O0FBRVIsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVDLG1CQUFPLElBQUksQ0FBQztTQUVmOzs7ZUFFUSxxQkFBRzs7QUFFUixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNsQyxtQkFBVSxJQUFJLENBQUMsSUFBSSxzQkFBaUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQUs7U0FFOUU7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUUzQyxnQkFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsSUFBSSxrQkFBZSxDQUNwQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRVQsbUJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FDaEQsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBRWI7OztXQWxDQyxNQUFNOzs7cUJBc0NHLE1BQU0iLCJmaWxlIjoiRmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBGaWx0ZXIgXG4gKi9cbmNsYXNzIEZpbHRlciBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYXJncywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcblxuICAgIH1cblxuICAgIGFkZFZhbHVlKG8pIHtcblxuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IFtvXS5jb25jYXQodGhpcy5hcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgYXJncyA9IHRoaXMuYXJndW1lbnRzLnNsaWNlKCk7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm5hbWV9LmFwcGx5KHRoaXMsIFske3RoaXMudHJhbnNwaWxlTGlzdCh0aGlzLmFyZ3VtZW50cyl9XSlgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuXG4gICAgICAgIG5vZGUuYWRkKGAke3RoaXMubmFtZX0uYXBwbHkodGhpcyxgKS5cbiAgICAgICAgYWRkKCdbJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5hcmd1bWVudHMsIG5vZGUsIG8pLlxuICAgICAgICBhZGQoJ10pJyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyXG4iXX0=