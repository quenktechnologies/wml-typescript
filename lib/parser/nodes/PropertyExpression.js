'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * PropertyExpression
 * @param {string} path
 */
var PropertyExpression = function (_Node) {
  _inherits(PropertyExpression, _Node);

  function PropertyExpression(path, location) {
    _classCallCheck(this, PropertyExpression);

    var _this = _possibleConstructorReturn(this, (PropertyExpression.__proto__ || Object.getPrototypeOf(PropertyExpression)).call(this, location));

    _this.type = 'property-expression';
    _this.path = path;

    return _this;
  }

  _createClass(PropertyExpression, [{
    key: 'transpile',
    value: function transpile() {

      var parts = this.path.split('.');
      var head = parts.shift();

      parts = parts.join('.');

      return '$$resolve(' + head + ', \'' + parts + '\')';
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      var parts = this.path.split('.');
      var head = parts.shift();

      parts = parts.join('.');

      return this.sourceNode(o.fileName, '$$resolve(' + head + ', \'' + parts + '\')');
    }
  }]);

  return PropertyExpression;
}(_Node3.default);

exports.default = PropertyExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvUHJvcGVydHlFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlByb3BlcnR5RXhwcmVzc2lvbiIsInBhdGgiLCJsb2NhdGlvbiIsInR5cGUiLCJwYXJ0cyIsInNwbGl0IiwiaGVhZCIsInNoaWZ0Iiwiam9pbiIsIm8iLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSU1BLGtCOzs7QUFFSiw4QkFBWUMsSUFBWixFQUFrQkMsUUFBbEIsRUFBNEI7QUFBQTs7QUFBQSx3SUFFcEJBLFFBRm9COztBQUcxQixVQUFLQyxJQUFMLEdBQVkscUJBQVo7QUFDQSxVQUFLRixJQUFMLEdBQVlBLElBQVo7O0FBSjBCO0FBTTNCOzs7O2dDQUVXOztBQUVWLFVBQUlHLFFBQVEsS0FBS0gsSUFBTCxDQUFVSSxLQUFWLENBQWdCLEdBQWhCLENBQVo7QUFDQSxVQUFJQyxPQUFPRixNQUFNRyxLQUFOLEVBQVg7O0FBRUFILGNBQVFBLE1BQU1JLElBQU4sQ0FBVyxHQUFYLENBQVI7O0FBRUEsNEJBQW9CRixJQUFwQixZQUE4QkYsS0FBOUI7QUFFRDs7OzRCQUVPSyxDLEVBQUc7O0FBRVQsVUFBSUwsUUFBUSxLQUFLSCxJQUFMLENBQVVJLEtBQVYsQ0FBZ0IsR0FBaEIsQ0FBWjtBQUNBLFVBQUlDLE9BQU9GLE1BQU1HLEtBQU4sRUFBWDs7QUFFQUgsY0FBUUEsTUFBTUksSUFBTixDQUFXLEdBQVgsQ0FBUjs7QUFFQSxhQUFPLEtBQUtFLFVBQUwsQ0FBZ0JELEVBQUVFLFFBQWxCLGlCQUF5Q0wsSUFBekMsWUFBbURGLEtBQW5ELFNBQVA7QUFFRDs7Ozs7O2tCQUdZSixrQiIsImZpbGUiOiJQcm9wZXJ0eUV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFByb3BlcnR5RXhwcmVzc2lvblxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqL1xuY2xhc3MgUHJvcGVydHlFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgY29uc3RydWN0b3IocGF0aCwgbG9jYXRpb24pIHtcblxuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICB0aGlzLnR5cGUgPSAncHJvcGVydHktZXhwcmVzc2lvbic7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcblxuICB9XG5cbiAgdHJhbnNwaWxlKCkge1xuXG4gICAgdmFyIHBhcnRzID0gdGhpcy5wYXRoLnNwbGl0KCcuJyk7XG4gICAgdmFyIGhlYWQgPSBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgcGFydHMgPSBwYXJ0cy5qb2luKCcuJyk7XG5cbiAgICByZXR1cm4gYCQkcmVzb2x2ZSgke2hlYWR9LCAnJHtwYXJ0c30nKWA7XG5cbiAgfVxuXG4gIGNvbXBpbGUobykge1xuXG4gICAgdmFyIHBhcnRzID0gdGhpcy5wYXRoLnNwbGl0KCcuJyk7XG4gICAgdmFyIGhlYWQgPSBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgcGFydHMgPSBwYXJ0cy5qb2luKCcuJyk7XG5cbiAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsIGAkJHJlc29sdmUoJHtoZWFkfSwgJyR7cGFydHN9JylgKTtcblxuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFByb3BlcnR5RXhwcmVzc2lvblxuXG4iXX0=