import Node from './Node';

/**
 * ContextVariable
 */
class ContextVariable extends Node {

    constructor(location) {

        super();
        this.type = 'context-variable';
        this.location = location;

    }

    transpile(o) {

       return `$$ctx`;

    }

}

export default ContextVariable
