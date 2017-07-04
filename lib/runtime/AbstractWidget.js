"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * AbstractWidget
 */
var AbstractWidget = function () {
  function AbstractWidget(attrs, children) {
    _classCallCheck(this, AbstractWidget);

    this.attributes = attrs;
    this.children = children;
    this.view = null;
  }

  _createClass(AbstractWidget, [{
    key: "rendered",
    value: function rendered() {}
  }, {
    key: "removed",
    value: function removed() {}
  }, {
    key: "render",
    value: function render() {

      return this.view.render();
    }
  }]);

  return AbstractWidget;
}();

exports.default = AbstractWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL0Fic3RyYWN0V2lkZ2V0LmpzIl0sIm5hbWVzIjpbIkFic3RyYWN0V2lkZ2V0IiwiYXR0cnMiLCJjaGlsZHJlbiIsImF0dHJpYnV0ZXMiLCJ2aWV3IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztJQUdNQSxjO0FBRUosMEJBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCO0FBQUE7O0FBRTNCLFNBQUtDLFVBQUwsR0FBa0JGLEtBQWxCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLRSxJQUFMLEdBQVksSUFBWjtBQUVEOzs7OytCQUVVLENBRVY7Ozs4QkFFUyxDQUVUOzs7NkJBRVE7O0FBRVAsYUFBTyxLQUFLQSxJQUFMLENBQVVDLE1BQVYsRUFBUDtBQUVEOzs7Ozs7a0JBSVlMLGMiLCJmaWxlIjoiQWJzdHJhY3RXaWRnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFic3RyYWN0V2lkZ2V0XG4gKi9cbmNsYXNzIEFic3RyYWN0V2lkZ2V0IHtcblxuICBjb25zdHJ1Y3RvcihhdHRycywgY2hpbGRyZW4pIHtcblxuICAgIHRoaXMuYXR0cmlidXRlcyA9IGF0dHJzO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB0aGlzLnZpZXcgPSBudWxsO1xuXG4gIH1cblxuICByZW5kZXJlZCgpIHtcblxuICB9XG5cbiAgcmVtb3ZlZCgpIHtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIHRoaXMudmlldy5yZW5kZXIoKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RXaWRnZXRcblxuIl19