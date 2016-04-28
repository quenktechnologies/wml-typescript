import Maker from './Maker';

/**
 * View provides an API for turning wml into a DOM tree.
 * Additionally it provides a convenient API for retreiving created
 * widgets created during parsing providing an near custom elements
 * like feel.
 * @param {function} template A function that will be treated as a wml template.
 * @param {Object} context All references to `this` in the template will refer to this object.
 */
class View {

    constructor(template, context) {

        this._maker = new Maker(template, context);

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
     * render provides the DOM output of this view.
     * @return {DOMNode} 
     */
    render() {

        return this._maker.render();

    }


}
export default View
