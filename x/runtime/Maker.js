/**
 *
 * Interface for Elements
 * @interface Element
 *
 */

/**
 * Interface for objects that create Elements
 * @interface Factory
 */

/**
 * 
 * create the element
 *
 * @function
 * @name Factory.create
 * @param {object} htmlAttributes A hash of attributes expected to be passed into DOM.
 * @param {object} nsAttributes   A hash of namespaced attributes for framework usage.
 */

/**
 *@private
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function adopt(child, e) {

    if (Array.isArray(child)) return child.forEach(function (innerChild) {
        return adopt(innerChild, e);
    });

    if (child) e.appendChild(typeof child === 'object' ? child : document.createTextNode(child || ''));
}

/**
 * Maker is used by a wml javascript template to create assets.
 * @param {function} template 
 * @param {object} context 
 */

var Maker = (function () {
    function Maker(template, context) {
        _classCallCheck(this, Maker);

        this._list = {};
        this._nextId = 0;
        this._template = template;
        this._context = context;
    }

    _createClass(Maker, [{
        key: '_register',
        value: function _register(e, attrs) {

            if (attrs === null) return;

            var id = attrs.id ? attrs.id : 'element' + this._nextId;

            this._nextId = this._nextId + 1;

            if (this._list.hasOwnProperty(id)) console.warn('Duplicate wml id ' + id + ' found, currently the default behaviour is to\n              overwrite but this may change at some point!');

            this._list[id] = e;
        }

        /**
         * text creates a DOMTextNode
         * @param {string} value 
         */
    }, {
        key: 'text',
        value: function text(value) {

            return document.createTextNode(value || '');
        }

        /**
         * node is called to create a regular DOM node
         * @param {string} tag 
         * @param {object} attributes 
         * @param {array<string|number|Element>} children 
         */
    }, {
        key: 'node',
        value: function node(tag, attributes, children) {

            var e = tag === 'fragment' ? document.createDocumentFragment() : document.createElement(tag);
            var attrs = attributes.html;

            Object.keys(attributes.html).forEach(function (key) {

                if (typeof attributes.html[key] === 'function') {
                    e[key] = attributes.html[key];
                } else {
                    e.setAttribute(key, attributes.html[key]);
                }
            });

            children.forEach(function (c) {
                return adopt(c, e);
            });
            this._register(e, attributes.ns.wml || null);
            return e;
        }

        /**
         * element creates a wml element.
         * @param {function} Construtor 
         * @param {object} attributes 
         * @param {array<string|number|Element>} children 
         * @return {Element}
         */
    }, {
        key: 'element',
        value: function element(Constructor, attributes, children) {

            var childs = [];
            var e;

            children.forEach(function (child) {
                return Array.isArray(child) ? childs.push.apply(childs, child) : childs.push(child);
            });

            e = new Constructor(attributes, childs);
            this._register(e, attributes.ns.wml || null);
            return e.render();
        }

        /**
         * ifcondition is called to create an if conditional construct
         * @param {*} predicate 
         * @param {function} positive 
         * @param {function} negative 
         */
    }, {
        key: 'ifcondition',
        value: function ifcondition(predicate, positive, negative) {

            return predicate ? positive() : negative();
        }

        /**
         * forloop is called to create a for loop construct
         * @param {Iterable} collection 
         * @param {function} cb 
         */
    }, {
        key: 'forloop',
        value: function forloop(collection, cb) {

            if (Array.isArray(collection)) {

                return collection.map(cb);
            } else if (typeof collection === 'object') {

                return Object.keys(collection).map(function (key) {
                    return cb(collection[key], key);
                });
            }

            return [];
        }

        /**
         * findById returns a widget from the internal list.
         * @param {string} id 
         * @return {object}
         */
    }, {
        key: 'findById',
        value: function findById(id) {

            return this._list[id] ? this._list[id] : null;
        }

        /**
         * render the DOM.
         * @return {DOMTree}
         */
    }, {
        key: 'render',
        value: function render() {

            this._list = {};
            return this._template.call(this._context, this);
        }
    }]);

    return Maker;
})();

