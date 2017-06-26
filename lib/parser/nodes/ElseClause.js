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

var elses = 0;

/**
 * ElseClause
 * @param {array<Child>}
 */

var ElseClause = function (_Node) {
  _inherits(ElseClause, _Node);

  function ElseClause() {
    var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ElseClause);

    var _this = _possibleConstructorReturn(this, (ElseClause.__proto__ || Object.getPrototypeOf(ElseClause)).call(this));

    _this.type = 'else-clause';
    _this.children = children;
    _this.location = location;

    return _this;
  }

  _createClass(ElseClause, [{
    key: 'transpile',
    value: function transpile() {

      return 'function else_clause' + elses++ + '() { return ' + ('[' + this.children.map(function (c) {
        return c.transpile();
      }).join(',') + '];}.bind(this)');
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      var sn = this.sourceNode(o.fileName, '').add('function else_clause' + elses++ + '()').add('{').add('return').add('[');

      this.children.forEach(function (c) {
        return sn.add(c.compile(o)).add(',');
      });

      return sn.add(']').add(';').add('}').add('.').add('bind(this)');
    }
  }]);

  return ElseClause;
}(_Node3.default);

exports.default = ElseClause;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRWxzZUNsYXVzZS5qcyJdLCJuYW1lcyI6WyJlbHNlcyIsIkVsc2VDbGF1c2UiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwidHlwZSIsIm1hcCIsImMiLCJ0cmFuc3BpbGUiLCJqb2luIiwibyIsInNuIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiZm9yRWFjaCIsImNvbXBpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVEsQ0FBWjs7QUFFQTs7Ozs7SUFJTUMsVTs7O0FBRUosd0JBQTBDO0FBQUEsUUFBOUJDLFFBQThCLHVFQUFuQixFQUFtQjtBQUFBLFFBQWZDLFFBQWUsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFJeEMsVUFBS0MsSUFBTCxHQUFZLGFBQVo7QUFDQSxVQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQU53QztBQVF6Qzs7OztnQ0FFVzs7QUFFVixhQUFPLHlCQUF1QkgsT0FBdkIsMkJBQ0QsS0FBS0UsUUFBTCxDQUFjRyxHQUFkLENBQWtCO0FBQUEsZUFBR0MsRUFBRUMsU0FBRixFQUFIO0FBQUEsT0FBbEIsRUFBb0NDLElBQXBDLENBQXlDLEdBQXpDLENBREMsb0JBQVA7QUFHRDs7OzRCQUVPQyxDLEVBQUc7O0FBRVQsVUFBSUMsS0FBSyxLQUFLQyxVQUFMLENBQWdCRixFQUFFRyxRQUFsQixFQUE0QixFQUE1QixFQUNUQyxHQURTLDBCQUNrQmIsT0FEbEIsU0FFVGEsR0FGUyxNQUdUQSxHQUhTLFdBSVRBLEdBSlMsS0FBVDs7QUFNQSxXQUFLWCxRQUFMLENBQWNZLE9BQWQsQ0FBc0I7QUFBQSxlQUFLSixHQUFHRyxHQUFILENBQU9QLEVBQUVTLE9BQUYsQ0FBVU4sQ0FBVixDQUFQLEVBQXFCSSxHQUFyQixDQUF5QixHQUF6QixDQUFMO0FBQUEsT0FBdEI7O0FBRUEsYUFBT0gsR0FBR0csR0FBSCxNQUNMQSxHQURLLE1BRVBBLEdBRk8sTUFHTEEsR0FISyxNQUlMQSxHQUpLLGNBQVA7QUFNRDs7Ozs7O2tCQUlZWixVIiwiZmlsZSI6IkVsc2VDbGF1c2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG52YXIgZWxzZXMgPSAwO1xuXG4vKipcbiAqIEVsc2VDbGF1c2VcbiAqIEBwYXJhbSB7YXJyYXk8Q2hpbGQ+fVxuICovXG5jbGFzcyBFbHNlQ2xhdXNlIGV4dGVuZHMgTm9kZSB7XG5cbiAgY29uc3RydWN0b3IoY2hpbGRyZW4gPSBbXSwgbG9jYXRpb24gPSB7fSkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZSA9ICdlbHNlLWNsYXVzZSc7XG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICB9XG5cbiAgdHJhbnNwaWxlKCkge1xuXG4gICAgcmV0dXJuIGBmdW5jdGlvbiBlbHNlX2NsYXVzZSR7ZWxzZXMrK30oKSB7IHJldHVybiBgICtcbiAgICAgIGBbJHt0aGlzLmNoaWxkcmVuLm1hcChjPT5jLnRyYW5zcGlsZSgpKS5qb2luKCcsJyl9XTt9LmJpbmQodGhpcylgO1xuXG4gIH1cblxuICBjb21waWxlKG8pIHtcblxuICAgIHZhciBzbiA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJykuXG4gICAgYWRkKGBmdW5jdGlvbiBlbHNlX2NsYXVzZSR7ZWxzZXMrK30oKWApLlxuICAgIGFkZChge2ApLlxuICAgIGFkZChgcmV0dXJuYCkuXG4gICAgYWRkKGBbYCk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goYyA9PiBzbi5hZGQoYy5jb21waWxlKG8pKS5hZGQoJywnKSk7XG5cbiAgICByZXR1cm4gc24uYWRkKGBdYCkuXG4gICAgICBhZGQoYDtgKS5cbiAgICBhZGQoYH1gKS5cbiAgICAgIGFkZChgLmApLlxuICAgICAgYWRkKGBiaW5kKHRoaXMpYCk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsc2VDbGF1c2VcblxuIl19