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
 * ArrayWriter writes out an array string
 */

var ArrayWriter = (function (_Writer) {
    _inherits(ArrayWriter, _Writer);

    function ArrayWriter() {
        _classCallCheck(this, ArrayWriter);

        _get(Object.getPrototypeOf(ArrayWriter.prototype), 'constructor', this).call(this, '[');
    }

    _createClass(ArrayWriter, [{
        key: 'finish',
        value: function finish() {

            this.write(']');
            return this.buf;
        }
    }]);

    return ArrayWriter;
})(_Writer3['default']);

exports['default'] = ArrayWriter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQXJyYXlXcml0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBbUIsVUFBVTs7Ozs7Ozs7SUFLdkIsV0FBVztjQUFYLFdBQVc7O0FBRUYsYUFGVCxXQUFXLEdBRUM7OEJBRlosV0FBVzs7QUFHVCxtQ0FIRixXQUFXLDZDQUdILEdBQUcsRUFBRTtLQUNkOztpQkFKQyxXQUFXOztlQU1QLGtCQUFHOztBQUVQLGdCQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLG1CQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7U0FFakI7OztXQVhDLFdBQVc7OztxQkFjRixXQUFXIiwiZmlsZSI6IkFycmF5V3JpdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdyaXRlciBmcm9tICcuL1dyaXRlcic7XG5cbi8qKlxuICogQXJyYXlXcml0ZXIgd3JpdGVzIG91dCBhbiBhcnJheSBzdHJpbmdcbiAqL1xuY2xhc3MgQXJyYXlXcml0ZXIgZXh0ZW5kcyBXcml0ZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdbJyk7XG4gICAgfVxuXG4gICAgZmluaXNoKCkge1xuXG4gICAgICB0aGlzLndyaXRlKCddJyk7XG4gICAgICByZXR1cm4gdGhpcy5idWY7XG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEFycmF5V3JpdGVyXG4iXX0=