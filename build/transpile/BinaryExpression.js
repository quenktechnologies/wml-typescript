
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQmluYXJ5RXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUlNLGdCQUFnQjtBQUVULFdBRlAsZ0JBQWdCLENBRVIsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFOzBCQUZuQyxnQkFBZ0I7O0FBSWxCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ2IsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsUUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7R0FFMUI7O2VBVEcsZ0JBQWdCOztXQVdaLG9CQUFHOztBQUVULGFBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBSSxJQUFJLENBQUMsRUFBRSxTQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUc7S0FHdEU7OztTQWhCRyxnQkFBZ0I7OztxQkFtQlAsZ0JBQWdCIiwiZmlsZSI6IkJpbmFyeUV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQmluYXJ5RXhwcmVzc2lvbiBcbiAqL1xuY2xhc3MgQmluYXJ5RXhwcmVzc2lvbiB7XG5cbiAgY29uc3RydWN0b3IobGVmdCwgb3AsIHJpZ2h0LCBsb2NhdGlvbikge1xuXG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLm9wID0gb3A7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG5cbiAgICByZXR1cm4gYCR7dGhpcy5sZWZ0LnRvU3RyaW5nKCl9ICR7dGhpcy5vcH0gJHt0aGlzLnJpZ2h0LnRvU3RyaW5nKCl9YDtcblxuXG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgQmluYXJ5RXhwcmVzc2lvblxuXG4iXX0=