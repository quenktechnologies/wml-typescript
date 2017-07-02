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
 * SwitchStatement
 * @param {Expression} expression
 * @param {array<CaseStatement>} cases
 * @param {Location} location
 */
var SwitchStatement = function (_Node) {
  _inherits(SwitchStatement, _Node);

  function SwitchStatement(expression, cases, location) {
    _classCallCheck(this, SwitchStatement);

    var _this = _possibleConstructorReturn(this, (SwitchStatement.__proto__ || Object.getPrototypeOf(SwitchStatement)).call(this, location));

    _this.type = 'switch-statement';
    _this.expression = expression;
    _this.cases = cases;

    return _this;
  }

  _createClass(SwitchStatement, [{
    key: 'transpile',
    value: function transpile() {

      var str = '{';

      this.cases.forEach(function (c) {

        str = str + ' ' + (c.expression ? c.expression.transpile() : 'default') + (' : ' + c.transpile() + ', ');
      });

      str = str.substring(0, str.length - 1);
      str = str + '}';

      return '$$switch(' + this.expression.transpile() + ',' + str + ')';
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      var node = this.sourceNode(o.fileName, '');

      node.add('$$switch(').add(this.expression.compile(o)).add(',{');

      this.cases.forEach(function (c, k, all) {

        node.add(c.expression ? c.expression.compile(o) : 'default').add(':').add(c.compile(o));

        if (k < all.length - 1) node.add(',');
      });

      return node.add('})');
    }
  }]);

  return SwitchStatement;
}(_Node3.default);

