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
 * DefaultMember 
 * @param {string} member 
 * @param {Location} location 
 */
var DefaultMember = function (_Node) {
  _inherits(DefaultMember, _Node);

  function DefaultMember(member, location) {
    _classCallCheck(this, DefaultMember);

    var _this = _possibleConstructorReturn(this, (DefaultMember.__proto__ || Object.getPrototypeOf(DefaultMember)).call(this, location));

    _this.type = 'default-member';
    _this.member = member;

    return _this;
  }

  _createClass(DefaultMember, [{
    key: 'transpile',
    value: function transpile() {

      return this.member;
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      return this.sourceNode(o.fileName, this.member);
    }
  }]);

  return DefaultMember;
}(_Node3.default);

exports.default = DefaultMember;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRGVmYXVsdE1lbWJlci5qcyJdLCJuYW1lcyI6WyJEZWZhdWx0TWVtYmVyIiwibWVtYmVyIiwibG9jYXRpb24iLCJ0eXBlIiwibyIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS01BLGE7OztBQUVKLHlCQUFZQyxNQUFaLEVBQW9CQyxRQUFwQixFQUE4QjtBQUFBOztBQUFBLDhIQUV0QkEsUUFGc0I7O0FBRzVCLFVBQUtDLElBQUwsR0FBWSxnQkFBWjtBQUNBLFVBQUtGLE1BQUwsR0FBY0EsTUFBZDs7QUFKNEI7QUFNN0I7Ozs7Z0NBRVc7O0FBRVYsYUFBTyxLQUFLQSxNQUFaO0FBRUQ7Ozs0QkFFT0csQyxFQUFHOztBQUVULGFBQU8sS0FBS0MsVUFBTCxDQUFnQkQsRUFBRUUsUUFBbEIsRUFBNEIsS0FBS0wsTUFBakMsQ0FBUDtBQUVEOzs7Ozs7a0JBSVlELGEiLCJmaWxlIjoiRGVmYXVsdE1lbWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogRGVmYXVsdE1lbWJlciBcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZW1iZXIgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgRGVmYXVsdE1lbWJlciBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKG1lbWJlciwgbG9jYXRpb24pIHtcblxuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdC1tZW1iZXInO1xuICAgIHRoaXMubWVtYmVyID0gbWVtYmVyO1xuXG4gIH1cblxuICB0cmFuc3BpbGUoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5tZW1iZXI7XG4gICAgXG4gIH1cblxuICBjb21waWxlKG8pIHtcblxuICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgdGhpcy5tZW1iZXIpO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0TWVtYmVyXG5cbiJdfQ==