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

/*
 * IncludeStatement 
 */

var IncludeStatement = (function (_Node) {
    _inherits(IncludeStatement, _Node);

    function IncludeStatement(tmpl, args, location) {
        _classCallCheck(this, IncludeStatement);

        _get(Object.getPrototypeOf(IncludeStatement.prototype), 'constructor', this).call(this, location);
        this.type = 'include-statement';
        this.template = tmpl;
        this.arguments = args;
    }

    _createClass(IncludeStatement, [{
        key: 'transpile',
        value: function transpile() {

            var args = this.arguments !== null ? this.arguments.transpile() : '[]';
            return this.template.transpile() + '.apply(this, [make].concat(' + args + '))';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var args = this.arguments !== null ? this.arguments.compile() : '[]';

            return this.sourceNode(o.fileName, this.template.compile(o)).add('.apply(this, [make].concat(').add(args).add('))');
        }
    }]);

    return IncludeStatement;
})(_Node3['default']);

exports['default'] = IncludeStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSW5jbHVkZVN0YXRlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7OztJQUtuQixnQkFBZ0I7Y0FBaEIsZ0JBQWdCOztBQUVQLGFBRlQsZ0JBQWdCLENBRU4sSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7OEJBRmhDLGdCQUFnQjs7QUFJZCxtQ0FKRixnQkFBZ0IsNkNBSVIsUUFBUSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUM7QUFDaEMsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsWUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7S0FFekI7O2lCQVRDLGdCQUFnQjs7ZUFXVCxxQkFBRzs7QUFFUixnQkFBSSxJQUFJLEdBQUcsQUFBQyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQztBQUN6RSxtQkFBVSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxtQ0FBOEIsSUFBSSxRQUFLO1NBRTdFOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsZ0JBQUksSUFBSSxHQUFHLEFBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7O0FBRXZFLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM1RCxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUNULEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUViOzs7V0EzQkMsZ0JBQWdCOzs7cUJBK0JQLGdCQUFnQiIsImZpbGUiOiJJbmNsdWRlU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLypcbiAqIEluY2x1ZGVTdGF0ZW1lbnQgXG4gKi9cbmNsYXNzIEluY2x1ZGVTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHRtcGwsIGFyZ3MsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW5jbHVkZS1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdG1wbDtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHZhciBhcmdzID0gKHRoaXMuYXJndW1lbnRzICE9PSBudWxsKSA/IHRoaXMuYXJndW1lbnRzLnRyYW5zcGlsZSgpIDogJ1tdJztcbiAgICAgICAgcmV0dXJuIGAke3RoaXMudGVtcGxhdGUudHJhbnNwaWxlKCl9LmFwcGx5KHRoaXMsIFttYWtlXS5jb25jYXQoJHthcmdzfSkpYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBhcmdzID0gKHRoaXMuYXJndW1lbnRzICE9PSBudWxsKSA/IHRoaXMuYXJndW1lbnRzLmNvbXBpbGUoKSA6ICdbXSc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCB0aGlzLnRlbXBsYXRlLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoJy5hcHBseSh0aGlzLCBbbWFrZV0uY29uY2F0KCcpLlxuICAgICAgICBhZGQoYXJncykuXG4gICAgICAgIGFkZCgnKSknKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmNsdWRlU3RhdGVtZW50XG4iXX0=