exports.default = SwitchStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvU3dpdGNoU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIlN3aXRjaFN0YXRlbWVudCIsImV4cHJlc3Npb24iLCJjYXNlcyIsImxvY2F0aW9uIiwidHlwZSIsInN0ciIsImZvckVhY2giLCJjIiwidHJhbnNwaWxlIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwibyIsIm5vZGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlIiwiayIsImFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1NQSxlOzs7QUFFSiwyQkFBWUMsVUFBWixFQUF3QkMsS0FBeEIsRUFBK0JDLFFBQS9CLEVBQXlDO0FBQUE7O0FBQUEsa0lBRWpDQSxRQUZpQzs7QUFHdkMsVUFBS0MsSUFBTCxHQUFZLGtCQUFaO0FBQ0EsVUFBS0gsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxVQUFLQyxLQUFMLEdBQWFBLEtBQWI7O0FBTHVDO0FBT3hDOzs7O2dDQUVXOztBQUVWLFVBQUlHLE1BQU0sR0FBVjs7QUFFQSxXQUFLSCxLQUFMLENBQVdJLE9BQVgsQ0FBbUIsYUFBSzs7QUFFdEJELGNBQVNBLEdBQUgsVUFBV0UsRUFBRU4sVUFBSCxHQUFpQk0sRUFBRU4sVUFBRixDQUFhTyxTQUFiLEVBQWpCLEdBQTRDLFNBQXRELGFBQ0VELEVBQUVDLFNBQUYsRUFERixRQUFOO0FBR0QsT0FMRDs7QUFPQUgsWUFBTUEsSUFBSUksU0FBSixDQUFjLENBQWQsRUFBaUJKLElBQUlLLE1BQUosR0FBYSxDQUE5QixDQUFOO0FBQ0FMLFlBQU1BLE1BQU0sR0FBWjs7QUFFQSwyQkFBbUIsS0FBS0osVUFBTCxDQUFnQk8sU0FBaEIsRUFBbkIsU0FBa0RILEdBQWxEO0FBRUQ7Ozs0QkFFT00sQyxFQUFHOztBQUVULFVBQUlDLE9BQU8sS0FBS0MsVUFBTCxDQUFnQkYsRUFBRUcsUUFBbEIsRUFBNEIsRUFBNUIsQ0FBWDs7QUFFQUYsV0FBS0csR0FBTCxjQUNBQSxHQURBLENBQ0ksS0FBS2QsVUFBTCxDQUFnQmUsT0FBaEIsQ0FBd0JMLENBQXhCLENBREosRUFFQUksR0FGQSxDQUVJLElBRko7O0FBSUEsV0FBS2IsS0FBTCxDQUFXSSxPQUFYLENBQW1CLFVBQUNDLENBQUQsRUFBSVUsQ0FBSixFQUFPQyxHQUFQLEVBQWU7O0FBRWhDTixhQUFLRyxHQUFMLENBQVVSLEVBQUVOLFVBQUgsR0FBaUJNLEVBQUVOLFVBQUYsQ0FBYWUsT0FBYixDQUFxQkwsQ0FBckIsQ0FBakIsWUFBVCxFQUNBSSxHQURBLENBQ0ksR0FESixFQUVBQSxHQUZBLENBRUlSLEVBQUVTLE9BQUYsQ0FBVUwsQ0FBVixDQUZKOztBQUlBLFlBQUlNLElBQUlDLElBQUlSLE1BQUosR0FBYSxDQUFyQixFQUNFRSxLQUFLRyxHQUFMLENBQVMsR0FBVDtBQUVILE9BVEQ7O0FBV0EsYUFBT0gsS0FBS0csR0FBTCxDQUFTLElBQVQsQ0FBUDtBQUVEOzs7Ozs7a0JBSVlmLGUiLCJmaWxlIjoiU3dpdGNoU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBTd2l0Y2hTdGF0ZW1lbnRcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvblxuICogQHBhcmFtIHthcnJheTxDYXNlU3RhdGVtZW50Pn0gY2FzZXNcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKi9cbmNsYXNzIFN3aXRjaFN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24sIGNhc2VzLCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIobG9jYXRpb24pO1xuICAgIHRoaXMudHlwZSA9ICdzd2l0Y2gtc3RhdGVtZW50JztcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgIHRoaXMuY2FzZXMgPSBjYXNlcztcblxuICB9XG5cbiAgdHJhbnNwaWxlKCkge1xuXG4gICAgdmFyIHN0ciA9ICd7JztcblxuICAgIHRoaXMuY2FzZXMuZm9yRWFjaChjID0+IHtcblxuICAgICAgc3RyID0gYCR7c3RyfSAkeyhjLmV4cHJlc3Npb24pID8gYy5leHByZXNzaW9uLnRyYW5zcGlsZSgpIDogJ2RlZmF1bHQnfWAgK1xuICAgICAgICBgIDogJHtjLnRyYW5zcGlsZSgpfSwgYDtcblxuICAgIH0pO1xuXG4gICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSk7XG4gICAgc3RyID0gc3RyICsgJ30nO1xuXG4gICAgcmV0dXJuIGAkJHN3aXRjaCgke3RoaXMuZXhwcmVzc2lvbi50cmFuc3BpbGUoKX0sJHtzdHJ9KWA7XG5cbiAgfVxuXG4gIGNvbXBpbGUobykge1xuXG4gICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuXG4gICAgbm9kZS5hZGQoYCQkc3dpdGNoKGApLlxuICAgIGFkZCh0aGlzLmV4cHJlc3Npb24uY29tcGlsZShvKSkuXG4gICAgYWRkKCcseycpO1xuXG4gICAgdGhpcy5jYXNlcy5mb3JFYWNoKChjLCBrLCBhbGwpID0+IHtcblxuICAgICAgbm9kZS5hZGQoKGMuZXhwcmVzc2lvbikgPyBjLmV4cHJlc3Npb24uY29tcGlsZShvKSA6IGBkZWZhdWx0YCkuXG4gICAgICBhZGQoJzonKS5cbiAgICAgIGFkZChjLmNvbXBpbGUobykpO1xuXG4gICAgICBpZiAoayA8IGFsbC5sZW5ndGggLSAxKVxuICAgICAgICBub2RlLmFkZCgnLCcpO1xuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZS5hZGQoJ30pJyk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFN0YXRlbWVudFxuXG4iXX0=