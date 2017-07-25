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
 * MacroStatement
 */
var MacroStatement = function (_Node) {
  _inherits(MacroStatement, _Node);

  function MacroStatement(id, args, root, location) {
    _classCallCheck(this, MacroStatement);

    var _this = _possibleConstructorReturn(this, (MacroStatement.__proto__ || Object.getPrototypeOf(MacroStatement)).call(this));

    _this.type = 'macro-statement';
    _this.id = id;
    _this.root = root;
    _this.arguments = args;
    _this.location = location;

    return _this;
  }

  _createClass(MacroStatement, [{
    key: 'transpile',
    value: function transpile(o) {

      var args = ['view'].concat(this.arguments.map(function (a) {
        return a.transpile(o);
      }));

      return 'export function ' + this.id + '(' + args + ') { ' + ('return ' + this.root.transpile(o) + ';}\n');
    }
  }]);

  return MacroStatement;
}(_Node3.default);

exports.default = MacroStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTWFjcm9TdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiTWFjcm9TdGF0ZW1lbnQiLCJpZCIsImFyZ3MiLCJyb290IiwibG9jYXRpb24iLCJ0eXBlIiwiYXJndW1lbnRzIiwibyIsImNvbmNhdCIsIm1hcCIsImEiLCJ0cmFuc3BpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsYzs7O0FBRUosMEJBQVlDLEVBQVosRUFBZ0JDLElBQWhCLEVBQXNCQyxJQUF0QixFQUE0QkMsUUFBNUIsRUFBc0M7QUFBQTs7QUFBQTs7QUFJcEMsVUFBS0MsSUFBTCxHQUFZLGlCQUFaO0FBQ0EsVUFBS0osRUFBTCxHQUFVQSxFQUFWO0FBQ0EsVUFBS0UsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0csU0FBTCxHQUFpQkosSUFBakI7QUFDQSxVQUFLRSxRQUFMLEdBQWdCQSxRQUFoQjs7QUFSb0M7QUFVckM7Ozs7OEJBRVNHLEMsRUFBRzs7QUFFWCxVQUFJTCxPQUFPLENBQUMsTUFBRCxFQUFTTSxNQUFULENBQWdCLEtBQUtGLFNBQUwsQ0FBZUcsR0FBZixDQUFtQjtBQUFBLGVBQUtDLEVBQUVDLFNBQUYsQ0FBWUosQ0FBWixDQUFMO0FBQUEsT0FBbkIsQ0FBaEIsQ0FBWDs7QUFFQSxhQUFPLHFCQUFtQixLQUFLTixFQUF4QixTQUE4QkMsSUFBOUIseUJBQ0ssS0FBS0MsSUFBTCxDQUFVUSxTQUFWLENBQW9CSixDQUFwQixDQURMLFVBQVA7QUFHRDs7Ozs7O2tCQUlZUCxjIiwiZmlsZSI6Ik1hY3JvU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBNYWNyb1N0YXRlbWVudFxuICovXG5jbGFzcyBNYWNyb1N0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKGlkLCBhcmdzLCByb290LCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZSA9ICdtYWNyby1zdGF0ZW1lbnQnO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgfVxuXG4gIHRyYW5zcGlsZShvKSB7XG5cbiAgICBsZXQgYXJncyA9IFsndmlldyddLmNvbmNhdCh0aGlzLmFyZ3VtZW50cy5tYXAoYSA9PiBhLnRyYW5zcGlsZShvKSkpO1xuXG4gICAgcmV0dXJuIGBleHBvcnQgZnVuY3Rpb24gJHt0aGlzLmlkfSgke2FyZ3N9KSB7IGAgK1xuICAgICAgYHJldHVybiAke3RoaXMucm9vdC50cmFuc3BpbGUobyl9O31cXG5gO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWNyb1N0YXRlbWVudFxuXG4iXX0=