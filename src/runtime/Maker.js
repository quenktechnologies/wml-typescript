import Attributes from './Attributes';
import property from 'property-seek';
/**
 * Interface for Widgets
 * @interface Widget
 */

/**
 * Interface for objects that create Widgets
 * @interface Factory
 */

/**
 *
 * create the widget
 *
 * @function
 * @name Factory.create
 * @param {object} htmlAttributes A hash of attributes expected to be passed into DOM.
 * @param {object} nsAttributes   A hash of namespaced attributes for framework usage.
 */


/**
 * Maker is used by a wml javascript template to create assets.
 * @param {function} template
 * @param {object} context
 * @todo Clean up relationship between Views and their Makers.
 */
class Maker {

  constructor(template, context) {

    this._ids = {};
    this._widgets = [];
    this._template = template;
    this._context = context;

  }

  /**
   * resolve a property access expression to avoid
   * thowing errors if it does not exist.
   * @param {object} head
   * @param {string} path
   */
  resolve(head, path) {

    var ret = property(head, path);

    if ((ret === undefined) || (ret === null))
      ret = '';

    return ret;

  }

  /**
   *@private
   */
  _adopt(child, e) {

    if (Array.isArray(child))
      return child.forEach(innerChild => this._adopt(innerChild, e));

    if (child)
      e.appendChild(
        (typeof child === 'object') ?
        child : document.createTextNode(child || ''));

  }

  /**
   * register a Widget or Node by the specified wml:id
   * @param {string} id
   * @param {Widget|Node} target
   */
  register(id, target) {

    if (this._ids.hasOwnProperty(id))
      throw new Error(`Duplicate id '${id}' detected!`);

    this._ids[id] = target;

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
   * @param {array<string|number|Widget>} children
   */
  node(tag, attributes, children) {

    var e = (tag === 'fragment') ? document.createDocumentFragment() : document.createElement(tag);

    if (typeof attributes.html === 'object')
      Object.keys(attributes.html).forEach(key => {

        if (typeof attributes.html[key] === 'function') {
          e[key] = attributes.html[key];
        } else {
          e.setAttribute(key, attributes.html[key]);
        }
      });

    children.forEach(c => this._adopt(c, e));

    if (attributes.wml)
      if (attributes.wml.id)
        this.register(attributes.wml.id, e);

    return e;

  }

  /**
   * widget creates a wml widget.
   * @param {function} Construtor
   * @param {object} attributes
   * @param {array<string|number|Widget>} children
   * @return {Widget}
   */
  widget(Constructor, attributes, children) {

    var childs = [];
    var w;

    children.forEach(child => Array.isArray(child) ?
      childs.push.apply(childs, child) : childs.push(child));

    w = new Constructor(new Attributes(attributes), childs);

    if (attributes.wml)
      if (attributes.wml.id)
        this.register(attributes.wml.id, w);

    this._widgets.push(w);
    return w.render();

  }

  /**
   * $if is called to create an if conditional construct
   * @param {*} predicate
   * @param {function} positive
   * @param {function} negative
   */
  $if(predicate, positive, negative) {

    return (predicate) ? positive() : negative();

  }

  /**
   * $for is called to create a for loop construct
   * @param {Iterable} collection
   * @param {function} cb
   */
  $for(collection, cb) {

    if (Array.isArray(collection)) {

      return collection.map(cb);

    } else if (typeof collection === 'object') {

      return Object.keys(collection).map((key, i, all) => cb(collection[key], key, all));

    }

    return [];
  }

  /**
   * $switch simulates a switch statement
   * @param {string|number|boolean} value
   * @param {object} cases
   */
  $switch(value, cases) {

    var result = cases[value];
    var defaul = cases.default;

    if (result) return result;

    if (defaul) return deaful;

  }

  /**
   * spread a variable into attributes
   * @param {object|array} value
   * @param {object} attrs
   * @param {string} key
   */
  spread(value, attrs, key) {

    var target;

    attrs = attrs || Object.create(null);

    if (typeof value !== 'object')
      throw new TypeError(`Spread values must be an array or object! Got '${typeof value}'!`);

    if (key !== '') {

      target = property(attrs, key) || Object.create(null);
      Object.keys(value).forEach(k => target[k] = value[k]);
      property.set(attrs, key, target);

    } else {

      Object.keys(value).forEach(k => attrs[k] = value[k]);

    }

    return attrs;

  }

  /**
   * findById returns a widget from the internal list.
   * @param {string} id
   * @return {object}
   */
  findById(id) {

    return (this._ids[id]) ? this._ids[id] : null;

  }

  /**
   * render the DOM.
   * @return {DOMTree}
   */
  render() {

    var tree = null;

    this._ids = {};
    this._widgets.forEach(w => w.onRemoved());
    this._widgets = [];

    tree = this._template.call(this._context, this);
    this._ids.root = (this._ids.root)? this._ids.root:tree;
    this._widgets.forEach(w => w.onRendered());

    return tree;

  }

}

export default Maker

