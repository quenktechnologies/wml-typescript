/**
 * TextNode for cdata?
 * @param {string} data 
 * @implements {Node}
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextNode = (function () {
    function TextNode(data) {
        _classCallCheck(this, TextNode);

        this.data = data;
    }

    _createClass(TextNode, [{
        key: "toDOMNode",
        value: function toDOMNode() {

            return document.createTextNode(this.data);
        }
    }]);

    return TextNode;
})();

exports["default"] = TextNode;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UZXh0Tm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFLTSxRQUFRO0FBRUMsYUFGVCxRQUFRLENBRUUsSUFBSSxFQUFFOzhCQUZoQixRQUFROztBQUdOLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOztpQkFKQyxRQUFROztlQU1ELHFCQUFHOztBQUVSLG1CQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBRTdDOzs7V0FWQyxRQUFROzs7cUJBYUMsUUFBUSIsImZpbGUiOiJUZXh0Tm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGV4dE5vZGUgZm9yIGNkYXRhP1xuICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgXG4gKiBAaW1wbGVtZW50cyB7Tm9kZX1cbiAqL1xuY2xhc3MgVGV4dE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIHRvRE9NTm9kZSgpIHtcblxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5kYXRhKTtcblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgVGV4dE5vZGVcbiJdfQ==