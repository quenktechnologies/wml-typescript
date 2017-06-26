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

var elseifs = 0;
var elseififs = 0;
var elseifelses = 0;

/**
 * ElseIfClause
 * @param {Expression} expression
 * @param {array<Expression>} ithen
 * @param {array<Expression>} ielse
 */

var ElseIfClause = function (_Node) {
  _inherits(ElseIfClause, _Node);

  function ElseIfClause(expression, $then) {
    var $else = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var location = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, ElseIfClause);

    var _this = _possibleConstructorReturn(this, (ElseIfClause.__proto__ || Object.getPrototypeOf(ElseIfClause)).call(this));

    _this.type = 'else-if-clause';
    _this.expression = expression;
    _this.then = $then;
    _this.else = $else;
    _this.location = location;

    return _this;
  }

  _createClass(ElseIfClause, [{
    key: 'transpile',
    value: function transpile() {

      return 'function elseif' + elseifs++ + '() { ' + 'return make.$if(' + (this.expression.transpile() + ',') + ('function if' + elseififs++ + '() { ') + ('return [' + this.then.map(function (t) {
        return t.transpile();
      }).join(',') + '];') + '}.bind(this),' + (this.else.transpile() + ' ') + ');}.bind(this)';
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      var sn = this.sourceNode(o.fileName, '').add('function elseif' + elseifs++ + '()').add('{').add('return').add('make.$if').add('(').add(this.expression.compile(o)).add(',').add('function if' + elseififs++ + '()').add('{').add('return').add('[');

      this.then.forEach(function (t) {
        return sn.add([t.compile(o), ',']);
      });

      return sn.add(']').add('}').add('.').add('bind(this)').add(',').add(this.else.compile(o)).add(')').add('}').add('.').add('bind(this)');
    }
  }]);

  return ElseIfClause;
}(_Node3.default);

