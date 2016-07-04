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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvVGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7Ozs7Ozs7Ozs7O0lBU25CLFFBQVE7Y0FBUixRQUFROztBQUVDLGFBRlQsUUFBUSxDQUVFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTs4QkFGekMsUUFBUTs7QUFJTixtQ0FKRixRQUFRLDZDQUlBLFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUN2QixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixZQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUN0QixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUVwQjs7aUJBVkMsUUFBUTs7ZUFZRCxxQkFBRzs7QUFFUixnQkFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUVwQyxnQkFBSSxHQUFHLEFBQUMsSUFBSSxHQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ25DLGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7dUJBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSTthQUFBLENBQUMsQ0FBQztBQUNoRCxtQkFBTyxHQUFHLHNDQUFtQyxJQUFJLG1CQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQUssQ0FBQTtTQUU1Rjs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLGdCQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDYixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRWhDLGdCQUFJLEdBQUcsQUFBQyxJQUFJLEdBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRW5DLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FDdEMsR0FBRyxtQ0FBaUMsSUFBSSxpQkFBYyxDQUN0RCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO3VCQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQUEsQ0FBQyxDQUFDLENBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN6QixHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FHZDs7O1dBckNDLFFBQVE7OztxQkF5Q0MsUUFBUSIsImZpbGUiOiJUZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogVGVtcGxhdGVcbiAqIEBwYXJhbSB7YXJyYXk8SW1wb3J0Pn0gaW1wb3J0cyBcbiAqIEBwYXJhbSB7YXJyYXk8c3RyaW5nPn0gYXJncyBcbiAqIEBwYXJhbSB7VGFnfSByb290XG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgVGVtcGxhdGUgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGltcG9ydHMsIGFyZ3MsIHJvb3QsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAndGVtcGxhdGUnO1xuICAgICAgICB0aGlzLmltcG9ydHMgPSBpbXBvcnRzO1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgICB2YXIgYXJncyA9IHRoaXMuYXJndW1lbnRzLmpvaW4oJywnKTtcblxuICAgICAgICBhcmdzID0gKGFyZ3MpID8gJyAsJyArIGFyZ3MgOiBhcmdzO1xuICAgICAgICB0aGlzLmltcG9ydHMuZm9yRWFjaChpID0+IHN0ciA9IHN0ciArIGkgKyAnXFxuJyk7XG4gICAgICAgIHJldHVybiBzdHIgKyBgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1ha2Uke2FyZ3N9KSB7IHJldHVybiAke3RoaXMucm9vdC50cmFuc3BpbGUoKX07IH1gXG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgc3RyID0gJyc7XG4gICAgICAgIHZhciBhcmdzID0gdGhpcy51c2FnZS5qb2luKCcsJyk7XG5cbiAgICAgICAgYXJncyA9IChhcmdzKSA/ICcgLCcgKyBhcmdzIDogYXJncztcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKS5cbiAgICAgICAgYWRkKGBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWFrZSR7YXJnc30pIHsgcmV0dXJuIGApLlxuICAgICAgICBhZGQodGhpcy5pbXBvcnRzLm1hcChpID0+IGkuY29tcGlsZShvKSkpLlxuICAgICAgICBhZGQodGhpcy5yb290LmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoJzsgfScpO1xuXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGVcbiJdfQ==