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
 * ContextVariable
 * @param {string} id
 */
var ContextVariable = function (_Node) {
    _inherits(ContextVariable, _Node);

    function ContextVariable(id, location) {
        _classCallCheck(this, ContextVariable);

        var _this = _possibleConstructorReturn(this, (ContextVariable.__proto__ || Object.getPrototypeOf(ContextVariable)).call(this));

        _this.type = 'context-variable';
        _this.id = id;
        _this.location = location;

        return _this;
    }

    _createClass(ContextVariable, [{
        key: 'transpile',
        value: function transpile(o) {

            return '$1.' + this.id;
        }
    }]);

    return ContextVariable;
}(_Node3.default);

exports.default = ContextVariable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ29udGVudFZhcmlhYmxlLmpzIl0sIm5hbWVzIjpbIkNvbnRleHRWYXJpYWJsZSIsImlkIiwibG9jYXRpb24iLCJ0eXBlIiwibyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJTUEsZTs7O0FBRUYsNkJBQVlDLEVBQVosRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQUE7O0FBQUE7O0FBR3RCLGNBQUtDLElBQUwsR0FBWSxrQkFBWjtBQUNBLGNBQUtGLEVBQUwsR0FBVUEsRUFBVjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUxzQjtBQU96Qjs7OztrQ0FFU0UsQyxFQUFHOztBQUVWLDJCQUFhLEtBQUtILEVBQWxCO0FBRUY7Ozs7OztrQkFJVUQsZSIsImZpbGUiOiJDb250ZW50VmFyaWFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIENvbnRleHRWYXJpYWJsZVxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKi9cbmNsYXNzIENvbnRleHRWYXJpYWJsZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoaWQsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2NvbnRleHQtdmFyaWFibGUnO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICByZXR1cm4gYCQxLiR7dGhpcy5pZH1gO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRWYXJpYWJsZVxuIl19