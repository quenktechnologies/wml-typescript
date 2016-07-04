import Node from './Node';

/**
 * BooleanLiteral 
 */
class BooleanLiteral extends Node {

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

export default BooleanLiteral
