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
 * TextInterpolation
 */
var TextInterpolation = function (_Node) {
    _inherits(TextInterpolation, _Node);

    function TextInterpolation(interpolation, location) {
        _classCallCheck(this, TextInterpolation);

        var _this = _possibleConstructorReturn(this, (TextInterpolation.__proto__ || Object.getPrototypeOf(TextInterpolation)).call(this));

        _this.type = 'text-interpolation';
        _this.interpolation = interpolation;
        _this.location = location;

        return _this;
    }

    _createClass(TextInterpolation, [{
        key: 'transpile',
        value: function transpile(o) {

            return '$$domify(' + this.interpolation.transpile(o) + ')';
        }
    }]);

    return TextInterpolation;
}(_Node3.default);

exports.default = TextInterpolation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVGV4dEludGVycG9sYXRpb24uanMiXSwibmFtZXMiOlsiVGV4dEludGVycG9sYXRpb24iLCJpbnRlcnBvbGF0aW9uIiwibG9jYXRpb24iLCJ0eXBlIiwibyIsInRyYW5zcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxpQjs7O0FBRUYsK0JBQVlDLGFBQVosRUFBMkJDLFFBQTNCLEVBQXFDO0FBQUE7O0FBQUE7O0FBR2pDLGNBQUtDLElBQUwsR0FBWSxvQkFBWjtBQUNBLGNBQUtGLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTGlDO0FBT3BDOzs7O2tDQUVTRSxDLEVBQUc7O0FBRVQsaUNBQW1CLEtBQUtILGFBQUwsQ0FBbUJJLFNBQW5CLENBQTZCRCxDQUE3QixDQUFuQjtBQUVIOzs7Ozs7a0JBSVVKLGlCIiwiZmlsZSI6IlRleHRJbnRlcnBvbGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBUZXh0SW50ZXJwb2xhdGlvblxuICovXG5jbGFzcyBUZXh0SW50ZXJwb2xhdGlvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoaW50ZXJwb2xhdGlvbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAndGV4dC1pbnRlcnBvbGF0aW9uJztcbiAgICAgICAgdGhpcy5pbnRlcnBvbGF0aW9uID0gaW50ZXJwb2xhdGlvbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gYCQkZG9taWZ5KCR7dGhpcy5pbnRlcnBvbGF0aW9uLnRyYW5zcGlsZShvKX0pYDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW50ZXJwb2xhdGlvblxuIl19