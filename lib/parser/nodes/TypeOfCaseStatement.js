'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TypeOfCaseStatement
 */
var TypeOfCaseStatement = function (_Node) {
    _inherits(TypeOfCaseStatement, _Node);

    function TypeOfCaseStatement(candidate, body, location) {
        _classCallCheck(this, TypeOfCaseStatement);

        var _this = _possibleConstructorReturn(this, (TypeOfCaseStatement.__proto__ || Object.getPrototypeOf(TypeOfCaseStatement)).call(this));

        _this.type = 'typeof-case-statement';
        _this.candidate = candidate;
        _this.body = body;
        _this.location = location;

        return _this;
    }

    _createClass(TypeOfCaseStatement, [{
        key: 'toExpression',
        value: function toExpression(id, otherwise, o) {

            var body = (0, _util.flatten)(this.body, o);
            return '(typeof ' + id + ' === ' + this.candidate.transpile(o) + ')? ' + body + ' : ' + otherwise;
        }
    }, {
        key: 'transpile',
        value: function transpile(o) {

            throw new Error('TypeOfCaseStatement cannot be traspiled!');
        }
    }]);

    return TypeOfCaseStatement;
}(_Node3.default);

exports.default = TypeOfCaseStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVHlwZU9mQ2FzZVN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJUeXBlT2ZDYXNlU3RhdGVtZW50IiwiY2FuZGlkYXRlIiwiYm9keSIsImxvY2F0aW9uIiwidHlwZSIsImlkIiwib3RoZXJ3aXNlIiwibyIsInRyYW5zcGlsZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLG1COzs7QUFFRixpQ0FBWUMsU0FBWixFQUF1QkMsSUFBdkIsRUFBNkJDLFFBQTdCLEVBQXVDO0FBQUE7O0FBQUE7O0FBSW5DLGNBQUtDLElBQUwsR0FBWSx1QkFBWjtBQUNBLGNBQUtILFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsY0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUG1DO0FBU3RDOzs7O3FDQUVZRSxFLEVBQUlDLFMsRUFBV0MsQyxFQUFHOztBQUUzQixnQkFBSUwsT0FBTyxtQkFBUSxLQUFLQSxJQUFiLEVBQW1CSyxDQUFuQixDQUFYO0FBQ0EsZ0NBQWtCRixFQUFsQixhQUE0QixLQUFLSixTQUFMLENBQWVPLFNBQWYsQ0FBeUJELENBQXpCLENBQTVCLFdBQTZETCxJQUE3RCxXQUF1RUksU0FBdkU7QUFFSDs7O2tDQUVTQyxDLEVBQUc7O0FBRVQsa0JBQU0sSUFBSUUsS0FBSixDQUFVLDBDQUFWLENBQU47QUFFSDs7Ozs7O2tCQUlVVCxtQiIsImZpbGUiOiJUeXBlT2ZDYXNlU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCB7ZmxhdHRlbn0gZnJvbSAnLi4vdXRpbCc7XG5cbi8qKlxuICogVHlwZU9mQ2FzZVN0YXRlbWVudFxuICovXG5jbGFzcyBUeXBlT2ZDYXNlU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW5kaWRhdGUsIGJvZHksIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnR5cGUgPSAndHlwZW9mLWNhc2Utc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5jYW5kaWRhdGUgPSBjYW5kaWRhdGU7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRvRXhwcmVzc2lvbihpZCwgb3RoZXJ3aXNlLCBvKSB7XG5cbiAgICAgICAgdmFyIGJvZHkgPSBmbGF0dGVuKHRoaXMuYm9keSwgbyk7XG4gICAgICAgIHJldHVybiBgKHR5cGVvZiAke2lkfSA9PT0gJHt0aGlzLmNhbmRpZGF0ZS50cmFuc3BpbGUobyl9KT8gJHtib2R5fSA6ICR7b3RoZXJ3aXNlfWA7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVHlwZU9mQ2FzZVN0YXRlbWVudCBjYW5ub3QgYmUgdHJhc3BpbGVkIScpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFR5cGVPZkNhc2VTdGF0ZW1lbnRcbiJdfQ==