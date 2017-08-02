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
    }]);

    return FunctionExpression;
}(_Node3.default);

exports.default = FunctionExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvRnVuY3Rpb25FeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbImNvdW50IiwiRnVuY3Rpb25FeHByZXNzaW9uIiwicGFyYW1ldGVycyIsImV4cHJlc3Npb24iLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwicGFyYW1zIiwibWFwIiwicCIsInRyYW5zcGlsZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVEsQ0FBWjtBQUNBOzs7Ozs7O0lBTU1DLGtCOzs7QUFFRixnQ0FBWUMsVUFBWixFQUF3QkMsVUFBeEIsRUFBb0NDLFFBQXBDLEVBQThDO0FBQUE7O0FBQUE7O0FBRzFDLGNBQUtDLElBQUwsR0FBWSxxQkFBWjtBQUNBLGNBQUtILFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFOMEM7QUFRN0M7Ozs7a0NBRVNFLEMsRUFBRzs7QUFFVCxnQkFBSUMsU0FBUyxLQUFLTCxVQUFMLENBQWdCTSxHQUFoQixDQUFvQjtBQUFBLHVCQUFLQyxFQUFFQyxTQUFGLENBQVlKLENBQVosQ0FBTDtBQUFBLGFBQXBCLEVBQXlDSyxJQUF6QyxDQUE4QyxHQUE5QyxDQUFiO0FBQ0FYLG9CQUFRQSxRQUFRLENBQWhCOztBQUVBLG1CQUFPLCtCQUE2QkEsS0FBN0IsU0FBc0NPLE1BQXRDLHdCQUNTLEtBQUtKLFVBQUwsQ0FBZ0JPLFNBQWhCLENBQTBCSixDQUExQixDQURULG9CQUFQO0FBR0g7Ozs7OztrQkFJVUwsa0IiLCJmaWxlIjoiRnVuY3Rpb25FeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxudmFyIGNvdW50ID0gMDtcbi8qKlxuICogRnVuY3Rpb25FeHByZXNzaW9uXG4gKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvblxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgRnVuY3Rpb25FeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzLCBleHByZXNzaW9uLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmdW5jdGlvbi1leHByZXNzaW9uJztcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICB2YXIgcGFyYW1zID0gdGhpcy5wYXJhbWV0ZXJzLm1hcChwID0+IHAudHJhbnNwaWxlKG8pKS5qb2luKCcsJyk7XG4gICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuXG4gICAgICAgIHJldHVybiBgZnVuY3Rpb24gZnVuY3Rpb25fbGl0ZXJhbF8ke2NvdW50fSgke3BhcmFtc30pYCArXG4gICAgICAgICAgICBgeyByZXR1cm4gJHt0aGlzLmV4cHJlc3Npb24udHJhbnNwaWxlKG8pfTsgfS5iaW5kKHRoaXMpYDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbkV4cHJlc3Npb25cbiJdfQ==