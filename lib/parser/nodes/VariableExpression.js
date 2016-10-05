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
 * VariableExpression 
 * @param {string} name
 */
var VariableExpression = function (_Node) {
    _inherits(VariableExpression, _Node);

    function VariableExpression(name, location) {
        _classCallCheck(this, VariableExpression);

        var _this = _possibleConstructorReturn(this, (VariableExpression.__proto__ || Object.getPrototypeOf(VariableExpression)).call(this, location));

        _this.type = 'variable-expression';
        _this.name = name;

        return _this;
    }

    _createClass(VariableExpression, [{
        key: 'transpile',
        value: function transpile() {

            return this.name;
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, this.name);
        }
    }]);

    return VariableExpression;
}(_Node3.default);

exports.default = VariableExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVmFyaWFibGVFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlZhcmlhYmxlRXhwcmVzc2lvbiIsIm5hbWUiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwic291cmNlTm9kZSIsImZpbGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlNQSxrQjs7O0FBRUYsZ0NBQVlDLElBQVosRUFBa0JDLFFBQWxCLEVBQTRCO0FBQUE7O0FBQUEsNElBRWxCQSxRQUZrQjs7QUFHeEIsY0FBS0MsSUFBTCxHQUFZLHFCQUFaO0FBQ0EsY0FBS0YsSUFBTCxHQUFZQSxJQUFaOztBQUp3QjtBQU0zQjs7OztvQ0FFVzs7QUFFUixtQkFBTyxLQUFLQSxJQUFaO0FBRUg7OztnQ0FFT0csQyxFQUFHOztBQUVQLG1CQUFPLEtBQUtDLFVBQUwsQ0FBZ0JELEVBQUVFLFFBQWxCLEVBQTRCLEtBQUtMLElBQWpDLENBQVA7QUFFSDs7Ozs7O2tCQUlVRCxrQiIsImZpbGUiOiJWYXJpYWJsZUV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFZhcmlhYmxlRXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbmNsYXNzIFZhcmlhYmxlRXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICd2YXJpYWJsZS1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCB0aGlzLm5hbWUpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhcmlhYmxlRXhwcmVzc2lvblxuIl19