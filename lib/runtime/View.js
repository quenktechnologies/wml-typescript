'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Maker = require('./Maker');

var _Maker2 = _interopRequireDefault(_Maker);

/**
 * View provides an API for turning wml into a DOM tree.
 * Additionally it provides a convenient API for retreiving created
 * widgets created during parsing providing an near custom elements
 * like feel.
 * @param {function} template A function that will be treated as a wml template.
 * @param {Object} context All references to `this` in the template will refer to this object.
 */

var View = (function () {
    function View(template, context) {
        _classCallCheck(this, View);

        this._maker = new _Maker2['default'](template, context);
    }

    /**
     * use replaces the template (and optionally context) this View uses.
     * @param {function} template 
     * @param {object} [context] 
     * @returns {View}
     */

    _createClass(View, [{
        key: 'use',
        value: function use(template, context) {

            this._maker = new _Maker2['default'](template, context ? context : this.context);
            return this;
        }

        /**
         * findById retrieves an element by its wml:id attribute.
         * @param {string} id 
         * @return {Object} 
         */
    }, {
        key: 'findById',
        value: function findById(id) {

            return this._maker.findById(id);
        }

        /**
         * render provides the DOM output of this view.
         * @return {DOMNode} 
         */
    }, {
        key: 'render',
        value: function render() {

            return this._maker.render();
        }
    }]);

    return View;
})();

exports['default'] = View;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL1ZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3FCQUFrQixTQUFTOzs7Ozs7Ozs7Ozs7O0lBVXJCLElBQUk7QUFFSyxhQUZULElBQUksQ0FFTSxRQUFRLEVBQUUsT0FBTyxFQUFFOzhCQUY3QixJQUFJOztBQUlGLFlBQUksQ0FBQyxNQUFNLEdBQUcsdUJBQVUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBRTlDOzs7Ozs7Ozs7aUJBTkMsSUFBSTs7ZUFjSCxhQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7O0FBRW5CLGdCQUFJLENBQUMsTUFBTSxHQUFHLHVCQUFVLFFBQVEsRUFBRSxBQUFDLE9BQU8sR0FBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RFLG1CQUFPLElBQUksQ0FBQztTQUVmOzs7Ozs7Ozs7ZUFPTyxrQkFBQyxFQUFFLEVBQUU7O0FBRVQsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FFbkM7Ozs7Ozs7O2VBTUssa0JBQUc7O0FBRUwsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUUvQjs7O1dBeENDLElBQUk7OztxQkE0Q0ssSUFBSSIsImZpbGUiOiJWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1ha2VyIGZyb20gJy4vTWFrZXInO1xuXG4vKipcbiAqIFZpZXcgcHJvdmlkZXMgYW4gQVBJIGZvciB0dXJuaW5nIHdtbCBpbnRvIGEgRE9NIHRyZWUuXG4gKiBBZGRpdGlvbmFsbHkgaXQgcHJvdmlkZXMgYSBjb252ZW5pZW50IEFQSSBmb3IgcmV0cmVpdmluZyBjcmVhdGVkXG4gKiB3aWRnZXRzIGNyZWF0ZWQgZHVyaW5nIHBhcnNpbmcgcHJvdmlkaW5nIGFuIG5lYXIgY3VzdG9tIGVsZW1lbnRzXG4gKiBsaWtlIGZlZWwuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0ZW1wbGF0ZSBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB0cmVhdGVkIGFzIGEgd21sIHRlbXBsYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgQWxsIHJlZmVyZW5jZXMgdG8gYHRoaXNgIGluIHRoZSB0ZW1wbGF0ZSB3aWxsIHJlZmVyIHRvIHRoaXMgb2JqZWN0LlxuICovXG5jbGFzcyBWaWV3IHtcblxuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdGhpcy5fbWFrZXIgPSBuZXcgTWFrZXIodGVtcGxhdGUsIGNvbnRleHQpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdXNlIHJlcGxhY2VzIHRoZSB0ZW1wbGF0ZSAoYW5kIG9wdGlvbmFsbHkgY29udGV4dCkgdGhpcyBWaWV3IHVzZXMuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGVtcGxhdGUgXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XSBcbiAgICAgKiBAcmV0dXJucyB7Vmlld31cbiAgICAgKi9cbiAgICB1c2UodGVtcGxhdGUsIGNvbnRleHQpIHtcblxuICAgICAgICB0aGlzLl9tYWtlciA9IG5ldyBNYWtlcih0ZW1wbGF0ZSwgKGNvbnRleHQpID8gY29udGV4dCA6IHRoaXMuY29udGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZmluZEJ5SWQgcmV0cmlldmVzIGFuIGVsZW1lbnQgYnkgaXRzIHdtbDppZCBhdHRyaWJ1dGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqIEByZXR1cm4ge09iamVjdH0gXG4gICAgICovXG4gICAgZmluZEJ5SWQoaWQpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbWFrZXIuZmluZEJ5SWQoaWQpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVuZGVyIHByb3ZpZGVzIHRoZSBET00gb3V0cHV0IG9mIHRoaXMgdmlldy5cbiAgICAgKiBAcmV0dXJuIHtET01Ob2RlfSBcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ha2VyLnJlbmRlcigpO1xuXG4gICAgfVxuXG5cbn1cbmV4cG9ydCBkZWZhdWx0IFZpZXdcbiJdfQ==