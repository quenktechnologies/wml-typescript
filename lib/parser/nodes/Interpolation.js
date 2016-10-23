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
 * Interpolation 
 * @param {Expression} expression 
 * @param {array<Filter>} filters 
 * @param {Location} location 
 */
var Interpolation = function (_Node) {
    _inherits(Interpolation, _Node);

    function Interpolation(expression, filters, location) {
        _classCallCheck(this, Interpolation);

        var _this = _possibleConstructorReturn(this, (Interpolation.__proto__ || Object.getPrototypeOf(Interpolation)).call(this, location));

        _this.type = 'interpolation';
        _this.expression = expression;
        _this.filters = filters;

        return _this;
    }

    _createClass(Interpolation, [{
        key: 'transpile',
        value: function transpile() {

            return this.filters.reduce(function (prev, current) {
                return current.addValue(prev);
            }, this.expression).transpile();
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, '').add(this.filters.reduce(function (prev, current) {
                return current.addValue(prev);
            }, this.expression).compile(o));
        }
    }]);

    return Interpolation;
}(_Node3.default);

exports.default = Interpolation;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSW50ZXJwb2xhdGlvbi5qcyJdLCJuYW1lcyI6WyJJbnRlcnBvbGF0aW9uIiwiZXhwcmVzc2lvbiIsImZpbHRlcnMiLCJsb2NhdGlvbiIsInR5cGUiLCJyZWR1Y2UiLCJwcmV2IiwiY3VycmVudCIsImFkZFZhbHVlIiwidHJhbnNwaWxlIiwibyIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImFkZCIsImNvbXBpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNTUEsYTs7O0FBRUYsMkJBQVlDLFVBQVosRUFBd0JDLE9BQXhCLEVBQWlDQyxRQUFqQyxFQUEyQztBQUFBOztBQUFBLGtJQUVqQ0EsUUFGaUM7O0FBR3ZDLGNBQUtDLElBQUwsR0FBWSxlQUFaO0FBQ0EsY0FBS0gsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxjQUFLQyxPQUFMLEdBQWVBLE9BQWY7O0FBTHVDO0FBTzFDOzs7O29DQUVXOztBQUVSLG1CQUFPLEtBQUtBLE9BQUwsQ0FBYUcsTUFBYixDQUFvQixVQUFDQyxJQUFELEVBQU9DLE9BQVA7QUFBQSx1QkFBbUJBLFFBQVFDLFFBQVIsQ0FBaUJGLElBQWpCLENBQW5CO0FBQUEsYUFBcEIsRUFDSCxLQUFLTCxVQURGLEVBQ2NRLFNBRGQsRUFBUDtBQUdIOzs7Z0NBRU9DLEMsRUFBRzs7QUFFUCxtQkFBTyxLQUFLQyxVQUFMLENBQWdCRCxFQUFFRSxRQUFsQixFQUE0QixFQUE1QixFQUNQQyxHQURPLENBQ0gsS0FBS1gsT0FBTCxDQUFhRyxNQUFiLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsT0FBUDtBQUFBLHVCQUFtQkEsUUFBUUMsUUFBUixDQUFpQkYsSUFBakIsQ0FBbkI7QUFBQSxhQUFwQixFQUNBLEtBQUtMLFVBREwsRUFDaUJhLE9BRGpCLENBQ3lCSixDQUR6QixDQURHLENBQVA7QUFJSDs7Ozs7O2tCQUlVVixhIiwiZmlsZSI6IkludGVycG9sYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEludGVycG9sYXRpb24gXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge2FycmF5PEZpbHRlcj59IGZpbHRlcnMgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgSW50ZXJwb2xhdGlvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbiwgZmlsdGVycywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdpbnRlcnBvbGF0aW9uJztcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gZmlsdGVycztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gY3VycmVudC5hZGRWYWx1ZShwcmV2KSxcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbikudHJhbnNwaWxlKCk7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKS5cbiAgICAgICAgYWRkKHRoaXMuZmlsdGVycy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IGN1cnJlbnQuYWRkVmFsdWUocHJldiksXG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb24pLmNvbXBpbGUobykpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVycG9sYXRpb25cbiJdfQ==