exports['default'] = Maker;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL01ha2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUU7O0FBRXJCLFFBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFDcEIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTtlQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0tBQUEsQ0FBQyxDQUFDOztBQUU3RCxRQUFJLEtBQUssRUFDTCxDQUFDLENBQUMsV0FBVyxDQUNULEFBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxHQUMxQixLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztDQUV6RDs7Ozs7Ozs7SUFPSyxLQUFLO0FBRUksYUFGVCxLQUFLLENBRUssUUFBUSxFQUFFLE9BQU8sRUFBRTs4QkFGN0IsS0FBSzs7QUFJSCxZQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixZQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNqQixZQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztBQUMxQixZQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztLQUUzQjs7aUJBVEMsS0FBSzs7ZUFXRSxtQkFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFOztBQUVoQixnQkFBSSxLQUFLLEtBQUssSUFBSSxFQUFFLE9BQU87O0FBRTNCLGdCQUFJLEVBQUUsR0FBRyxBQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUksS0FBSyxDQUFDLEVBQUUsZUFBYSxJQUFJLENBQUMsT0FBTyxBQUFFLENBQUM7O0FBRTFELGdCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOztBQUVoQyxnQkFBSSxJQUFJLENBQUMs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RUFBRSxHQUFHLENBQUM7aUJBQUEsQ0FBQyxDQUFDO2FBRXZFOztBQUVELG1CQUFPLEVBQUUsQ0FBQztTQUNiOzs7Ozs7Ozs7ZUFPTyxrQkFBQyxFQUFFLEVBQUU7O0FBRVQsbUJBQU8sQUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBRW5EOzs7Ozs7OztlQU1LLGtCQUFHOztBQUVMLGdCQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixtQkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBRW5EOzs7V0F6SUMsS0FBSzs7O3FCQTZJSSxLQUFLIiwiZmlsZSI6Ik1ha2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogSW50ZXJmYWNlIGZvciBFbGVtZW50c1xuICogQGludGVyZmFjZSBFbGVtZW50XG4gKlxuICovXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBvYmplY3RzIHRoYXQgY3JlYXRlIEVsZW1lbnRzXG4gKiBAaW50ZXJmYWNlIEZhY3RvcnlcbiAqL1xuXG4vKipcbiAqIFxuICogY3JlYXRlIHRoZSBlbGVtZW50XG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAbmFtZSBGYWN0b3J5LmNyZWF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGh0bWxBdHRyaWJ1dGVzIEEgaGFzaCBvZiBhdHRyaWJ1dGVzIGV4cGVjdGVkIHRvIGJlIHBhc3NlZCBpbnRvIERPTS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBuc0F0dHJpYnV0ZXMgICBBIGhhc2ggb2YgbmFtZXNwYWNlZCBhdHRyaWJ1dGVzIGZvciBmcmFtZXdvcmsgdXNhZ2UuXG4gKi9cblxuLyoqXG4gKkBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkb3B0KGNoaWxkLCBlKSB7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpXG4gICAgICAgIHJldHVybiBjaGlsZC5mb3JFYWNoKGlubmVyQ2hpbGQgPT4gYWRvcHQoaW5uZXJDaGlsZCwgZSkpO1xuXG4gICAgaWYgKGNoaWxkKVxuICAgICAgICBlLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgKHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcpID9cbiAgICAgICAgICAgIGNoaWxkIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQgfHwgJycpKTtcblxufVxuXG4vKipcbiAqIE1ha2VyIGlzIHVzZWQgYnkgYSB3bWwgamF2YXNjcmlwdCB0ZW1wbGF0ZSB0byBjcmVhdGUgYXNzZXRzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gdGVtcGxhdGUgXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBcbiAqL1xuY2xhc3MgTWFrZXIge1xuXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUsIGNvbnRleHQpIHtcblxuICAgICAgICB0aGlzLl9saXN0ID0ge307XG4gICAgICAgIHRoaXMuX25leHRJZCA9IDA7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgfVxuXG4gICAgX3JlZ2lzdGVyKGUsIGF0dHJzKSB7XG5cbiAgICAgICAgaWYgKGF0dHJzID09PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGlkID0gKGF0dHJzLmlkKSA/IGF0dHJzLmlkIDogYGVsZW1lbnQke3RoaXMuX25leHRJZH1gO1xuXG4gICAgICAgIHRoaXMuX25leHRJZCA9IHRoaXMuX25leHRJZCArIDE7XG5cbiAgICAgICAgaWYgKHRoaXMuX2xpc3QuaGFzT3duUHJvcGVydHkoaWQpKVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBEdXBsaWNhdGUgd21sIGlkICR7aWR9IGZvdW5kLCBjdXJyZW50bHkgdGhlIGRlZmF1bHQgYmVoYXZpb3VyIGlzIHRvXG4gICAgICAgICAgICAgIG92ZXJ3cml0ZSBidXQgdGhpcyBtYXkgY2hhbmdlIGF0IHNvbWUgcG9pbnQhYCk7XG5cbiAgICAgICAgdGhpcy5fbGlzdFtpZF0gPSBlO1xuXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0ZXh0IGNyZWF0ZXMgYSBET01UZXh0Tm9kZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBcbiAgICAgKi9cbiAgICB0ZXh0KHZhbHVlKSB7XG5cbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlIHx8ICcnKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG5vZGUgaXMgY2FsbGVkIHRvIGNyZWF0ZSBhIHJlZ3VsYXIgRE9NIG5vZGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzIFxuICAgICAqIEBwYXJhbSB7YXJyYXk8c3RyaW5nfG51bWJlcnxFbGVtZW50Pn0gY2hpbGRyZW4gXG4gICAgICovXG4gICAgbm9kZSh0YWcsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKSB7XG5cbiAgICAgICAgdmFyIGUgPSAodGFnID09PSAnZnJhZ21lbnQnKSA/IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICAgICAgdmFyIGF0dHJzID0gYXR0cmlidXRlcy5odG1sO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMuaHRtbCkuZm9yRWFjaChrZXkgPT4ge1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMuaHRtbFtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZVtrZXldID0gYXR0cmlidXRlcy5odG1sW2tleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlcy5odG1sW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGMgPT4gYWRvcHQoYywgZSkpO1xuICAgICAgICB0aGlzLl9yZWdpc3RlcihlLCBhdHRyaWJ1dGVzLm5zLndtbCB8fCBudWxsKTtcbiAgICAgICAgcmV0dXJuIGU7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBlbGVtZW50IGNyZWF0ZXMgYSB3bWwgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBDb25zdHJ1dG9yIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzIFxuICAgICAqIEBwYXJhbSB7YXJyYXk8c3RyaW5nfG51bWJlcnxFbGVtZW50Pn0gY2hpbGRyZW4gXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBlbGVtZW50KENvbnN0cnVjdG9yLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbikge1xuXG4gICAgICAgIHZhciBjaGlsZHMgPSBbXTtcbiAgICAgICAgdmFyIGU7XG5cbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBBcnJheS5pc0FycmF5KGNoaWxkKSA/XG4gICAgICAgICAgICBjaGlsZHMucHVzaC5hcHBseShjaGlsZHMsIGNoaWxkKSA6IGNoaWxkcy5wdXNoKGNoaWxkKSk7XG5cbiAgICAgICAgZSA9IG5ldyBDb25zdHJ1Y3RvcihhdHRyaWJ1dGVzLCBjaGlsZHMpO1xuICAgICAgICB0aGlzLl9yZWdpc3RlcihlLCBhdHRyaWJ1dGVzLm5zLndtbCB8fCBudWxsKTtcbiAgICAgICAgcmV0dXJuIGUucmVuZGVyKCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpZmNvbmRpdGlvbiBpcyBjYWxsZWQgdG8gY3JlYXRlIGFuIGlmIGNvbmRpdGlvbmFsIGNvbnN0cnVjdFxuICAgICAqIEBwYXJhbSB7Kn0gcHJlZGljYXRlIFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHBvc2l0aXZlIFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG5lZ2F0aXZlIFxuICAgICAqL1xuICAgIGlmY29uZGl0aW9uKHByZWRpY2F0ZSwgcG9zaXRpdmUsIG5lZ2F0aXZlKSB7XG5cbiAgICAgICAgcmV0dXJuIChwcmVkaWNhdGUpID8gcG9zaXRpdmUoKSA6IG5lZ2F0aXZlKCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmb3Jsb29wIGlzIGNhbGxlZCB0byBjcmVhdGUgYSBmb3IgbG9vcCBjb25zdHJ1Y3RcbiAgICAgKiBAcGFyYW0ge0l0ZXJhYmxlfSBjb2xsZWN0aW9uIFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFxuICAgICAqL1xuICAgIGZvcmxvb3AoY29sbGVjdGlvbiwgY2IpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb2xsZWN0aW9uKSkge1xuXG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAoY2IpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbGxlY3Rpb24gPT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjb2xsZWN0aW9uKS5tYXAoa2V5ID0+IGNiKGNvbGxlY3Rpb25ba2V5XSwga2V5KSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmaW5kQnlJZCByZXR1cm5zIGEgd2lkZ2V0IGZyb20gdGhlIGludGVybmFsIGxpc3QuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgKi9cbiAgICBmaW5kQnlJZChpZCkge1xuXG4gICAgICAgIHJldHVybiAodGhpcy5fbGlzdFtpZF0pID8gdGhpcy5fbGlzdFtpZF0gOiBudWxsO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVuZGVyIHRoZSBET00uXG4gICAgICogQHJldHVybiB7RE9NVHJlZX1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdGhpcy5fbGlzdCA9IHt9O1xuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGUuY2FsbCh0aGlzLl9jb250ZXh0LCB0aGlzKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWtlclxuIl19