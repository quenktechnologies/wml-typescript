'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _AttributeList = require('./AttributeList');

var _AttributeList2 = _interopRequireDefault(_AttributeList);

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
            this._register(e, attributes.wml || null);
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

            e = new Constructor(new _AttributeList2['default'](attributes), childs);
            this._register(e, attributes.wml || null);
            return e.render();
        }

        /**
         * $if is called to create an if conditional construct
         * @param {*} predicate 
         * @param {function} positive 
         * @param {function} negative 
         */
    }, {
        key: '$if',
        value: function $if(predicate, positive, negative) {

            return predicate ? positive() : negative();
        }

        /**
         * $for is called to create a for loop construct
         * @param {Iterable} collection 
         * @param {function} cb 
         */
    }, {
        key: '$for',
        value: function $for(collection, cb) {

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
         * $switch simulates a switch statement
         * @param {string|number|boolean} value 
         * @param {object} cases 
         */
    }, {
        key: '$switch',
        value: function $switch(value, cases) {

            var result = cases[value];
            var defaul = cases['default'];

            if (result) return result;

            if (defaul) return deaful;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL01ha2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs2QkFBMEIsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCM0MsU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTs7QUFFckIsUUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUNwQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVO2VBQUksS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7S0FBQSxDQUFDLENBQUM7O0FBRTdELFFBQUksS0FBSyxFQUNMLENBQUMsQ0FBQyxXQUFXLENBQ1QsQUFBQyxPQUFPLEtBQUssS0FBSyxRQUFRLEdBQzFCLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBRXpEOzs7Ozs7OztJQU9LLEtBQUs7QUFFSSxhQUZULEtBQUssQ0FFSyxRQUFRLEVBQUUsT0FBTyxFQUFFOzhCQUY3QixLQUFLOztBQUlILFlBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFlBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQzFCLFlBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0tBRTNCOztpQkFUQyxLQUFLOztlQVdFLG1CQUFDLENBQUMsRUFBRSxLQUFLLEVBQUU7O0FBRWhCLGdCQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsT0FBTzs7QUFFM0IsZ0JBQUksRUFBRSxHQUFHLEFBQUMsS0FBSyxDQUFDLEVBQUUsR0FBSSxLQUFLLENBQUMsRUFBRSxlQUFhLElBQUksQ0FBQyxPQUFPLEFBQUUsQ0FBQzs7QUFFMUQsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7O0FB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R0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDO2lCQUFBLENBQUMsQ0FBQzthQUV2RTs7QUFFRCxtQkFBTyxFQUFFLENBQUM7U0FDYjs7Ozs7Ozs7O2VBT00saUJBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTs7QUFFcEIsZ0JBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQixnQkFBSSxNQUFNLEdBQUcsS0FBSyxXQUFRLENBQUM7O0FBRTNCLGdCQUFHLE1BQU0sRUFBRSxPQUFPLE1BQU0sQ0FBQzs7QUFFekIsZ0JBQUcsTUFBTSxFQUFFLE9BQU8sTUFBTSxDQUFDO1NBRTFCOzs7Ozs7Ozs7ZUFPTyxrQkFBQyxFQUFFLEVBQUU7O0FBRVQsbUJBQU8sQUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBRW5EOzs7Ozs7OztlQU1LLGtCQUFHOztBQUVMLGdCQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixtQkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBRW5EOzs7V0F6SkMsS0FBSzs7O3FCQTZKSSxLQUFLIiwiZmlsZSI6Ik1ha2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF0dHJpYnV0ZUxpc3QgZnJvbSAnLi9BdHRyaWJ1dGVMaXN0Jztcbi8qKlxuICpcbiAqIEludGVyZmFjZSBmb3IgRWxlbWVudHNcbiAqIEBpbnRlcmZhY2UgRWxlbWVudFxuICpcbiAqL1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3Igb2JqZWN0cyB0aGF0IGNyZWF0ZSBFbGVtZW50c1xuICogQGludGVyZmFjZSBGYWN0b3J5XG4gKi9cblxuLyoqXG4gKiBcbiAqIGNyZWF0ZSB0aGUgZWxlbWVudFxuICpcbiAqIEBmdW5jdGlvblxuICogQG5hbWUgRmFjdG9yeS5jcmVhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBodG1sQXR0cmlidXRlcyBBIGhhc2ggb2YgYXR0cmlidXRlcyBleHBlY3RlZCB0byBiZSBwYXNzZWQgaW50byBET00uXG4gKiBAcGFyYW0ge29iamVjdH0gbnNBdHRyaWJ1dGVzICAgQSBoYXNoIG9mIG5hbWVzcGFjZWQgYXR0cmlidXRlcyBmb3IgZnJhbWV3b3JrIHVzYWdlLlxuICovXG5cbi8qKlxuICpAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZG9wdChjaGlsZCwgZSkge1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKVxuICAgICAgICByZXR1cm4gY2hpbGQuZm9yRWFjaChpbm5lckNoaWxkID0+IGFkb3B0KGlubmVyQ2hpbGQsIGUpKTtcblxuICAgIGlmIChjaGlsZClcbiAgICAgICAgZS5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICh0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnKSA/XG4gICAgICAgICAgICBjaGlsZCA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkIHx8ICcnKSk7XG5cbn1cblxuLyoqXG4gKiBNYWtlciBpcyB1c2VkIGJ5IGEgd21sIGphdmFzY3JpcHQgdGVtcGxhdGUgdG8gY3JlYXRlIGFzc2V0cy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHRlbXBsYXRlIFxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgXG4gKi9cbmNsYXNzIE1ha2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdGhpcy5fbGlzdCA9IHt9O1xuICAgICAgICB0aGlzLl9uZXh0SWQgPSAwO1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcblxuICAgIH1cblxuICAgIF9yZWdpc3RlcihlLCBhdHRycykge1xuXG4gICAgICAgIGlmIChhdHRycyA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBpZCA9IChhdHRycy5pZCkgPyBhdHRycy5pZCA6IGBlbGVtZW50JHt0aGlzLl9uZXh0SWR9YDtcblxuICAgICAgICB0aGlzLl9uZXh0SWQgPSB0aGlzLl9uZXh0SWQgKyAxO1xuXG4gICAgICAgIGlmICh0aGlzLl9saXN0Lmhhc093blByb3BlcnR5KGlkKSlcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgRHVwbGljYXRlIHdtbCBpZCAke2lkfSBmb3VuZCwgY3VycmVudGx5IHRoZSBkZWZhdWx0IGJlaGF2aW91ciBpcyB0b1xuICAgICAgICAgICAgICBvdmVyd3JpdGUgYnV0IHRoaXMgbWF5IGNoYW5nZSBhdCBzb21lIHBvaW50IWApO1xuXG4gICAgICAgIHRoaXMuX2xpc3RbaWRdID0gZTtcblxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGV4dCBjcmVhdGVzIGEgRE9NVGV4dE5vZGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgXG4gICAgICovXG4gICAgdGV4dCh2YWx1ZSkge1xuXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSB8fCAnJyk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBub2RlIGlzIGNhbGxlZCB0byBjcmVhdGUgYSByZWd1bGFyIERPTSBub2RlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZyBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyBcbiAgICAgKiBAcGFyYW0ge2FycmF5PHN0cmluZ3xudW1iZXJ8RWxlbWVudD59IGNoaWxkcmVuIFxuICAgICAqL1xuICAgIG5vZGUodGFnLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbikge1xuXG4gICAgICAgIHZhciBlID0gKHRhZyA9PT0gJ2ZyYWdtZW50JykgPyBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgICAgIHZhciBhdHRycyA9IGF0dHJpYnV0ZXMuaHRtbDtcblxuICAgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzLmh0bWwpLmZvckVhY2goa2V5ID0+IHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLmh0bWxba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGVba2V5XSA9IGF0dHJpYnV0ZXMuaHRtbFtrZXldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXMuaHRtbFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjID0+IGFkb3B0KGMsIGUpKTtcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXIoZSwgYXR0cmlidXRlcy53bWwgfHwgbnVsbCk7XG4gICAgICAgIHJldHVybiBlO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZWxlbWVudCBjcmVhdGVzIGEgd21sIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gQ29uc3RydXRvciBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyBcbiAgICAgKiBAcGFyYW0ge2FycmF5PHN0cmluZ3xudW1iZXJ8RWxlbWVudD59IGNoaWxkcmVuIFxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgZWxlbWVudChDb25zdHJ1Y3RvciwgYXR0cmlidXRlcywgY2hpbGRyZW4pIHtcblxuICAgICAgICB2YXIgY2hpbGRzID0gW107XG4gICAgICAgIHZhciBlO1xuXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gQXJyYXkuaXNBcnJheShjaGlsZCkgP1xuICAgICAgICAgICAgY2hpbGRzLnB1c2guYXBwbHkoY2hpbGRzLCBjaGlsZCkgOiBjaGlsZHMucHVzaChjaGlsZCkpO1xuXG4gICAgICAgIGUgPSBuZXcgQ29uc3RydWN0b3IobmV3IEF0dHJpYnV0ZUxpc3QoYXR0cmlidXRlcyksIGNoaWxkcyk7XG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyKGUsIGF0dHJpYnV0ZXMud21sIHx8IG51bGwpO1xuICAgICAgICByZXR1cm4gZS5yZW5kZXIoKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqICRpZiBpcyBjYWxsZWQgdG8gY3JlYXRlIGFuIGlmIGNvbmRpdGlvbmFsIGNvbnN0cnVjdFxuICAgICAqIEBwYXJhbSB7Kn0gcHJlZGljYXRlIFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHBvc2l0aXZlIFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG5lZ2F0aXZlIFxuICAgICAqL1xuICAgICRpZihwcmVkaWNhdGUsIHBvc2l0aXZlLCBuZWdhdGl2ZSkge1xuXG4gICAgICAgIHJldHVybiAocHJlZGljYXRlKSA/IHBvc2l0aXZlKCkgOiBuZWdhdGl2ZSgpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogJGZvciBpcyBjYWxsZWQgdG8gY3JlYXRlIGEgZm9yIGxvb3AgY29uc3RydWN0XG4gICAgICogQHBhcmFtIHtJdGVyYWJsZX0gY29sbGVjdGlvbiBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBcbiAgICAgKi9cbiAgICAkZm9yKGNvbGxlY3Rpb24sIGNiKSB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29sbGVjdGlvbikpIHtcblxuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24ubWFwKGNiKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb2xsZWN0aW9uID09PSAnb2JqZWN0Jykge1xuXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoY29sbGVjdGlvbikubWFwKGtleSA9PiBjYihjb2xsZWN0aW9uW2tleV0sIGtleSkpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogJHN3aXRjaCBzaW11bGF0ZXMgYSBzd2l0Y2ggc3RhdGVtZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfGJvb2xlYW59IHZhbHVlIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjYXNlcyBcbiAgICAgKi9cbiAgICAkc3dpdGNoKHZhbHVlLCBjYXNlcykge1xuXG4gICAgICB2YXIgcmVzdWx0ID0gY2FzZXNbdmFsdWVdO1xuICAgICAgdmFyIGRlZmF1bCA9IGNhc2VzLmRlZmF1bHQ7XG5cbiAgICAgIGlmKHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcblxuICAgICAgaWYoZGVmYXVsKSByZXR1cm4gZGVhZnVsO1xuICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZmluZEJ5SWQgcmV0dXJucyBhIHdpZGdldCBmcm9tIHRoZSBpbnRlcm5hbCBsaXN0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICovXG4gICAgZmluZEJ5SWQoaWQpIHtcblxuICAgICAgICByZXR1cm4gKHRoaXMuX2xpc3RbaWRdKSA/IHRoaXMuX2xpc3RbaWRdIDogbnVsbDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlbmRlciB0aGUgRE9NLlxuICAgICAqIEByZXR1cm4ge0RPTVRyZWV9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHRoaXMuX2xpc3QgPSB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlLmNhbGwodGhpcy5fY29udGV4dCwgdGhpcyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFrZXJcbiJdfQ==