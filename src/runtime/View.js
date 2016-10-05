import Maker from './Maker';

/**
 * View provides an API for turning wml into a DOM tree.
 * Additionally it provides a convenient API for retreiving created
 * widgets created during parsing providing an near custom elements
 * like feel.
 * @param {function} template A function that will be treated as a wml template.
 * @param {Object} context All references to `this` in the template will refer to this object.
 * @param {} listener 
 */
class View {

    constructor(template, context) {

        this._maker = new Maker(template, context);

    }

    /**
     * render is a factory method for creating a new View and rendering
     * it's contents immediately.
     * @param {function} template
     * @param {object|null} context 
     * @returns {DocumentFragment}
     */
    static render(template, context) {

        return (new View(template, context)).render();

    }

    /**
     * findById retrieves an element by its wml:id attribute.
     * @param {string} id 
     * @return {Object} 
     */
    findById(id) {

        return this._maker.findById(id);

    }

    /**
     * use replaces the template (and optionally context) this View uses.
     * @param {function} template 
     * @param {object} [context] 
     * @returns {View}
     */
    use(template, context) {

        this._maker = new Maker(template, (context) ? context : this.context);
        return this;

    }

    /**
     * render provides the DOM output of this view.
     * @return {DOMNode} 
     */
    render() {

        return this._maker.render();

    }


}

export default View
