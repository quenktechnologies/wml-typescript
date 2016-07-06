import Node from './Node';

/**
 * VariableExpression 
 * @param {string} name
 */
class VariableExpression extends Node {

    constructor(name, location) {

        super(location);
        this.type = 'variable-expression';
        this.name = name;

    }

    transpile() {

        return this.name;

    }

    compile(o) {

        return this.sourceNode(o.fileName, this.name);

    }

}

export default VariableExpression
