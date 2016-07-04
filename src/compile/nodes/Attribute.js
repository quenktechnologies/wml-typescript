import Node from './Node';

/**
 * Attribute 
 */
class Attribute extends Node {

    constructor(name, namespace, value, location) {

        super(location);
        this.name = name;
        this.namespace = namespace;
        this.value = value;

    }

    transpile() {

        return `${this.value.transpile()}`;

    }

    compile(o) {

        return this.sourceNode(o.fileName, this.value);

    }

}

export default Attribute
