import Node from './Node';

/**
 * ContextVariable
 * @param {string} id
 */
class ContextVariable extends Node {

    constructor(id, location) {

        super();
        this.type = 'context-variable';
        this.id = id;
        this.location = location;

    }

    transpile(o) {

       return `$1.${this.id}`;

    }

}

export default ContextVariable
