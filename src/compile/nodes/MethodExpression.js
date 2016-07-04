import Node from './Node';

/**
 * MethodExpression 
 * @param {string} path 
 * @param {array} args 
 */
class MethodExpression extends Node {

    constructor(path, args, location) {

        super(location);
        this.path = path;
        this.arguments = args;

    }

    transpile() {

        var args = this.transpileList(this.arguments);
        return `${this.path}(${this.args})`;

    }

    compile(o) {

        var node = this.sourceNode(o.fileName, this.path);

        node.add('(');

        return this.compileList(this.arguments, node, o).
        add(')');


    }

}
export default MethodExpression
