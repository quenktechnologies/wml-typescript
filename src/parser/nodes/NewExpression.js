import Node from './Node';

/**
 * NewExpression
 */
class NewExpression extends Node {

    constructor(callee, args, location) {

        super(location);
        this.type = 'new-expression';
        this.callee = callee;
        this.arguments = args;

    }

    transpile(o) {

        var callee = this.callee.transpile(o);
        var args = this.arguments.map(a=>a.transpile(o));
        return `new ${callee}(${args})`;

    }

    compile(o) {

        var node = this.sourceNode(o.fileName, `new ${this.name}`).
        add('(');

        return this.compileList(this.arguments, node, o);

    }

}
export default NewExpression
