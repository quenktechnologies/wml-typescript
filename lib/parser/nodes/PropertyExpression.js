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

            return 'make.resolve(' + head + ', \'' + parts + '\')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var parts = this.path.split('.');
            var head = parts.shift();

            parts = parts.join('.');

            return this.sourceNode(o.fileName, 'make.resolve(' + head + ', \'' + parts + '\')');
        }
    }]);

    return PropertyExpression;
}(_Node3.default);

exports.default = PropertyExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvUHJvcGVydHlFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIlByb3BlcnR5RXhwcmVzc2lvbiIsInBhdGgiLCJsb2NhdGlvbiIsInR5cGUiLCJwYXJ0cyIsInNwbGl0IiwiaGVhZCIsInNoaWZ0Iiwiam9pbiIsIm8iLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSU1BLGtCOzs7QUFFRixnQ0FBWUMsSUFBWixFQUFrQkMsUUFBbEIsRUFBNEI7QUFBQTs7QUFBQSw0SUFFbEJBLFFBRmtCOztBQUd4QixjQUFLQyxJQUFMLEdBQVkscUJBQVo7QUFDQSxjQUFLRixJQUFMLEdBQVlBLElBQVo7O0FBSndCO0FBTTNCOzs7O29DQUVXOztBQUVSLGdCQUFJRyxRQUFRLEtBQUtILElBQUwsQ0FBVUksS0FBVixDQUFnQixHQUFoQixDQUFaO0FBQ0EsZ0JBQUlDLE9BQU9GLE1BQU1HLEtBQU4sRUFBWDs7QUFFQUgsb0JBQVFBLE1BQU1JLElBQU4sQ0FBVyxHQUFYLENBQVI7O0FBRUEscUNBQXVCRixJQUF2QixZQUFpQ0YsS0FBakM7QUFFSDs7O2dDQUVPSyxDLEVBQUc7O0FBRVAsZ0JBQUlMLFFBQVEsS0FBS0gsSUFBTCxDQUFVSSxLQUFWLENBQWdCLEdBQWhCLENBQVo7QUFDQSxnQkFBSUMsT0FBT0YsTUFBTUcsS0FBTixFQUFYOztBQUVBSCxvQkFBUUEsTUFBTUksSUFBTixDQUFXLEdBQVgsQ0FBUjs7QUFFQSxtQkFBTyxLQUFLRSxVQUFMLENBQWdCRCxFQUFFRSxRQUFsQixvQkFBNENMLElBQTVDLFlBQXNERixLQUF0RCxTQUFQO0FBRUg7Ozs7OztrQkFHVUosa0IiLCJmaWxlIjoiUHJvcGVydHlFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBQcm9wZXJ0eUV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBcbiAqL1xuY2xhc3MgUHJvcGVydHlFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXRoLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3Byb3BlcnR5LWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHZhciBwYXJ0cyA9IHRoaXMucGF0aC5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgaGVhZCA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICAgICAgcGFydHMgPSBwYXJ0cy5qb2luKCcuJyk7XG5cbiAgICAgICAgcmV0dXJuIGBtYWtlLnJlc29sdmUoJHtoZWFkfSwgJyR7cGFydHN9JylgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIHBhcnRzID0gdGhpcy5wYXRoLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBoZWFkID0gcGFydHMuc2hpZnQoKTtcblxuICAgICAgICBwYXJ0cyA9IHBhcnRzLmpvaW4oJy4nKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsIGBtYWtlLnJlc29sdmUoJHtoZWFkfSwgJyR7cGFydHN9JylgKTtcblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgUHJvcGVydHlFeHByZXNzaW9uXG4iXX0=