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
    var ielse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
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

      return 'make.$if(' + this.expression.transpile() + ', ' + ('function if' + thenCount + '(){return [' + this.then.map(function (t) {
        return t.transpile();
      }).join(',') + '];}.bind(this),') + (this.else.transpile() + ')');
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      var sn = this.sourceNode(o.fileName, '').add('make').add('$if').add('(').add(this.expression.transpile()).add(',').add('function if' + thenCount + '()').add('{').add('return').add('[');

      this.then.forEach(function (t) {
        return sn.add(t.compile(o)).add(',');
      });

      return sn.add(']').add(';').add('}').add('.').add('bind(this)').add(',').add(this.else.compile(o)).add(')');
    }
  }]);

  return IfStatement;
}(_Node3.default);

exports.default = IfStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSWZTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsidGhlbkNvdW50IiwiSWZTdGF0ZW1lbnQiLCJleHByZXNzaW9uIiwiaXRoZW4iLCJpZWxzZSIsImxvY2F0aW9uIiwidHlwZSIsInRoZW4iLCJlbHNlIiwidHJhbnNwaWxlIiwibWFwIiwidCIsImpvaW4iLCJvIiwic24iLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJmb3JFYWNoIiwiY29tcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWSxDQUFoQjs7QUFFQTs7Ozs7OztJQU1NQyxXOzs7QUFFSix1QkFBWUMsVUFBWixFQUF3QkMsS0FBeEIsRUFBdUU7QUFBQSxRQUF4Q0MsS0FBd0MsdUVBQWhDLFlBQVcsQ0FBRSxDQUFtQjtBQUFBLFFBQWpCQyxRQUFpQix1RUFBTixJQUFNOztBQUFBOztBQUFBLDBIQUUvREEsUUFGK0Q7O0FBSXJFLFVBQUtDLElBQUwsR0FBWSxjQUFaO0FBQ0EsVUFBS0osVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxVQUFLSyxJQUFMLEdBQVlKLEtBQVo7QUFDQSxVQUFLSyxJQUFMLEdBQVlKLEtBQVo7QUFDQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFScUU7QUFVdEU7Ozs7Z0NBRVc7O0FBRVYsYUFBTyxjQUFZLEtBQUtILFVBQUwsQ0FBZ0JPLFNBQWhCLEVBQVosMkJBQ1NULFNBRFQsbUJBQ2dDLEtBQUtPLElBQUwsQ0FBVUcsR0FBVixDQUFjO0FBQUEsZUFBR0MsRUFBRUYsU0FBRixFQUFIO0FBQUEsT0FBZCxFQUFnQ0csSUFBaEMsQ0FBcUMsR0FBckMsQ0FEaEMseUJBRUYsS0FBS0osSUFBTCxDQUFVQyxTQUFWLEVBRkUsT0FBUDtBQUlEOzs7NEJBRU9JLEMsRUFBRzs7QUFFVCxVQUFJQyxLQUFLLEtBQUtDLFVBQUwsQ0FBZ0JGLEVBQUVHLFFBQWxCLEVBQTRCLEVBQTVCLEVBQ1RDLEdBRFMsU0FFVEEsR0FGUyxRQUdUQSxHQUhTLE1BSVRBLEdBSlMsQ0FJTCxLQUFLZixVQUFMLENBQWdCTyxTQUFoQixFQUpLLEVBS1RRLEdBTFMsTUFNVEEsR0FOUyxpQkFNU2pCLFNBTlQsU0FPVGlCLEdBUFMsTUFRVEEsR0FSUyxXQVNUQSxHQVRTLEtBQVQ7O0FBV0EsV0FBS1YsSUFBTCxDQUFVVyxPQUFWLENBQWtCO0FBQUEsZUFBS0osR0FBR0csR0FBSCxDQUFPTixFQUFFUSxPQUFGLENBQVVOLENBQVYsQ0FBUCxFQUFxQkksR0FBckIsS0FBTDtBQUFBLE9BQWxCOztBQUVBLGFBQU9ILEdBQUdHLEdBQUgsTUFDUEEsR0FETyxNQUVQQSxHQUZPLE1BR1BBLEdBSE8sTUFJUEEsR0FKTyxlQUtQQSxHQUxPLE1BTVBBLEdBTk8sQ0FNSCxLQUFLVCxJQUFMLENBQVVXLE9BQVYsQ0FBa0JOLENBQWxCLENBTkcsRUFPUEksR0FQTyxLQUFQO0FBU0Q7Ozs7OztrQkFJWWhCLFciLCJmaWxlIjoiSWZTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG52YXIgdGhlbkNvdW50ID0gMDtcblxuLyoqXG4gKiBJZlN0YXRlbWVudFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge2FycmF5PEV4cHJlc3Npb24+fSBpdGhlblxuICogQHBhcmFtIHthcnJheTxFeHByZXNzaW9uPn0gaWVsc2VcbiAqL1xuY2xhc3MgSWZTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uLCBpdGhlbiwgaWVsc2UgPSBmdW5jdGlvbigpIHt9LCBsb2NhdGlvbiA9IG51bGwpIHtcblxuICAgIHN1cGVyKGxvY2F0aW9uKTtcblxuICAgIHRoaXMudHlwZSA9ICdpZi1zdGF0ZW1lbnQnO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgdGhpcy50aGVuID0gaXRoZW47XG4gICAgdGhpcy5lbHNlID0gaWVsc2U7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gIH1cblxuICB0cmFuc3BpbGUoKSB7XG5cbiAgICByZXR1cm4gYG1ha2UuJGlmKCR7dGhpcy5leHByZXNzaW9uLnRyYW5zcGlsZSgpfSwgYCArXG4gICAgICBgZnVuY3Rpb24gaWYke3RoZW5Db3VudH0oKXtyZXR1cm4gWyR7dGhpcy50aGVuLm1hcCh0PT50LnRyYW5zcGlsZSgpKS5qb2luKCcsJyl9XTt9LmJpbmQodGhpcyksYCArXG4gICAgICBgJHt0aGlzLmVsc2UudHJhbnNwaWxlKCl9KWA7XG5cbiAgfVxuXG4gIGNvbXBpbGUobykge1xuXG4gICAgdmFyIHNuID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKS5cbiAgICBhZGQoYG1ha2VgKS5cbiAgICBhZGQoYCRpZmApLlxuICAgIGFkZChgKGApLlxuICAgIGFkZCh0aGlzLmV4cHJlc3Npb24udHJhbnNwaWxlKCkpLlxuICAgIGFkZChgLGApLlxuICAgIGFkZChgZnVuY3Rpb24gaWYke3RoZW5Db3VudH0oKWApLlxuICAgIGFkZChge2ApLlxuICAgIGFkZChgcmV0dXJuYCkuXG4gICAgYWRkKGBbYCk7XG5cbiAgICB0aGlzLnRoZW4uZm9yRWFjaCh0ID0+IHNuLmFkZCh0LmNvbXBpbGUobykpLmFkZChgLGApKTtcblxuICAgIHJldHVybiBzbi5hZGQoYF1gKS5cbiAgICBhZGQoYDtgKS5cbiAgICBhZGQoYH1gKS5cbiAgICBhZGQoYC5gKS5cbiAgICBhZGQoYGJpbmQodGhpcylgKS5cbiAgICBhZGQoYCxgKS5cbiAgICBhZGQodGhpcy5lbHNlLmNvbXBpbGUobykpLlxuICAgIGFkZChgKWApO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJZlN0YXRlbWVudFxuXG4iXX0=