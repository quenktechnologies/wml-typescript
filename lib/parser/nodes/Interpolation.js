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

        var _this = _possibleConstructorReturn(this, (Interpolation.__proto__ || Object.getPrototypeOf(Interpolation)).call(this));

        _this.type = 'interpolation';
        _this.expression = expression;
        _this.filters = filters;
        _this.location = location;

        return _this;
    }

    _createClass(Interpolation, [{
        key: 'transpile',
        value: function transpile(o) {

            return this.filters.reduce(function (prev, current) {
                return current.addValue(prev);
            }, this.expression).transpile(o);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvSW50ZXJwb2xhdGlvbi5qcyJdLCJuYW1lcyI6WyJJbnRlcnBvbGF0aW9uIiwiZXhwcmVzc2lvbiIsImZpbHRlcnMiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJhZGRWYWx1ZSIsInRyYW5zcGlsZSIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImFkZCIsImNvbXBpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNTUEsYTs7O0FBRUYsMkJBQVlDLFVBQVosRUFBd0JDLE9BQXhCLEVBQWlDQyxRQUFqQyxFQUEyQztBQUFBOztBQUFBOztBQUd2QyxjQUFLQyxJQUFMLEdBQVksZUFBWjtBQUNBLGNBQUtILFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTnVDO0FBUTFDOzs7O2tDQUVTRSxDLEVBQUc7O0FBRVQsbUJBQU8sS0FBS0gsT0FBTCxDQUFhSSxNQUFiLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsT0FBUDtBQUFBLHVCQUFtQkEsUUFBUUMsUUFBUixDQUFpQkYsSUFBakIsQ0FBbkI7QUFBQSxhQUFwQixFQUNILEtBQUtOLFVBREYsRUFDY1MsU0FEZCxDQUN3QkwsQ0FEeEIsQ0FBUDtBQUdIOzs7Z0NBRU9BLEMsRUFBRzs7QUFFUCxtQkFBTyxLQUFLTSxVQUFMLENBQWdCTixFQUFFTyxRQUFsQixFQUE0QixFQUE1QixFQUNQQyxHQURPLENBQ0gsS0FBS1gsT0FBTCxDQUFhSSxNQUFiLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsT0FBUDtBQUFBLHVCQUFtQkEsUUFBUUMsUUFBUixDQUFpQkYsSUFBakIsQ0FBbkI7QUFBQSxhQUFwQixFQUNBLEtBQUtOLFVBREwsRUFDaUJhLE9BRGpCLENBQ3lCVCxDQUR6QixDQURHLENBQVA7QUFJSDs7Ozs7O2tCQUlVTCxhIiwiZmlsZSI6IkludGVycG9sYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEludGVycG9sYXRpb25cbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvblxuICogQHBhcmFtIHthcnJheTxGaWx0ZXI+fSBmaWx0ZXJzXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBJbnRlcnBvbGF0aW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uLCBmaWx0ZXJzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdpbnRlcnBvbGF0aW9uJztcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gZmlsdGVycztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gY3VycmVudC5hZGRWYWx1ZShwcmV2KSxcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbikudHJhbnNwaWxlKG8pO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJykuXG4gICAgICAgIGFkZCh0aGlzLmZpbHRlcnMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBjdXJyZW50LmFkZFZhbHVlKHByZXYpLFxuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uKS5jb21waWxlKG8pKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcnBvbGF0aW9uXG4iXX0=