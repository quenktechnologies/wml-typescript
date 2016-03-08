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

/**
 * ObjectWriter for writing object strings
 */

var ObjectWriter = (function (_Writer) {
    _inherits(ObjectWriter, _Writer);

    function ObjectWriter() {
        _classCallCheck(this, ObjectWriter);

        _get(Object.getPrototypeOf(ObjectWriter.prototype), 'constructor', this).call(this, '{');
    }

    /**
     * writeValue will write a key value pair
     * @param {string} key 
     * @param {string} value 
     */

    _createClass(ObjectWriter, [{
        key: 'writeValue',
        value: function writeValue(key, value) {
            this.write('\'' + key + '\':' + value);
        }
    }, {
        key: 'finish',
        value: function finish() {

            this.write('}');
            return this.buf;
        }
    }]);

    return ObjectWriter;
})(_Writer3['default']);

exports['default'] = ObjectWriter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGVyL09iamVjdFdyaXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3VCQUFtQixVQUFVOzs7Ozs7OztJQUt2QixZQUFZO2NBQVosWUFBWTs7QUFFSCxhQUZULFlBQVksR0FFQTs4QkFGWixZQUFZOztBQUlWLG1DQUpGLFlBQVksNkNBSUosR0FBRyxFQUFFO0tBRWQ7Ozs7Ozs7O2lCQU5DLFlBQVk7O2VBYUosb0JBQUMsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNuQixnQkFBSSxDQUFDLEtBQUssUUFBSyxHQUFHLFdBQUssS0FBSyxDQUFHLENBQUM7U0FDbkM7OztlQUVLLGtCQUFHOztBQUVMLGdCQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLG1CQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7U0FFbkI7OztXQXRCQyxZQUFZOzs7cUJBeUJILFlBQVkiLCJmaWxlIjoiT2JqZWN0V3JpdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdyaXRlciBmcm9tICcuL1dyaXRlcic7XG5cbi8qKlxuICogT2JqZWN0V3JpdGVyIGZvciB3cml0aW5nIG9iamVjdCBzdHJpbmdzXG4gKi9cbmNsYXNzIE9iamVjdFdyaXRlciBleHRlbmRzIFdyaXRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBzdXBlcigneycpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogd3JpdGVWYWx1ZSB3aWxsIHdyaXRlIGEga2V5IHZhbHVlIHBhaXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBcbiAgICAgKi9cbiAgICB3cml0ZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShgJyR7a2V5fSc6JHt2YWx1ZX1gKTtcbiAgICB9XG5cbiAgICBmaW5pc2goKSB7XG5cbiAgICAgICAgdGhpcy53cml0ZSgnfScpO1xuICAgICAgICByZXR1cm4gdGhpcy5idWY7XG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IE9iamVjdFdyaXRlclxuIl19