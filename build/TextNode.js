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
        key: "render",
        value: function render(w) {

            return document.createTextNode(this.data);
        }
    }]);

    return TextNode;
})();

exports["default"] = TextNode;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UZXh0Tm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFLTSxRQUFRO0FBRUMsYUFGVCxRQUFRLENBRUUsSUFBSSxFQUFFOzhCQUZoQixRQUFROztBQUdOLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOztpQkFKQyxRQUFROztlQU1KLGdCQUFDLENBQUMsRUFBRTs7QUFFTixtQkFBTyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUU3Qzs7O1dBVkMsUUFBUTs7O3FCQWFDLFFBQVEiLCJmaWxlIjoiVGV4dE5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRleHROb2RlIGZvciBjZGF0YT9cbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIFxuICogQGltcGxlbWVudHMge05vZGV9XG4gKi9cbmNsYXNzIFRleHROb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICByZW5kZXIodykge1xuXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmRhdGEpO1xuXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBUZXh0Tm9kZVxuIl19