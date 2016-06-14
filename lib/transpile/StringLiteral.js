/**
 * StringLiteral 
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var StringLiteral = (function () {
    function StringLiteral(value, location) {
        _classCallCheck(this, StringLiteral);

        this.value = value;
        this.location = location;
    }

    _createClass(StringLiteral, [{
        key: 'toString',
        value: function toString() {

            return this.value.split('"').join('\'');
        }
    }]);

    return StringLiteral;
})();

exports['default'] = StringLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvU3RyaW5nTGl0ZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBR00sYUFBYTtBQUVKLGFBRlQsYUFBYSxDQUVILEtBQUssRUFBRSxRQUFRLEVBQUU7OEJBRjNCLGFBQWE7O0FBSVgsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FFNUI7O2lCQVBDLGFBQWE7O2VBU1Asb0JBQUc7O0FBRVAsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBRTNDOzs7V0FiQyxhQUFhOzs7cUJBaUJKLGFBQWEiLCJmaWxlIjoiU3RyaW5nTGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3RyaW5nTGl0ZXJhbCBcbiAqL1xuY2xhc3MgU3RyaW5nTGl0ZXJhbCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgbG9jYXRpb24pIHtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnNwbGl0KCdcIicpLmpvaW4oJ1xcJycpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0xpdGVyYWxcbiJdfQ==