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
        this.parameters = args;
        this.root = root;
    }

    _createClass(Template, [{
        key: 'transpile',
        value: function transpile() {

            var str = '';
            var args = this.parameters.map(function (p) {
                return p.transpile();
            }).join(',');

            args = args ? ' ,' + args : args;
            this.imports.forEach(function (i) {
                return str = str + i.transpile() + '\n';
            });
            return str + 'export default function (make' + args + ') { return ' + this.root.transpile() + '; }';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var str = '';
            var args = this.parameters.map(function (p) {
                return p.compile(o);
            });

            args = args ? ' ,' + args : args;

            return this.sourceNode(o.fileName, '').add('export default function (make').add(args).add('{ return ').add(this.imports.map(function (i) {
                return i.compile(o);
            })).add(this.root.compile(o)).add('; }');
        }
    }]);

    return Template;
})(_Node3['default']);

exports['default'] = Template;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7Ozs7Ozs7Ozs7O0lBU25CLFFBQVE7Y0FBUixRQUFROztBQUVDLGFBRlQsUUFBUSxDQUVFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTs4QkFGekMsUUFBUTs7QUFJTixtQ0FKRixRQUFRLDZDQUlBLFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUN2QixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixZQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2QixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUVwQjs7aUJBVkMsUUFBUTs7ZUFZRCxxQkFBRzs7QUFFUixnQkFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt1QkFBRSxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFM0QsZ0JBQUksR0FBRyxBQUFDLElBQUksR0FBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNuQyxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO3VCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUk7YUFBQSxDQUFDLENBQUM7QUFDNUQsbUJBQVUsR0FBRyxxQ0FBZ0MsSUFBSSxtQkFBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFLO1NBRTVGOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsZ0JBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUM7O0FBRWhELGdCQUFJLEdBQUcsQUFBQyxJQUFJLEdBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRW5DLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FDdEMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FDVCxHQUFHLENBQUMsV0FBVyxDQUFDLENBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUMsQ0FDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUdkOzs7V0F2Q0MsUUFBUTs7O3FCQTJDQyxRQUFRIiwiZmlsZSI6IlRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBUZW1wbGF0ZVxuICogQHBhcmFtIHthcnJheTxJbXBvcnQ+fSBpbXBvcnRzIFxuICogQHBhcmFtIHthcnJheTxzdHJpbmc+fSBhcmdzIFxuICogQHBhcmFtIHtUYWd9IHJvb3RcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBUZW1wbGF0ZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoaW1wb3J0cywgYXJncywgcm9vdCwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICd0ZW1wbGF0ZSc7XG4gICAgICAgIHRoaXMuaW1wb3J0cyA9IGltcG9ydHM7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IGFyZ3M7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgICB2YXIgYXJncyA9IHRoaXMucGFyYW1ldGVycy5tYXAocD0+cC50cmFuc3BpbGUoKSkuam9pbignLCcpO1xuXG4gICAgICAgIGFyZ3MgPSAoYXJncykgPyAnICwnICsgYXJncyA6IGFyZ3M7XG4gICAgICAgIHRoaXMuaW1wb3J0cy5mb3JFYWNoKGkgPT4gc3RyID0gc3RyICsgaS50cmFuc3BpbGUoKSArICdcXG4nKTtcbiAgICAgICAgcmV0dXJuIGAke3N0cn1leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWFrZSR7YXJnc30pIHsgcmV0dXJuICR7dGhpcy5yb290LnRyYW5zcGlsZSgpfTsgfWBcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLnBhcmFtZXRlcnMubWFwKHA9PnAuY29tcGlsZShvKSk7XG5cbiAgICAgICAgYXJncyA9IChhcmdzKSA/ICcgLCcgKyBhcmdzIDogYXJncztcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKS5cbiAgICAgICAgYWRkKCdleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWFrZScpLlxuICAgICAgICBhZGQoYXJncykuXG4gICAgICAgIGFkZCgneyByZXR1cm4gJykuXG4gICAgICAgIGFkZCh0aGlzLmltcG9ydHMubWFwKGkgPT4gaS5jb21waWxlKG8pKSkuXG4gICAgICAgIGFkZCh0aGlzLnJvb3QuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCgnOyB9Jyk7XG5cblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZVxuIl19