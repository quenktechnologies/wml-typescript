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

var thenCount = 0;

/**
 * IfStatement
 * @param {Expression} expression
 * @param {array<Expression>} ithen
 * @param {array<Expression>} ielse
 */

var IfStatement = function (_Node) {
  _inherits(IfStatement, _Node);

  function IfStatement(expression, ithen) {
    var ielse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var location = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, IfStatement);

    var _this = _possibleConstructorReturn(this, (IfStatement.__proto__ || Object.getPrototypeOf(IfStatement)).call(this, location));

    _this.type = 'if-statement';
    _this.expression = expression;
    _this.then = ithen;
    _this.else = ielse;
    _this.location = location;

    return _this;
  }

  _createClass(IfStatement, [{
    key: 'transpile',
    value: function transpile() {

      return '$$if(' + this.expression.transpile() + ', ' + ('function if' + thenCount + '(){return [' + this.then.map(function (t) {
        return t.transpile();
      }).join(',') + '];}.bind(this),') + ((this.else ? this.else.transpile() : 'function(){}') + ')');
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      var sn = this.sourceNode(o.fileName, '').add('$$if').add('(').add(this.expression.transpile()).add(',').add('function if' + thenCount + '()').add('{').add('return').add('[');

      this.then.forEach(function (t) {
        return sn.add(t.compile(o)).add(',');
      });

      return sn.add(']').add(';').add('}').add('.').add('bind(this)').add(',').add(this.else.compile(o)).add(')');
    }
  }]);

  return IfStatement;
}(_Node3.default);

