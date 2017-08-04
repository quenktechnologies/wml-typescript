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
 * ChildInterpolation
 */
var ChildInterpolation = function (_Node) {
    _inherits(ChildInterpolation, _Node);

    function ChildInterpolation(interpolation, location) {
        _classCallCheck(this, ChildInterpolation);

        var _this = _possibleConstructorReturn(this, (ChildInterpolation.__proto__ || Object.getPrototypeOf(ChildInterpolation)).call(this));

        _this.type = 'child-interpolation';
        _this.interpolation = interpolation;
        _this.location = location;

        return _this;
    }

    _createClass(ChildInterpolation, [{
        key: 'transpile',
        value: function transpile(o) {

            return '$$text(' + this.interpolation.transpile(o) + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, '').add(this.filters.reduce(function (prev, current) {
                return current.addValue(prev);
            }, this.expression).compile(o));
        }
    }]);

    return ChildInterpolation;
}(_Node3.default);

exports.default = ChildInterpolation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ2hpbGRJbnRlcnBvbGF0aW9uLmpzIl0sIm5hbWVzIjpbIkNoaWxkSW50ZXJwb2xhdGlvbiIsImludGVycG9sYXRpb24iLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwidHJhbnNwaWxlIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiZmlsdGVycyIsInJlZHVjZSIsInByZXYiLCJjdXJyZW50IiwiYWRkVmFsdWUiLCJleHByZXNzaW9uIiwiY29tcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxrQjs7O0FBRUYsZ0NBQVlDLGFBQVosRUFBMkJDLFFBQTNCLEVBQXFDO0FBQUE7O0FBQUE7O0FBR2pDLGNBQUtDLElBQUwsR0FBWSxxQkFBWjtBQUNBLGNBQUtGLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTGlDO0FBT3BDOzs7O2tDQUVTRSxDLEVBQUc7O0FBRVQsK0JBQWlCLEtBQUtILGFBQUwsQ0FBbUJJLFNBQW5CLENBQTZCRCxDQUE3QixDQUFqQjtBQUVIOzs7Z0NBRU9BLEMsRUFBRzs7QUFFUCxtQkFBTyxLQUFLRSxVQUFMLENBQWdCRixFQUFFRyxRQUFsQixFQUE0QixFQUE1QixFQUNQQyxHQURPLENBQ0gsS0FBS0MsT0FBTCxDQUFhQyxNQUFiLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsT0FBUDtBQUFBLHVCQUFtQkEsUUFBUUMsUUFBUixDQUFpQkYsSUFBakIsQ0FBbkI7QUFBQSxhQUFwQixFQUNBLEtBQUtHLFVBREwsRUFDaUJDLE9BRGpCLENBQ3lCWCxDQUR6QixDQURHLENBQVA7QUFJSDs7Ozs7O2tCQUlVSixrQiIsImZpbGUiOiJDaGlsZEludGVycG9sYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIENoaWxkSW50ZXJwb2xhdGlvblxuICovXG5jbGFzcyBDaGlsZEludGVycG9sYXRpb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGludGVycG9sYXRpb24sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2NoaWxkLWludGVycG9sYXRpb24nO1xuICAgICAgICB0aGlzLmludGVycG9sYXRpb24gPSBpbnRlcnBvbGF0aW9uO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIHJldHVybiBgJCR0ZXh0KCR7dGhpcy5pbnRlcnBvbGF0aW9uLnRyYW5zcGlsZShvKX0pYDtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpLlxuICAgICAgICBhZGQodGhpcy5maWx0ZXJzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gY3VycmVudC5hZGRWYWx1ZShwcmV2KSxcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbikuY29tcGlsZShvKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hpbGRJbnRlcnBvbGF0aW9uXG4iXX0=