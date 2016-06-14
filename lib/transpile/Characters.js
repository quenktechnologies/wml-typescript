/**
 * Characters 
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Characters = (function () {
    function Characters(value, location) {
        _classCallCheck(this, Characters);

        this.value = value;
        this.location = location;
    }

    _createClass(Characters, [{
        key: "toString",
        value: function toString() {

            return "make.text(`" + this.value + "`)";
        }
    }]);

    return Characters;
})();

exports["default"] = Characters;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQ2hhcmFjdGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBR00sVUFBVTtBQUVELGFBRlQsVUFBVSxDQUVBLEtBQUssRUFBRSxRQUFRLEVBQUU7OEJBRjNCLFVBQVU7O0FBSVIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FFNUI7O2lCQVBDLFVBQVU7O2VBU0osb0JBQUc7O0FBRVAsbUNBQXNCLElBQUksQ0FBQyxLQUFLLFFBQU07U0FFekM7OztXQWJDLFVBQVU7OztxQkFnQkQsVUFBVSIsImZpbGUiOiJDaGFyYWN0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDaGFyYWN0ZXJzIFxuICovXG5jbGFzcyBDaGFyYWN0ZXJzIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG5cbiAgICAgICAgcmV0dXJuIGBtYWtlLnRleHQoXFxgJHt0aGlzLnZhbHVlfVxcYClgO1xuXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJzXG4iXX0=