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
    value: function transpile(o) {

      return '' + this.op + this.expression.transpile(o);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVW5hcnlFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlVuYXJ5RXhwcmVzc2lvbiIsIm9wIiwiZXhwcmVzc2lvbiIsImxvY2F0aW9uIiwibyIsInRyYW5zcGlsZSIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImFkZCIsImNvbXBpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNTUEsZTs7O0FBRUosMkJBQVlDLEVBQVosRUFBZ0JDLFVBQWhCLEVBQTRCQyxRQUE1QixFQUFzQztBQUFBOztBQUFBLGtJQUU5QkEsUUFGOEI7O0FBR3BDLFVBQUtGLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFVBQUtDLFVBQUwsR0FBa0JBLFVBQWxCOztBQUpvQztBQU1yQzs7Ozs4QkFFU0UsQyxFQUFHOztBQUVmLGtCQUFVLEtBQUtILEVBQWYsR0FBb0IsS0FBS0MsVUFBTCxDQUFnQkcsU0FBaEIsQ0FBMEJELENBQTFCLENBQXBCO0FBRUc7Ozs0QkFFT0EsQyxFQUFHOztBQUVULGFBQU8sS0FBS0UsVUFBTCxDQUFnQkYsRUFBRUcsUUFBbEIsRUFBNEIsS0FBS04sRUFBakMsRUFDTE8sR0FESyxDQUNELEtBQUtOLFVBQUwsQ0FBZ0JPLE9BQWhCLENBQXdCTCxDQUF4QixDQURDLENBQVA7QUFHRDs7Ozs7O2tCQUdZSixlIiwiZmlsZSI6IlVuYXJ5RXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogVW5hcnlFeHByZXNzaW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gb3BcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvblxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgVW5hcnlFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgY29uc3RydWN0b3Iob3AsIGV4cHJlc3Npb24sIGxvY2F0aW9uKSB7XG5cbiAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgdGhpcy5vcCA9IG9wO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG5cbiAgfVxuXG4gIHRyYW5zcGlsZShvKSB7XG5cbnJldHVybiBgJHt0aGlzLm9wfSR7dGhpcy5leHByZXNzaW9uLnRyYW5zcGlsZShvKX1gO1xuXG4gIH1cblxuICBjb21waWxlKG8pIHtcblxuICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgdGhpcy5vcCkuXG4gICAgICBhZGQodGhpcy5leHByZXNzaW9uLmNvbXBpbGUobykpO1xuXG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgVW5hcnlFeHByZXNzaW9uXG5cbiJdfQ==