exports.default = IfStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSWZTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsidGhlbkNvdW50IiwiSWZTdGF0ZW1lbnQiLCJleHByZXNzaW9uIiwiaXRoZW4iLCJpZWxzZSIsImxvY2F0aW9uIiwidHlwZSIsInRoZW4iLCJlbHNlIiwidHJhbnNwaWxlIiwibWFwIiwidCIsImpvaW4iLCJvIiwic24iLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJmb3JFYWNoIiwiY29tcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWSxDQUFoQjs7QUFFQTs7Ozs7OztJQU1NQyxXOzs7QUFFSix1QkFBWUMsVUFBWixFQUF3QkMsS0FBeEIsRUFBOEQ7QUFBQSxRQUEvQkMsS0FBK0IsdUVBQXZCLElBQXVCO0FBQUEsUUFBakJDLFFBQWlCLHVFQUFOLElBQU07O0FBQUE7O0FBQUEsMEhBRXREQSxRQUZzRDs7QUFJNUQsVUFBS0MsSUFBTCxHQUFZLGNBQVo7QUFDQSxVQUFLSixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFVBQUtLLElBQUwsR0FBWUosS0FBWjtBQUNBLFVBQUtLLElBQUwsR0FBWUosS0FBWjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVI0RDtBQVU3RDs7OztnQ0FFVzs7QUFFVixhQUFPLFVBQVEsS0FBS0gsVUFBTCxDQUFnQk8sU0FBaEIsRUFBUiwyQkFDU1QsU0FEVCxtQkFDZ0MsS0FBS08sSUFBTCxDQUFVRyxHQUFWLENBQWM7QUFBQSxlQUFHQyxFQUFFRixTQUFGLEVBQUg7QUFBQSxPQUFkLEVBQWdDRyxJQUFoQyxDQUFxQyxHQUFyQyxDQURoQywwQkFFRixLQUFLSixJQUFMLEdBQVUsS0FBS0EsSUFBTCxDQUFVQyxTQUFWLEVBQVYsR0FBZ0MsY0FGOUIsUUFBUDtBQUlEOzs7NEJBRU9JLEMsRUFBRzs7QUFFVCxVQUFJQyxLQUFLLEtBQUtDLFVBQUwsQ0FBZ0JGLEVBQUVHLFFBQWxCLEVBQTRCLEVBQTVCLEVBQ1RDLEdBRFMsU0FFVEEsR0FGUyxNQUdUQSxHQUhTLENBR0wsS0FBS2YsVUFBTCxDQUFnQk8sU0FBaEIsRUFISyxFQUlUUSxHQUpTLE1BS1RBLEdBTFMsaUJBS1NqQixTQUxULFNBTVRpQixHQU5TLE1BT1RBLEdBUFMsV0FRVEEsR0FSUyxLQUFUOztBQVVBLFdBQUtWLElBQUwsQ0FBVVcsT0FBVixDQUFrQjtBQUFBLGVBQUtKLEdBQUdHLEdBQUgsQ0FBT04sRUFBRVEsT0FBRixDQUFVTixDQUFWLENBQVAsRUFBcUJJLEdBQXJCLEtBQUw7QUFBQSxPQUFsQjs7QUFFQSxhQUFPSCxHQUFHRyxHQUFILE1BQ1BBLEdBRE8sTUFFUEEsR0FGTyxNQUdQQSxHQUhPLE1BSVBBLEdBSk8sZUFLUEEsR0FMTyxNQU1QQSxHQU5PLENBTUgsS0FBS1QsSUFBTCxDQUFVVyxPQUFWLENBQWtCTixDQUFsQixDQU5HLEVBT1BJLEdBUE8sS0FBUDtBQVNEOzs7Ozs7a0JBSVloQixXIiwiZmlsZSI6IklmU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxudmFyIHRoZW5Db3VudCA9IDA7XG5cbi8qKlxuICogSWZTdGF0ZW1lbnRcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvblxuICogQHBhcmFtIHthcnJheTxFeHByZXNzaW9uPn0gaXRoZW5cbiAqIEBwYXJhbSB7YXJyYXk8RXhwcmVzc2lvbj59IGllbHNlXG4gKi9cbmNsYXNzIElmU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbiwgaXRoZW4sIGllbHNlID0gbnVsbCwgbG9jYXRpb24gPSBudWxsKSB7XG5cbiAgICBzdXBlcihsb2NhdGlvbik7XG5cbiAgICB0aGlzLnR5cGUgPSAnaWYtc3RhdGVtZW50JztcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgIHRoaXMudGhlbiA9IGl0aGVuO1xuICAgIHRoaXMuZWxzZSA9IGllbHNlO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICB9XG5cbiAgdHJhbnNwaWxlKCkge1xuXG4gICAgcmV0dXJuIGAkJGlmKCR7dGhpcy5leHByZXNzaW9uLnRyYW5zcGlsZSgpfSwgYCArXG4gICAgICBgZnVuY3Rpb24gaWYke3RoZW5Db3VudH0oKXtyZXR1cm4gWyR7dGhpcy50aGVuLm1hcCh0PT50LnRyYW5zcGlsZSgpKS5qb2luKCcsJyl9XTt9LmJpbmQodGhpcyksYCArXG4gICAgICBgJHt0aGlzLmVsc2U/dGhpcy5lbHNlLnRyYW5zcGlsZSgpOidmdW5jdGlvbigpe30nfSlgO1xuXG4gIH1cblxuICBjb21waWxlKG8pIHtcblxuICAgIHZhciBzbiA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJykuXG4gICAgYWRkKGAkJGlmYCkuXG4gICAgYWRkKGAoYCkuXG4gICAgYWRkKHRoaXMuZXhwcmVzc2lvbi50cmFuc3BpbGUoKSkuXG4gICAgYWRkKGAsYCkuXG4gICAgYWRkKGBmdW5jdGlvbiBpZiR7dGhlbkNvdW50fSgpYCkuXG4gICAgYWRkKGB7YCkuXG4gICAgYWRkKGByZXR1cm5gKS5cbiAgICBhZGQoYFtgKTtcblxuICAgIHRoaXMudGhlbi5mb3JFYWNoKHQgPT4gc24uYWRkKHQuY29tcGlsZShvKSkuYWRkKGAsYCkpO1xuXG4gICAgcmV0dXJuIHNuLmFkZChgXWApLlxuICAgIGFkZChgO2ApLlxuICAgIGFkZChgfWApLlxuICAgIGFkZChgLmApLlxuICAgIGFkZChgYmluZCh0aGlzKWApLlxuICAgIGFkZChgLGApLlxuICAgIGFkZCh0aGlzLmVsc2UuY29tcGlsZShvKSkuXG4gICAgYWRkKGApYCk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IElmU3RhdGVtZW50XG5cbiJdfQ==