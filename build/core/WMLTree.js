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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL1dNTFRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzZCQUEwQixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBY3JDLE9BQU87QUFFRSxhQUZULE9BQU8sQ0FFRyxJQUFJLEVBQUU7OEJBRmhCLE9BQU87O0FBR0wsWUFBSSxDQUFDLElBQUksR0FBRywrQkFBa0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDL0QsWUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DOzs7Ozs7Ozs7O2lCQUxDLE9BQU87O2VBY0Qsa0JBQUMsRUFBRSxFQUFFOztBQUVULG1CQUFPLEFBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUVsRDs7Ozs7Ozs7O2VBT08sa0JBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRTs7QUFFakIsZ0JBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFDYixNQUFNLElBQUksS0FBSyxtQkFBaUIsRUFBRSxnQkFBYSxDQUFDOztBQUVwRCxnQkFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7U0FFMUI7Ozs7Ozs7O2VBTUssZ0JBQUMsTUFBTSxFQUFFOztBQUVYLGtCQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUU3Qzs7O1dBMUNDLE9BQU87OztxQkE4Q0UsT0FBTyIsImZpbGUiOiJXTUxUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvc2l0ZU5vZGUgZnJvbSAnLi9Db21wb3NpdGVOb2RlJztcblxuLyoqXG4gKiBXTUxUcmVlIGlzIG91ciB2ZXJzaW9uIG9mIHRoZSBET00uXG4gKiBJdCdzIHByZXR0eSBsb3cgdGVjaCBidXQgdGhlIGlkZWEgaXMgdG8gdXNlIHRoaXNcbiAqIHNvIHdlIGNhbiBwcmV0ZW5kIHRoZSBET00gc3VwcG9ydHMgY3VzdG9tIGVsZW1lbnRzLlxuICpcbiAqIFRoZSBBUEkgb2YgaW50ZXJlc3QgdG8gdGhlIGVuZCB1c2VyIGlzIHRoZSBmaW5kQnlJZCgpXG4gKiBtZXRob2QgdGhhdCBhbGxvd3MgcmVnaXN0ZXJlZCB3aWRnZXRzIHRvIGJlIHJldHJpZXZlZCBtdWNoXG4gKiBsaWtlIHlvdSB3b3VsZCBET00gbm9kZXMuXG4gKlxuICogQHBhcmFtIHthcnJheX0gdHJlZSBcbiAqXG4gKi9cbmNsYXNzIFdNTFRyZWUge1xuXG4gICAgY29uc3RydWN0b3IodHJlZSkge1xuICAgICAgICB0aGlzLnJvb3QgPSBuZXcgQ29tcG9zaXRlTm9kZSh0cmVlWzBdLCB0cmVlWzFdLCB0cmVlWzJdLCB0aGlzKTtcbiAgICAgICAgdGhpcy5faWRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmaW5kQnlJZCByZXRyaXZlcyBhIHdpZGdldCBiYXNlZCBvbiBhbiBpZCwgd29ya3Mgb25seSBpZiB0aGVcbiAgICAgKiB3aWRnZXQgaGFkIGFuICdkYXRhLXdtbC1pZCcgYXR0cmlidXRlIGF0dGFjaGVkIHRvIGl0LlxuICAgICAqIE5PVEU6IFRoZSByb290IHdpZGdldCBpcyBub3QgYWNjZXNpYmxlIHRoaXMgd2F5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICBmaW5kQnlJZChpZCkge1xuXG4gICAgICAgIHJldHVybiAodGhpcy5faWRzW2lkc10pID8gdGhpcy5faWRzW2lkXSA6IG51bGw7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWdpc3RlciBhIHdpZGdldCBzbyB0aGF0IGlzIGNhbiBiZSByZXRyaXZlZCBsYXRlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gd2lkZ2V0IFxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGlkLCB3aWRnZXQpIHtcblxuICAgICAgICBpZiAodGhpcy5faWRzW2lkXSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRHVwbGljYXRlIGlkICR7aWR9IGRldGVjdGVkIWApO1xuXG4gICAgICAgIHRoaXMuX2lkc1tpZF0gPSB3aWRnZXQ7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZW5kZXIgdGhpcyB0cmVlIGludG8gdGhlIERPTVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCBcbiAgICAgKi9cbiAgICByZW5kZXIodGFyZ2V0KSB7XG5cbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMucm9vdC50b0RPTU5vZGUoKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV01MVHJlZVxuIl19