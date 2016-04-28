
/**
 * UnaryExpression 
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UnaryExpression = (function () {
  function UnaryExpression(op, expression, location) {
    _classCallCheck(this, UnaryExpression);

    this.op = op;
    this.expression = expression;
    this.location = location;
  }

  _createClass(UnaryExpression, [{
    key: "toString",
    value: function toString() {

      return this.op + "{this.expression}";
    }
  }]);

  return UnaryExpression;
})();

exports["default"] = UnaryExpression;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvVW5hcnlFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBSU0sZUFBZTtBQUVSLFdBRlAsZUFBZSxDQUVQLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFOzBCQUZsQyxlQUFlOztBQUlqQixRQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzdCLFFBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0dBRTFCOztlQVJHLGVBQWU7O1dBVVgsb0JBQUc7O0FBRWIsYUFBVSxJQUFJLENBQUMsRUFBRSx1QkFBb0I7S0FFbEM7OztTQWRHLGVBQWU7OztxQkFpQk4sZUFBZSIsImZpbGUiOiJVbmFyeUV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogVW5hcnlFeHByZXNzaW9uIFxuICovXG5jbGFzcyBVbmFyeUV4cHJlc3Npb24ge1xuXG4gIGNvbnN0cnVjdG9yKG9wLCBleHByZXNzaW9uLCBsb2NhdGlvbikge1xuXG4gICAgdGhpcy5vcCA9IG9wO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gIH1cblxuICB0b1N0cmluZygpIHtcblxucmV0dXJuIGAke3RoaXMub3B9e3RoaXMuZXhwcmVzc2lvbn1gO1xuXG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgVW5hcnlFeHByZXNzaW9uXG5cbiJdfQ==