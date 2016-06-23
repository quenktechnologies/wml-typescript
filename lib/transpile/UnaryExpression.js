
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

      return "" + this.op + this.expression;
    }
  }]);

  return UnaryExpression;
})();

exports["default"] = UnaryExpression;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvVW5hcnlFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBSU0sZUFBZTtBQUVSLFdBRlAsZUFBZSxDQUVQLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFOzBCQUZsQyxlQUFlOztBQUlqQixRQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzdCLFFBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0dBRTFCOztlQVJHLGVBQWU7O1dBVVgsb0JBQUc7O0FBRWIsa0JBQVUsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFHO0tBRW5DOzs7U0FkRyxlQUFlOzs7cUJBaUJOLGVBQWUiLCJmaWxlIjoiVW5hcnlFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFVuYXJ5RXhwcmVzc2lvbiBcbiAqL1xuY2xhc3MgVW5hcnlFeHByZXNzaW9uIHtcblxuICBjb25zdHJ1Y3RvcihvcCwgZXhwcmVzc2lvbiwgbG9jYXRpb24pIHtcblxuICAgIHRoaXMub3AgPSBvcDtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG5cbnJldHVybiBgJHt0aGlzLm9wfSR7dGhpcy5leHByZXNzaW9ufWA7XG5cbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBVbmFyeUV4cHJlc3Npb25cblxuIl19