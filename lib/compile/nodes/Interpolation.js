'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

/**
 * Interpolation 
 */

var Interpolation = (function (_Node) {
    _inherits(Interpolation, _Node);

    function Interpolation(value, filters, location) {
        _classCallCheck(this, Interpolation);

        _get(Object.getPrototypeOf(Interpolation.prototype), 'constructor', this).call(this, location);
        this.value = value;
        this.filters = filters;
    }

    _createClass(Interpolation, [{
        key: 'transpile',
        value: function transpile() {

            return this.filters.reduce(function (prev, current) {
                return typeof current === 'string' ? current : current.addValue(prev);
            }, this.value.transpile());
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, '').add(this.filters.reduce(function (prev, current) {
                return current.addValue(prev);
            }, this.value).compile(o));
        }
    }]);

    return Interpolation;
})(_Node3['default']);

exports['default'] = Interpolation;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL0ludGVycG9sYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7Ozs7Ozs7SUFLbkIsYUFBYTtjQUFiLGFBQWE7O0FBRUosYUFGVCxhQUFhLENBRUgsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUU7OEJBRnBDLGFBQWE7O0FBSVgsbUNBSkYsYUFBYSw2Q0FJTCxRQUFRLEVBQUU7QUFDaEIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FFMUI7O2lCQVJDLGFBQWE7O2VBVU4scUJBQUc7O0FBRVIsbUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUUsT0FBTzt1QkFDckMsQUFBQyxPQUFPLE9BQU8sS0FBSyxRQUFRLEdBQzVCLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzthQUFBLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBRWpFOzs7ZUFFTSxpQkFBQyxDQUFDLEVBQUU7O0FBRVAsbUJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FDWixNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUUsT0FBTzt1QkFBSyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzthQUFBLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUM3RCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUVuQjs7O1dBekJDLGFBQWE7OztxQkE2QkosYUFBYSIsImZpbGUiOiJJbnRlcnBvbGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBJbnRlcnBvbGF0aW9uIFxuICovXG5jbGFzcyBJbnRlcnBvbGF0aW9uIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZmlsdGVycywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gZmlsdGVycztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT5cbiAgICAgICAgICAgICh0eXBlb2YgY3VycmVudCA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgIGN1cnJlbnQgOiBjdXJyZW50LmFkZFZhbHVlKHByZXYpLCB0aGlzLnZhbHVlLnRyYW5zcGlsZSgpKTtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpLlxuICAgICAgICBhZGQodGhpcy5maWx0ZXJzLlxuICAgICAgICAgICAgcmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBjdXJyZW50LmFkZFZhbHVlKHByZXYpLCB0aGlzLnZhbHVlKS5cbiAgICAgICAgICAgIGNvbXBpbGUobykpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVycG9sYXRpb25cbiJdfQ==