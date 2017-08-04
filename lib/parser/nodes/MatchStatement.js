'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * MatchStatement
 * @param {Expression} expression
 * @param {array<CaseStatement>} cases
 * @param {Location} location
 */
var MatchStatement = function (_Node) {
    _inherits(MatchStatement, _Node);

    function MatchStatement(identifier, cases, otherwise, location) {
        _classCallCheck(this, MatchStatement);

        var _this = _possibleConstructorReturn(this, (MatchStatement.__proto__ || Object.getPrototypeOf(MatchStatement)).call(this, location));

        _this.type = 'match-statement';
        _this.identifier = identifier;
        _this.cases = cases;
        _this.otherwise = otherwise;

        return _this;
    }

    _createClass(MatchStatement, [{
        key: 'transpile',
        value: function transpile(o) {
            var _this2 = this;

            var otherwise = (0, _util.flatten)(this.otherwise, o);
            var cases = this.cases.reduceRight(function (p, c) {
                return c.toExpression(_this2.identifier.transpile(o), p, o);
            }, otherwise);

            return '(function() { return ' + cases + '; })()';
        }
    }]);

    return MatchStatement;
}(_Node3.default);

exports.default = MatchStatement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTWF0Y2hTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiTWF0Y2hTdGF0ZW1lbnQiLCJpZGVudGlmaWVyIiwiY2FzZXMiLCJvdGhlcndpc2UiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwicmVkdWNlUmlnaHQiLCJwIiwiYyIsInRvRXhwcmVzc2lvbiIsInRyYW5zcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1NQSxjOzs7QUFFRiw0QkFBWUMsVUFBWixFQUF3QkMsS0FBeEIsRUFBK0JDLFNBQS9CLEVBQTBDQyxRQUExQyxFQUFvRDtBQUFBOztBQUFBLG9JQUUxQ0EsUUFGMEM7O0FBR2hELGNBQUtDLElBQUwsR0FBWSxpQkFBWjtBQUNBLGNBQUtKLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7O0FBTmdEO0FBUW5EOzs7O2tDQUVTRyxDLEVBQUc7QUFBQTs7QUFFVCxnQkFBSUgsWUFBWSxtQkFBUSxLQUFLQSxTQUFiLEVBQXdCRyxDQUF4QixDQUFoQjtBQUNBLGdCQUFJSixRQUFRLEtBQUtBLEtBQUwsQ0FBV0ssV0FBWCxDQUF1QixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSx1QkFDL0JBLEVBQUVDLFlBQUYsQ0FBZSxPQUFLVCxVQUFMLENBQWdCVSxTQUFoQixDQUEwQkwsQ0FBMUIsQ0FBZixFQUE2Q0UsQ0FBN0MsRUFBZ0RGLENBQWhELENBRCtCO0FBQUEsYUFBdkIsRUFDNENILFNBRDVDLENBQVo7O0FBR0EsNkNBQStCRCxLQUEvQjtBQUVIOzs7Ozs7a0JBSVVGLGMiLCJmaWxlIjoiTWF0Y2hTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IHtmbGF0dGVufSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiBNYXRjaFN0YXRlbWVudFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge2FycmF5PENhc2VTdGF0ZW1lbnQ+fSBjYXNlc1xuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgTWF0Y2hTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIsIGNhc2VzLCBvdGhlcndpc2UsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnbWF0Y2gtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICAgICAgdGhpcy5jYXNlcyA9IGNhc2VzO1xuICAgICAgICB0aGlzLm90aGVyd2lzZSA9IG90aGVyd2lzZTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG90aGVyd2lzZSA9IGZsYXR0ZW4odGhpcy5vdGhlcndpc2UsIG8pO1xuICAgICAgICB2YXIgY2FzZXMgPSB0aGlzLmNhc2VzLnJlZHVjZVJpZ2h0KChwLCBjKSA9PlxuICAgICAgICAgICAgYy50b0V4cHJlc3Npb24odGhpcy5pZGVudGlmaWVyLnRyYW5zcGlsZShvKSwgcCwgbyksIG90aGVyd2lzZSk7XG5cbiAgICAgICAgcmV0dXJuIGAoZnVuY3Rpb24oKSB7IHJldHVybiAke2Nhc2VzfTsgfSkoKWA7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0Y2hTdGF0ZW1lbnRcbiJdfQ==