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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2Rlcy9JbnRlcnBvbGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7O0lBS25CLGFBQWE7Y0FBYixhQUFhOztBQUVKLGFBRlQsYUFBYSxDQUVILEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFOzhCQUZwQyxhQUFhOztBQUlYLG1DQUpGLGFBQWEsNkNBSUwsUUFBUSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBRTFCOztpQkFSQyxhQUFhOztlQVVOLHFCQUFHOztBQUVSLG1CQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLE9BQU87dUJBQ3JDLEFBQUMsT0FBTyxPQUFPLEtBQUssUUFBUSxHQUM1QixPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFBQSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUVqRTs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQ1osTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLE9BQU87dUJBQUssT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFBQSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDN0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFbkI7OztXQXpCQyxhQUFhOzs7cUJBNkJKLGFBQWEiLCJmaWxlIjoiSW50ZXJwb2xhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogSW50ZXJwb2xhdGlvbiBcbiAqL1xuY2xhc3MgSW50ZXJwb2xhdGlvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGZpbHRlcnMsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIobG9jYXRpb24pO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZmlsdGVycyA9IGZpbHRlcnM7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVycy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+XG4gICAgICAgICAgICAodHlwZW9mIGN1cnJlbnQgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICBjdXJyZW50IDogY3VycmVudC5hZGRWYWx1ZShwcmV2KSwgdGhpcy52YWx1ZS50cmFuc3BpbGUoKSk7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKS5cbiAgICAgICAgYWRkKHRoaXMuZmlsdGVycy5cbiAgICAgICAgICAgIHJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gY3VycmVudC5hZGRWYWx1ZShwcmV2KSwgdGhpcy52YWx1ZSkuXG4gICAgICAgICAgICBjb21waWxlKG8pKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcnBvbGF0aW9uXG4iXX0=