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

var count = 0;
/**
 * FunctionExpression
 * @param {array<string>} parameters
 * @param {Expression} expression
 * @param {Location} location
 */

var FunctionExpression = function (_Node) {
    _inherits(FunctionExpression, _Node);

    function FunctionExpression(parameters, expression, location) {
        _classCallCheck(this, FunctionExpression);

        var _this = _possibleConstructorReturn(this, (FunctionExpression.__proto__ || Object.getPrototypeOf(FunctionExpression)).call(this));

        _this.type = 'function-expression';
        _this.parameters = parameters;
        _this.expression = expression;
        _this.location = location;

        return _this;
    }

    _createClass(FunctionExpression, [{
        key: 'transpile',
        value: function transpile(o) {

            var params = this.parameters.map(function (p) {
                return p.transpile(o);
            }).join(',');
            count = count + 1;

            return 'function function_literal_' + count + '(' + params + ')' + ('{ return ' + this.expression.transpile(o) + '; }.bind(this)');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '');

            node.add('function function_literal_' + count + '(' + this.parameters.join(',') + ')').add('{ return ');

            return this.compileList(this.body.compile(o)).add('; } bind(this)');
        }
    }]);

    return FunctionExpression;
}(_Node3.default);

exports.default = FunctionExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRnVuY3Rpb25FeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbImNvdW50IiwiRnVuY3Rpb25FeHByZXNzaW9uIiwicGFyYW1ldGVycyIsImV4cHJlc3Npb24iLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwicGFyYW1zIiwibWFwIiwicCIsInRyYW5zcGlsZSIsImpvaW4iLCJub2RlIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiY29tcGlsZUxpc3QiLCJib2R5IiwiY29tcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUSxDQUFaO0FBQ0E7Ozs7Ozs7SUFNTUMsa0I7OztBQUVGLGdDQUFZQyxVQUFaLEVBQXdCQyxVQUF4QixFQUFvQ0MsUUFBcEMsRUFBOEM7QUFBQTs7QUFBQTs7QUFHMUMsY0FBS0MsSUFBTCxHQUFZLHFCQUFaO0FBQ0EsY0FBS0gsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxjQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQU4wQztBQVE3Qzs7OztrQ0FFU0UsQyxFQUFHOztBQUVULGdCQUFJQyxTQUFTLEtBQUtMLFVBQUwsQ0FBZ0JNLEdBQWhCLENBQW9CO0FBQUEsdUJBQUtDLEVBQUVDLFNBQUYsQ0FBWUosQ0FBWixDQUFMO0FBQUEsYUFBcEIsRUFBeUNLLElBQXpDLENBQThDLEdBQTlDLENBQWI7QUFDQVgsb0JBQVFBLFFBQVEsQ0FBaEI7O0FBRUEsbUJBQU8sK0JBQTZCQSxLQUE3QixTQUFzQ08sTUFBdEMsd0JBQ1MsS0FBS0osVUFBTCxDQUFnQk8sU0FBaEIsQ0FBMEJKLENBQTFCLENBRFQsb0JBQVA7QUFHSDs7O2dDQUVPQSxDLEVBQUc7O0FBRVAsZ0JBQUlNLE9BQU8sS0FBS0MsVUFBTCxDQUFnQlAsRUFBRVEsUUFBbEIsRUFBNEIsRUFBNUIsQ0FBWDs7QUFFQUYsaUJBQUtHLEdBQUwsZ0NBQXNDZixLQUF0QyxTQUErQyxLQUFLRSxVQUFMLENBQWdCUyxJQUFoQixDQUFxQixHQUFyQixDQUEvQyxRQUNBSSxHQURBLENBQ0ksV0FESjs7QUFHQSxtQkFBTyxLQUFLQyxXQUFMLENBQWlCLEtBQUtDLElBQUwsQ0FBVUMsT0FBVixDQUFrQlosQ0FBbEIsQ0FBakIsRUFDUFMsR0FETyxDQUNILGdCQURHLENBQVA7QUFHSDs7Ozs7O2tCQUlVZCxrQiIsImZpbGUiOiJGdW5jdGlvbkV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG52YXIgY291bnQgPSAwO1xuLyoqXG4gKiBGdW5jdGlvbkV4cHJlc3Npb25cbiAqIEBwYXJhbSB7YXJyYXk8c3RyaW5nPn0gcGFyYW1ldGVyc1xuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBGdW5jdGlvbkV4cHJlc3Npb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMsIGV4cHJlc3Npb24sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2Z1bmN0aW9uLWV4cHJlc3Npb24nO1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIHZhciBwYXJhbXMgPSB0aGlzLnBhcmFtZXRlcnMubWFwKHAgPT4gcC50cmFuc3BpbGUobykpLmpvaW4oJywnKTtcbiAgICAgICAgY291bnQgPSBjb3VudCArIDE7XG5cbiAgICAgICAgcmV0dXJuIGBmdW5jdGlvbiBmdW5jdGlvbl9saXRlcmFsXyR7Y291bnR9KCR7cGFyYW1zfSlgICtcbiAgICAgICAgICAgIGB7IHJldHVybiAke3RoaXMuZXhwcmVzc2lvbi50cmFuc3BpbGUobyl9OyB9LmJpbmQodGhpcylgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuXG4gICAgICAgIG5vZGUuYWRkKGBmdW5jdGlvbiBmdW5jdGlvbl9saXRlcmFsXyR7Y291bnR9KCR7dGhpcy5wYXJhbWV0ZXJzLmpvaW4oJywnKX0pYCkuXG4gICAgICAgIGFkZCgneyByZXR1cm4gJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZUxpc3QodGhpcy5ib2R5LmNvbXBpbGUobykpLlxuICAgICAgICBhZGQoJzsgfSBiaW5kKHRoaXMpJyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25FeHByZXNzaW9uXG4iXX0=