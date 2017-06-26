'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Maker = require('./Maker');

var _Maker2 = _interopRequireDefault(_Maker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * View provides an API for turning wml into a DOM tree.
 * Additionally it provides a convenient API for retreiving created
 * widgets created during parsing providing an near custom elements
 * like feel.
 * @param {function} template A function that will be treated as a wml template.
 * @param {Object} context All references to `this` in the template will refer to this object.
 * @param {} listener 
 */
var View = function () {
    function View(template, context) {
        _classCallCheck(this, View);

        this._maker = new _Maker2.default(template, context);
    }

    /**
     * render is a factory method for creating a new View and rendering
     * it's contents immediately.
     * @param {function} template
     * @param {object|null} context 
     * @returns {DocumentFragment}
     */


    _createClass(View, [{
        key: 'findById',


        /**
         * findById retrieves an element by its wml:id attribute.
         * @param {string} id 
         * @return {Object} 
         */
        value: function findById(id) {

            return this._maker.findById(id);
        }

        /**
         * use replaces the template (and optionally context) this View uses.
         * @param {function} template 
         * @param {object} [context] 
         * @returns {View}
         */

    }, {
        key: 'use',
        value: function use(template, context) {

            this._maker = new _Maker2.default(template, context ? context : this.context);
            return this;
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
    }], [{
        key: 'render',
        value: function render(template, context) {

            return new View(template, context).render();
        }
    }]);

    return View;
}();

exports.default = View;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL1ZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInRlbXBsYXRlIiwiY29udGV4dCIsIl9tYWtlciIsImlkIiwiZmluZEJ5SWQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7OztJQVNNQSxJO0FBRUYsa0JBQVlDLFFBQVosRUFBc0JDLE9BQXRCLEVBQStCO0FBQUE7O0FBRTNCLGFBQUtDLE1BQUwsR0FBYyxvQkFBVUYsUUFBVixFQUFvQkMsT0FBcEIsQ0FBZDtBQUVIOztBQUVEOzs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7O2lDQUtTRSxFLEVBQUk7O0FBRVQsbUJBQU8sS0FBS0QsTUFBTCxDQUFZRSxRQUFaLENBQXFCRCxFQUFyQixDQUFQO0FBRUg7O0FBRUQ7Ozs7Ozs7Ozs0QkFNSUgsUSxFQUFVQyxPLEVBQVM7O0FBRW5CLGlCQUFLQyxNQUFMLEdBQWMsb0JBQVVGLFFBQVYsRUFBcUJDLE9BQUQsR0FBWUEsT0FBWixHQUFzQixLQUFLQSxPQUEvQyxDQUFkO0FBQ0EsbUJBQU8sSUFBUDtBQUVIOztBQUVEOzs7Ozs7O2lDQUlTOztBQUVMLG1CQUFPLEtBQUtDLE1BQUwsQ0FBWUcsTUFBWixFQUFQO0FBRUg7OzsrQkF0Q2FMLFEsRUFBVUMsTyxFQUFTOztBQUU3QixtQkFBUSxJQUFJRixJQUFKLENBQVNDLFFBQVQsRUFBbUJDLE9BQW5CLENBQUQsQ0FBOEJJLE1BQTlCLEVBQVA7QUFFSDs7Ozs7O2tCQXVDVU4sSSIsImZpbGUiOiJWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1ha2VyIGZyb20gJy4vTWFrZXInO1xuXG4vKipcbiAqIFZpZXcgcHJvdmlkZXMgYW4gQVBJIGZvciB0dXJuaW5nIHdtbCBpbnRvIGEgRE9NIHRyZWUuXG4gKiBBZGRpdGlvbmFsbHkgaXQgcHJvdmlkZXMgYSBjb252ZW5pZW50IEFQSSBmb3IgcmV0cmVpdmluZyBjcmVhdGVkXG4gKiB3aWRnZXRzIGNyZWF0ZWQgZHVyaW5nIHBhcnNpbmcgcHJvdmlkaW5nIGFuIG5lYXIgY3VzdG9tIGVsZW1lbnRzXG4gKiBsaWtlIGZlZWwuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0ZW1wbGF0ZSBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB0cmVhdGVkIGFzIGEgd21sIHRlbXBsYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgQWxsIHJlZmVyZW5jZXMgdG8gYHRoaXNgIGluIHRoZSB0ZW1wbGF0ZSB3aWxsIHJlZmVyIHRvIHRoaXMgb2JqZWN0LlxuICogQHBhcmFtIHt9IGxpc3RlbmVyIFxuICovXG5jbGFzcyBWaWV3IHtcblxuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdGhpcy5fbWFrZXIgPSBuZXcgTWFrZXIodGVtcGxhdGUsIGNvbnRleHQpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVuZGVyIGlzIGEgZmFjdG9yeSBtZXRob2QgZm9yIGNyZWF0aW5nIGEgbmV3IFZpZXcgYW5kIHJlbmRlcmluZ1xuICAgICAqIGl0J3MgY29udGVudHMgaW1tZWRpYXRlbHkuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGVtcGxhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdHxudWxsfSBjb250ZXh0IFxuICAgICAqIEByZXR1cm5zIHtEb2N1bWVudEZyYWdtZW50fVxuICAgICAqL1xuICAgIHN0YXRpYyByZW5kZXIodGVtcGxhdGUsIGNvbnRleHQpIHtcblxuICAgICAgICByZXR1cm4gKG5ldyBWaWV3KHRlbXBsYXRlLCBjb250ZXh0KSkucmVuZGVyKCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmaW5kQnlJZCByZXRyaWV2ZXMgYW4gZWxlbWVudCBieSBpdHMgd21sOmlkIGF0dHJpYnV0ZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBcbiAgICAgKi9cbiAgICBmaW5kQnlJZChpZCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9tYWtlci5maW5kQnlJZChpZCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB1c2UgcmVwbGFjZXMgdGhlIHRlbXBsYXRlIChhbmQgb3B0aW9uYWxseSBjb250ZXh0KSB0aGlzIFZpZXcgdXNlcy5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0ZW1wbGF0ZSBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdIFxuICAgICAqIEByZXR1cm5zIHtWaWV3fVxuICAgICAqL1xuICAgIHVzZSh0ZW1wbGF0ZSwgY29udGV4dCkge1xuXG4gICAgICAgIHRoaXMuX21ha2VyID0gbmV3IE1ha2VyKHRlbXBsYXRlLCAoY29udGV4dCkgPyBjb250ZXh0IDogdGhpcy5jb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZW5kZXIgcHJvdmlkZXMgdGhlIERPTSBvdXRwdXQgb2YgdGhpcyB2aWV3LlxuICAgICAqIEByZXR1cm4ge0RPTU5vZGV9IFxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbWFrZXIucmVuZGVyKCk7XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3XG4iXX0=