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
  }]);

  return Widget;
}();

exports.default = Widget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL1dpZGdldC5qcyJdLCJuYW1lcyI6WyJXaWRnZXQiLCJhdHRycyIsImNoaWxkcmVuIiwiX2F0dHJzIiwiYXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHTUEsTTtBQUVKLGtCQUFZQyxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QjtBQUFBOztBQUUzQixTQUFLRCxLQUFMLEdBQWFBLE1BQU1FLE1BQW5CO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkgsS0FBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUVEOzs7O2lDQUVZLENBRVo7OztnQ0FFVyxDQUVYOzs7Ozs7a0JBSVlGLE0iLCJmaWxlIjoiV2lkZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXaWRnZXQgY2xhc3MgcmVwcmVzZW50c1xuICovXG5jbGFzcyBXaWRnZXQge1xuXG4gIGNvbnN0cnVjdG9yKGF0dHJzLCBjaGlsZHJlbikge1xuXG4gICAgdGhpcy5hdHRycyA9IGF0dHJzLl9hdHRycztcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSBhdHRycztcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgfVxuXG4gIG9uUmVuZGVyZWQoKSB7XG5cbiAgfVxuXG4gIG9uUmVtb3ZlZCgpIHtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XG5cbiJdfQ==