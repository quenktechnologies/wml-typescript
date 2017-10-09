import Node from './Node';

/**
 * ContextProperty
 * @param {string} id
 */
class ContextProperty extends Node {

    constructor(id, location) {

        super();
        this.type = 'context-property';
        this.id = id;
        this.location = location;

    }

    transpile(o) {

       return `$$ctx.${this.id}`;

    }

}

export default ContextProperty
