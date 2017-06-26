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
 * ExportFromStatement
 * @param {string} in
 * @param {StringLiteral} module
 * @param {Location} location
 */
var ExportFromStatement = function (_Node) {
  _inherits(ExportFromStatement, _Node);

  function ExportFromStatement(id, module, location) {
    _classCallCheck(this, ExportFromStatement);

    var _this = _possibleConstructorReturn(this, (ExportFromStatement.__proto__ || Object.getPrototypeOf(ExportFromStatement)).call(this));

    _this.type = 'export-from-statement';
    _this.id = id;
    _this.module = module;
    _this.location = location;

    return _this;
  }

  _createClass(ExportFromStatement, [{
    key: 'transpile',
    value: function transpile() {

      return 'export ' + this.id + ' from ' + this.module.transpile() + ';\n';
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      return;
      this.sourceNode(o.fileName, '').add('export ' + this.id + ' from ').add(this.module.compile(o)).add('\n');
    }
  }]);

  return ExportFromStatement;
}(_Node3.default);

exports.default = ExportFromStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRXhwb3J0RnJvbVN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJFeHBvcnRGcm9tU3RhdGVtZW50IiwiaWQiLCJtb2R1bGUiLCJsb2NhdGlvbiIsInR5cGUiLCJ0cmFuc3BpbGUiLCJvIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiY29tcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7OztJQU1NQSxtQjs7O0FBRUosK0JBQVlDLEVBQVosRUFBZ0JDLE1BQWhCLEVBQXdCQyxRQUF4QixFQUFrQztBQUFBOztBQUFBOztBQUloQyxVQUFLQyxJQUFMLEdBQVksdUJBQVo7QUFDQSxVQUFLSCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFQZ0M7QUFTakM7Ozs7Z0NBRVc7O0FBRVYseUJBQWlCLEtBQUtGLEVBQXRCLGNBQWlDLEtBQUtDLE1BQUwsQ0FBWUcsU0FBWixFQUFqQztBQUVEOzs7NEJBRU9DLEMsRUFBRzs7QUFFVDtBQUNBLFdBQUtDLFVBQUwsQ0FBZ0JELEVBQUVFLFFBQWxCLEVBQTRCLEVBQTVCLEVBQ0FDLEdBREEsYUFDYyxLQUFLUixFQURuQixhQUVBUSxHQUZBLENBRUksS0FBS1AsTUFBTCxDQUFZUSxPQUFaLENBQW9CSixDQUFwQixDQUZKLEVBR0VHLEdBSEY7QUFLRDs7Ozs7O2tCQUlZVCxtQiIsImZpbGUiOiJFeHBvcnRGcm9tU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbi8qKlxuICogRXhwb3J0RnJvbVN0YXRlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGluXG4gKiBAcGFyYW0ge1N0cmluZ0xpdGVyYWx9IG1vZHVsZVxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgRXhwb3J0RnJvbVN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKGlkLCBtb2R1bGUsIGxvY2F0aW9uKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gJ2V4cG9ydC1mcm9tLXN0YXRlbWVudCc7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICB9XG5cbiAgdHJhbnNwaWxlKCkge1xuXG4gICAgcmV0dXJuIGBleHBvcnQgJHt0aGlzLmlkfSBmcm9tICR7dGhpcy5tb2R1bGUudHJhbnNwaWxlKCl9O1xcbmA7XG5cbiAgfVxuXG4gIGNvbXBpbGUobykge1xuXG4gICAgcmV0dXJuXG4gICAgdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKS5cbiAgICBhZGQoYGV4cG9ydCAke3RoaXMuaWR9IGZyb20gYCkuXG4gICAgYWRkKHRoaXMubW9kdWxlLmNvbXBpbGUobykpLlxuICAgICAgYWRkKGBcXG5gKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwb3J0RnJvbVN0YXRlbWVudFxuXG4iXX0=