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
 * CompositeMember
 * @param {array<Member>} member
 * @param {Location} location
 */
var CompositeMember = function (_Node) {
    _inherits(CompositeMember, _Node);

    function CompositeMember(members, location) {
        _classCallCheck(this, CompositeMember);

        var _this = _possibleConstructorReturn(this, (CompositeMember.__proto__ || Object.getPrototypeOf(CompositeMember)).call(this));

        _this.type = 'composite-member';
        _this.members = members;
        _this.location = location;

        return _this;
    }

    _createClass(CompositeMember, [{
        key: 'transpile',
        value: function transpile(o) {

            return '{ ' + this.members.map(function (m) {
                return m.transpile(o);
            }).join(',') + ' }';
        }
    }]);

    return CompositeMember;
}(_Node3.default);

exports.default = CompositeMember;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ29tcG9zaXRlTWVtYmVyLmpzIl0sIm5hbWVzIjpbIkNvbXBvc2l0ZU1lbWJlciIsIm1lbWJlcnMiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwibWFwIiwibSIsInRyYW5zcGlsZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7OztJQUtNQSxlOzs7QUFFRiw2QkFBWUMsT0FBWixFQUFxQkMsUUFBckIsRUFBK0I7QUFBQTs7QUFBQTs7QUFHM0IsY0FBS0MsSUFBTCxHQUFZLGtCQUFaO0FBQ0EsY0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTDJCO0FBTzlCOzs7O2tDQUVTRSxDLEVBQUc7O0FBRVQsMEJBQVksS0FBS0gsT0FBTCxDQUFhSSxHQUFiLENBQWlCO0FBQUEsdUJBQUdDLEVBQUVDLFNBQUYsQ0FBWUgsQ0FBWixDQUFIO0FBQUEsYUFBakIsRUFBb0NJLElBQXBDLENBQXlDLEdBQXpDLENBQVo7QUFFSDs7Ozs7O2tCQUlVUixlIiwiZmlsZSI6IkNvbXBvc2l0ZU1lbWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQ29tcG9zaXRlTWVtYmVyXG4gKiBAcGFyYW0ge2FycmF5PE1lbWJlcj59IG1lbWJlclxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgQ29tcG9zaXRlTWVtYmVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtZW1iZXJzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdjb21wb3NpdGUtbWVtYmVyJztcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gbWVtYmVycztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gYHsgJHt0aGlzLm1lbWJlcnMubWFwKG09Pm0udHJhbnNwaWxlKG8pKS5qb2luKCcsJyl9IH1gO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvc2l0ZU1lbWJlclxuIl19