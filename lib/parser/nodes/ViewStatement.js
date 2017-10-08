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
 * @param {Location} location
 */
var ViewStatement = function (_Node) {
  _inherits(ViewStatement, _Node);

  function ViewStatement(id, hint, classes, tag, location) {
    _classCallCheck(this, ViewStatement);

    var _this = _possibleConstructorReturn(this, (ViewStatement.__proto__ || Object.getPrototypeOf(ViewStatement)).call(this));

    _this.type = 'typed-view-expression';
    _this.id = id;
    _this.hint = hint;
    _this.classes = classes;
    _this.tag = tag;
    _this.location = location;

    return _this;
  }

  _createClass(ViewStatement, [{
    key: 'transpile',
    value: function transpile(o) {

      return (0, _Templates.viewT)(this.id.transpile(o), this.hint.transplie(o), this.classes.map(function (c) {
        return c.transpile(o);
      }).join(','), this.tag, o);
    }
  }]);

  return ViewStatement;
}(_Node3.default);

exports.default = ViewStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVmlld1N0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJWaWV3U3RhdGVtZW50IiwiaWQiLCJoaW50IiwiY2xhc3NlcyIsInRhZyIsImxvY2F0aW9uIiwidHlwZSIsIm8iLCJ0cmFuc3BpbGUiLCJ0cmFuc3BsaWUiLCJtYXAiLCJjIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0FBR0E7Ozs7SUFJTUEsYTs7O0FBRUoseUJBQVlDLEVBQVosRUFBZ0JDLElBQWhCLEVBQXNCQyxPQUF0QixFQUErQkMsR0FBL0IsRUFBb0NDLFFBQXBDLEVBQThDO0FBQUE7O0FBQUE7O0FBSTVDLFVBQUtDLElBQUwsR0FBWSx1QkFBWjtBQUNBLFVBQUtMLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFVBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVQ0QztBQVc3Qzs7Ozs4QkFFU0UsQyxFQUFHOztBQUVYLGFBQU8sc0JBQ0gsS0FBS04sRUFBTCxDQUFRTyxTQUFSLENBQWtCRCxDQUFsQixDQURHLEVBRUgsS0FBS0wsSUFBTCxDQUFVTyxTQUFWLENBQW9CRixDQUFwQixDQUZHLEVBR0gsS0FBS0osT0FBTCxDQUFhTyxHQUFiLENBQWlCO0FBQUEsZUFBR0MsRUFBRUgsU0FBRixDQUFZRCxDQUFaLENBQUg7QUFBQSxPQUFqQixFQUFvQ0ssSUFBcEMsQ0FBeUMsR0FBekMsQ0FIRyxFQUlILEtBQUtSLEdBSkYsRUFLSEcsQ0FMRyxDQUFQO0FBT0Q7Ozs7OztrQkFJWVAsYSIsImZpbGUiOiJWaWV3U3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCB7dmlld1QgYXMgdmlld0ZuXG59IGZyb20gJy4uL1RlbXBsYXRlcyc7XG5cbi8qKlxuICogVmlld1N0YXRlbWVudFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgVmlld1N0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKGlkLCBoaW50LCBjbGFzc2VzLCB0YWcsIGxvY2F0aW9uKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gJ3R5cGVkLXZpZXctZXhwcmVzc2lvbic7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuaGludCA9IGhpbnQ7XG4gICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcztcbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgfVxuXG4gIHRyYW5zcGlsZShvKSB7XG5cbiAgICByZXR1cm4gdmlld0ZuKFxuICAgICAgICB0aGlzLmlkLnRyYW5zcGlsZShvKSxcbiAgICAgICAgdGhpcy5oaW50LnRyYW5zcGxpZShvKSxcbiAgICAgICAgdGhpcy5jbGFzc2VzLm1hcChjPT5jLnRyYW5zcGlsZShvKSkuam9pbignLCcpLFxuICAgICAgICB0aGlzLnRhZyxcbiAgICAgICAgbyk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdTdGF0ZW1lbnRcblxuIl19