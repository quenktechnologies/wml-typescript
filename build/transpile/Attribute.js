/**
 * Attribute 
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Attribute = (function () {
    function Attribute(name, namespace, value, location) {
        _classCallCheck(this, Attribute);

        this.name = name;
        this.namespace = namespace;
        this.value = value;
        this.location = location;
    }

    _createClass(Attribute, [{
        key: "toString",
        value: function toString() {

            return "" + this.value.toString();
        }
    }]);

    return Attribute;
})();

exports["default"] = Attribute;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQXR0cmlidXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFHTSxTQUFTO0FBRUEsYUFGVCxTQUFTLENBRUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFOzhCQUY1QyxTQUFTOztBQUlQLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBRTVCOztpQkFUQyxTQUFTOztlQVdILG9CQUFHOztBQUVULHdCQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUc7U0FFbkM7OztXQWZDLFNBQVM7OztxQkFtQkEsU0FBUyIsImZpbGUiOiJBdHRyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEF0dHJpYnV0ZSBcbiAqL1xuY2xhc3MgQXR0cmlidXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG5hbWVzcGFjZSwgdmFsdWUsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG5cbiAgICAgIHJldHVybiBgJHt0aGlzLnZhbHVlLnRvU3RyaW5nKCl9YDsgXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRlXG4iXX0=