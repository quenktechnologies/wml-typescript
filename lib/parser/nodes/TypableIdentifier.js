'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TypableIdentifier = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TypableIdentifier
 */
var TypableIdentifier = exports.TypableIdentifier = function (_Node) {
    _inherits(TypableIdentifier, _Node);

    function TypableIdentifier(id, hint, types, array, location) {
        _classCallCheck(this, TypableIdentifier);

        var _this = _possibleConstructorReturn(this, (TypableIdentifier.__proto__ || Object.getPrototypeOf(TypableIdentifier)).call(this));

        _this.type = 'typable-identifier';
        _this.id = id;
        _this.hint = hint;
        _this.types = types;
        _this.array = array;
        _this.location = location;

        return _this;
    }

    _createClass(TypableIdentifier, [{
        key: 'transpile',
        value: function transpile(o) {

            var id = this.id.transpile(o);
            var hint = this.hint.transpile(o);
            var types = this.types.map(function (t) {
                return t.transpile(o);
            }).join(',');
            var array = '' + (this.array ? '[]' : '');

            return id + ':' + hint + (types ? '<' + types + '>' : '') + array;
        }
    }]);

    return TypableIdentifier;
}(_Node3.default);

exports.default = TypableIdentifier;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVHlwYWJsZUlkZW50aWZpZXIuanMiXSwibmFtZXMiOlsiVHlwYWJsZUlkZW50aWZpZXIiLCJpZCIsImhpbnQiLCJ0eXBlcyIsImFycmF5IiwibG9jYXRpb24iLCJ0eXBlIiwibyIsInRyYW5zcGlsZSIsIm1hcCIsInQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdhQSxpQixXQUFBQSxpQjs7O0FBRVQsK0JBQVlDLEVBQVosRUFBZ0JDLElBQWhCLEVBQXNCQyxLQUF0QixFQUE2QkMsS0FBN0IsRUFBb0NDLFFBQXBDLEVBQThDO0FBQUE7O0FBQUE7O0FBRzFDLGNBQUtDLElBQUwsR0FBWSxvQkFBWjtBQUNBLGNBQUtMLEVBQUwsR0FBVUEsRUFBVjtBQUNBLGNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVIwQztBQVU3Qzs7OztrQ0FFU0UsQyxFQUFHOztBQUVULGdCQUFJTixLQUFLLEtBQUtBLEVBQUwsQ0FBUU8sU0FBUixDQUFrQkQsQ0FBbEIsQ0FBVDtBQUNBLGdCQUFJTCxPQUFPLEtBQUtBLElBQUwsQ0FBVU0sU0FBVixDQUFvQkQsQ0FBcEIsQ0FBWDtBQUNBLGdCQUFJSixRQUFRLEtBQUtBLEtBQUwsQ0FBV00sR0FBWCxDQUFlO0FBQUEsdUJBQUtDLEVBQUVGLFNBQUYsQ0FBWUQsQ0FBWixDQUFMO0FBQUEsYUFBZixFQUFvQ0ksSUFBcEMsQ0FBeUMsR0FBekMsQ0FBWjtBQUNBLGdCQUFJUCxjQUFXLEtBQUtBLEtBQUwsR0FBVyxJQUFYLEdBQWdCLEVBQTNCLENBQUo7O0FBRUEsbUJBQVVILEVBQVYsU0FBZ0JDLElBQWhCLElBQXVCQyxRQUFNLE1BQUlBLEtBQUosR0FBVSxHQUFoQixHQUFvQixFQUEzQyxJQUFnREMsS0FBaEQ7QUFHSDs7Ozs7O2tCQUlVSixpQiIsImZpbGUiOiJUeXBhYmxlSWRlbnRpZmllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogVHlwYWJsZUlkZW50aWZpZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFR5cGFibGVJZGVudGlmaWVyIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihpZCwgaGludCwgdHlwZXMsIGFycmF5LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICd0eXBhYmxlLWlkZW50aWZpZXInO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuaGludCA9IGhpbnRcbiAgICAgICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgICAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgbGV0IGlkID0gdGhpcy5pZC50cmFuc3BpbGUobyk7XG4gICAgICAgIGxldCBoaW50ID0gdGhpcy5oaW50LnRyYW5zcGlsZShvKTtcbiAgICAgICAgbGV0IHR5cGVzID0gdGhpcy50eXBlcy5tYXAodCA9PiB0LnRyYW5zcGlsZShvKSkuam9pbignLCcpO1xuICAgICAgICBsZXQgYXJyYXkgPSBgJHt0aGlzLmFycmF5PydbXSc6Jyd9YDtcblxuICAgICAgICByZXR1cm4gYCR7aWR9OiR7aGludH0ke3R5cGVzPyc8Jyt0eXBlcysnPic6Jyd9JHthcnJheX1gO1xuXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHlwYWJsZUlkZW50aWZpZXJcbiJdfQ==