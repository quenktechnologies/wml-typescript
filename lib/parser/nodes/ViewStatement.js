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

  function ViewStatement(id, context, generics, tag, location) {
    _classCallCheck(this, ViewStatement);

    var _this = _possibleConstructorReturn(this, (ViewStatement.__proto__ || Object.getPrototypeOf(ViewStatement)).call(this));

    _this.type = 'typed-view-expression';
    _this.id = id;
    _this.context = context;
    _this.generics = generics;
    _this.tag = tag;
    _this.location = location;

    return _this;
  }

  _createClass(ViewStatement, [{
    key: 'transpile',
    value: function transpile(o) {

      return (0, _Templates.view)(this.id.transpile(o), this.context.transpile(o), this.generics.map(function (g) {
        return g.generics(o);
      }).join(','), this.tag, o);
    }
  }]);

  return ViewStatement;
}(_Node3.default);

exports.default = ViewStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvVmlld1N0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJWaWV3U3RhdGVtZW50IiwiaWQiLCJjb250ZXh0IiwiZ2VuZXJpY3MiLCJ0YWciLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwidHJhbnNwaWxlIiwibWFwIiwiZyIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztBQUdBOzs7O0lBSU1BLGE7OztBQUVKLHlCQUFZQyxFQUFaLEVBQWdCQyxPQUFoQixFQUF5QkMsUUFBekIsRUFBbUNDLEdBQW5DLEVBQXdDQyxRQUF4QyxFQUFrRDtBQUFBOztBQUFBOztBQUloRCxVQUFLQyxJQUFMLEdBQVksdUJBQVo7QUFDQSxVQUFLTCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxVQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVRnRDtBQVdqRDs7Ozs4QkFFU0UsQyxFQUFHOztBQUVYLGFBQU8scUJBQ0gsS0FBS04sRUFBTCxDQUFRTyxTQUFSLENBQWtCRCxDQUFsQixDQURHLEVBRUgsS0FBS0wsT0FBTCxDQUFhTSxTQUFiLENBQXVCRCxDQUF2QixDQUZHLEVBR0gsS0FBS0osUUFBTCxDQUFjTSxHQUFkLENBQWtCO0FBQUEsZUFBR0MsRUFBRVAsUUFBRixDQUFXSSxDQUFYLENBQUg7QUFBQSxPQUFsQixFQUFvQ0ksSUFBcEMsQ0FBeUMsR0FBekMsQ0FIRyxFQUlILEtBQUtQLEdBSkYsRUFLSEcsQ0FMRyxDQUFQO0FBT0Q7Ozs7OztrQkFJWVAsYSIsImZpbGUiOiJWaWV3U3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCB7dmlldyBhcyB2aWV3Rm5cbn0gZnJvbSAnLi4vVGVtcGxhdGVzJztcblxuLyoqXG4gKiBWaWV3U3RhdGVtZW50XG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBWaWV3U3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgY29uc3RydWN0b3IoaWQsIGNvbnRleHQsIGdlbmVyaWNzLCB0YWcsIGxvY2F0aW9uKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gJ3R5cGVkLXZpZXctZXhwcmVzc2lvbic7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5nZW5lcmljcyA9IGdlbmVyaWNzO1xuICAgIHRoaXMudGFnID0gdGFnO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICB9XG5cbiAgdHJhbnNwaWxlKG8pIHtcblxuICAgIHJldHVybiB2aWV3Rm4oXG4gICAgICAgIHRoaXMuaWQudHJhbnNwaWxlKG8pLFxuICAgICAgICB0aGlzLmNvbnRleHQudHJhbnNwaWxlKG8pLFxuICAgICAgICB0aGlzLmdlbmVyaWNzLm1hcChnPT5nLmdlbmVyaWNzKG8pKS5qb2luKCcsJyksXG4gICAgICAgIHRoaXMudGFnLFxuICAgICAgICBvKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld1N0YXRlbWVudFxuXG4iXX0=