"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Widget class represents
 */
var Widget = function () {
  function Widget(attrs, children) {
    _classCallCheck(this, Widget);

    this.attrs = attrs._attrs;
    this.attributes = attrs;
    this.children = children;
  }

  _createClass(Widget, [{
    key: "onRendered",
    value: function onRendered() {}
  }, {
    key: "onRemoved",
    value: function onRemoved() {}
  }, {
    key: "render",
    value: function render() {

      return null;
    }
  }]);

  return Widget;
}();

exports.default = Widget;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL1dpZGdldC5qcyJdLCJuYW1lcyI6WyJXaWRnZXQiLCJhdHRycyIsImNoaWxkcmVuIiwiX2F0dHJzIiwiYXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHTUEsTTtBQUVKLGtCQUFZQyxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QjtBQUFBOztBQUUzQixTQUFLRCxLQUFMLEdBQWFBLE1BQU1FLE1BQW5CO0FBQ0osU0FBS0MsVUFBTCxHQUFrQkgsS0FBbEI7QUFDSSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUVEOzs7O2lDQUVjLENBRVo7OztnQ0FFVyxDQUVYOzs7NkJBRVE7O0FBRUwsYUFBTyxJQUFQO0FBRUg7Ozs7OztrQkFJVUYsTSIsImZpbGUiOiJXaWRnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdpZGdldCBjbGFzcyByZXByZXNlbnRzXG4gKi9cbmNsYXNzIFdpZGdldCB7XG5cbiAgY29uc3RydWN0b3IoYXR0cnMsIGNoaWxkcmVuKSB7XG5cbiAgICB0aGlzLmF0dHJzID0gYXR0cnMuX2F0dHJzO1xudGhpcy5hdHRyaWJ1dGVzID0gYXR0cnM7XG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gIH1cblxuICAgIG9uUmVuZGVyZWQoKSB7XG5cbiAgICB9XG5cbiAgICBvblJlbW92ZWQoKSB7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XG4iXX0=