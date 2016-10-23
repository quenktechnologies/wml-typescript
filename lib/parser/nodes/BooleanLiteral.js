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
 * BooleanLiteral 
 */
var BooleanLiteral = function (_Node) {
  _inherits(BooleanLiteral, _Node);

  function BooleanLiteral(value, location) {
    _classCallCheck(this, BooleanLiteral);

    var _this = _possibleConstructorReturn(this, (BooleanLiteral.__proto__ || Object.getPrototypeOf(BooleanLiteral)).call(this, location));

    _this.type = 'boolean-literal';
    _this.value = value;

    return _this;
  }

  _createClass(BooleanLiteral, [{
    key: 'transpile',
    value: function transpile() {

      return this.value;
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      return this.sourceNode(o.fileName, this.value);
    }
  }]);

  return BooleanLiteral;
}(_Node3.default);

exports.default = BooleanLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQm9vbGVhbkxpdGVyYWwuanMiXSwibmFtZXMiOlsiQm9vbGVhbkxpdGVyYWwiLCJ2YWx1ZSIsImxvY2F0aW9uIiwidHlwZSIsIm8iLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsYzs7O0FBRUYsMEJBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCO0FBQUE7O0FBQUEsZ0lBRXJCQSxRQUZxQjs7QUFHM0IsVUFBS0MsSUFBTCxHQUFZLGlCQUFaO0FBQ0UsVUFBS0YsS0FBTCxHQUFhQSxLQUFiOztBQUp5QjtBQU01Qjs7OztnQ0FFVzs7QUFFVixhQUFPLEtBQUtBLEtBQVo7QUFFRDs7OzRCQUVPRyxDLEVBQUc7O0FBRVQsYUFBTyxLQUFLQyxVQUFMLENBQWdCRCxFQUFFRSxRQUFsQixFQUE0QixLQUFLTCxLQUFqQyxDQUFQO0FBRUQ7Ozs7OztrQkFJVUQsYyIsImZpbGUiOiJCb29sZWFuTGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQm9vbGVhbkxpdGVyYWwgXG4gKi9cbmNsYXNzIEJvb2xlYW5MaXRlcmFsIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgbG9jYXRpb24pIHtcblxuICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgdGhpcy50eXBlID0gJ2Jvb2xlYW4tbGl0ZXJhbCc7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCB0aGlzLnZhbHVlKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuTGl0ZXJhbFxuIl19