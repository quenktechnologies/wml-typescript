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
 * ArrayLiteral
 * @param {array} members
 * @param {Location} location
 */
var ArrayLiteral = function (_Node) {
    _inherits(ArrayLiteral, _Node);

    function ArrayLiteral(members, location) {
        _classCallCheck(this, ArrayLiteral);

        var _this = _possibleConstructorReturn(this, (ArrayLiteral.__proto__ || Object.getPrototypeOf(ArrayLiteral)).call(this, location));

        _this.type = 'array-literal';
        _this.members = members;
        return _this;
    }

    _createClass(ArrayLiteral, [{
        key: 'transpile',
        value: function transpile(o) {

            return '[' + this.members.map(function (m) {
                return m.transpile(o);
            }).join(',') + ']';
        }
    }]);

    return ArrayLiteral;
}(_Node3.default);

exports.default = ArrayLiteral;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQXJyYXlMaXRlcmFsLmpzIl0sIm5hbWVzIjpbIkFycmF5TGl0ZXJhbCIsIm1lbWJlcnMiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwibWFwIiwibSIsInRyYW5zcGlsZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7OztJQUtNQSxZOzs7QUFFRiwwQkFBWUMsT0FBWixFQUFxQkMsUUFBckIsRUFBK0I7QUFBQTs7QUFBQSxnSUFDckJBLFFBRHFCOztBQUUzQixjQUFLQyxJQUFMLEdBQVksZUFBWjtBQUNBLGNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUgyQjtBQUk5Qjs7OztrQ0FFU0csQyxFQUFHOztBQUVULG1CQUFPLE1BQU0sS0FBS0gsT0FBTCxDQUFhSSxHQUFiLENBQWlCO0FBQUEsdUJBQUtDLEVBQUVDLFNBQUYsQ0FBWUgsQ0FBWixDQUFMO0FBQUEsYUFBakIsRUFBc0NJLElBQXRDLENBQTJDLEdBQTNDLENBQU4sR0FBd0QsR0FBL0Q7QUFFSDs7Ozs7O2tCQUlVUixZIiwiZmlsZSI6IkFycmF5TGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQXJyYXlMaXRlcmFsXG4gKiBAcGFyYW0ge2FycmF5fSBtZW1iZXJzXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBBcnJheUxpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG1lbWJlcnMsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2FycmF5LWxpdGVyYWwnO1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSBtZW1iZXJzO1xuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuICdbJyArIHRoaXMubWVtYmVycy5tYXAobSA9PiBtLnRyYW5zcGlsZShvKSkuam9pbignLCcpICsgJ10nO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5TGl0ZXJhbFxuIl19