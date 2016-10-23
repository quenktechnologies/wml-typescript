import Node from './Node';

/**
 * NewExpression
 */
class NewExpression extends Node {

    constructor(name, args, location) {

        super(location);
        this.type = 'new-expression';
        this.name = name;
        this.arguments = args;

    }

    transpile() {

        var args = this.transpileList(this.arguments);
        return `new ${this.name}(${args})`;

    }

    compile(o) {

        var node = this.sourceNode(o.fileName, `new ${this.name}`).
        add('(');

        return this.compileList(this.arguments, node, o);

    }

}
export default NewExpression
