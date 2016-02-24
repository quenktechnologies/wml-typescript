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

        this.root = new _CompositeNode2['default'](tree[0], tree[1], tree[2], this);
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

            target.appendChild(this.root.toDOMNode());
        }
    }]);

    return WMLTree;
})();

exports['default'] = WMLTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9XTUxUcmVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs2QkFBMEIsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7OztJQWNyQyxPQUFPO0FBRUUsYUFGVCxPQUFPLENBRUcsSUFBSSxFQUFFOzhCQUZoQixPQUFPOztBQUdMLFlBQUksQ0FBQyxJQUFJLEdBQUcsK0JBQWtCLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9ELFlBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQzs7Ozs7Ozs7OztpQkFMQyxPQUFPOztlQWNELGtCQUFDLEVBQUUsRUFBRTs7QUFFVCxtQkFBTyxBQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7U0FFbEQ7Ozs7Ozs7OztlQU9PLGtCQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUU7O0FBRWpCLGdCQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQ2IsTUFBTSxJQUFJLEtBQUssbUJBQWlCLEVBQUUsZ0JBQWEsQ0FBQzs7QUFFcEQsZ0JBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBRTFCOzs7Ozs7OztlQU1LLGdCQUFDLE1BQU0sRUFBRTs7QUFFWCxrQkFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FFN0M7OztXQTFDQyxPQUFPOzs7cUJBOENFLE9BQU8iLCJmaWxlIjoiV01MVHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb3NpdGVOb2RlIGZyb20gJy4vQ29tcG9zaXRlTm9kZSc7XG5cbi8qKlxuICogV01MVHJlZSBpcyBvdXIgdmVyc2lvbiBvZiB0aGUgRE9NLlxuICogSXQncyBwcmV0dHkgbG93IHRlY2ggYnV0IHRoZSBpZGVhIGlzIHRvIHVzZSB0aGlzXG4gKiBzbyB3ZSBjYW4gcHJldGVuZCB0aGUgRE9NIHN1cHBvcnRzIGN1c3RvbSBlbGVtZW50cy5cbiAqXG4gKiBUaGUgQVBJIG9mIGludGVyZXN0IHRvIHRoZSBlbmQgdXNlciBpcyB0aGUgZmluZEJ5SWQoKVxuICogbWV0aG9kIHRoYXQgYWxsb3dzIHJlZ2lzdGVyZWQgd2lkZ2V0cyB0byBiZSByZXRyaWV2ZWQgbXVjaFxuICogbGlrZSB5b3Ugd291bGQgRE9NIG5vZGVzLlxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IHRyZWUgXG4gKlxuICovXG5jbGFzcyBXTUxUcmVlIHtcblxuICAgIGNvbnN0cnVjdG9yKHRyZWUpIHtcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IENvbXBvc2l0ZU5vZGUodHJlZVswXSwgdHJlZVsxXSwgdHJlZVsyXSwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2lkcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZmluZEJ5SWQgcmV0cml2ZXMgYSB3aWRnZXQgYmFzZWQgb24gYW4gaWQsIHdvcmtzIG9ubHkgaWYgdGhlXG4gICAgICogd2lkZ2V0IGhhZCBhbiAnZGF0YS13bWwtaWQnIGF0dHJpYnV0ZSBhdHRhY2hlZCB0byBpdC5cbiAgICAgKiBOT1RFOiBUaGUgcm9vdCB3aWRnZXQgaXMgbm90IGFjY2VzaWJsZSB0aGlzIHdheVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgZmluZEJ5SWQoaWQpIHtcblxuICAgICAgICByZXR1cm4gKHRoaXMuX2lkc1tpZHNdKSA/IHRoaXMuX2lkc1tpZF0gOiBudWxsO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVnaXN0ZXIgYSB3aWRnZXQgc28gdGhhdCBpcyBjYW4gYmUgcmV0cml2ZWQgbGF0ZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHdpZGdldCBcbiAgICAgKi9cbiAgICByZWdpc3RlcihpZCwgd2lkZ2V0KSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX2lkc1tpZF0pXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZSBpZCAke2lkfSBkZXRlY3RlZCFgKTtcblxuICAgICAgICB0aGlzLl9pZHNbaWRdID0gd2lkZ2V0O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVuZGVyIHRoaXMgdHJlZSBpbnRvIHRoZSBET01cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgXG4gICAgICovXG4gICAgcmVuZGVyKHRhcmdldCkge1xuXG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLnJvb3QudG9ET01Ob2RlKCkpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdNTFRyZWVcbiJdfQ==