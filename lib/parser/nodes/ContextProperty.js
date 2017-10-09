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
 * ContextProperty
 * @param {string} id
 */
var ContextProperty = function (_Node) {
    _inherits(ContextProperty, _Node);

    function ContextProperty(id, location) {
        _classCallCheck(this, ContextProperty);

        var _this = _possibleConstructorReturn(this, (ContextProperty.__proto__ || Object.getPrototypeOf(ContextProperty)).call(this));

        _this.type = 'context-property';
        _this.id = id;
        _this.location = location;

        return _this;
    }

    _createClass(ContextProperty, [{
        key: 'transpile',
        value: function transpile(o) {

            return '$$ctx.' + this.id;
        }
    }]);

    return ContextProperty;
}(_Node3.default);

exports.default = ContextProperty;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ29udGV4dFByb3BlcnR5LmpzIl0sIm5hbWVzIjpbIkNvbnRleHRQcm9wZXJ0eSIsImlkIiwibG9jYXRpb24iLCJ0eXBlIiwibyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJTUEsZTs7O0FBRUYsNkJBQVlDLEVBQVosRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQUE7O0FBQUE7O0FBR3RCLGNBQUtDLElBQUwsR0FBWSxrQkFBWjtBQUNBLGNBQUtGLEVBQUwsR0FBVUEsRUFBVjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUxzQjtBQU96Qjs7OztrQ0FFU0UsQyxFQUFHOztBQUVWLDhCQUFnQixLQUFLSCxFQUFyQjtBQUVGOzs7Ozs7a0JBSVVELGUiLCJmaWxlIjoiQ29udGV4dFByb3BlcnR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBDb250ZXh0UHJvcGVydHlcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICovXG5jbGFzcyBDb250ZXh0UHJvcGVydHkgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGlkLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdjb250ZXh0LXByb3BlcnR5JztcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgcmV0dXJuIGAkJGN0eC4ke3RoaXMuaWR9YDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0UHJvcGVydHlcbiJdfQ==