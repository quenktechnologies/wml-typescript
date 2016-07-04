import Node from './Node';

/**
 * NumberLiteral 
 */
class NumberLiteral extends Node {

    constructor(value, location) {

      super(value);
        this.value = value;
        this.location = location;

    }

    transpile() {

        return parseFloat(this.value);

    }

    compile(o) {

      return this.sourceNode(o.fileName, parseFloat(this.value));

    }

}

export default NumberLiteral
