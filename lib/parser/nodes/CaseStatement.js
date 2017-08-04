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
 * TypeOfCaseStatement
 */
var TypeOfCaseStatement = function (_Node) {
    _inherits(TypeOfCaseStatement, _Node);

    function TypeOfCaseStatement(operator, candidate, body, location) {
        _classCallCheck(this, TypeOfCaseStatement);

        var _this = _possibleConstructorReturn(this, (TypeOfCaseStatement.__proto__ || Object.getPrototypeOf(TypeOfCaseStatement)).call(this));

        _this.type = 'case-statement';
        _this.candidate = candidate;
        _this.body = body;
        _this.location = location;

        return _this;
    }

    _createClass(TypeOfCaseStatement, [{
        key: 'traspili',
        value: function traspili(id, otherwise, o) {

            return '(typeof ' + id + ' === ' + this.candidate + ')? ' + this.body.transpile(o) + ' : ' + otherwise;
        }
    }, {
        key: 'transpile',
        value: function transpile(o) {

            var children = this.children.map(function (c) {
                return c.transpile(o);
            });
            return '(' + this.expression.transpile(o) + ')? ' + children + ' : $$empty';
        }
    }]);

    return TypeOfCaseStatement;
}(_Node3.default);

exports.default = TypeOfCaseStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ2FzZVN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJUeXBlT2ZDYXNlU3RhdGVtZW50Iiwib3BlcmF0b3IiLCJjYW5kaWRhdGUiLCJib2R5IiwibG9jYXRpb24iLCJ0eXBlIiwiaWQiLCJvdGhlcndpc2UiLCJvIiwidHJhbnNwaWxlIiwiY2hpbGRyZW4iLCJtYXAiLCJjIiwiZXhwcmVzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxtQjs7O0FBRUYsaUNBQVlDLFFBQVosRUFBc0JDLFNBQXRCLEVBQWlDQyxJQUFqQyxFQUF1Q0MsUUFBdkMsRUFBaUQ7QUFBQTs7QUFBQTs7QUFJN0MsY0FBS0MsSUFBTCxHQUFZLGdCQUFaO0FBQ0EsY0FBS0gsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxjQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFQNkM7QUFTaEQ7Ozs7aUNBRVFFLEUsRUFBSUMsUyxFQUFXQyxDLEVBQUc7O0FBRXZCLGdDQUFrQkYsRUFBbEIsYUFBNEIsS0FBS0osU0FBakMsV0FBZ0QsS0FBS0MsSUFBTCxDQUFVTSxTQUFWLENBQW9CRCxDQUFwQixDQUFoRCxXQUE0RUQsU0FBNUU7QUFFSDs7O2tDQUVTQyxDLEVBQUc7O0FBRVQsZ0JBQUlFLFdBQVcsS0FBS0EsUUFBTCxDQUFjQyxHQUFkLENBQWtCO0FBQUEsdUJBQUtDLEVBQUVILFNBQUYsQ0FBWUQsQ0FBWixDQUFMO0FBQUEsYUFBbEIsQ0FBZjtBQUNBLHlCQUFXLEtBQUtLLFVBQUwsQ0FBZ0JKLFNBQWhCLENBQTBCRCxDQUExQixDQUFYLFdBQTZDRSxRQUE3QztBQUVIOzs7Ozs7a0JBSVVWLG1CIiwiZmlsZSI6IkNhc2VTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFR5cGVPZkNhc2VTdGF0ZW1lbnRcbiAqL1xuY2xhc3MgVHlwZU9mQ2FzZVN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGNhbmRpZGF0ZSwgYm9keSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudHlwZSA9ICdjYXNlLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMuY2FuZGlkYXRlID0gY2FuZGlkYXRlO1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFzcGlsaShpZCwgb3RoZXJ3aXNlLCBvKSB7XG5cbiAgICAgICAgcmV0dXJuIGAodHlwZW9mICR7aWR9ID09PSAke3RoaXMuY2FuZGlkYXRlfSk/ICR7dGhpcy5ib2R5LnRyYW5zcGlsZShvKX0gOiAke290aGVyd2lzZX1gO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLm1hcChjID0+IGMudHJhbnNwaWxlKG8pKTtcbiAgICAgICAgcmV0dXJuIGAoJHt0aGlzLmV4cHJlc3Npb24udHJhbnNwaWxlKG8pfSk/ICR7Y2hpbGRyZW59IDogJCRlbXB0eWA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHlwZU9mQ2FzZVN0YXRlbWVudFxuIl19