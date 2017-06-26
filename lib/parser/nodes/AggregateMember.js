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
 * AggregateMember 
 * @param {stringr} member
 * @param {Location} location
 */
var AggregateMember = function (_Node) {
    _inherits(AggregateMember, _Node);

    function AggregateMember(member, location) {
        _classCallCheck(this, AggregateMember);

        var _this = _possibleConstructorReturn(this, (AggregateMember.__proto__ || Object.getPrototypeOf(AggregateMember)).call(this));

        _this.type = 'aggregate-member';
        _this.member = member;
        _this.location = location;

        return _this;
    }

    _createClass(AggregateMember, [{
        key: 'transpile',
        value: function transpile() {

            return '* as ' + this.member;
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, '* as ' + this.member).add(this.member.compile(o)).add(this.module.compile(o));
        }
    }]);

    return AggregateMember;
}(_Node3.default);

exports.default = AggregateMember;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQWdncmVnYXRlTWVtYmVyLmpzIl0sIm5hbWVzIjpbIkFnZ3JlZ2F0ZU1lbWJlciIsIm1lbWJlciIsImxvY2F0aW9uIiwidHlwZSIsIm8iLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTUEsZTs7O0FBRUYsNkJBQVlDLE1BQVosRUFBb0JDLFFBQXBCLEVBQThCO0FBQUE7O0FBQUE7O0FBRzFCLGNBQUtDLElBQUwsR0FBWSxrQkFBWjtBQUNBLGNBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUwwQjtBQU83Qjs7OztvQ0FFVzs7QUFFUiw2QkFBZSxLQUFLRCxNQUFwQjtBQUVIOzs7Z0NBRU9HLEMsRUFBRzs7QUFFUCxtQkFBTyxLQUFLQyxVQUFMLENBQWdCRCxFQUFFRSxRQUFsQixZQUFvQyxLQUFLTCxNQUF6QyxFQUNQTSxHQURPLENBQ0gsS0FBS04sTUFBTCxDQUFZTyxPQUFaLENBQW9CSixDQUFwQixDQURHLEVBRVBHLEdBRk8sQ0FFSCxLQUFLRSxNQUFMLENBQVlELE9BQVosQ0FBb0JKLENBQXBCLENBRkcsQ0FBUDtBQUlIOzs7Ozs7a0JBSVVKLGUiLCJmaWxlIjoiQWdncmVnYXRlTWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBBZ2dyZWdhdGVNZW1iZXIgXG4gKiBAcGFyYW0ge3N0cmluZ3J9IG1lbWJlclxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgQWdncmVnYXRlTWVtYmVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtZW1iZXIsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2FnZ3JlZ2F0ZS1tZW1iZXInO1xuICAgICAgICB0aGlzLm1lbWJlciA9IG1lbWJlcjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiBgKiBhcyAke3RoaXMubWVtYmVyfWBcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgYCogYXMgJHt0aGlzLm1lbWJlcn1gKS5cbiAgICAgICAgYWRkKHRoaXMubWVtYmVyLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQodGhpcy5tb2R1bGUuY29tcGlsZShvKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWdncmVnYXRlTWVtYmVyXG4iXX0=