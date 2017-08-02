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
 * CallExpression
 */
var CallExpression = function (_Node) {
    _inherits(CallExpression, _Node);

    function CallExpression(callee, args, location) {
        _classCallCheck(this, CallExpression);

        var _this = _possibleConstructorReturn(this, (CallExpression.__proto__ || Object.getPrototypeOf(CallExpression)).call(this));

        _this.type = 'function-expression';
        _this.callee = callee;
        _this.arguments = args;
        _this.location = location;

        return _this;
    }

    _createClass(CallExpression, [{
        key: 'transpile',
        value: function transpile(o) {

            var callee = this.callee.transpile(o);
            var args = this.arguments.map(function (a) {
                return a.transpile(o);
            });

            return callee + '(' + args + ')';
        }
    }]);

    return CallExpression;
}(_Node3.default);

exports.default = CallExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ2FsbEV4cHJlc3Npb24uanMiXSwibmFtZXMiOlsiQ2FsbEV4cHJlc3Npb24iLCJjYWxsZWUiLCJhcmdzIiwibG9jYXRpb24iLCJ0eXBlIiwiYXJndW1lbnRzIiwibyIsInRyYW5zcGlsZSIsIm1hcCIsImEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsYzs7O0FBRUYsNEJBQVlDLE1BQVosRUFBb0JDLElBQXBCLEVBQTBCQyxRQUExQixFQUFvQztBQUFBOztBQUFBOztBQUdoQyxjQUFLQyxJQUFMLEdBQVkscUJBQVo7QUFDQSxjQUFLSCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxjQUFLSSxTQUFMLEdBQWlCSCxJQUFqQjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQU5nQztBQVFuQzs7OztrQ0FFU0csQyxFQUFHOztBQUVULGdCQUFJTCxTQUFTLEtBQUtBLE1BQUwsQ0FBWU0sU0FBWixDQUFzQkQsQ0FBdEIsQ0FBYjtBQUNBLGdCQUFJSixPQUFPLEtBQUtHLFNBQUwsQ0FBZUcsR0FBZixDQUFtQjtBQUFBLHVCQUFLQyxFQUFFRixTQUFGLENBQVlELENBQVosQ0FBTDtBQUFBLGFBQW5CLENBQVg7O0FBRUEsbUJBQVVMLE1BQVYsU0FBb0JDLElBQXBCO0FBRUg7Ozs7OztrQkFJVUYsYyIsImZpbGUiOiJDYWxsRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQ2FsbEV4cHJlc3Npb25cbiAqL1xuY2xhc3MgQ2FsbEV4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgYXJncywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnZnVuY3Rpb24tZXhwcmVzc2lvbic7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIGNhbGxlZSA9IHRoaXMuY2FsbGVlLnRyYW5zcGlsZShvKTtcbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLmFyZ3VtZW50cy5tYXAoYSA9PiBhLnRyYW5zcGlsZShvKSk7XG5cbiAgICAgICAgcmV0dXJuIGAke2NhbGxlZX0oJHthcmdzfSlgO1xuXG4gICAgfVxuXG5cbn1cbmV4cG9ydCBkZWZhdWx0IENhbGxFeHByZXNzaW9uXG4iXX0=