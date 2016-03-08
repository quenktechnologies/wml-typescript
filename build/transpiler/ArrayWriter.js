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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGVyL0FycmF5V3JpdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBQW1CLFVBQVU7Ozs7Ozs7O0lBS3ZCLFdBQVc7Y0FBWCxXQUFXOztBQUVGLGFBRlQsV0FBVyxHQUVDOzhCQUZaLFdBQVc7O0FBR1QsbUNBSEYsV0FBVyw2Q0FHSCxHQUFHLEVBQUU7S0FDZDs7aUJBSkMsV0FBVzs7ZUFNUCxrQkFBRzs7QUFFUCxnQkFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoQixtQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBRWpCOzs7V0FYQyxXQUFXOzs7cUJBY0YsV0FBVyIsImZpbGUiOiJBcnJheVdyaXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXcml0ZXIgZnJvbSAnLi9Xcml0ZXInO1xuXG4vKipcbiAqIEFycmF5V3JpdGVyIHdyaXRlcyBvdXQgYW4gYXJyYXkgc3RyaW5nXG4gKi9cbmNsYXNzIEFycmF5V3JpdGVyIGV4dGVuZHMgV3JpdGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignWycpO1xuICAgIH1cblxuICAgIGZpbmlzaCgpIHtcblxuICAgICAgdGhpcy53cml0ZSgnXScpO1xuICAgICAgcmV0dXJuIHRoaXMuYnVmO1xuXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBBcnJheVdyaXRlclxuIl19