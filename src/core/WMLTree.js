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
        this.root = new CompositeNode(tree[0], tree[1], tree[2], this);
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

        return (this._ids[ids]) ? this._ids[id] : null;

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
     * render this tree into the DOM
     * @param {HTMLElement} target 
     */
    render(target) {

        target.appendChild(this.root.toDOMNode());

    }

}

export default WMLTree
