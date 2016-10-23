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
 * UnaryExpression 
 * @param {string} op 
 * @param {Expression} expression 
 * @param {Location} location 
 */
var UnaryExpression = function (_Node) {
  _inherits(UnaryExpression, _Node);

  function UnaryExpression(op, expression, location) {
    _classCallCheck(this, UnaryExpression);

    var _this = _possibleConstructorReturn(this, (UnaryExpression.__proto__ || Object.getPrototypeOf(UnaryExpression)).call(this, location));

    _this.op = op;
    _this.expression = expression;

    return _this;
  }

  _createClass(UnaryExpression, [{
    key: 'transpile',
    value: function transpile() {

      return '' + this.op + this.expression.transpile();
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      return this.sourceNode(o.fileName, this.op).add(this.expression.compile(o));
    }
  }]);

  return UnaryExpression;
}(_Node3.default);

exports.default = UnaryExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVW5hcnlFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlVuYXJ5RXhwcmVzc2lvbiIsIm9wIiwiZXhwcmVzc2lvbiIsImxvY2F0aW9uIiwidHJhbnNwaWxlIiwibyIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImFkZCIsImNvbXBpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNTUEsZTs7O0FBRUosMkJBQVlDLEVBQVosRUFBZ0JDLFVBQWhCLEVBQTRCQyxRQUE1QixFQUFzQztBQUFBOztBQUFBLGtJQUU5QkEsUUFGOEI7O0FBR3BDLFVBQUtGLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFVBQUtDLFVBQUwsR0FBa0JBLFVBQWxCOztBQUpvQztBQU1yQzs7OztnQ0FFVzs7QUFFZCxrQkFBVSxLQUFLRCxFQUFmLEdBQW9CLEtBQUtDLFVBQUwsQ0FBZ0JFLFNBQWhCLEVBQXBCO0FBRUc7Ozs0QkFFT0MsQyxFQUFHOztBQUVULGFBQU8sS0FBS0MsVUFBTCxDQUFnQkQsRUFBRUUsUUFBbEIsRUFBNEIsS0FBS04sRUFBakMsRUFDTE8sR0FESyxDQUNELEtBQUtOLFVBQUwsQ0FBZ0JPLE9BQWhCLENBQXdCSixDQUF4QixDQURDLENBQVA7QUFHRDs7Ozs7O2tCQUdZTCxlIiwiZmlsZSI6IlVuYXJ5RXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogVW5hcnlFeHByZXNzaW9uIFxuICogQHBhcmFtIHtzdHJpbmd9IG9wIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIFVuYXJ5RXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKG9wLCBleHByZXNzaW9uLCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIobG9jYXRpb24pO1xuICAgIHRoaXMub3AgPSBvcDtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuXG4gIH1cblxuICB0cmFuc3BpbGUoKSB7XG5cbnJldHVybiBgJHt0aGlzLm9wfSR7dGhpcy5leHByZXNzaW9uLnRyYW5zcGlsZSgpfWA7XG5cbiAgfVxuXG4gIGNvbXBpbGUobykge1xuXG4gICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCB0aGlzLm9wKS5cbiAgICAgIGFkZCh0aGlzLmV4cHJlc3Npb24uY29tcGlsZShvKSk7XG5cbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBVbmFyeUV4cHJlc3Npb25cblxuIl19