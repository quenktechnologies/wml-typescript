'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Writer2 = require('./Writer');

var _Writer3 = _interopRequireDefault(_Writer2);

var _TagWriter = require('./TagWriter');

var _TagWriter2 = _interopRequireDefault(_TagWriter);

/**
 * ScriptWriter 
 */

var ScriptWriter = (function (_Writer) {
    _inherits(ScriptWriter, _Writer);

    function ScriptWriter() {
        _classCallCheck(this, ScriptWriter);

        _get(Object.getPrototypeOf(ScriptWriter.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ScriptWriter, [{
        key: 'writeImports',

        /**
         * writeImports writes the import heading
         * @param {array} imports
         */
        value: function writeImports(imports) {
            var _this = this;

            if (Array.isArray(imports)) imports.forEach(function (i) {
                return _this.write('import ' + i.id + ' from ' + i.src + ';');
            });
            return this;
        }

        /**
         * writeTree writes out the tag tree
         * @param {object|null} tag 
         */
    }, {
        key: 'writeTree',
        value: function writeTree(tag) {

            var t;

            if (!tag) return this;

            t = new _TagWriter2['default'](tag);
            return this.writeExport(t.write());
        }

        /**
         * writeExport lays the last rites
         * @param {string} text 
         */
    }, {
        key: 'writeExport',
        value: function writeExport(text) {

            this.write('export default function(){return ' + text + ';}');
        }
    }]);

    return ScriptWriter;
})(_Writer3['default']);

exports['default'] = ScriptWriter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGVyL1NjcmlwdFdyaXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3VCQUFtQixVQUFVOzs7O3lCQUNQLGFBQWE7Ozs7Ozs7O0lBSzdCLFlBQVk7Y0FBWixZQUFZOzthQUFaLFlBQVk7OEJBQVosWUFBWTs7bUNBQVosWUFBWTs7O2lCQUFaLFlBQVk7Ozs7Ozs7ZUFNRixzQkFBQyxPQUFPLEVBQUU7OztBQUVsQixnQkFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUN0QixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxNQUFLLEtBQUssYUFBVyxDQUFDLENBQUMsRUFBRSxjQUFTLENBQUMsQ0FBQyxHQUFHLE9BQUk7YUFBQSxDQUFDLENBQUM7QUFDdEUsbUJBQU8sSUFBSSxDQUFDO1NBRWY7Ozs7Ozs7O2VBTVEsbUJBQUMsR0FBRyxFQUFFOztBQUVYLGdCQUFJLENBQUMsQ0FBQzs7QUFFTixnQkFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLElBQUksQ0FBQzs7QUFFdEIsYUFBQyxHQUFHLDJCQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLG1CQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FFdEM7Ozs7Ozs7O2VBTVUscUJBQUMsSUFBSSxFQUFFOztBQUVkLGdCQUFJLENBQUMsS0FBSyx1Q0FBcUMsSUFBSSxRQUFLLENBQUM7U0FFNUQ7OztXQXJDQyxZQUFZOzs7cUJBdUNILFlBQVkiLCJmaWxlIjoiU2NyaXB0V3JpdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdyaXRlciBmcm9tICcuL1dyaXRlcic7XG5pbXBvcnQgVGFnV3JpdGVyIGZyb20gJy4vVGFnV3JpdGVyJztcblxuLyoqXG4gKiBTY3JpcHRXcml0ZXIgXG4gKi9cbmNsYXNzIFNjcmlwdFdyaXRlciBleHRlbmRzIFdyaXRlciB7XG5cbiAgICAvKipcbiAgICAgKiB3cml0ZUltcG9ydHMgd3JpdGVzIHRoZSBpbXBvcnQgaGVhZGluZ1xuICAgICAqIEBwYXJhbSB7YXJyYXl9IGltcG9ydHNcbiAgICAgKi9cbiAgICB3cml0ZUltcG9ydHMoaW1wb3J0cykge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGltcG9ydHMpKVxuICAgICAgICAgICAgaW1wb3J0cy5mb3JFYWNoKGkgPT4gdGhpcy53cml0ZShgaW1wb3J0ICR7aS5pZH0gZnJvbSAke2kuc3JjfTtgKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogd3JpdGVUcmVlIHdyaXRlcyBvdXQgdGhlIHRhZyB0cmVlXG4gICAgICogQHBhcmFtIHtvYmplY3R8bnVsbH0gdGFnIFxuICAgICAqL1xuICAgIHdyaXRlVHJlZSh0YWcpIHtcblxuICAgICAgICB2YXIgdDtcblxuICAgICAgICBpZiAoIXRhZykgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgdCA9IG5ldyBUYWdXcml0ZXIodGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVFeHBvcnQodC53cml0ZSgpKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHdyaXRlRXhwb3J0IGxheXMgdGhlIGxhc3Qgcml0ZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBcbiAgICAgKi9cbiAgICB3cml0ZUV4cG9ydCh0ZXh0KSB7XG5cbiAgICAgICAgdGhpcy53cml0ZShgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtyZXR1cm4gJHt0ZXh0fTt9YCk7XG5cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBTY3JpcHRXcml0ZXJcbiJdfQ==