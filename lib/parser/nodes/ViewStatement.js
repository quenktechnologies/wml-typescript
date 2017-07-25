'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _Templates = require('../Templates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ViewStatement
 * @param {array<Import>} imports
 * @param {array<string>} uses
 * @param {Tag} root
 * @param {Location} location
 */
var ViewStatement = function (_Node) {
  _inherits(ViewStatement, _Node);

  function ViewStatement(name, tag, location) {
    _classCallCheck(this, ViewStatement);

    var _this = _possibleConstructorReturn(this, (ViewStatement.__proto__ || Object.getPrototypeOf(ViewStatement)).call(this));

    _this.type = 'view-expression';
    _this.name = name;
    _this.tag = tag;
    _this.location = location;

    return _this;
  }

  _createClass(ViewStatement, [{
    key: 'transpile',
    value: function transpile(o) {

      return (0, _Templates.view)(this.name, this.tag, o);
    }
  }]);

  return ViewStatement;
}(_Node3.default);

exports.default = ViewStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVmlld1N0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJWaWV3U3RhdGVtZW50IiwibmFtZSIsInRhZyIsImxvY2F0aW9uIiwidHlwZSIsIm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztBQUdBOzs7Ozs7O0lBT01BLGE7OztBQUVKLHlCQUFZQyxJQUFaLEVBQWtCQyxHQUFsQixFQUF1QkMsUUFBdkIsRUFBaUM7QUFBQTs7QUFBQTs7QUFJL0IsVUFBS0MsSUFBTCxHQUFZLGlCQUFaO0FBQ0EsVUFBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUCtCO0FBU2hDOzs7OzhCQUVTRSxDLEVBQUc7O0FBRVgsYUFBTyxxQkFBTyxLQUFLSixJQUFaLEVBQWtCLEtBQUtDLEdBQXZCLEVBQTRCRyxDQUE1QixDQUFQO0FBRUQ7Ozs7OztrQkFJWUwsYSIsImZpbGUiOiJWaWV3U3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCB7dmlldyBhcyB2aWV3Rm5cbn0gZnJvbSAnLi4vVGVtcGxhdGVzJztcblxuLyoqXG4gKiBWaWV3U3RhdGVtZW50XG4gKiBAcGFyYW0ge2FycmF5PEltcG9ydD59IGltcG9ydHNcbiAqIEBwYXJhbSB7YXJyYXk8c3RyaW5nPn0gdXNlc1xuICogQHBhcmFtIHtUYWd9IHJvb3RcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKi9cbmNsYXNzIFZpZXdTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICBjb25zdHJ1Y3RvcihuYW1lLCB0YWcsIGxvY2F0aW9uKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gJ3ZpZXctZXhwcmVzc2lvbic7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgfVxuXG4gIHRyYW5zcGlsZShvKSB7XG5cbiAgICByZXR1cm4gdmlld0ZuKHRoaXMubmFtZSwgdGhpcy50YWcsIG8pO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3U3RhdGVtZW50XG5cbiJdfQ==