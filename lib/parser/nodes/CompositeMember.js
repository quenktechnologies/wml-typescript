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
        value: function transpile() {

            return '{ ' + this.members.map(function (m) {
                return m.transpile();
            }).join(',') + ' }';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var nodes = this.members.map(function (m) {
                return m.compile(o);
            });
            var node = this.sourceNode(o.fileName, 'import * as').add('{');

            nodes.forEach(function (n, i, all) {

                node.add(n);

                if (i !== all.length - 1) node.add(',');
            });

            node.add('}').add(this.member.compile(o)).add(this.module.compile(o));
        }
    }]);

    return CompositeMember;
}(_Node3.default);

exports.default = CompositeMember;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ29tcG9zaXRlTWVtYmVyLmpzIl0sIm5hbWVzIjpbIkNvbXBvc2l0ZU1lbWJlciIsIm1lbWJlcnMiLCJsb2NhdGlvbiIsInR5cGUiLCJtYXAiLCJtIiwidHJhbnNwaWxlIiwiam9pbiIsIm8iLCJub2RlcyIsImNvbXBpbGUiLCJub2RlIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiZm9yRWFjaCIsIm4iLCJpIiwiYWxsIiwibGVuZ3RoIiwibWVtYmVyIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTUEsZTs7O0FBRUYsNkJBQVlDLE9BQVosRUFBcUJDLFFBQXJCLEVBQStCO0FBQUE7O0FBQUE7O0FBRzNCLGNBQUtDLElBQUwsR0FBWSxrQkFBWjtBQUNBLGNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUwyQjtBQU85Qjs7OztvQ0FFVzs7QUFFUiwwQkFBWSxLQUFLRCxPQUFMLENBQWFHLEdBQWIsQ0FBaUI7QUFBQSx1QkFBR0MsRUFBRUMsU0FBRixFQUFIO0FBQUEsYUFBakIsRUFBbUNDLElBQW5DLENBQXdDLEdBQXhDLENBQVo7QUFFSDs7O2dDQUVPQyxDLEVBQUc7O0FBRVAsZ0JBQUlDLFFBQVEsS0FBS1IsT0FBTCxDQUFhRyxHQUFiLENBQWlCO0FBQUEsdUJBQUtDLEVBQUVLLE9BQUYsQ0FBVUYsQ0FBVixDQUFMO0FBQUEsYUFBakIsQ0FBWjtBQUNBLGdCQUFJRyxPQUFPLEtBQUtDLFVBQUwsQ0FBZ0JKLEVBQUVLLFFBQWxCLEVBQTRCLGFBQTVCLEVBQ1hDLEdBRFcsQ0FDUCxHQURPLENBQVg7O0FBR0FMLGtCQUFNTSxPQUFOLENBQWMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLEdBQVAsRUFBZTs7QUFFekJQLHFCQUFLRyxHQUFMLENBQVNFLENBQVQ7O0FBRUEsb0JBQUlDLE1BQU1DLElBQUlDLE1BQUosR0FBYSxDQUF2QixFQUNJUixLQUFLRyxHQUFMLENBQVMsR0FBVDtBQUVQLGFBUEQ7O0FBU0FILGlCQUFLRyxHQUFMLENBQVMsR0FBVCxFQUNBQSxHQURBLENBQ0ksS0FBS00sTUFBTCxDQUFZVixPQUFaLENBQW9CRixDQUFwQixDQURKLEVBRUFNLEdBRkEsQ0FFSSxLQUFLTyxNQUFMLENBQVlYLE9BQVosQ0FBb0JGLENBQXBCLENBRko7QUFJSDs7Ozs7O2tCQUlVUixlIiwiZmlsZSI6IkNvbXBvc2l0ZU1lbWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQ29tcG9zaXRlTWVtYmVyIFxuICogQHBhcmFtIHthcnJheTxNZW1iZXI+fSBtZW1iZXJcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKi9cbmNsYXNzIENvbXBvc2l0ZU1lbWJlciBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobWVtYmVycywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnY29tcG9zaXRlLW1lbWJlcic7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IG1lbWJlcnM7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gYHsgJHt0aGlzLm1lbWJlcnMubWFwKG09Pm0udHJhbnNwaWxlKCkpLmpvaW4oJywnKX0gfWA7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLm1lbWJlcnMubWFwKG0gPT4gbS5jb21waWxlKG8pKTtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJ2ltcG9ydCAqIGFzJykuXG4gICAgICAgIGFkZCgneycpO1xuXG4gICAgICAgIG5vZGVzLmZvckVhY2goKG4sIGksIGFsbCkgPT4ge1xuXG4gICAgICAgICAgICBub2RlLmFkZChuKTtcblxuICAgICAgICAgICAgaWYgKGkgIT09IGFsbC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIG5vZGUuYWRkKCcsJyk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbm9kZS5hZGQoJ30nKS5cbiAgICAgICAgYWRkKHRoaXMubWVtYmVyLmNvbXBpbGUobykpLlxuICAgICAgICBhZGQodGhpcy5tb2R1bGUuY29tcGlsZShvKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9zaXRlTWVtYmVyXG4iXX0=