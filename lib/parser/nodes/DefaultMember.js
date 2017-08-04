'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * DefaultMember
 * @param {string} member
 * @param {Location} location
 */
var DefaultMember = function (_Node) {
    _inherits(DefaultMember, _Node);

    function DefaultMember(member, location) {
        _classCallCheck(this, DefaultMember);

        var _this = _possibleConstructorReturn(this, (DefaultMember.__proto__ || Object.getPrototypeOf(DefaultMember)).call(this));

        _this.type = 'default-member';
        _this.member = member;
        _this.location = location;

        return _this;
    }

    _createClass(DefaultMember, [{
        key: 'transpile',
        value: function transpile() {

            return this.member;
        }
    }]);

    return DefaultMember;
}(_Node3.default);

exports.default = DefaultMember;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRGVmYXVsdE1lbWJlci5qcyJdLCJuYW1lcyI6WyJEZWZhdWx0TWVtYmVyIiwibWVtYmVyIiwibG9jYXRpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTUEsYTs7O0FBRUYsMkJBQVlDLE1BQVosRUFBb0JDLFFBQXBCLEVBQThCO0FBQUE7O0FBQUE7O0FBRzFCLGNBQUtDLElBQUwsR0FBWSxnQkFBWjtBQUNBLGNBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUwwQjtBQU83Qjs7OztvQ0FFVzs7QUFFUixtQkFBTyxLQUFLRCxNQUFaO0FBRUg7Ozs7OztrQkFJVUQsYSIsImZpbGUiOiJEZWZhdWx0TWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBEZWZhdWx0TWVtYmVyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVtYmVyXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBEZWZhdWx0TWVtYmVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtZW1iZXIsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2RlZmF1bHQtbWVtYmVyJztcbiAgICAgICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5tZW1iZXI7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdE1lbWJlclxuIl19