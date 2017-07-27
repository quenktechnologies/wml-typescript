/* The property-seek module literally copied and pasted here for conveinence. */

const _ts = (o, txt, dtxt = '') => o.typescript ? txt : dtxt;

const _typescriptProperties = () => `
  ids: {[key:string]: WMLElement};
  widgets: Widget[];
  tree: HTMLElement;
  context: object;
  template: ()=>HTMLElement;
`;


const _view = () => `

export interface View {

 render(): HTMLElement;
 findById(id:string): WMLElement;

}`;

const _widget = () => `
export interface Widget {

  rendered(): void;
  removed(): void;
  render(): HTMLElement;

}`;

const _element = () =>
    `export type WMLElement = HTMLElement | Node | EventTarget | Widget`;

export const preamble = o => `

function $$boundary_to_dot(value) {
  return value.split('][').join('.').split('[').join('.');
}

function $$strip_braces(value) {
  return value.split('[').join('.').split(']').join('');
}

function $$escape_dots(value) {
  value = value.split('\\'');
  return (value.length < 3) ? value.join('\\'') : value.map(function(seg) {
    if (seg.length < 3) return seg;
    if ((seg[0] === '.') || (seg[seg.length - 1] === '.')) return seg;
    return seg.split('.').join('&&');
  }).join('');
}

function $$unescape_dots(value) {
  return value.split('&&').join('.');
}

function $$partify(value) {
  if (!value) return;
  return $$escape_dots($$strip_braces($$boundary_to_dot('' + value))).split('.');
}

function $$property(path, o) {

  var parts = $$partify(path);
  var first;

  if (typeof o !== 'object')
    throw new TypeError('get(): expects an object got ' + typeof o);

  if (parts.length === 1) return o[$$unescape_dots(parts[0])];
  if (parts.length === 0) return;

  first = o[parts.shift()];

  return ((typeof o === 'object') && (o !== null)) ?

    parts.reduce(function(target, prop) {
      if (target == null) return target;
      return target[$$unescape_dots(prop)];
    }, first) : null;
}

function $$adopt(child, e) {

    if (Array.isArray(child))
      return child.forEach(innerChild => $$adopt(innerChild, e));

    if (child)
      e.appendChild(
        (typeof child === 'object') ?
        child : document.createTextNode(child == null? '' : child));

}

/**
 * $$text creates a DOMTextNode
 * @param {string} value
 */
function $$text(value) {

  return document.createTextNode(value == null ?  '' : value);

}

/**
 * $$resolve property access expression to avoid
 * thowing errors if it does not exist.
 * @param {object} head
 * @param {string} path
 */
function $$resolve(head, path) {

    if((head == null) || head == '')
        return '';

  var ret = $$property(path, head);

  return (ret == null) ? '' : ret;

}

/**
 * $$node is called to create a regular DOM node
 * @param {string} tag
 * @param {object} attributes
 * @param {array<string|number|Widget>} children
 * @param {View} view
 */
function $$node(tag, attributes, children, view) {

  var e = (tag === 'fragment') ? document.createDocumentFragment() : document.createElement(tag);

  if (typeof attributes.html === 'object')
    Object.keys(attributes.html).forEach(key => {

      if (typeof attributes.html[key] === 'function') {
        e[key] = attributes.html[key];
      } else if((attributes.html[key] != null) && (attributes.html[key] != '')) {
        e.setAttribute(key, attributes.html[key]);
      }
    });

  children.forEach(c => $$adopt(c, e));

  if (attributes.wml)
    if (attributes.wml.id)
      view.register(attributes.wml.id, e);

  return e;

}

/**
 * Attributes provides an API for reading the
 * attributes supplied to an Element.
 * @param {object} attrs
 */
class Attributes {

    constructor(${_ts(o, 'public _attrs:any',  '_attrs')}) {

        this._attrs = _attrs;

    }

    ${_ts(o, 'has(path:string): boolean', 'has(path)')}{

      return this.read(path) != null;

    }

    /**
     * read a value form the internal list.
     * @param {string} path
     * @param {*} defaultValue - This value is returned if the value is not set.
     */
    ${_ts(o, 'read<A>(path:string, defaultValue?:A): A', 'read(path, defaultValue)')} {

        var ret = $$property(path.split(':').join('.'), this._attrs);
      return (ret != null) ? ret : (defaultValue != null) ? defaultValue : '';

    }

}


/**
 * $$widget creates a wml widget.
 * @param {function} Construtor
 * @param {object} attributes
 * @param {array<string|number|Widget>} children
 * @param {View} view
 * @return {Widget}
 */
function $$widget(Constructor, attributes, children, view) {

  var childs = [];
  var w;

  children.forEach(child => Array.isArray(child) ?
    childs.push.apply(childs, child) : childs.push(child));

  w = new Constructor(new Attributes(attributes), childs);

  if (attributes.wml)
    if (attributes.wml.id)
      view.register(attributes.wml.id, w);

  view.widgets.push(w);
  return w.render();

}

/**
 * $$if is called to create an if conditional construct
 * @param {*} predicate
 * @param {function} positive
 * @param {function} negative
 */
function $$if(predicate, positive, negative) {

  return (predicate) ? positive() : negative();

}

/**
 * $$for is called to create a for loop construct
 * @param {Iterable} collection
 * @param {function} cb
 */
function $$for(collection, cb, cb2) {

  if (Array.isArray(collection)) {

    return collection.length > 0 ? collection.map(cb) : cb2();

   } else if (typeof collection === 'object') {

       var l = Object.keys(collection);

     return (l.length > 0)?
           l.map((key, _, all) => cb(collection[key], key, all)) : cb2;

   }

    return [];

}

/**
 * $$switch simulates a switch statement
 * @param {string|number|boolean} value
 * @param {object} cases
 */
function $$switch(value, cases) {

    var result = cases[value];
    var defaul = cases.default;

    if (result) return result;

    if (defaul) return defaul;

}

${_ts(o, _view())}
${_ts(o, _widget())}
${_ts(o, _element())}`;

