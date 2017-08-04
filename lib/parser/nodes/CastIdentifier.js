'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CastIdentifier = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * CastIdentifier
 */
var CastIdentifier = exports.CastIdentifier = function (_Node) {
    _inherits(CastIdentifier, _Node);

    function CastIdentifier(id, hint, location) {
        _classCallCheck(this, CastIdentifier);

        var _this = _possibleConstructorReturn(this, (CastIdentifier.__proto__ || Object.getPrototypeOf(CastIdentifier)).call(this));

        _this.type = 'cast-identifier';
        _this.identifier = id;
        _this.hint = hint;

        return _this;
    }

    _createClass(CastIdentifier, [{
        key: 'transpile',
        value: function transpile(o) {

            return this.identifier.transpile(o) + ' as ' + this.hint.transpile(o);
        }
    }]);

    return CastIdentifier;
}(_Node3.default);

exports.default = CastIdentifier;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ2FzdElkZW50aWZpZXIuanMiXSwibmFtZXMiOlsiQ2FzdElkZW50aWZpZXIiLCJpZCIsImhpbnQiLCJsb2NhdGlvbiIsInR5cGUiLCJpZGVudGlmaWVyIiwibyIsInRyYW5zcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHYUEsYyxXQUFBQSxjOzs7QUFFVCw0QkFBWUMsRUFBWixFQUFnQkMsSUFBaEIsRUFBc0JDLFFBQXRCLEVBQWdDO0FBQUE7O0FBQUE7O0FBRzVCLGNBQUtDLElBQUwsR0FBWSxpQkFBWjtBQUNBLGNBQUtDLFVBQUwsR0FBa0JKLEVBQWxCO0FBQ0EsY0FBS0MsSUFBTCxHQUFZQSxJQUFaOztBQUw0QjtBQU8vQjs7OztrQ0FFU0ksQyxFQUFHOztBQUVULG1CQUFVLEtBQUtELFVBQUwsQ0FBZ0JFLFNBQWhCLENBQTBCRCxDQUExQixDQUFWLFlBQTZDLEtBQUtKLElBQUwsQ0FBVUssU0FBVixDQUFvQkQsQ0FBcEIsQ0FBN0M7QUFFSDs7Ozs7O2tCQUlVTixjIiwiZmlsZSI6IkNhc3RJZGVudGlmaWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBDYXN0SWRlbnRpZmllclxuICovXG5leHBvcnQgY2xhc3MgQ2FzdElkZW50aWZpZXIgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGlkLCBoaW50LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdjYXN0LWlkZW50aWZpZXInO1xuICAgICAgICB0aGlzLmlkZW50aWZpZXIgPSBpZDtcbiAgICAgICAgdGhpcy5oaW50ID0gaGludFxuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy5pZGVudGlmaWVyLnRyYW5zcGlsZShvKX0gYXMgJHt0aGlzLmhpbnQudHJhbnNwaWxlKG8pfWA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FzdElkZW50aWZpZXJcbiJdfQ==