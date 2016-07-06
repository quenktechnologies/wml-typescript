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

            var args = this.transpileList(this.arguments);
            return this.template.transpile() + '.apply(this, [make].concat([' + args + ']))';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, this.template.compile(o));

            node.add('.apply(this, [make].concat([');

            this.compileList(this.arguments, node, o);

            return node.add(']))');
        }
    }]);

    return IncludeStatement;
})(_Node3['default']);

exports['default'] = IncludeStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlci9ub2Rlcy9JbmNsdWRlU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7O0lBS25CLGdCQUFnQjtjQUFoQixnQkFBZ0I7O0FBRVAsYUFGVCxnQkFBZ0IsQ0FFTixJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTs4QkFGaEMsZ0JBQWdCOztBQUlkLG1DQUpGLGdCQUFnQiw2Q0FJUixRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQztBQUNoQyxZQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixZQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztLQUV6Qjs7aUJBVEMsZ0JBQWdCOztlQVdULHFCQUFHOztBQUVSLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QyxtQkFBVSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxvQ0FBK0IsSUFBSSxTQUFNO1NBRS9FOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVQsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVqRSxnQkFBSSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDOztBQUVuQyxnQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFMUMsbUJBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUV0Qjs7O1dBNUJQLGdCQUFnQjs7O3FCQWdDUCxnQkFBZ0IiLCJmaWxlIjoiSW5jbHVkZVN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qXG4gKiBJbmNsdWRlU3RhdGVtZW50IFxuICovXG5jbGFzcyBJbmNsdWRlU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0bXBsLCBhcmdzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2luY2x1ZGUtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRtcGw7XG4gICAgICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgYXJncyA9IHRoaXMudHJhbnNwaWxlTGlzdCh0aGlzLmFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnRlbXBsYXRlLnRyYW5zcGlsZSgpfS5hcHBseSh0aGlzLCBbbWFrZV0uY29uY2F0KFske2FyZ3N9XSkpYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCB0aGlzLnRlbXBsYXRlLmNvbXBpbGUobykpO1xuXG4gICAgICBub2RlLmFkZCgnLmFwcGx5KHRoaXMsIFttYWtlXS5jb25jYXQoWycpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuYXJndW1lbnRzLCBub2RlLCBvKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuYWRkKCddKSknKTtcblxuICAgICAgICAgICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluY2x1ZGVTdGF0ZW1lbnRcbiJdfQ==