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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL0NvbXBvc2l0ZU1lbWJlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7Ozs7OztJQVFuQixlQUFlO2NBQWYsZUFBZTs7QUFFTixhQUZULGVBQWUsQ0FFTCxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTs4QkFGcEMsZUFBZTs7QUFHYixtQ0FIRixlQUFlLDZDQUdQLFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUN4Qjs7aUJBTkMsZUFBZTs7ZUFRUixxQkFBRzs7QUFFUixvQ0FBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsY0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFJO1NBRXBGOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsbUJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUNqRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFL0I7OztXQXBCQyxlQUFlOzs7cUJBd0JOLGVBQWUiLCJmaWxlIjoiQ29tcG9zaXRlTWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBDb21wb3NpdGVNZW1iZXIgXG4gKiBAcGFyYW0ge01lbWJlcn0gbWVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ0xpdGVyYWx9IG1vZHVsZVxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgQ29tcG9zaXRlTWVtYmVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtZW1iZXIsIG1vZHVsZSwgbG9jYXRpb24pIHtcbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLm1lbWJlciA9IG1lbWJlcjtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiBgaW1wb3J0ICogYXMgJHt0aGlzLm1lbWJlci50cmFuc3BpbGUoKX0gZnJvbSAke3RoaXMubW9kdWxlLnRyYW5zcGlsZSgpfTtgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnaW1wb3J0ICogYXMnKS5cbiAgICAgICAgYWRkKHRoaXMubWVtYmVyLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQodGhpcy5tb2R1bGUuY29tcGlsZShvKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9zaXRlTWVtYmVyXG4iXX0=