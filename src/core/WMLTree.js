import CompositeNode from './CompositeNode';

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
class WMLTree {

    constructor(tree) {
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
    findById(id) {

        return (this._ids[id]) ? this._ids[id] : null;

    }

    /**
     * register a widget so that is can be retrived later
     * @param {string} id 
     * @param {object} widget 
     */
    register(id, widget) {

        if (this._ids[id])
            throw new Error(`Duplicate id ${id} detected!`);

        this._ids[id] = widget;

    }

    /**
     * toDOMNode returns the DOM representation of this tree.
     * @param {object} $this 
     * @return {HTMLElement}
     */
    toDOMNode($this) {

        var tree;

        if (this.root === null) {

            tree = this._tree.call($this || null);
            this.root = new CompositeNode(tree[0], tree[1], tree[2], this);

        }

        return this.root.toDOMNode($this);
    }

    /**
     * render this tree into the DOM
     * @param {HTMLElement} target 
     * @param {object} [$this]
     */
    render(target, $this) {

        target.appendChild(this.toDOMNode($this));

    }

}

export default WMLTree
