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

/*
 * CallStatement
 */
var CallStatement = function (_Node) {
    _inherits(CallStatement, _Node);

    function CallStatement(tmpl, args, location) {
        _classCallCheck(this, CallStatement);

        var _this = _possibleConstructorReturn(this, (CallStatement.__proto__ || Object.getPrototypeOf(CallStatement)).call(this));

        _this.type = 'call-statement';
        _this.template = tmpl;
        _this.arguments = args;
        _this.location = location;

        return _this;
    }

    _createClass(CallStatement, [{
        key: 'transpile',
        value: function transpile(o) {

            var args = args.length > 0 ? ',' + this.arguments.map(function (a) {
                return a.transpile(o);
            }).join(',') : '';

            return this.template.transpile(o) + '($$ctx,view' + args + ')';
        }
    }]);

    return CallStatement;
}(_Node3.default);

exports.default = CallStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ2FsbFN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJDYWxsU3RhdGVtZW50IiwidG1wbCIsImFyZ3MiLCJsb2NhdGlvbiIsInR5cGUiLCJ0ZW1wbGF0ZSIsImFyZ3VtZW50cyIsIm8iLCJsZW5ndGgiLCJtYXAiLCJhIiwidHJhbnNwaWxlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxhOzs7QUFFRiwyQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQUE7O0FBQUE7O0FBRzlCLGNBQUtDLElBQUwsR0FBWSxnQkFBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JKLElBQWhCO0FBQ0EsY0FBS0ssU0FBTCxHQUFpQkosSUFBakI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFOOEI7QUFRakM7Ozs7a0NBRVNJLEMsRUFBRzs7QUFFVCxnQkFBSUwsT0FBT0EsS0FBS00sTUFBTCxHQUFjLENBQWQsU0FDSCxLQUFLRixTQUFMLENBQWVHLEdBQWYsQ0FBbUI7QUFBQSx1QkFBS0MsRUFBRUMsU0FBRixDQUFZSixDQUFaLENBQUw7QUFBQSxhQUFuQixFQUF3Q0ssSUFBeEMsQ0FBNkMsR0FBN0MsQ0FERyxHQUVQLEVBRko7O0FBSUEsbUJBQVUsS0FBS1AsUUFBTCxDQUFjTSxTQUFkLENBQXdCSixDQUF4QixDQUFWLG1CQUFrREwsSUFBbEQ7QUFFSDs7Ozs7O2tCQUlVRixhIiwiZmlsZSI6IkNhbGxTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKlxuICogQ2FsbFN0YXRlbWVudFxuICovXG5jbGFzcyBDYWxsU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0bXBsLCBhcmdzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdjYWxsLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0bXBsO1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IGFyZ3M7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBhcmdzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgYCwke3RoaXMuYXJndW1lbnRzLm1hcChhID0+IGEudHJhbnNwaWxlKG8pKS5qb2luKCcsJyl9YCA6XG4gICAgICAgICAgICAnJztcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy50ZW1wbGF0ZS50cmFuc3BpbGUobyl9KCQkY3R4LHZpZXcke2FyZ3N9KWA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsbFN0YXRlbWVudFxuIl19