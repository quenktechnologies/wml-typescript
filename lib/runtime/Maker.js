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

            var e = document.createElement(tag);
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

            return (predicate ? positive() : negative()) || [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL01ha2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUU7O0FBRXJCLFFBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFDcEIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTtlQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0tBQUEsQ0FBQyxDQUFDOztBQUU3RCxRQUFJLEtBQUssRUFDTCxDQUFDLENBQUMsV0FBVyxDQUNULEFBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxHQUMxQixLQUFLLEdBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztDQUUxRDs7Ozs7Ozs7SUFPSyxLQUFLO0FBRUksYUFGVCxLQUFLLENBRUssUUFBUSxFQUFFLE9BQU8sRUFBRTs4QkFGN0IsS0FBSzs7QUFJSCxZQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixZQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNqQixZQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztBQUMxQixZQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztLQUUzQjs7aUJBVEMsS0FBSzs7ZUFXRSxtQkFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFOztBQUVoQixnQkFBSSxLQUFLLEtBQUssSUFBSSxFQUFFLE9BQU87O0FBRTNCLGdCQUFJLEVBQUUsR0FBRyxBQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUksS0FBSyxDQUFDLEVBQUUsZUFBYSxJQUFJLENBQUMsT0FBTyxBQUFFLENBQUM7O0FBRTFELGdCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOztBQUVoQyxnQkFBSSxJQUFJLENBQUMs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QUV2RTs7QUFFRCxtQkFBTyxFQUFFLENBQUM7U0FDYjs7Ozs7Ozs7O2VBT08sa0JBQUMsRUFBRSxFQUFFOztBQUVULG1CQUFPLEFBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUVuRDs7Ozs7Ozs7ZUFNSyxrQkFBRzs7QUFFTCxnQkFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsbUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUVuRDs7O1dBeklDLEtBQUs7OztxQkE2SUksS0FBSyIsImZpbGUiOiJNYWtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIEludGVyZmFjZSBmb3IgRWxlbWVudHNcbiAqIEBpbnRlcmZhY2UgRWxlbWVudFxuICpcbiAqL1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3Igb2JqZWN0cyB0aGF0IGNyZWF0ZSBFbGVtZW50c1xuICogQGludGVyZmFjZSBGYWN0b3J5XG4gKi9cblxuLyoqXG4gKiBcbiAqIGNyZWF0ZSB0aGUgZWxlbWVudFxuICpcbiAqIEBmdW5jdGlvblxuICogQG5hbWUgRmFjdG9yeS5jcmVhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBodG1sQXR0cmlidXRlcyBBIGhhc2ggb2YgYXR0cmlidXRlcyBleHBlY3RlZCB0byBiZSBwYXNzZWQgaW50byBET00uXG4gKiBAcGFyYW0ge29iamVjdH0gbnNBdHRyaWJ1dGVzICAgQSBoYXNoIG9mIG5hbWVzcGFjZWQgYXR0cmlidXRlcyBmb3IgZnJhbWV3b3JrIHVzYWdlLlxuICovXG5cbi8qKlxuICpAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZG9wdChjaGlsZCwgZSkge1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKVxuICAgICAgICByZXR1cm4gY2hpbGQuZm9yRWFjaChpbm5lckNoaWxkID0+IGFkb3B0KGlubmVyQ2hpbGQsIGUpKTtcblxuICAgIGlmIChjaGlsZClcbiAgICAgICAgZS5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICh0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnKSA/XG4gICAgICAgICAgICBjaGlsZCA6ICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCB8fCAnJykpO1xuXG59XG5cbi8qKlxuICogTWFrZXIgaXMgdXNlZCBieSBhIHdtbCBqYXZhc2NyaXB0IHRlbXBsYXRlIHRvIGNyZWF0ZSBhc3NldHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0ZW1wbGF0ZSBcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFxuICovXG5jbGFzcyBNYWtlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgY29udGV4dCkge1xuXG4gICAgICAgIHRoaXMuX2xpc3QgPSB7fTtcbiAgICAgICAgdGhpcy5fbmV4dElkID0gMDtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB9XG5cbiAgICBfcmVnaXN0ZXIoZSwgYXR0cnMpIHtcblxuICAgICAgICBpZiAoYXR0cnMgPT09IG51bGwpIHJldHVybjtcblxuICAgICAgICB2YXIgaWQgPSAoYXR0cnMuaWQpID8gYXR0cnMuaWQgOiBgZWxlbWVudCR7dGhpcy5fbmV4dElkfWA7XG5cbiAgICAgICAgdGhpcy5fbmV4dElkID0gdGhpcy5fbmV4dElkICsgMTtcblxuICAgICAgICBpZiAodGhpcy5fbGlzdC5oYXNPd25Qcm9wZXJ0eShpZCkpXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYER1cGxpY2F0ZSB3bWwgaWQgJHtpZH0gZm91bmQsIGN1cnJlbnRseSB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgaXMgdG9cbiAgICAgICAgICAgICAgb3ZlcndyaXRlIGJ1dCB0aGlzIG1heSBjaGFuZ2UgYXQgc29tZSBwb2ludCFgKTtcblxuICAgICAgICB0aGlzLl9saXN0W2lkXSA9IGU7XG5cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRleHQgY3JlYXRlcyBhIERPTVRleHROb2RlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFxuICAgICAqL1xuICAgIHRleHQodmFsdWUpIHtcblxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUgfHwgJycpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbm9kZSBpcyBjYWxsZWQgdG8gY3JlYXRlIGEgcmVndWxhciBET00gbm9kZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXMgXG4gICAgICogQHBhcmFtIHthcnJheTxzdHJpbmd8bnVtYmVyfEVsZW1lbnQ+fSBjaGlsZHJlbiBcbiAgICAgKi9cbiAgICBub2RlKHRhZywgYXR0cmlidXRlcywgY2hpbGRyZW4pIHtcblxuICAgICAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICAgICAgdmFyIGF0dHJzID0gYXR0cmlidXRlcy5odG1sO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMuaHRtbCkuZm9yRWFjaChrZXkgPT4ge1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMuaHRtbFtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZVtrZXldID0gYXR0cmlidXRlcy5odG1sW2tleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlcy5odG1sW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGMgPT4gYWRvcHQoYywgZSkpO1xuICAgICAgICB0aGlzLl9yZWdpc3RlcihlLCBhdHRyaWJ1dGVzLm5zLndtbCB8fCBudWxsKTtcbiAgICAgICAgcmV0dXJuIGU7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBlbGVtZW50IGNyZWF0ZXMgYSB3bWwgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBDb25zdHJ1dG9yIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzIFxuICAgICAqIEBwYXJhbSB7YXJyYXk8c3RyaW5nfG51bWJlcnxFbGVtZW50Pn0gY2hpbGRyZW4gXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBlbGVtZW50KENvbnN0cnVjdG9yLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbikge1xuXG4gICAgICAgIHZhciBjaGlsZHMgPSBbXTtcbiAgICAgICAgdmFyIGU7XG5cbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBBcnJheS5pc0FycmF5KGNoaWxkKSA/XG4gICAgICAgICAgICBjaGlsZHMucHVzaC5hcHBseShjaGlsZHMsIGNoaWxkKSA6IGNoaWxkcy5wdXNoKGNoaWxkKSk7XG5cbiAgICAgICAgZSA9IG5ldyBDb25zdHJ1Y3RvcihhdHRyaWJ1dGVzLCBjaGlsZHMpO1xuICAgICAgICB0aGlzLl9yZWdpc3RlcihlLCBhdHRyaWJ1dGVzLm5zLndtbCB8fCBudWxsKTtcbiAgICAgICAgcmV0dXJuIGUucmVuZGVyKCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpZmNvbmRpdGlvbiBpcyBjYWxsZWQgdG8gY3JlYXRlIGFuIGlmIGNvbmRpdGlvbmFsIGNvbnN0cnVjdFxuICAgICAqIEBwYXJhbSB7Kn0gcHJlZGljYXRlIFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHBvc2l0aXZlIFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG5lZ2F0aXZlIFxuICAgICAqL1xuICAgIGlmY29uZGl0aW9uKHByZWRpY2F0ZSwgcG9zaXRpdmUsIG5lZ2F0aXZlKSB7XG5cbiAgICAgICAgcmV0dXJuICgocHJlZGljYXRlKSA/IHBvc2l0aXZlKCkgOiBuZWdhdGl2ZSgpKSB8fCBbXTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGZvcmxvb3AgaXMgY2FsbGVkIHRvIGNyZWF0ZSBhIGZvciBsb29wIGNvbnN0cnVjdFxuICAgICAqIEBwYXJhbSB7SXRlcmFibGV9IGNvbGxlY3Rpb24gXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgXG4gICAgICovXG4gICAgZm9ybG9vcChjb2xsZWN0aW9uLCBjYikge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbGxlY3Rpb24pKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uLm1hcChjYik7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29sbGVjdGlvbiA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pLm1hcChrZXkgPT4gY2IoY29sbGVjdGlvbltrZXldLCBrZXkpKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGZpbmRCeUlkIHJldHVybnMgYSB3aWRnZXQgZnJvbSB0aGUgaW50ZXJuYWwgbGlzdC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqL1xuICAgIGZpbmRCeUlkKGlkKSB7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLl9saXN0W2lkXSkgPyB0aGlzLl9saXN0W2lkXSA6IG51bGw7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZW5kZXIgdGhlIERPTS5cbiAgICAgKiBAcmV0dXJuIHtET01UcmVlfVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcblxuICAgICAgICB0aGlzLl9saXN0ID0ge307XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZS5jYWxsKHRoaXMuX2NvbnRleHQsIHRoaXMpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1ha2VyXG4iXX0=