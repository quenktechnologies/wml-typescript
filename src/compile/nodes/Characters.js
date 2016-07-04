import Node from './Node';

/**
 * Characters 
 */
class Characters extends Node {

    constructor(value, location) {

      super(location);
        this.value = value;

    }

    transpile() {

        return `make.text(\`${this.value}\`)`;

    }

    compile(o) {

    return this.sourceNode(o.fileName, `make.text(`).
        add(`\`${this.value}\``);

    }

}
export default Characters
