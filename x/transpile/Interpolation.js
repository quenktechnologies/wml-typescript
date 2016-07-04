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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvSW50ZXJwb2xhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFpQixRQUFROzs7Ozs7OztJQUtuQixhQUFhO2NBQWIsYUFBYTs7QUFFSixhQUZULGFBQWEsQ0FFSCxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTs4QkFGcEMsYUFBYTs7QUFJWCxtQ0FKRixhQUFhLDZDQUlMLFFBQVEsRUFBRTtBQUNoQixZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUUxQjs7aUJBUkMsYUFBYTs7ZUFVTixxQkFBRzs7QUFFUixtQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxPQUFPO3VCQUNyQyxBQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsR0FDNUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQUEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FFakU7OztlQUVNLGlCQUFDLENBQUMsRUFBRTs7QUFFUCxtQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUNaLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxPQUFPO3VCQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQUEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQzdELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBRW5COzs7V0F6QkMsYUFBYTs7O3FCQTZCSixhQUFhIiwiZmlsZSI6IkludGVycG9sYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEludGVycG9sYXRpb24gXG4gKi9cbmNsYXNzIEludGVycG9sYXRpb24gZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBmaWx0ZXJzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSBmaWx0ZXJzO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcnMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PlxuICAgICAgICAgICAgKHR5cGVvZiBjdXJyZW50ID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgY3VycmVudCA6IGN1cnJlbnQuYWRkVmFsdWUocHJldiksIHRoaXMudmFsdWUudHJhbnNwaWxlKCkpO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJykuXG4gICAgICAgIGFkZCh0aGlzLmZpbHRlcnMuXG4gICAgICAgICAgICByZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IGN1cnJlbnQuYWRkVmFsdWUocHJldiksIHRoaXMudmFsdWUpLlxuICAgICAgICAgICAgY29tcGlsZShvKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJwb2xhdGlvblxuIl19