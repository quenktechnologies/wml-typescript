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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL1RleHROb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUtNLFFBQVE7QUFFQyxhQUZULFFBQVEsQ0FFRSxJQUFJLEVBQUU7OEJBRmhCLFFBQVE7O0FBR04sWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDcEI7O2lCQUpDLFFBQVE7O2VBTUQscUJBQUc7O0FBRVIsbUJBQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FFN0M7OztXQVZDLFFBQVE7OztxQkFhQyxRQUFRIiwiZmlsZSI6IlRleHROb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUZXh0Tm9kZSBmb3IgY2RhdGE/XG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBcbiAqIEBpbXBsZW1lbnRzIHtOb2RlfVxuICovXG5jbGFzcyBUZXh0Tm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgdG9ET01Ob2RlKCkge1xuXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmRhdGEpO1xuXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBUZXh0Tm9kZVxuIl19