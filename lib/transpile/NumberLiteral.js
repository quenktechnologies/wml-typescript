/**
 * NumberLiteral 
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NumberLiteral = (function () {
    function NumberLiteral(value) {
        _classCallCheck(this, NumberLiteral);

        this.value = value;
    }

    _createClass(NumberLiteral, [{
        key: "toString",
        value: function toString() {

            return parseFloat(this.value);
        }
    }]);

    return NumberLiteral;
})();

exports["default"] = NumberLiteral;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvTnVtYmVyTGl0ZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBR00sYUFBYTtBQUVKLGFBRlQsYUFBYSxDQUVILEtBQUssRUFBRTs4QkFGakIsYUFBYTs7QUFJWCxZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUV0Qjs7aUJBTkMsYUFBYTs7ZUFRUCxvQkFBRzs7QUFFUCxtQkFBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBRWpDOzs7V0FaQyxhQUFhOzs7cUJBZ0JKLGFBQWEiLCJmaWxlIjoiTnVtYmVyTGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTnVtYmVyTGl0ZXJhbCBcbiAqL1xuY2xhc3MgTnVtYmVyTGl0ZXJhbCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMudmFsdWUpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckxpdGVyYWxcbiJdfQ==