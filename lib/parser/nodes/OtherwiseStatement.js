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
 * OtherwiseCaseStatement
 */
var OtherwiseCaseStatement = function (_Node) {
    _inherits(OtherwiseCaseStatement, _Node);

    function OtherwiseCaseStatement(candidate, body, location) {
        _classCallCheck(this, OtherwiseCaseStatement);

        var _this = _possibleConstructorReturn(this, (OtherwiseCaseStatement.__proto__ || Object.getPrototypeOf(OtherwiseCaseStatement)).call(this));

        _this.type = 'otherwise-statement';
        _this.body = body;
        _this.location = location;

        return _this;
    }

    _createClass(OtherwiseCaseStatement, [{
        key: 'transpile',
        value: function transpile(o) {

            return this.body.transpile(o);
        }
    }]);

    return OtherwiseCaseStatement;
}(_Node3.default);

exports.default = OtherwiseCaseStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvT3RoZXJ3aXNlU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIk90aGVyd2lzZUNhc2VTdGF0ZW1lbnQiLCJjYW5kaWRhdGUiLCJib2R5IiwibG9jYXRpb24iLCJ0eXBlIiwibyIsInRyYW5zcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxzQjs7O0FBRUYsb0NBQVlDLFNBQVosRUFBdUJDLElBQXZCLEVBQTZCQyxRQUE3QixFQUF1QztBQUFBOztBQUFBOztBQUluQyxjQUFLQyxJQUFMLEdBQVkscUJBQVo7QUFDQSxjQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFObUM7QUFRdEM7Ozs7a0NBRVNFLEMsRUFBRzs7QUFFVCxtQkFBTyxLQUFLSCxJQUFMLENBQVVJLFNBQVYsQ0FBb0JELENBQXBCLENBQVA7QUFHSDs7Ozs7O2tCQUlVTCxzQiIsImZpbGUiOiJPdGhlcndpc2VTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIE90aGVyd2lzZUNhc2VTdGF0ZW1lbnRcbiAqL1xuY2xhc3MgT3RoZXJ3aXNlQ2FzZVN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoY2FuZGlkYXRlLCBib2R5LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy50eXBlID0gJ290aGVyd2lzZS1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmJvZHkudHJhbnNwaWxlKG8pO1xuXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3RoZXJ3aXNlQ2FzZVN0YXRlbWVudFxuIl19