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
 */
var ContextVariable = function (_Node) {
    _inherits(ContextVariable, _Node);

    function ContextVariable(location) {
        _classCallCheck(this, ContextVariable);

        var _this = _possibleConstructorReturn(this, (ContextVariable.__proto__ || Object.getPrototypeOf(ContextVariable)).call(this));

        _this.type = 'context-variable';
        _this.location = location;

        return _this;
    }

    _createClass(ContextVariable, [{
        key: 'transpile',
        value: function transpile(o) {

            return '$$ctx';
        }
    }]);

    return ContextVariable;
}(_Node3.default);

exports.default = ContextVariable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ29udGV4dFZhcmlhYmxlLmpzIl0sIm5hbWVzIjpbIkNvbnRleHRWYXJpYWJsZSIsImxvY2F0aW9uIiwidHlwZSIsIm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsZTs7O0FBRUYsNkJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQTs7QUFHbEIsY0FBS0MsSUFBTCxHQUFZLGtCQUFaO0FBQ0EsY0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7O0FBSmtCO0FBTXJCOzs7O2tDQUVTRSxDLEVBQUc7O0FBRVY7QUFFRjs7Ozs7O2tCQUlVSCxlIiwiZmlsZSI6IkNvbnRleHRWYXJpYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQ29udGV4dFZhcmlhYmxlXG4gKi9cbmNsYXNzIENvbnRleHRWYXJpYWJsZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnY29udGV4dC12YXJpYWJsZSc7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICByZXR1cm4gYCQkY3R4YDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0VmFyaWFibGVcbiJdfQ==