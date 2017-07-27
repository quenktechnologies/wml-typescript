import Node from './Node';

/**
 * Identifier
 * @param {string} name
 */
class Identifier extends Node {

    constructor(name, location) {

        super(location);
        this.type = 'identifier';
        this.name = name;

    }

    transpile(o) {

        return this.name;

    }

    compile(o) {

        return this.sourceNode(o.fileName, this.name);

    }

}

export default Identifier
