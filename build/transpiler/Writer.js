/**
 * Writer
 * @param {string} buf 
 * @abstract
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Writer = (function () {
    function Writer(buf) {
        _classCallCheck(this, Writer);

        this.buf = buf || '';
    }

    /**
     * write some text to the buffer
     * @param {string} text 
     * @return {Writer}
     */

    _createClass(Writer, [{
        key: 'write',
        value: function write(text) {

            if (text !== '``') this.buf = this.buf + text;
            return this;
        }

        /**
         * finish finishes up writing and returns the result
         * @return {string} 
         */
    }, {
        key: 'finish',
        value: function finish() {
            return this.buf;
        }
    }]);

    return Writer;
})();

exports['default'] = Writer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGVyL1dyaXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFLTSxNQUFNO0FBRUcsYUFGVCxNQUFNLENBRUksR0FBRyxFQUFFOzhCQUZmLE1BQU07O0FBR0osWUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO0tBQ3hCOzs7Ozs7OztpQkFKQyxNQUFNOztlQVdILGVBQUMsSUFBSSxFQUFFOztBQUVSLGdCQUFJLElBQUksS0FBSyxJQUFJLEVBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztBQUMvQixtQkFBTyxJQUFJLENBQUM7U0FFZjs7Ozs7Ozs7ZUFNSyxrQkFBRztBQUNMLG1CQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDbkI7OztXQXpCQyxNQUFNOzs7cUJBNEJHLE1BQU0iLCJmaWxlIjoiV3JpdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXcml0ZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBidWYgXG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgV3JpdGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGJ1Zikge1xuICAgICAgICB0aGlzLmJ1ZiA9IGJ1ZiB8fCAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB3cml0ZSBzb21lIHRleHQgdG8gdGhlIGJ1ZmZlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFxuICAgICAqIEByZXR1cm4ge1dyaXRlcn1cbiAgICAgKi9cbiAgICB3cml0ZSh0ZXh0KSB7XG5cbiAgICAgICAgaWYgKHRleHQgIT09ICdgYCcpXG4gICAgICAgICAgICB0aGlzLmJ1ZiA9IHRoaXMuYnVmICsgdGV4dDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmaW5pc2ggZmluaXNoZXMgdXAgd3JpdGluZyBhbmQgcmV0dXJucyB0aGUgcmVzdWx0XG4gICAgICogQHJldHVybiB7c3RyaW5nfSBcbiAgICAgKi9cbiAgICBmaW5pc2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZjtcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFdyaXRlclxuIl19