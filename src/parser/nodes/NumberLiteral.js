import Node from './Node';

/**
 * NumberLiteral 
 */
class NumberLiteral extends Node {

    constructor(value, location) {

        super();
        this.type = 'number-literal';
        this.value = value;
        this.location = location;

    }

    transpile() {

        return parseFloat(this.value);

    }

    compile(o) {

        return this.sourceNode(o.fileName, this.value);

    }

}

export default NumberLiteral
