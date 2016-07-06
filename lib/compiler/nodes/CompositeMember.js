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
        this.type = 'composite-member';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlci9ub2Rlcy9Db21wb3NpdGVNZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7Ozs7Ozs7Ozs7SUFRbkIsZUFBZTtjQUFmLGVBQWU7O0FBRU4sYUFGVCxlQUFlLENBRUwsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7OEJBRnBDLGVBQWU7O0FBR2IsbUNBSEYsZUFBZSw2Q0FHUCxRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUMvQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUN4Qjs7aUJBUEMsZUFBZTs7ZUFTUixxQkFBRzs7QUFFUixvQ0FBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsY0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFJO1NBRXBGOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsbUJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUNqRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFL0I7OztXQXJCQyxlQUFlOzs7cUJBeUJOLGVBQWUiLCJmaWxlIjoiQ29tcG9zaXRlTWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBDb21wb3NpdGVNZW1iZXIgXG4gKiBAcGFyYW0ge01lbWJlcn0gbWVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ0xpdGVyYWx9IG1vZHVsZVxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgQ29tcG9zaXRlTWVtYmVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtZW1iZXIsIG1vZHVsZSwgbG9jYXRpb24pIHtcbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnY29tcG9zaXRlLW1lbWJlcic7XG4gICAgICAgIHRoaXMubWVtYmVyID0gbWVtYmVyO1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIGBpbXBvcnQgKiBhcyAke3RoaXMubWVtYmVyLnRyYW5zcGlsZSgpfSBmcm9tICR7dGhpcy5tb2R1bGUudHJhbnNwaWxlKCl9O2A7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICdpbXBvcnQgKiBhcycpLlxuICAgICAgICBhZGQodGhpcy5tZW1iZXIuY29tcGlsZShvKSkuXG4gICAgICAgIGFkZCh0aGlzLm1vZHVsZS5jb21waWxlKG8pKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb3NpdGVNZW1iZXJcbiJdfQ==