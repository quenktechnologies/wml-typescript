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

    e.appendChild(child);
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

            if (this._list.hasOwnProperty(id)) throw new Error('Duplicate wml id \'' + id + '\' discovered!');

            this._list[id] = e;
        }

        /**
         * text creates a DOMTextNode
         * @param {string} value 
         */
    }, {
        key: 'text',
        value: function text(value) {

            return document.createTextNode(value);
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
         * @param {Factory} factory 
         * @param {object} attributes 
         * @param {array<string|number|Element>} children 
         * @return {Element}
         */
    }, {
        key: 'element',
        value: function element(factory, attributes, children) {

            var e = factory.create(attributes.html, attributes.ns);
            children.forEach(function (c) {
                return adopt(c, e);
            });
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

            return this._template.call(this._context, this);
        }
    }]);

    return Maker;
})();

exports['default'] = Maker;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL01ha2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUU7O0FBRXJCLFFBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFDcEIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTtlQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0tBQUEsQ0FBQyxDQUFDOztBQUU3RCxLQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBRXhCOzs7Ozs7OztJQU9LLEtBQUs7QUFFSSxhQUZULEtBQUssQ0FFSyxRQUFRLEVBQUUsT0FBTyxFQUFFOzhCQUY3QixLQUFLOztBQUlILFlBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFlBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQzFCLFlBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0tBRTNCOztpQkFUQyxLQUFLOztlQVdFLG1CQUFDLENBQUMsRUFBRSxLQUFLLEVBQUU7O0FBRWhCLGdCQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsT0FBTzs7QUFFM0IsZ0JBQUksRUFBRSxHQUFHLEFBQUMsS0FBSyxDQUFDLEVBQUUsR0FBSSxLQUFLLENBQUMsRUFBRSxlQUFhLElBQUksQ0FBQyxPQUFPLEFBQUUsQ0FBQzs7QUFFMUQsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7O0FBRWhDLGdCQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUM3QixNQUFNLElBQUksS0FBSyx5QkFBc0IsRUFBRSxvQkFBZ0IsQ0FBQzs7QUFFNUQsZ0JBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBR3RCOzs7Ozs7OztlQU1HLGNBQUMsS0FBSyxFQUFFOztBQUVSLG1CQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7U0FFekM7Ozs7Ozs7Ozs7ZUFRRyxjQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFOztBQUU1QixnQkFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQyxnQkFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQzs7QUFFNUIsa0JBQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsRUFBSTs7QUFFeEMsb0JBQUksT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUM1QyxxQkFBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2pDLE1BQU07QUFDSCxxQkFBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUM3QzthQUNKLENBQUMsQ0FBQzs7QUFFSCxvQkFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7dUJBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUM7QUFDbkMsZ0JBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQzdDLG1CQUFPLENBQUMsQ0FBQztTQUVaOzs7Ozs7Ozs7OztlQVNNLGlCQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFOztBQUVuQyxnQkFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2RCxvQkFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7dUJBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUM7QUFDbkMsZ0JBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQzdDLG1CQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUVyQjs7Ozs7Ozs7OztlQVFVLHFCQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFOztBQUV2QyxtQkFBTyxDQUFDLEFBQUMsU0FBUyxHQUFJLFFBQVEsRUFBRSxHQUFHLFFBQVEsRUFBRSxDQUFBLElBQUssRUFBRSxDQUFDO1NBRXhEOzs7Ozs7Ozs7ZUFPTSxpQkFBQyxVQUFVLEVBQUUsRUFBRSxFQUFFOztBQUVwQixnQkFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFOztBQUUzQix1QkFBTyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBRTdCLE1BQU0sSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7O0FBRXZDLHVCQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRzsyQkFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQztpQkFBQSxDQUFDLENBQUM7YUFFdkU7O0FBRUQsbUJBQU8sRUFBRSxDQUFDO1NBQ2I7Ozs7Ozs7OztlQU9PLGtCQUFDLEVBQUUsRUFBRTs7QUFFVCxtQkFBTyxBQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7U0FFbkQ7Ozs7Ozs7O2VBTUssa0JBQUc7O0FBRUwsbUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUVuRDs7O1dBbElDLEtBQUs7OztxQkFzSUksS0FBSyIsImZpbGUiOiJNYWtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIEludGVyZmFjZSBmb3IgRWxlbWVudHNcbiAqIEBpbnRlcmZhY2UgRWxlbWVudFxuICpcbiAqL1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3Igb2JqZWN0cyB0aGF0IGNyZWF0ZSBFbGVtZW50c1xuICogQGludGVyZmFjZSBGYWN0b3J5XG4gKi9cblxuLyoqXG4gKiBcbiAqIGNyZWF0ZSB0aGUgZWxlbWVudFxuICpcbiAqIEBmdW5jdGlvblxuICogQG5hbWUgRmFjdG9yeS5jcmVhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBodG1sQXR0cmlidXRlcyBBIGhhc2ggb2YgYXR0cmlidXRlcyBleHBlY3RlZCB0byBiZSBwYXNzZWQgaW50byBET00uXG4gKiBAcGFyYW0ge29iamVjdH0gbnNBdHRyaWJ1dGVzICAgQSBoYXNoIG9mIG5hbWVzcGFjZWQgYXR0cmlidXRlcyBmb3IgZnJhbWV3b3JrIHVzYWdlLlxuICovXG5cbi8qKlxuICpAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZG9wdChjaGlsZCwgZSkge1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKVxuICAgICAgICByZXR1cm4gY2hpbGQuZm9yRWFjaChpbm5lckNoaWxkID0+IGFkb3B0KGlubmVyQ2hpbGQsIGUpKTtcblxuICAgIGUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXG59XG5cbi8qKlxuICogTWFrZXIgaXMgdXNlZCBieSBhIHdtbCBqYXZhc2NyaXB0IHRlbXBsYXRlIHRvIGNyZWF0ZSBhc3NldHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0ZW1wbGF0ZSBcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFxuICovXG5jbGFzcyBNYWtlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgY29udGV4dCkge1xuXG4gICAgICAgIHRoaXMuX2xpc3QgPSB7fTtcbiAgICAgICAgdGhpcy5fbmV4dElkID0gMDtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB9XG5cbiAgICBfcmVnaXN0ZXIoZSwgYXR0cnMpIHtcblxuICAgICAgICBpZiAoYXR0cnMgPT09IG51bGwpIHJldHVybjtcblxuICAgICAgICB2YXIgaWQgPSAoYXR0cnMuaWQpID8gYXR0cnMuaWQgOiBgZWxlbWVudCR7dGhpcy5fbmV4dElkfWA7XG5cbiAgICAgICAgdGhpcy5fbmV4dElkID0gdGhpcy5fbmV4dElkICsgMTtcblxuICAgICAgICBpZiAodGhpcy5fbGlzdC5oYXNPd25Qcm9wZXJ0eShpZCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZSB3bWwgaWQgJyR7aWR9JyBkaXNjb3ZlcmVkIWApO1xuXG4gICAgICAgIHRoaXMuX2xpc3RbaWRdID0gZTtcblxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGV4dCBjcmVhdGVzIGEgRE9NVGV4dE5vZGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgXG4gICAgICovXG4gICAgdGV4dCh2YWx1ZSkge1xuXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBub2RlIGlzIGNhbGxlZCB0byBjcmVhdGUgYSByZWd1bGFyIERPTSBub2RlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZyBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyBcbiAgICAgKiBAcGFyYW0ge2FycmF5PHN0cmluZ3xudW1iZXJ8RWxlbWVudD59IGNoaWxkcmVuIFxuICAgICAqL1xuICAgIG5vZGUodGFnLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbikge1xuXG4gICAgICAgIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgICAgICB2YXIgYXR0cnMgPSBhdHRyaWJ1dGVzLmh0bWw7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcy5odG1sKS5mb3JFYWNoKGtleSA9PiB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlcy5odG1sW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBlW2tleV0gPSBhdHRyaWJ1dGVzLmh0bWxba2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzLmh0bWxba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goYyA9PiBhZG9wdChjLCBlKSk7XG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyKGUsIGF0dHJpYnV0ZXMubnMud21sIHx8IG51bGwpO1xuICAgICAgICByZXR1cm4gZTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGVsZW1lbnQgY3JlYXRlcyBhIHdtbCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7RmFjdG9yeX0gZmFjdG9yeSBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyBcbiAgICAgKiBAcGFyYW0ge2FycmF5PHN0cmluZ3xudW1iZXJ8RWxlbWVudD59IGNoaWxkcmVuIFxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgZWxlbWVudChmYWN0b3J5LCBhdHRyaWJ1dGVzLCBjaGlsZHJlbikge1xuXG4gICAgICAgIHZhciBlID0gZmFjdG9yeS5jcmVhdGUoYXR0cmlidXRlcy5odG1sLCBhdHRyaWJ1dGVzLm5zKTtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjID0+IGFkb3B0KGMsIGUpKTtcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXIoZSwgYXR0cmlidXRlcy5ucy53bWwgfHwgbnVsbCk7XG4gICAgICAgIHJldHVybiBlLnJlbmRlcigpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaWZjb25kaXRpb24gaXMgY2FsbGVkIHRvIGNyZWF0ZSBhbiBpZiBjb25kaXRpb25hbCBjb25zdHJ1Y3RcbiAgICAgKiBAcGFyYW0geyp9IHByZWRpY2F0ZSBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwb3NpdGl2ZSBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBuZWdhdGl2ZSBcbiAgICAgKi9cbiAgICBpZmNvbmRpdGlvbihwcmVkaWNhdGUsIHBvc2l0aXZlLCBuZWdhdGl2ZSkge1xuXG4gICAgICAgIHJldHVybiAoKHByZWRpY2F0ZSkgPyBwb3NpdGl2ZSgpIDogbmVnYXRpdmUoKSkgfHwgW107XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmb3Jsb29wIGlzIGNhbGxlZCB0byBjcmVhdGUgYSBmb3IgbG9vcCBjb25zdHJ1Y3RcbiAgICAgKiBAcGFyYW0ge0l0ZXJhYmxlfSBjb2xsZWN0aW9uIFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFxuICAgICAqL1xuICAgIGZvcmxvb3AoY29sbGVjdGlvbiwgY2IpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb2xsZWN0aW9uKSkge1xuXG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAoY2IpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbGxlY3Rpb24gPT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjb2xsZWN0aW9uKS5tYXAoa2V5ID0+IGNiKGNvbGxlY3Rpb25ba2V5XSwga2V5KSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmaW5kQnlJZCByZXR1cm5zIGEgd2lkZ2V0IGZyb20gdGhlIGludGVybmFsIGxpc3QuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgKi9cbiAgICBmaW5kQnlJZChpZCkge1xuXG4gICAgICAgIHJldHVybiAodGhpcy5fbGlzdFtpZF0pID8gdGhpcy5fbGlzdFtpZF0gOiBudWxsO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVuZGVyIHRoZSBET00uXG4gICAgICogQHJldHVybiB7RE9NVHJlZX1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlLmNhbGwodGhpcy5fY29udGV4dCwgdGhpcyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFrZXJcbiJdfQ==