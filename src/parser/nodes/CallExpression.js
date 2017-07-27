import Node from './Node';

/**
 * CallExpression
 */
class CallExpression extends Node {

    constructor(callee, args, location) {

        super();
        this.type = 'function-expression';
        this.callee = callee;
        this.arguments = args;
        this.location = location;

    }

    transpile(o) {

        var callee = this.callee.transpile(o);
        var args = this.arguments.map(a => a.transpile(o));

        return `${callee}(${args})`;

    }

    compile(o) {

        var node = this.sourceNode(o.fileName, this.name).
        add('(');

        return this.compileList(this.arguments, node, o).
        add(')');

    }

}
export default CallExpression
