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

        this.root = null;
        this._tree = tree;
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

            return this._ids[id] ? this._ids[id] : null;
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
         * toDOMNode returns the DOM representation of this tree.
         * @param {object} $this 
         * @return {HTMLElement}
         */
    }, {
        key: 'toDOMNode',
        value: function toDOMNode($this) {

            var tree;

            if (this.root === null) {

                tree = this._tree.call($this || null);
                this.root = new _CompositeNode2['default'](tree[0], tree[1], tree[2], this);
            }

            return this.root.toDOMNode($this);
        }

        /**
         * render this tree into the DOM
         * @param {HTMLElement} target 
         * @param {object} [$this]
         */
    }, {
        key: 'render',
        value: function render(target, $this) {

            target.appendChild(this.toDOMNode($this));
        }
    }]);

    return WMLTree;
})();

exports['default'] = WMLTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL1dNTFRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzZCQUEwQixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBY3JDLE9BQU87QUFFRSxhQUZULE9BQU8sQ0FFRyxJQUFJLEVBQUU7OEJBRmhCLE9BQU87O0FBR0wsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsWUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsWUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DOzs7Ozs7Ozs7O2lCQU5DLE9BQU87O2VBZUQsa0JBQUMsRUFBRSxFQUFFOztBQUVULG1CQUFPLEFBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUVqRDs7Ozs7Ozs7O2VBT08sa0JBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRTs7QUFFakIsZ0JBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFDYixNQUFNLElBQUksS0FBSyxtQkFBaUIsRUFBRSxnQkFBYSxDQUFDOztBQUVwRCxnQkFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7U0FFMUI7Ozs7Ozs7OztlQU9RLG1CQUFDLEtBQUssRUFBRTs7QUFFYixnQkFBSSxJQUFJLENBQUM7O0FBRVQsZ0JBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7O0FBRXBCLG9CQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQ3RDLG9CQUFJLENBQUMsSUFBSSxHQUFHLCtCQUFrQixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUVsRTs7QUFFRCxtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQzs7Ozs7Ozs7O2VBT0ssZ0JBQUMsTUFBTSxFQUFFLEtBQUssRUFBRTs7QUFFbEIsa0JBQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBRTdDOzs7V0EvREMsT0FBTzs7O3FCQW1FRSxPQUFPIiwiZmlsZSI6IldNTFRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9zaXRlTm9kZSBmcm9tICcuL0NvbXBvc2l0ZU5vZGUnO1xuXG4vKipcbiAqIFdNTFRyZWUgaXMgb3VyIHZlcnNpb24gb2YgdGhlIERPTS5cbiAqIEl0J3MgcHJldHR5IGxvdyB0ZWNoIGJ1dCB0aGUgaWRlYSBpcyB0byB1c2UgdGhpc1xuICogc28gd2UgY2FuIHByZXRlbmQgdGhlIERPTSBzdXBwb3J0cyBjdXN0b20gZWxlbWVudHMuXG4gKlxuICogVGhlIEFQSSBvZiBpbnRlcmVzdCB0byB0aGUgZW5kIHVzZXIgaXMgdGhlIGZpbmRCeUlkKClcbiAqIG1ldGhvZCB0aGF0IGFsbG93cyByZWdpc3RlcmVkIHdpZGdldHMgdG8gYmUgcmV0cmlldmVkIG11Y2hcbiAqIGxpa2UgeW91IHdvdWxkIERPTSBub2Rlcy5cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSB0cmVlIFxuICpcbiAqL1xuY2xhc3MgV01MVHJlZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0cmVlKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3RyZWUgPSB0cmVlO1xuICAgICAgICB0aGlzLl9pZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGZpbmRCeUlkIHJldHJpdmVzIGEgd2lkZ2V0IGJhc2VkIG9uIGFuIGlkLCB3b3JrcyBvbmx5IGlmIHRoZVxuICAgICAqIHdpZGdldCBoYWQgYW4gJ2RhdGEtd21sLWlkJyBhdHRyaWJ1dGUgYXR0YWNoZWQgdG8gaXQuXG4gICAgICogTk9URTogVGhlIHJvb3Qgd2lkZ2V0IGlzIG5vdCBhY2Nlc2libGUgdGhpcyB3YXlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgICAqL1xuICAgIGZpbmRCeUlkKGlkKSB7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLl9pZHNbaWRdKSA/IHRoaXMuX2lkc1tpZF0gOiBudWxsO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVnaXN0ZXIgYSB3aWRnZXQgc28gdGhhdCBpcyBjYW4gYmUgcmV0cml2ZWQgbGF0ZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHdpZGdldCBcbiAgICAgKi9cbiAgICByZWdpc3RlcihpZCwgd2lkZ2V0KSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX2lkc1tpZF0pXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZSBpZCAke2lkfSBkZXRlY3RlZCFgKTtcblxuICAgICAgICB0aGlzLl9pZHNbaWRdID0gd2lkZ2V0O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdG9ET01Ob2RlIHJldHVybnMgdGhlIERPTSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHRyZWUuXG4gICAgICogQHBhcmFtIHtvYmplY3R9ICR0aGlzIFxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHRvRE9NTm9kZSgkdGhpcykge1xuXG4gICAgICAgIHZhciB0cmVlO1xuXG4gICAgICAgIGlmICh0aGlzLnJvb3QgPT09IG51bGwpIHtcblxuICAgICAgICAgICAgdHJlZSA9IHRoaXMuX3RyZWUuY2FsbCgkdGhpcyB8fCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IG5ldyBDb21wb3NpdGVOb2RlKHRyZWVbMF0sIHRyZWVbMV0sIHRyZWVbMl0sIHRoaXMpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yb290LnRvRE9NTm9kZSgkdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVuZGVyIHRoaXMgdHJlZSBpbnRvIHRoZSBET01cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFskdGhpc11cbiAgICAgKi9cbiAgICByZW5kZXIodGFyZ2V0LCAkdGhpcykge1xuXG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLnRvRE9NTm9kZSgkdGhpcykpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdNTFRyZWVcbiJdfQ==