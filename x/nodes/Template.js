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
 * Template
 * @param {array<Import>} imports 
 * @param {array<string>} args 
 * @param {Tag} root
 * @param {Location} location 
 */

var Template = (function (_Node) {
    _inherits(Template, _Node);

    function Template(imports, args, root, location) {
        _classCallCheck(this, Template);

        _get(Object.getPrototypeOf(Template.prototype), 'constructor', this).call(this, location);
        this.type = 'template';
        this.imports = imports;
        this.arguments = args;
        this.root = root;
    }

    _createClass(Template, [{
        key: 'transpile',
        value: function transpile() {

            var str = '';
            var args = this.arguments.join(',');

            args = args ? ' ,' + args : args;
            this.imports.forEach(function (i) {
                return str = str + i + '\n';
            });
            return str + ('export default function (make' + args + ') { return ' + this.root.transpile() + '; }');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var str = '';
            var args = this.usage.join(',');

            args = args ? ' ,' + args : args;

            return this.sourceNode(o.fileName, '').add('export default function (make' + args + ') { return ').add(this.imports.map(function (i) {
                return i.compile(o);
            })).add(this.root.compile(o)).add('; }');
        }
    }]);

    return Template;
})(_Node3['default']);

exports['default'] = Template;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9UZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7Ozs7Ozs7SUFTbkIsUUFBUTtjQUFSLFFBQVE7O0FBRUMsYUFGVCxRQUFRLENBRUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzhCQUZ6QyxRQUFROztBQUlOLG1DQUpGLFFBQVEsNkNBSUEsUUFBUSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO0FBQ3ZCLFlBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFlBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBRXBCOztpQkFWQyxRQUFROztlQVlELHFCQUFHOztBQUVSLGdCQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDYixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXBDLGdCQUFJLEdBQUcsQUFBQyxJQUFJLEdBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbkMsZ0JBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJO2FBQUEsQ0FBQyxDQUFDO0FBQ2hELG1CQUFPLEdBQUcsc0NBQW1DLElBQUksbUJBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBSyxDQUFBO1NBRTVGOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsZ0JBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFaEMsZ0JBQUksR0FBRyxBQUFDLElBQUksR0FBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFbkMsbUJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUN0QyxHQUFHLG1DQUFpQyxJQUFJLGlCQUFjLENBQ3RELEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUMsQ0FDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUdkOzs7V0FyQ0MsUUFBUTs7O3FCQXlDQyxRQUFRIiwiZmlsZSI6IlRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBUZW1wbGF0ZVxuICogQHBhcmFtIHthcnJheTxJbXBvcnQ+fSBpbXBvcnRzIFxuICogQHBhcmFtIHthcnJheTxzdHJpbmc+fSBhcmdzIFxuICogQHBhcmFtIHtUYWd9IHJvb3RcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBUZW1wbGF0ZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoaW1wb3J0cywgYXJncywgcm9vdCwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICd0ZW1wbGF0ZSc7XG4gICAgICAgIHRoaXMuaW1wb3J0cyA9IGltcG9ydHM7XG4gICAgICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgc3RyID0gJyc7XG4gICAgICAgIHZhciBhcmdzID0gdGhpcy5hcmd1bWVudHMuam9pbignLCcpO1xuXG4gICAgICAgIGFyZ3MgPSAoYXJncykgPyAnICwnICsgYXJncyA6IGFyZ3M7XG4gICAgICAgIHRoaXMuaW1wb3J0cy5mb3JFYWNoKGkgPT4gc3RyID0gc3RyICsgaSArICdcXG4nKTtcbiAgICAgICAgcmV0dXJuIHN0ciArIGBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWFrZSR7YXJnc30pIHsgcmV0dXJuICR7dGhpcy5yb290LnRyYW5zcGlsZSgpfTsgfWBcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLnVzYWdlLmpvaW4oJywnKTtcblxuICAgICAgICBhcmdzID0gKGFyZ3MpID8gJyAsJyArIGFyZ3MgOiBhcmdzO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpLlxuICAgICAgICBhZGQoYGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtYWtlJHthcmdzfSkgeyByZXR1cm4gYCkuXG4gICAgICAgIGFkZCh0aGlzLmltcG9ydHMubWFwKGkgPT4gaS5jb21waWxlKG8pKSkuXG4gICAgICAgIGFkZCh0aGlzLnJvb3QuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCgnOyB9Jyk7XG5cblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZVxuIl19