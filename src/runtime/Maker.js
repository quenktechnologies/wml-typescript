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

    if (Array.isArray(child))
        return child.forEach(innerChild => adopt(innerChild, e));

    if (child)
        e.appendChild(
            (typeof child === 'object') ?
            child :
            document.createTextNode(child));

}

/**
 * Maker is used by a wml javascript template to create assets.
 * @param {function} template 
 * @param {object} context 
 */
class Maker {

    constructor(template, context) {

        this._list = {};
        this._nextId = 0;
        this._template = template;
        this._context = context;

    }

    _register(e, attrs) {

        if (attrs === null) return;

        var id = (attrs.id) ? attrs.id : `element${this._nextId}`;

        this._nextId = this._nextId + 1;

        if (this._list.hasOwnProperty(id))
            throw new Error(`Duplicate wml id '${id}' discovered!`);

        this._list[id] = e;


    }

    /**
     * text creates a DOMTextNode
     * @param {string} value 
     */
    text(value) {

        return document.createTextNode(value || '');

    }

    /**
     * node is called to create a regular DOM node
     * @param {string} tag 
     * @param {object} attributes 
     * @param {array<string|number|Element>} children 
     */
    node(tag, attributes, children) {

        var e = document.createElement(tag);
        var attrs = attributes.html;

        Object.keys(attributes.html).forEach(key => {

            if (typeof attributes.html[key] === 'function') {
                e[key] = attributes.html[key];
            } else {
                e.setAttribute(key, attributes.html[key]);
            }
        });

        children.forEach(c => adopt(c, e));
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
    element(Constructor, attributes, children) {

        var childs = [];
        var e;

        children.forEach(child => Array.isArray(child) ?
            childs.push.apply(childs, child) : childs.push(child));

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
    ifcondition(predicate, positive, negative) {

        return ((predicate) ? positive() : negative()) || [];

    }

    /**
     * forloop is called to create a for loop construct
     * @param {Iterable} collection 
     * @param {function} cb 
     */
    forloop(collection, cb) {

        if (Array.isArray(collection)) {

            return collection.map(cb);

        } else if (typeof collection === 'object') {

            return Object.keys(collection).map(key => cb(collection[key], key));

        }

        return [];
    }

    /**
     * findById returns a widget from the internal list.
     * @param {string} id 
     * @return {object}
     */
    findById(id) {

        return (this._list[id]) ? this._list[id] : null;

    }

    /**
     * render the DOM.
     * @return {DOMTree}
     */
    render() {

        return this._template.call(this._context, this);

    }

}

export default Maker
