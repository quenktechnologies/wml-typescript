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
            var args = this.parameters.join(',');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL1RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7Ozs7OztJQVNuQixRQUFRO2NBQVIsUUFBUTs7QUFFQyxhQUZULFFBQVEsQ0FFRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7OEJBRnpDLFFBQVE7O0FBSU4sbUNBSkYsUUFBUSw2Q0FJQSxRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7QUFDdkIsWUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsWUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDdkIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FFcEI7O2lCQVZDLFFBQVE7O2VBWUQscUJBQUc7O0FBRVIsZ0JBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFckMsZ0JBQUksR0FBRyxBQUFDLElBQUksR0FBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNuQyxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO3VCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUk7YUFBQSxDQUFDLENBQUM7QUFDaEQsbUJBQU8sR0FBRyxzQ0FBbUMsSUFBSSxtQkFBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFLLENBQUE7U0FFNUY7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxnQkFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUVoQyxnQkFBSSxHQUFHLEFBQUMsSUFBSSxHQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVuQyxtQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQ3RDLEdBQUcsbUNBQWlDLElBQUksaUJBQWMsQ0FDdEQsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUFBLENBQUMsQ0FBQyxDQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDekIsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBR2Q7OztXQXJDQyxRQUFROzs7cUJBeUNDLFFBQVEiLCJmaWxlIjoiVGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFRlbXBsYXRlXG4gKiBAcGFyYW0ge2FycmF5PEltcG9ydD59IGltcG9ydHMgXG4gKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IGFyZ3MgXG4gKiBAcGFyYW0ge1RhZ30gcm9vdFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIFRlbXBsYXRlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihpbXBvcnRzLCBhcmdzLCByb290LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3RlbXBsYXRlJztcbiAgICAgICAgdGhpcy5pbXBvcnRzID0gaW1wb3J0cztcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gYXJncztcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgc3RyID0gJyc7XG4gICAgICAgIHZhciBhcmdzID0gdGhpcy5wYXJhbWV0ZXJzLmpvaW4oJywnKTtcblxuICAgICAgICBhcmdzID0gKGFyZ3MpID8gJyAsJyArIGFyZ3MgOiBhcmdzO1xuICAgICAgICB0aGlzLmltcG9ydHMuZm9yRWFjaChpID0+IHN0ciA9IHN0ciArIGkgKyAnXFxuJyk7XG4gICAgICAgIHJldHVybiBzdHIgKyBgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1ha2Uke2FyZ3N9KSB7IHJldHVybiAke3RoaXMucm9vdC50cmFuc3BpbGUoKX07IH1gXG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgc3RyID0gJyc7XG4gICAgICAgIHZhciBhcmdzID0gdGhpcy51c2FnZS5qb2luKCcsJyk7XG5cbiAgICAgICAgYXJncyA9IChhcmdzKSA/ICcgLCcgKyBhcmdzIDogYXJncztcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKS5cbiAgICAgICAgYWRkKGBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWFrZSR7YXJnc30pIHsgcmV0dXJuIGApLlxuICAgICAgICBhZGQodGhpcy5pbXBvcnRzLm1hcChpID0+IGkuY29tcGlsZShvKSkpLlxuICAgICAgICBhZGQodGhpcy5yb290LmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoJzsgfScpO1xuXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGVcbiJdfQ==