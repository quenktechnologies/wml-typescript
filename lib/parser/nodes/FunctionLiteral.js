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

var count = 0;
/**
 * FunctionLiteral
 * @param {array<string>} parameters
 * @param {Expression} body
 * @param {Location} location
 */

var FunctionLiteral = function (_Node) {
  _inherits(FunctionLiteral, _Node);

  function FunctionLiteral(parameters, body, location) {
    _classCallCheck(this, FunctionLiteral);

    var _this = _possibleConstructorReturn(this, (FunctionLiteral.__proto__ || Object.getPrototypeOf(FunctionLiteral)).call(this, location));

    _this.type = 'function-literal';
    _this.parameters = parameters;
    _this.body = body;

    return _this;
  }

  _createClass(FunctionLiteral, [{
    key: 'transpile',
    value: function transpile() {

      var params = this.parameters.join(',');
      count = count + 1;

      return 'function function_literal_' + count + '(' + params + ')' + ('{ return ' + this.body.transpile() + '; }.bind(this)');
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      var node = this.sourceNode(o.fileName, '');

      node.add('function function_literal_' + count + '(' + this.parameters.join(',') + ')').add('{ return ');

      return this.compileList(this.body.compile(o)).add('; } bind(this)');
    }
  }]);

  return FunctionLiteral;
}(_Node3.default);

exports.default = FunctionLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRnVuY3Rpb25MaXRlcmFsLmpzIl0sIm5hbWVzIjpbImNvdW50IiwiRnVuY3Rpb25MaXRlcmFsIiwicGFyYW1ldGVycyIsImJvZHkiLCJsb2NhdGlvbiIsInR5cGUiLCJwYXJhbXMiLCJqb2luIiwidHJhbnNwaWxlIiwibyIsIm5vZGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlTGlzdCIsImNvbXBpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVEsQ0FBWjtBQUNBOzs7Ozs7O0lBTU1DLGU7OztBQUVKLDJCQUFZQyxVQUFaLEVBQXdCQyxJQUF4QixFQUE4QkMsUUFBOUIsRUFBd0M7QUFBQTs7QUFBQSxrSUFFaENBLFFBRmdDOztBQUd0QyxVQUFLQyxJQUFMLEdBQVksa0JBQVo7QUFDQSxVQUFLSCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjs7QUFMc0M7QUFPdkM7Ozs7Z0NBRVc7O0FBRVYsVUFBSUcsU0FBUyxLQUFLSixVQUFMLENBQWdCSyxJQUFoQixDQUFxQixHQUFyQixDQUFiO0FBQ0FQLGNBQVFBLFFBQVEsQ0FBaEI7O0FBRUEsYUFBTywrQkFBNkJBLEtBQTdCLFNBQXNDTSxNQUF0Qyx3QkFDTyxLQUFLSCxJQUFMLENBQVVLLFNBQVYsRUFEUCxvQkFBUDtBQUdEOzs7NEJBRU9DLEMsRUFBRzs7QUFFVCxVQUFJQyxPQUFPLEtBQUtDLFVBQUwsQ0FBZ0JGLEVBQUVHLFFBQWxCLEVBQTRCLEVBQTVCLENBQVg7O0FBRUFGLFdBQUtHLEdBQUwsZ0NBQXNDYixLQUF0QyxTQUErQyxLQUFLRSxVQUFMLENBQWdCSyxJQUFoQixDQUFxQixHQUFyQixDQUEvQyxRQUNBTSxHQURBLENBQ0ksV0FESjs7QUFHQSxhQUFPLEtBQUtDLFdBQUwsQ0FBaUIsS0FBS1gsSUFBTCxDQUFVWSxPQUFWLENBQWtCTixDQUFsQixDQUFqQixFQUNQSSxHQURPLENBQ0gsZ0JBREcsQ0FBUDtBQUdEOzs7Ozs7a0JBSVlaLGUiLCJmaWxlIjoiRnVuY3Rpb25MaXRlcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxudmFyIGNvdW50ID0gMDtcbi8qKlxuICogRnVuY3Rpb25MaXRlcmFsXG4gKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gYm9keVxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgRnVuY3Rpb25MaXRlcmFsIGV4dGVuZHMgTm9kZSB7XG5cbiAgY29uc3RydWN0b3IocGFyYW1ldGVycywgYm9keSwgbG9jYXRpb24pIHtcblxuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICB0aGlzLnR5cGUgPSAnZnVuY3Rpb24tbGl0ZXJhbCc7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuXG4gIH1cblxuICB0cmFuc3BpbGUoKSB7XG5cbiAgICB2YXIgcGFyYW1zID0gdGhpcy5wYXJhbWV0ZXJzLmpvaW4oJywnKTtcbiAgICBjb3VudCA9IGNvdW50ICsgMTtcblxuICAgIHJldHVybiBgZnVuY3Rpb24gZnVuY3Rpb25fbGl0ZXJhbF8ke2NvdW50fSgke3BhcmFtc30pYCArXG4gICAgICBgeyByZXR1cm4gJHt0aGlzLmJvZHkudHJhbnNwaWxlKCl9OyB9LmJpbmQodGhpcylgO1xuXG4gIH1cblxuICBjb21waWxlKG8pIHtcblxuICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKTtcblxuICAgIG5vZGUuYWRkKGBmdW5jdGlvbiBmdW5jdGlvbl9saXRlcmFsXyR7Y291bnR9KCR7dGhpcy5wYXJhbWV0ZXJzLmpvaW4oJywnKX0pYCkuXG4gICAgYWRkKCd7IHJldHVybiAnKTtcblxuICAgIHJldHVybiB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuYm9keS5jb21waWxlKG8pKS5cbiAgICBhZGQoJzsgfSBiaW5kKHRoaXMpJyk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9uTGl0ZXJhbFxuXG4iXX0=