const _rootElement = (root, o) =>
    root ? root.transpile(o) : (o.typescript) ?
    '<HTMLElement><Node>document.createDocumentFragment()' :
    'document.createDocumentFragment()';

export const view = (name, tag, o) =>

    `export class ${name} ${o.typescript? 'implements View' : ''}{

      ${(o.typescript)? _typescriptProperties() : ''}

       constructor(context) {

          let view = this;

          this.ids = {};
          this.widgets = [];

          this.tree = null;
          this.context = context;
          this.template = function(){
            return ${_rootElement(tag, o)}
          }

       }

       static render(context) {

         return (new ${name}(context)).render();

       }

       ${o.typescript? 'register(id:string, w:WMLElement): '+name : 'register(id, w)'}{


         if (this.ids.hasOwnProperty(id))
           throw new Error('Duplicate id \\'' +id+'\\' detected!');

         this.ids[id] = w;
         return this;

       }

       ${o.typescript? 'findById(id:string) : WMLElement ' : 'findById(id)'}{

        return (this.ids[id]) ? this.ids[id] : null;

       }

       ${o.typescript? 'invalidate(): void' : 'invalidate()'} {

        var childs;
        var parent = this.tree.parentNode;
        var realFirstChild;
        var realFirstChildIndex;

         if (this.tree == null)
           throw new ReferenceError('Cannot invalidate a view that has not been rendered!');

         if (this.tree.parentNode == null)
           throw new ReferenceError('Attempt to invalidate a view that has not been inserted to DOM!');

         childs = ${o.typescript? '(<Element> this.tree.parentNode)' : 'this.tree.parentNode'}.children;

         //for some reason the reference stored does not have the correct parent node.
         //we do this to get a 'live' version of the node.
         for (let i = 0; i < childs.length; i++)
           if (childs[i] === this.tree) {
             realFirstChild = childs[i];
             realFirstChildIndex = i;
           }

         parent.replaceChild(this.render(), realFirstChild);

       }

       render() {

        this.ids = {};
        this.widgets.forEach(w => w.removed());
        this.widgets = [];
        this.tree = this.template.call(this.context);
        this.ids['root'] = (this.ids['root'])? this.ids['root']:this.tree;
        this.widgets.forEach(w => w.rendered());

        return this.tree;

      }

     }

    `;
