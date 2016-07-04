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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9JbmNsdWRlU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7O0lBS25CLGdCQUFnQjtjQUFoQixnQkFBZ0I7O0FBRVAsYUFGVCxnQkFBZ0IsQ0FFTixJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTs4QkFGaEMsZ0JBQWdCOztBQUlkLG1DQUpGLGdCQUFnQiw2Q0FJUixRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsWUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7S0FFekI7O2lCQVJDLGdCQUFnQjs7ZUFVVCxxQkFBRzs7QUFFUixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsbUJBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsb0NBQStCLElBQUksU0FBTTtTQUUvRTs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVULGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFakUsZ0JBQUksQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQzs7QUFFbkMsZ0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0FBRTFDLG1CQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FFdEI7OztXQTNCUCxnQkFBZ0I7OztxQkErQlAsZ0JBQWdCIiwiZmlsZSI6IkluY2x1ZGVTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKlxuICogSW5jbHVkZVN0YXRlbWVudCBcbiAqL1xuY2xhc3MgSW5jbHVkZVN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodG1wbCwgYXJncywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0bXBsO1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLnRyYW5zcGlsZUxpc3QodGhpcy5hcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy50ZW1wbGF0ZS50cmFuc3BpbGUoKX0uYXBwbHkodGhpcywgW21ha2VdLmNvbmNhdChbJHthcmdzfV0pKWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgdGhpcy50ZW1wbGF0ZS5jb21waWxlKG8pKTtcblxuICAgICAgbm9kZS5hZGQoJy5hcHBseSh0aGlzLCBbbWFrZV0uY29uY2F0KFsnKTtcblxuICAgICAgICAgICAgdGhpcy5jb21waWxlTGlzdCh0aGlzLmFyZ3VtZW50cywgbm9kZSwgbyk7XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlLmFkZCgnXSkpJyk7XG5cbiAgICAgICAgICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmNsdWRlU3RhdGVtZW50XG4iXX0=