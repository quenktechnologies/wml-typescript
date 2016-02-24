'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _CompositeNode = require('./CompositeNode');

var _CompositeNode2 = _interopRequireDefault(_CompositeNode);

/**
 * WMLTree is our version of the DOM.
 * It's pretty low tech but the idea is to use this
 * so we can pretend the DOM supports custom elements.
 *
 * The API of interest to the end user is the findById()
 * method that allows registered widgets to be retrieved much
 * like you would DOM nodes.
 *
 * @param {array} tree 
 *
 */

var WMLTree = (function () {
    function WMLTree(tree) {
        _classCallCheck(this, WMLTree);

        this.root = new _CompositeNode2['default'](tree);
        this._ids = Object.create(null);
    }

    /**
     * findById retrives a widget based on an id, works only if the
     * widget had an 'data-wml-id' attribute attached to it.
     * NOTE: The root widget is not accesible this way
     * @param {string} id 
     * @returns {object|null}
     */

    _createClass(WMLTree, [{
        key: 'findById',
        value: function findById(id) {

            return this._ids[ids] ? this._ids[id] : null;
        }

        /**
         * register a widget so that is can be retrived later
         * @param {string} id 
         * @param {object} widget 
         */
    }, {
        key: 'register',
        value: function register(id, widget) {

            if (this._ids[id]) throw new Error('Duplicate id ' + id + ' detected!');

            this._ids[id] = widget;
        }

        /**
         * render this tree into the DOM
         * @param {HTMLElement} target 
         */
    }, {
        key: 'render',
        value: function render(target) {

            target.appendChild(this.root.render(this));
        }
    }]);

    return WMLTree;
})();

exports['default'] = WMLTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9XTUxUcmVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs2QkFBMEIsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7OztJQWNyQyxPQUFPO0FBRUUsYUFGVCxPQUFPLENBRUcsSUFBSSxFQUFFOzhCQUZoQixPQUFPOztBQUdMLFlBQUksQ0FBQyxJQUFJLEdBQUcsK0JBQWtCLElBQUksQ0FBQyxDQUFDO0FBQ3BDLFlBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQzs7Ozs7Ozs7OztpQkFMQyxPQUFPOztlQWNELGtCQUFDLEVBQUUsRUFBRTs7QUFFVCxtQkFBTyxBQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7U0FFbEQ7Ozs7Ozs7OztlQU9PLGtCQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUU7O0FBRWpCLGdCQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQ2IsTUFBTSxJQUFJLEtBQUssbUJBQWlCLEVBQUUsZ0JBQWEsQ0FBQzs7QUFFcEQsZ0JBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBRTFCOzs7Ozs7OztlQU1LLGdCQUFDLE1BQU0sRUFBRTs7QUFFWCxrQkFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBRTlDOzs7V0ExQ0MsT0FBTzs7O3FCQThDRSxPQUFPIiwiZmlsZSI6IldNTFRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9zaXRlTm9kZSBmcm9tICcuL0NvbXBvc2l0ZU5vZGUnO1xuXG4vKipcbiAqIFdNTFRyZWUgaXMgb3VyIHZlcnNpb24gb2YgdGhlIERPTS5cbiAqIEl0J3MgcHJldHR5IGxvdyB0ZWNoIGJ1dCB0aGUgaWRlYSBpcyB0byB1c2UgdGhpc1xuICogc28gd2UgY2FuIHByZXRlbmQgdGhlIERPTSBzdXBwb3J0cyBjdXN0b20gZWxlbWVudHMuXG4gKlxuICogVGhlIEFQSSBvZiBpbnRlcmVzdCB0byB0aGUgZW5kIHVzZXIgaXMgdGhlIGZpbmRCeUlkKClcbiAqIG1ldGhvZCB0aGF0IGFsbG93cyByZWdpc3RlcmVkIHdpZGdldHMgdG8gYmUgcmV0cmlldmVkIG11Y2hcbiAqIGxpa2UgeW91IHdvdWxkIERPTSBub2Rlcy5cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSB0cmVlIFxuICpcbiAqL1xuY2xhc3MgV01MVHJlZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0cmVlKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBDb21wb3NpdGVOb2RlKHRyZWUpO1xuICAgICAgICB0aGlzLl9pZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGZpbmRCeUlkIHJldHJpdmVzIGEgd2lkZ2V0IGJhc2VkIG9uIGFuIGlkLCB3b3JrcyBvbmx5IGlmIHRoZVxuICAgICAqIHdpZGdldCBoYWQgYW4gJ2RhdGEtd21sLWlkJyBhdHRyaWJ1dGUgYXR0YWNoZWQgdG8gaXQuXG4gICAgICogTk9URTogVGhlIHJvb3Qgd2lkZ2V0IGlzIG5vdCBhY2Nlc2libGUgdGhpcyB3YXlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgICAqL1xuICAgIGZpbmRCeUlkKGlkKSB7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLl9pZHNbaWRzXSkgPyB0aGlzLl9pZHNbaWRdIDogbnVsbDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlZ2lzdGVyIGEgd2lkZ2V0IHNvIHRoYXQgaXMgY2FuIGJlIHJldHJpdmVkIGxhdGVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB3aWRnZXQgXG4gICAgICovXG4gICAgcmVnaXN0ZXIoaWQsIHdpZGdldCkge1xuXG4gICAgICAgIGlmICh0aGlzLl9pZHNbaWRdKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGUgaWQgJHtpZH0gZGV0ZWN0ZWQhYCk7XG5cbiAgICAgICAgdGhpcy5faWRzW2lkXSA9IHdpZGdldDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlbmRlciB0aGlzIHRyZWUgaW50byB0aGUgRE9NXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IFxuICAgICAqL1xuICAgIHJlbmRlcih0YXJnZXQpIHtcblxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5yb290LnJlbmRlcih0aGlzKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV01MVHJlZVxuIl19