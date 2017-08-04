import Node from './Node';

/**
 * Identifier
 * @param {string} name
 */
class Identifier extends Node {

    constructor(name, hint, location) {

        super(location);
        this.type = 'identifier';
        this.name = name;
        this.hint = hint;

    }

    transpile(o) {

        return o.typescript ?
            (this.hint ? `${this.name} as ${this.hint}` : this.name):
            this.name;

    }

}

export default Identifier
