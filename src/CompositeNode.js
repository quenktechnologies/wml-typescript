import TextNode from './TextNode';

/**
 * CompositeNode represents a node that can have children.
 * @param {string|function} cons 
 * @param {object} attrs 
 * @param {array} children 
 * @param {WMLTree} tree 
 * @implements {Node}
 */
class CompositeNode {

    constructor(cons, attrs, children, tree) {
        this._cons = cons;
        this._attrs = attrs;
        this._children = children;
        this.tree = tree;
    }

    toDOMNode() {

        var children;
        var el;

        children = this._children.map(c => (Array.isArray(c)) ?
            new CompositeNode(c[0], c[1], c[2], this._tree) :
            new TextNode(c));

        if (typeof this._cons === 'string') {

            el = document.createElement(this._cons);

            Object.keys(this._attrs).
              forEach(k => (typeof this._attrs[k] === 'function') ?
                el[k] = this._attrs[k] : el.setAttribute(k, this._attrs[k]));

            children.forEach(c => el.appendChild(c.toDOMNode()));

            return el;

        } else if (typeof this._cons === 'function') {

            el = this._cons.create(this._attrs);

            if (this._attrs['data-wml-id'])
                this._tree.register(this._attrs['data-wml-id'], el);

            return el.onDOM(this._attrs, children);

        }

        throw new Error(`Widgets must be string or function not '${typeof this._cons}'`);

    }

}

export default CompositeNode