exports.default = ElseIfClause;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRWxzZUlmQ2xhdXNlLmpzIl0sIm5hbWVzIjpbImVsc2VpZnMiLCJlbHNlaWZpZnMiLCJlbHNlaWZlbHNlcyIsIkVsc2VJZkNsYXVzZSIsImV4cHJlc3Npb24iLCIkdGhlbiIsIiRlbHNlIiwibG9jYXRpb24iLCJ0eXBlIiwidGhlbiIsImVsc2UiLCJ0cmFuc3BpbGUiLCJtYXAiLCJ0Iiwiam9pbiIsIm8iLCJzbiIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImFkZCIsImNvbXBpbGUiLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxVQUFVLENBQWQ7QUFDQSxJQUFJQyxZQUFZLENBQWhCO0FBQ0EsSUFBSUMsY0FBYyxDQUFsQjs7QUFFQTs7Ozs7OztJQU1NQyxZOzs7QUFFSix3QkFBWUMsVUFBWixFQUF3QkMsS0FBeEIsRUFBdUU7QUFBQSxRQUF4Q0MsS0FBd0MsdUVBQWhDLFlBQVcsQ0FBRSxDQUFtQjtBQUFBLFFBQWpCQyxRQUFpQix1RUFBTixJQUFNOztBQUFBOztBQUFBOztBQUlyRSxVQUFLQyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxVQUFLSixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFVBQUtLLElBQUwsR0FBWUosS0FBWjtBQUNBLFVBQUtLLElBQUwsR0FBWUosS0FBWjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVJxRTtBQVV0RTs7OztnQ0FFVzs7QUFFVixhQUFPLG9CQUFrQlAsU0FBbEIsbUNBRUYsS0FBS0ksVUFBTCxDQUFnQk8sU0FBaEIsRUFGRSwyQkFHU1YsV0FIVCw0QkFJTSxLQUFLUSxJQUFMLENBQVVHLEdBQVYsQ0FBYztBQUFBLGVBQUdDLEVBQUVGLFNBQUYsRUFBSDtBQUFBLE9BQWQsRUFBZ0NHLElBQWhDLENBQXFDLEdBQXJDLENBSk4sOEJBTUYsS0FBS0osSUFBTCxDQUFVQyxTQUFWLEVBTkUsMEJBQVA7QUFTRDs7OzRCQUVPSSxDLEVBQUc7O0FBRVQsVUFBSUMsS0FBSyxLQUFLQyxVQUFMLENBQWdCRixFQUFFRyxRQUFsQixFQUE0QixFQUE1QixFQUNUQyxHQURTLHFCQUNhbkIsU0FEYixTQUVUbUIsR0FGUyxNQUdUQSxHQUhTLFdBSVRBLEdBSlMsYUFLVEEsR0FMUyxNQU1UQSxHQU5TLENBTUwsS0FBS2YsVUFBTCxDQUFnQmdCLE9BQWhCLENBQXdCTCxDQUF4QixDQU5LLEVBT1RJLEdBUFMsTUFRVEEsR0FSUyxpQkFRU2xCLFdBUlQsU0FTVGtCLEdBVFMsTUFVVEEsR0FWUyxXQVdUQSxHQVhTLEtBQVQ7O0FBYUEsV0FBS1YsSUFBTCxDQUFVWSxPQUFWLENBQWtCO0FBQUEsZUFBS0wsR0FBR0csR0FBSCxDQUFPLENBQUNOLEVBQUVPLE9BQUYsQ0FBVUwsQ0FBVixDQUFELE1BQVAsQ0FBTDtBQUFBLE9BQWxCOztBQUVBLGFBQU9DLEdBQUdHLEdBQUgsTUFDUEEsR0FETyxNQUVMQSxHQUZLLE1BR0xBLEdBSEssZUFJUEEsR0FKTyxNQUtQQSxHQUxPLENBS0gsS0FBS1QsSUFBTCxDQUFVVSxPQUFWLENBQWtCTCxDQUFsQixDQUxHLEVBTVBJLEdBTk8sTUFPUEEsR0FQTyxNQVFMQSxHQVJLLE1BU1BBLEdBVE8sY0FBUDtBQVdEOzs7Ozs7a0JBSVloQixZIiwiZmlsZSI6IkVsc2VJZkNsYXVzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbnZhciBlbHNlaWZzID0gMDtcbnZhciBlbHNlaWZpZnMgPSAwO1xudmFyIGVsc2VpZmVsc2VzID0gMDtcblxuLyoqXG4gKiBFbHNlSWZDbGF1c2VcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvblxuICogQHBhcmFtIHthcnJheTxFeHByZXNzaW9uPn0gaXRoZW5cbiAqIEBwYXJhbSB7YXJyYXk8RXhwcmVzc2lvbj59IGllbHNlXG4gKi9cbmNsYXNzIEVsc2VJZkNsYXVzZSBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24sICR0aGVuLCAkZWxzZSA9IGZ1bmN0aW9uKCkge30sIGxvY2F0aW9uID0gbnVsbCkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZSA9ICdlbHNlLWlmLWNsYXVzZSc7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICB0aGlzLnRoZW4gPSAkdGhlbjtcbiAgICB0aGlzLmVsc2UgPSAkZWxzZTtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgfVxuXG4gIHRyYW5zcGlsZSgpIHtcblxuICAgIHJldHVybiBgZnVuY3Rpb24gZWxzZWlmJHtlbHNlaWZzKyt9KCkgeyBgICtcbiAgICAgIGByZXR1cm4gbWFrZS4kaWYoYCArXG4gICAgICBgJHt0aGlzLmV4cHJlc3Npb24udHJhbnNwaWxlKCl9LGAgK1xuICAgICAgYGZ1bmN0aW9uIGlmJHtlbHNlaWZpZnMrK30oKSB7IGAgK1xuICAgICAgYHJldHVybiBbJHt0aGlzLnRoZW4ubWFwKHQ9PnQudHJhbnNwaWxlKCkpLmpvaW4oJywnKX1dO2AgK1xuICAgICAgYH0uYmluZCh0aGlzKSxgICtcbiAgICAgIGAke3RoaXMuZWxzZS50cmFuc3BpbGUoKX0gYCArXG4gICAgICBgKTt9LmJpbmQodGhpcylgO1xuXG4gIH1cblxuICBjb21waWxlKG8pIHtcblxuICAgIHZhciBzbiA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJykuXG4gICAgYWRkKGBmdW5jdGlvbiBlbHNlaWYke2Vsc2VpZnMrK30oKWApLlxuICAgIGFkZChge2ApLlxuICAgIGFkZChgcmV0dXJuYCkuXG4gICAgYWRkKGBtYWtlLiRpZmApLlxuICAgIGFkZChgKGApLlxuICAgIGFkZCh0aGlzLmV4cHJlc3Npb24uY29tcGlsZShvKSkuXG4gICAgYWRkKGAsYCkuXG4gICAgYWRkKGBmdW5jdGlvbiBpZiR7ZWxzZWlmaWZzKyt9KClgKS5cbiAgICBhZGQoYHtgKS5cbiAgICBhZGQoYHJldHVybmApLlxuICAgIGFkZChgW2ApO1xuXG4gICAgdGhpcy50aGVuLmZvckVhY2godCA9PiBzbi5hZGQoW3QuY29tcGlsZShvKSwgYCxgXSkpO1xuXG4gICAgcmV0dXJuIHNuLmFkZChgXWApLlxuICAgIGFkZChgfWApLlxuICAgICAgYWRkKGAuYCkuXG4gICAgICBhZGQoYGJpbmQodGhpcylgKS5cbiAgICBhZGQoYCxgKS5cbiAgICBhZGQodGhpcy5lbHNlLmNvbXBpbGUobykpLlxuICAgIGFkZChgKWApLlxuICAgIGFkZChgfWApLlxuICAgICAgYWRkKGAuYCkuXG4gICAgYWRkKGBiaW5kKHRoaXMpYCk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsc2VJZkNsYXVzZVxuXG4iXX0=