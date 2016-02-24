import TextNode from './TextNode';

/**
 * CompositeNode represents a node that can have children.
 * @param {array} nodeData 
 * @implements {Node}
 */
class CompositeNode {

    constructor(nodeData) {
        this.nodeData = nodeData
    }

    render(w) {

        var cons = this.nodeData[0];
        var attrs = this.nodeData[1];
        var childs = this.nodeData[2];
        var children;
        var el;

        children = childs.map(c => (Array.isArray(c)) ?
            new CompositeNode(c) : new TextNode(c));

        if (typeof cons === 'string') {

            el = document.createElement(cons);
            Object.keys(attrs).forEach(k => el.setAttribute(k, attrs[k]));
            children.forEach(c => el.appendChild(c.render(w)));
            return el;

        } else if (typeof cons === 'function') {

            el = cons.create(attrs);

            if (attrs['data-wml-id'])
                w.register(attrs['data-wml-id'], el);

            return el.onDOM(attrs, children);

        }

        throw new Error(`Widgets must be string or function not '${typeof cons}'`);

    }

}

export default CompositeNode
