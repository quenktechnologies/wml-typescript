
/**
 * BinaryExpression 
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BinaryExpression = (function () {
  function BinaryExpression(left, op, right, location) {
    _classCallCheck(this, BinaryExpression);

    this.left = left;
    this.op = op;
    this.right = right;
    this.location = location;
  }

  _createClass(BinaryExpression, [{
    key: "toString",
    value: function toString() {

      return this.left.toString() + " " + this.op + " " + this.right.toString();
    }
  }]);

  return BinaryExpression;
})();

exports["default"] = BinaryExpression;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQmluYXJ5RXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUlNLGdCQUFnQjtBQUVULFdBRlAsZ0JBQWdCLENBRVIsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFOzBCQUZuQyxnQkFBZ0I7O0FBSWxCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ2IsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsUUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7R0FFMUI7O2VBVEcsZ0JBQWdCOztXQVdaLG9CQUFHOztBQUVULGFBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBSSxJQUFJLENBQUMsRUFBRSxTQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUc7S0FFdEU7OztTQWZHLGdCQUFnQjs7O3FCQWtCUCxnQkFBZ0IiLCJmaWxlIjoiQmluYXJ5RXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBCaW5hcnlFeHByZXNzaW9uIFxuICovXG5jbGFzcyBCaW5hcnlFeHByZXNzaW9uIHtcblxuICBjb25zdHJ1Y3RvcihsZWZ0LCBvcCwgcmlnaHQsIGxvY2F0aW9uKSB7XG5cbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMub3AgPSBvcDtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gIH1cblxuICB0b1N0cmluZygpIHtcblxuICAgIHJldHVybiBgJHt0aGlzLmxlZnQudG9TdHJpbmcoKX0gJHt0aGlzLm9wfSAke3RoaXMucmlnaHQudG9TdHJpbmcoKX1gO1xuXG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgQmluYXJ5RXhwcmVzc2lvblxuXG4iXX0=