/**
 * Interpolation 
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Interpolation = (function () {
    function Interpolation(value, filters, location) {
        _classCallCheck(this, Interpolation);

        this.value = value;
        this.filters = filters;
        this.location = location;
    }

    _createClass(Interpolation, [{
        key: 'toString',
        value: function toString() {

            return this.filters.reduce(function (prev, current) {
                return typeof current === 'string' ? current : current.wrap(prev);
            }, this.value.toString());
        }
    }]);

    return Interpolation;
})();

exports['default'] = Interpolation;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvSW50ZXJwb2xhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBR00sYUFBYTtBQUVKLGFBRlQsYUFBYSxDQUVILEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFOzhCQUZwQyxhQUFhOztBQUlYLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBRTVCOztpQkFSQyxhQUFhOztlQVVQLG9CQUFHOztBQUVQLG1CQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLE9BQU87dUJBQUssQUFBQyxPQUFPLE9BQU8sS0FBSyxRQUFRLEdBQ3RFLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUFBLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBRTVEOzs7V0FmQyxhQUFhOzs7cUJBbUJKLGFBQWEiLCJmaWxlIjoiSW50ZXJwb2xhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW50ZXJwb2xhdGlvbiBcbiAqL1xuY2xhc3MgSW50ZXJwb2xhdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgZmlsdGVycywgbG9jYXRpb24pIHtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZmlsdGVycyA9IGZpbHRlcnM7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcnMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiAodHlwZW9mIGN1cnJlbnQgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICBjdXJyZW50IDogY3VycmVudC53cmFwKHByZXYpLCB0aGlzLnZhbHVlLnRvU3RyaW5nKCkpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVycG9sYXRpb25cbiJdfQ==