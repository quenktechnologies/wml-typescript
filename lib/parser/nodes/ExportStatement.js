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
 * ExportStatement
 * @param {string} id
 * @param {Tag} root
 * @param {Location} location
 */
var ExportStatement = function (_Node) {
  _inherits(ExportStatement, _Node);

  function ExportStatement(id, root, location) {
    _classCallCheck(this, ExportStatement);

    var _this = _possibleConstructorReturn(this, (ExportStatement.__proto__ || Object.getPrototypeOf(ExportStatement)).call(this));

    _this.type = 'export-statement';
    _this.id = id;
    _this.root = root;
    _this.location = location;

    return _this;
  }

  _createClass(ExportStatement, [{
    key: 'transpile',
    value: function transpile() {

      return 'export function ' + this.id + '(view) { ' + ('return ' + this.root.transpile() + ';}\n');
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      return;
      this.sourceNode(o.fileName, '').add('export').add('function ' + this.id + '(make)').add('{').add('return').add(this.root.compile(o)).add(';}').add('\n');
    }
  }]);

  return ExportStatement;
}(_Node3.default);

exports.default = ExportStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRXhwb3J0U3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIkV4cG9ydFN0YXRlbWVudCIsImlkIiwicm9vdCIsImxvY2F0aW9uIiwidHlwZSIsInRyYW5zcGlsZSIsIm8iLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0lBTU1BLGU7OztBQUVKLDJCQUFZQyxFQUFaLEVBQWdCQyxJQUFoQixFQUFzQkMsUUFBdEIsRUFBZ0M7QUFBQTs7QUFBQTs7QUFJOUIsVUFBS0MsSUFBTCxHQUFZLGtCQUFaO0FBQ0EsVUFBS0gsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUDhCO0FBUy9COzs7O2dDQUVXOztBQUVWLGFBQU8scUJBQW1CLEtBQUtGLEVBQXhCLDhCQUNLLEtBQUtDLElBQUwsQ0FBVUcsU0FBVixFQURMLFVBQVA7QUFHRDs7OzRCQUVPQyxDLEVBQUc7O0FBRVQ7QUFDQSxXQUFLQyxVQUFMLENBQWdCRCxFQUFFRSxRQUFsQixFQUE0QixFQUE1QixFQUNFQyxHQURGLFdBRUFBLEdBRkEsZUFFZ0IsS0FBS1IsRUFGckIsYUFHQVEsR0FIQSxNQUlBQSxHQUpBLFdBS0FBLEdBTEEsQ0FLSSxLQUFLUCxJQUFMLENBQVVRLE9BQVYsQ0FBa0JKLENBQWxCLENBTEosRUFNQUcsR0FOQSxPQU9BQSxHQVBBO0FBU0Q7Ozs7OztrQkFJWVQsZSIsImZpbGUiOiJFeHBvcnRTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuLyoqXG4gKiBFeHBvcnRTdGF0ZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHBhcmFtIHtUYWd9IHJvb3RcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKi9cbmNsYXNzIEV4cG9ydFN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKGlkLCByb290LCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZSA9ICdleHBvcnQtc3RhdGVtZW50JztcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgfVxuXG4gIHRyYW5zcGlsZSgpIHtcblxuICAgIHJldHVybiBgZXhwb3J0IGZ1bmN0aW9uICR7dGhpcy5pZH0odmlldykgeyBgICtcbiAgICAgIGByZXR1cm4gJHt0aGlzLnJvb3QudHJhbnNwaWxlKCl9O31cXG5gO1xuXG4gIH1cblxuICBjb21waWxlKG8pIHtcblxuICAgIHJldHVyblxuICAgIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJykuXG4gICAgICBhZGQoYGV4cG9ydGApLlxuICAgIGFkZChgZnVuY3Rpb24gJHt0aGlzLmlkfShtYWtlKWApLlxuICAgIGFkZChge2ApLlxuICAgIGFkZChgcmV0dXJuYCkuXG4gICAgYWRkKHRoaXMucm9vdC5jb21waWxlKG8pKS5cbiAgICBhZGQoYDt9YCkuXG4gICAgYWRkKGBcXG5gKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwb3J0U3RhdGVtZW50XG5cbiJdfQ==