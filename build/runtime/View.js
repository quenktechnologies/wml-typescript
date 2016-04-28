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
     * findById retrieves an element by its wml:id attribute.
     * @param {string} id 
     * @return {Object} 
     */

    _createClass(View, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL1ZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3FCQUFrQixTQUFTOzs7Ozs7Ozs7Ozs7O0lBVXJCLElBQUk7QUFFSyxhQUZULElBQUksQ0FFTSxRQUFRLEVBQUUsT0FBTyxFQUFFOzhCQUY3QixJQUFJOztBQUlGLFlBQUksQ0FBQyxNQUFNLEdBQUcsdUJBQVUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBRTlDOzs7Ozs7OztpQkFOQyxJQUFJOztlQWFFLGtCQUFDLEVBQUUsRUFBRTs7QUFFVCxtQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUVuQzs7Ozs7Ozs7ZUFNSyxrQkFBRzs7QUFFTCxtQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBRS9COzs7V0EzQkMsSUFBSTs7O3FCQStCSyxJQUFJIiwiZmlsZSI6IlZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFrZXIgZnJvbSAnLi9NYWtlcic7XG5cbi8qKlxuICogVmlldyBwcm92aWRlcyBhbiBBUEkgZm9yIHR1cm5pbmcgd21sIGludG8gYSBET00gdHJlZS5cbiAqIEFkZGl0aW9uYWxseSBpdCBwcm92aWRlcyBhIGNvbnZlbmllbnQgQVBJIGZvciByZXRyZWl2aW5nIGNyZWF0ZWRcbiAqIHdpZGdldHMgY3JlYXRlZCBkdXJpbmcgcGFyc2luZyBwcm92aWRpbmcgYW4gbmVhciBjdXN0b20gZWxlbWVudHNcbiAqIGxpa2UgZmVlbC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHRlbXBsYXRlIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHRyZWF0ZWQgYXMgYSB3bWwgdGVtcGxhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dCBBbGwgcmVmZXJlbmNlcyB0byBgdGhpc2AgaW4gdGhlIHRlbXBsYXRlIHdpbGwgcmVmZXIgdG8gdGhpcyBvYmplY3QuXG4gKi9cbmNsYXNzIFZpZXcge1xuXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUsIGNvbnRleHQpIHtcblxuICAgICAgICB0aGlzLl9tYWtlciA9IG5ldyBNYWtlcih0ZW1wbGF0ZSwgY29udGV4dCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmaW5kQnlJZCByZXRyaWV2ZXMgYW4gZWxlbWVudCBieSBpdHMgd21sOmlkIGF0dHJpYnV0ZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBcbiAgICAgKi9cbiAgICBmaW5kQnlJZChpZCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9tYWtlci5maW5kQnlJZChpZCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZW5kZXIgcHJvdmlkZXMgdGhlIERPTSBvdXRwdXQgb2YgdGhpcyB2aWV3LlxuICAgICAqIEByZXR1cm4ge0RPTU5vZGV9IFxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbWFrZXIucmVuZGVyKCk7XG5cbiAgICB9XG5cblxufVxuZXhwb3J0IGRlZmF1bHQgVmlld1xuIl19