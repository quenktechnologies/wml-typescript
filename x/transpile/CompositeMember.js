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
 * CompositeMember 
 * @param {Member} member
 * @param {StringLiteral} module
 * @param {Location} location
 */

var CompositeMember = (function (_Node) {
    _inherits(CompositeMember, _Node);

    function CompositeMember(member, module, location) {
        _classCallCheck(this, CompositeMember);

        _get(Object.getPrototypeOf(CompositeMember.prototype), 'constructor', this).call(this, location);
        this.member = member;
        this.module = module;
    }

    _createClass(CompositeMember, [{
        key: 'transpile',
        value: function transpile() {

            return 'import * as ' + this.member.transpile() + ' from ' + this.module.transpile() + ';';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, 'import * as').add(this.member.compile(o)).add(this.module.compile(o));
        }
    }]);

    return CompositeMember;
})(_Node3['default']);

exports['default'] = CompositeMember;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQ29tcG9zaXRlTWVtYmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7Ozs7O0lBUW5CLGVBQWU7Y0FBZixlQUFlOztBQUVOLGFBRlQsZUFBZSxDQUVMLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFOzhCQUZwQyxlQUFlOztBQUdiLG1DQUhGLGVBQWUsNkNBR1AsUUFBUSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ3hCOztpQkFOQyxlQUFlOztlQVFSLHFCQUFHOztBQUVSLG9DQUFzQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxjQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQUk7U0FFcEY7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxtQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUUvQjs7O1dBcEJDLGVBQWU7OztxQkF3Qk4sZUFBZSIsImZpbGUiOiJDb21wb3NpdGVNZW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIENvbXBvc2l0ZU1lbWJlciBcbiAqIEBwYXJhbSB7TWVtYmVyfSBtZW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nTGl0ZXJhbH0gbW9kdWxlXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBDb21wb3NpdGVNZW1iZXIgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG1lbWJlciwgbW9kdWxlLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMubWVtYmVyID0gbWVtYmVyO1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIGBpbXBvcnQgKiBhcyAke3RoaXMubWVtYmVyLnRyYW5zcGlsZSgpfSBmcm9tICR7dGhpcy5tb2R1bGUudHJhbnNwaWxlKCl9O2A7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICdpbXBvcnQgKiBhcycpLlxuICAgICAgICBhZGQodGhpcy5tZW1iZXIuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCh0aGlzLm1vZHVsZS5jb21waWxlKG8pKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb3NpdGVNZW1iZXJcbiJdfQ==