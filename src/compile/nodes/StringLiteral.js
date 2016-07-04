import Node from './Node';

/**
 * StringLiteral 
 */
class StringLiteral extends Node {

    constructor(value, location) {

        super(location);
        this.value = value;

    }

    transpile() {

        return this.value;

    }

    compile(o) {

        return this.sourceNode(o.fileName, this.value);

    }

}

export default StringLiteral
