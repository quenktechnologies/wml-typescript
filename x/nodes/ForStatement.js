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

var count = 0;
/**
 * ForStatement 
 */

var ForStatement = (function (_Node) {
    _inherits(ForStatement, _Node);

    function ForStatement(variable, indexName, target, children, location) {
        _classCallCheck(this, ForStatement);

        _get(Object.getPrototypeOf(ForStatement.prototype), 'constructor', this).call(this, location);
        this.variable = variable;
        this.indexName = indexName;
        this.target = target;
        this.children = children;
    }

    _createClass(ForStatement, [{
        key: 'transpile',
        value: function transpile() {

            count = count + 1;

            return 'make.forloop(' + this.target.transpile() + ',' + ('function for_' + count + ' (' + this.variable + ', ' + this.indexName + ') {') + ('return [' + this.transpileList(this.children) + ']; }.bind(this))');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '');

            count = count + 1;

            node.add('make.forloop(').add(this.target.compile(o)).add('function for_' + count + ' (' + this.variable + ', ' + this.indexName + ') {').add('return [');

            this.compileList(this.children, node, o);
            return node.add(']; }.bind(this))');
        }
    }]);

    return ForStatement;
})(_Node3['default']);

exports['default'] = ForStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9Gb3JTdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7OztBQUV6QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Ozs7O0lBSVIsWUFBWTtjQUFaLFlBQVk7O0FBRUgsYUFGVCxZQUFZLENBRUYsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTs4QkFGM0QsWUFBWTs7QUFJVixtQ0FKRixZQUFZLDZDQUlKLFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixZQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUMzQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUU1Qjs7aUJBVkMsWUFBWTs7ZUFZTCxxQkFBRzs7QUFFUixpQkFBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7O0FBRWxCLG1CQUFPLGtCQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSw0QkFDMUIsS0FBSyxVQUFLLElBQUksQ0FBQyxRQUFRLFVBQUssSUFBSSxDQUFDLFNBQVMsU0FBSyxpQkFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLHNCQUFrQixDQUFDO1NBRXRFOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQzs7QUFFM0MsaUJBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztBQUVsQixnQkFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FDekIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzNCLEdBQUcsbUJBQWlCLEtBQUssVUFBSyxJQUFJLENBQUMsUUFBUSxVQUFLLElBQUksQ0FBQyxTQUFTLFNBQU0sQ0FDcEUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUVoQixnQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QyxtQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FHdkM7OztXQXJDQyxZQUFZOzs7cUJBeUNILFlBQVkiLCJmaWxlIjoiRm9yU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxudmFyIGNvdW50ID0gMDtcbi8qKlxuICogRm9yU3RhdGVtZW50IFxuICovXG5jbGFzcyBGb3JTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhcmlhYmxlLCBpbmRleE5hbWUsIHRhcmdldCwgY2hpbGRyZW4sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgICAgIHRoaXMuaW5kZXhOYW1lID0gaW5kZXhOYW1lO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuXG4gICAgICAgIHJldHVybiBgbWFrZS5mb3Jsb29wKCR7dGhpcy50YXJnZXQudHJhbnNwaWxlKCl9LGAgK1xuICAgICAgICAgICAgYGZ1bmN0aW9uIGZvcl8ke2NvdW50fSAoJHt0aGlzLnZhcmlhYmxlfSwgJHt0aGlzLmluZGV4TmFtZX0pIHtgICtcbiAgICAgICAgICAgIGByZXR1cm4gWyR7dGhpcy50cmFuc3BpbGVMaXN0KHRoaXMuY2hpbGRyZW4pfV07IH0uYmluZCh0aGlzKSlgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuXG4gICAgICAgIG5vZGUuYWRkKCdtYWtlLmZvcmxvb3AoJykuXG4gICAgICAgIGFkZCh0aGlzLnRhcmdldC5jb21waWxlKG8pKS5cbiAgICAgICAgYWRkKGBmdW5jdGlvbiBmb3JfJHtjb3VudH0gKCR7dGhpcy52YXJpYWJsZX0sICR7dGhpcy5pbmRleE5hbWV9KSB7YCkuXG4gICAgICAgIGFkZCgncmV0dXJuIFsnKTtcblxuICAgICAgICB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuY2hpbGRyZW4sIG5vZGUsIG8pO1xuICAgICAgICByZXR1cm4gbm9kZS5hZGQoJ107IH0uYmluZCh0aGlzKSknKTtcblxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvclN0YXRlbWVudFxuIl19