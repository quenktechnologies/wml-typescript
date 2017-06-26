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

      return 'make.$switch(' + this.expression.transpile() + ',' + str + ')';
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      var node = this.sourceNode(o.fileName, '');

      node.add('make.$switch(').add(this.expression.compile(o)).add(',{');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvU3dpdGNoU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIlN3aXRjaFN0YXRlbWVudCIsImV4cHJlc3Npb24iLCJjYXNlcyIsImxvY2F0aW9uIiwidHlwZSIsInN0ciIsImZvckVhY2giLCJjIiwidHJhbnNwaWxlIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwibyIsIm5vZGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlIiwiayIsImFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1NQSxlOzs7QUFFSiwyQkFBWUMsVUFBWixFQUF3QkMsS0FBeEIsRUFBK0JDLFFBQS9CLEVBQXlDO0FBQUE7O0FBQUEsa0lBRWpDQSxRQUZpQzs7QUFHdkMsVUFBS0MsSUFBTCxHQUFZLGtCQUFaO0FBQ0EsVUFBS0gsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxVQUFLQyxLQUFMLEdBQWFBLEtBQWI7O0FBTHVDO0FBT3hDOzs7O2dDQUVXOztBQUVWLFVBQUlHLE1BQU0sR0FBVjs7QUFFQSxXQUFLSCxLQUFMLENBQVdJLE9BQVgsQ0FBbUIsYUFBSzs7QUFFdEJELGNBQVNBLEdBQUgsVUFBV0UsRUFBRU4sVUFBSCxHQUFpQk0sRUFBRU4sVUFBRixDQUFhTyxTQUFiLEVBQWpCLEdBQTRDLFNBQXRELGFBQ0VELEVBQUVDLFNBQUYsRUFERixRQUFOO0FBR0QsT0FMRDs7QUFPQUgsWUFBTUEsSUFBSUksU0FBSixDQUFjLENBQWQsRUFBaUJKLElBQUlLLE1BQUosR0FBYSxDQUE5QixDQUFOO0FBQ0FMLFlBQU1BLE1BQU0sR0FBWjs7QUFFQSwrQkFBdUIsS0FBS0osVUFBTCxDQUFnQk8sU0FBaEIsRUFBdkIsU0FBc0RILEdBQXREO0FBRUQ7Ozs0QkFFT00sQyxFQUFHOztBQUVULFVBQUlDLE9BQU8sS0FBS0MsVUFBTCxDQUFnQkYsRUFBRUcsUUFBbEIsRUFBNEIsRUFBNUIsQ0FBWDs7QUFFQUYsV0FBS0csR0FBTCxrQkFDQUEsR0FEQSxDQUNJLEtBQUtkLFVBQUwsQ0FBZ0JlLE9BQWhCLENBQXdCTCxDQUF4QixDQURKLEVBRUFJLEdBRkEsQ0FFSSxJQUZKOztBQUlBLFdBQUtiLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQixVQUFDQyxDQUFELEVBQUlVLENBQUosRUFBT0MsR0FBUCxFQUFlOztBQUVoQ04sYUFBS0csR0FBTCxDQUFVUixFQUFFTixVQUFILEdBQWlCTSxFQUFFTixVQUFGLENBQWFlLE9BQWIsQ0FBcUJMLENBQXJCLENBQWpCLFlBQVQsRUFDQUksR0FEQSxDQUNJLEdBREosRUFFQUEsR0FGQSxDQUVJUixFQUFFUyxPQUFGLENBQVVMLENBQVYsQ0FGSjs7QUFJQSxZQUFJTSxJQUFJQyxJQUFJUixNQUFKLEdBQWEsQ0FBckIsRUFDRUUsS0FBS0csR0FBTCxDQUFTLEdBQVQ7QUFFSCxPQVREOztBQVdBLGFBQU9ILEtBQUtHLEdBQUwsQ0FBUyxJQUFULENBQVA7QUFFRDs7Ozs7O2tCQUlZZixlIiwiZmlsZSI6IlN3aXRjaFN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogU3dpdGNoU3RhdGVtZW50XG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGV4cHJlc3Npb25cbiAqIEBwYXJhbSB7YXJyYXk8Q2FzZVN0YXRlbWVudD59IGNhc2VzXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBTd2l0Y2hTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uLCBjYXNlcywgbG9jYXRpb24pIHtcblxuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICB0aGlzLnR5cGUgPSAnc3dpdGNoLXN0YXRlbWVudCc7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICB0aGlzLmNhc2VzID0gY2FzZXM7XG5cbiAgfVxuXG4gIHRyYW5zcGlsZSgpIHtcblxuICAgIHZhciBzdHIgPSAneyc7XG5cbiAgICB0aGlzLmNhc2VzLmZvckVhY2goYyA9PiB7XG5cbiAgICAgIHN0ciA9IGAke3N0cn0gJHsoYy5leHByZXNzaW9uKSA/IGMuZXhwcmVzc2lvbi50cmFuc3BpbGUoKSA6ICdkZWZhdWx0J31gICtcbiAgICAgICAgYCA6ICR7Yy50cmFuc3BpbGUoKX0sIGA7XG5cbiAgICB9KTtcblxuICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpO1xuICAgIHN0ciA9IHN0ciArICd9JztcblxuICAgIHJldHVybiBgbWFrZS4kc3dpdGNoKCR7dGhpcy5leHByZXNzaW9uLnRyYW5zcGlsZSgpfSwke3N0cn0pYDtcblxuICB9XG5cbiAgY29tcGlsZShvKSB7XG5cbiAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJyk7XG5cbiAgICBub2RlLmFkZChgbWFrZS4kc3dpdGNoKGApLlxuICAgIGFkZCh0aGlzLmV4cHJlc3Npb24uY29tcGlsZShvKSkuXG4gICAgYWRkKCcseycpO1xuXG4gICAgdGhpcy5jYXNlcy5mb3JFYWNoKChjLCBrLCBhbGwpID0+IHtcblxuICAgICAgbm9kZS5hZGQoKGMuZXhwcmVzc2lvbikgPyBjLmV4cHJlc3Npb24uY29tcGlsZShvKSA6IGBkZWZhdWx0YCkuXG4gICAgICBhZGQoJzonKS5cbiAgICAgIGFkZChjLmNvbXBpbGUobykpO1xuXG4gICAgICBpZiAoayA8IGFsbC5sZW5ndGggLSAxKVxuICAgICAgICBub2RlLmFkZCgnLCcpO1xuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZS5hZGQoJ30pJyk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFN0YXRlbWVudFxuXG4iXX0=