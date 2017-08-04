'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TypeAssertion = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TypeAssertion
 */
var TypeAssertion = exports.TypeAssertion = function (_Node) {
    _inherits(TypeAssertion, _Node);

    function TypeAssertion(expression, hint, location) {
        _classCallCheck(this, TypeAssertion);

        var _this = _possibleConstructorReturn(this, (TypeAssertion.__proto__ || Object.getPrototypeOf(TypeAssertion)).call(this));

        _this.expression = expression;
        _this.hint = hint;
        _this.location = location;

        return _this;
    }

    _createClass(TypeAssertion, [{
        key: 'transpile',
        value: function transpile(o) {

            return '(<' + this.hint.transpile(o) + '>' + this.expression.transpile(o) + ')';
        }
    }]);

    return TypeAssertion;
}(_Node3.default);

exports.default = TypeAssertion;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVHlwZUFzc2VydGlvbi5qcyJdLCJuYW1lcyI6WyJUeXBlQXNzZXJ0aW9uIiwiZXhwcmVzc2lvbiIsImhpbnQiLCJsb2NhdGlvbiIsIm8iLCJ0cmFuc3BpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR2FBLGEsV0FBQUEsYTs7O0FBRVQsMkJBQVlDLFVBQVosRUFBd0JDLElBQXhCLEVBQThCQyxRQUE5QixFQUF3QztBQUFBOztBQUFBOztBQUdwQyxjQUFLRixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUxvQztBQU92Qzs7OztrQ0FFU0MsQyxFQUFHOztBQUVULDBCQUFZLEtBQUtGLElBQUwsQ0FBVUcsU0FBVixDQUFvQkQsQ0FBcEIsQ0FBWixTQUFzQyxLQUFLSCxVQUFMLENBQWdCSSxTQUFoQixDQUEwQkQsQ0FBMUIsQ0FBdEM7QUFFSDs7Ozs7O2tCQUlVSixhIiwiZmlsZSI6IlR5cGVBc3NlcnRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFR5cGVBc3NlcnRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFR5cGVBc3NlcnRpb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24sIGhpbnQsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5oaW50ID0gaGludDtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gYCg8JHt0aGlzLmhpbnQudHJhbnNwaWxlKG8pfT4ke3RoaXMuZXhwcmVzc2lvbi50cmFuc3BpbGUobyl9KWA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHlwZUFzc2VydGlvblxuIl19