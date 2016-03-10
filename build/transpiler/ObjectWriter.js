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
        this._subs = Object.create(null);
    }

    /**
     * writeValue will write a key value pair
     * @param {string} key 
     * @param {string} value 
     */

    _createClass(ObjectWriter, [{
        key: 'writeValue',
        value: function writeValue(key, value) {
            this.write('\'' + key + '\':' + value + ',');
        }

        /**
         * writeSubObject writes an object
         * @param {string} location
         * @param {string} key 
         * @param {*} value 
         */
    }, {
        key: 'writeSubObject',
        value: function writeSubObject(location, key, value) {

            this._subs['\'' + location + '\''] = this._subs[location] || new ObjectWriter();
            this._subs['\'' + location + '\''].writeValue(key, value);
        }
    }, {
        key: 'finish',
        value: function finish() {
            var _this = this;

            Object.keys(this._subs).forEach(function (l) {
                return _this.write(l + ': ' + _this._subs[l].finish());
            });

            if (this.buf[this.buf.length - 1] === ',') this.buf = this.buf.slice(0, this.buf.length - 1);

            this.write('}');
            return this.buf;
        }
    }]);

    return ObjectWriter;
})(_Writer3['default']);

exports['default'] = ObjectWriter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGVyL09iamVjdFdyaXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3VCQUFtQixVQUFVOzs7Ozs7OztJQUt2QixZQUFZO2NBQVosWUFBWTs7QUFFSCxhQUZULFlBQVksR0FFQTs4QkFGWixZQUFZOztBQUlWLG1DQUpGLFlBQVksNkNBSUosR0FBRyxFQUFFO0FBQ1gsWUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBRXBDOzs7Ozs7OztpQkFQQyxZQUFZOztlQWNKLG9CQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDbkIsZ0JBQUksQ0FBQyxLQUFLLFFBQUssR0FBRyxXQUFLLEtBQUssT0FBSSxDQUFDO1NBQ3BDOzs7Ozs7Ozs7O2VBUWEsd0JBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7O0FBRWpDLGdCQUFJLENBQUMsS0FBSyxRQUFLLFFBQVEsUUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN6RSxnQkFBSSxDQUFDLEtBQUssUUFBSyxRQUFRLFFBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBRXREOzs7ZUFFSyxrQkFBRzs7O0FBRUQsa0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUN2QixPQUFPLENBQUMsVUFBQSxDQUFDO3VCQUFJLE1BQUssS0FBSyxDQUFJLENBQUMsVUFBSyxNQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBRzthQUFBLENBQUMsQ0FBQzs7QUFFaEUsZ0JBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBOztBQUVyRCxnQkFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoQixtQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBRW5COzs7V0ExQ0MsWUFBWTs7O3FCQTZDSCxZQUFZIiwiZmlsZSI6Ik9iamVjdFdyaXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXcml0ZXIgZnJvbSAnLi9Xcml0ZXInO1xuXG4vKipcbiAqIE9iamVjdFdyaXRlciBmb3Igd3JpdGluZyBvYmplY3Qgc3RyaW5nc1xuICovXG5jbGFzcyBPYmplY3RXcml0ZXIgZXh0ZW5kcyBXcml0ZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgc3VwZXIoJ3snKTtcbiAgICAgICAgdGhpcy5fc3VicyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB3cml0ZVZhbHVlIHdpbGwgd3JpdGUgYSBrZXkgdmFsdWUgcGFpclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFxuICAgICAqL1xuICAgIHdyaXRlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLndyaXRlKGAnJHtrZXl9Jzoke3ZhbHVlfSxgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB3cml0ZVN1Yk9iamVjdCB3cml0ZXMgYW4gb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFxuICAgICAqL1xuICAgIHdyaXRlU3ViT2JqZWN0KGxvY2F0aW9uLCBrZXksIHZhbHVlKSB7XG5cbiAgICAgICAgdGhpcy5fc3Vic1tgJyR7bG9jYXRpb259J2BdID0gdGhpcy5fc3Vic1tsb2NhdGlvbl0gfHwgbmV3IE9iamVjdFdyaXRlcigpO1xuICAgICAgICB0aGlzLl9zdWJzW2AnJHtsb2NhdGlvbn0nYF0ud3JpdGVWYWx1ZShrZXksIHZhbHVlKTtcblxuICAgIH1cblxuICAgIGZpbmlzaCgpIHtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5fc3VicykuXG4gICAgICAgICAgICBmb3JFYWNoKGwgPT4gdGhpcy53cml0ZShgJHtsfTogJHt0aGlzLl9zdWJzW2xdLmZpbmlzaCgpfWApKTtcblxuICAgICAgICBpZiAodGhpcy5idWZbdGhpcy5idWYubGVuZ3RoIC0gMV0gPT09ICcsJylcbiAgICAgICAgICAgIHRoaXMuYnVmID0gdGhpcy5idWYuc2xpY2UoMCwgdGhpcy5idWYubGVuZ3RoIC0gMSlcblxuICAgICAgICB0aGlzLndyaXRlKCd9Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZjtcblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0V3JpdGVyXG4iXX0=