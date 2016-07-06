import Node from './Node';

/**
 * BindExpression 
 * @param {string} path 
 * @param {string} target
 * @param {array<Expression>} args
 */
class BindExpression extends Node {

    constructor(path, target, args, location) {

        super(location);
        this.type = 'bind-expression';
        this.path = path;
        this.target = target;
        this.arguments = args;

    }

    transpile() {

        var args = this.args.map(a => a.transpile()).join(',');
        args = (args) ? ' ,' + args : args;

        return `${this.path}.${this.target}.bind(${this.path}${args})`;

    }

    compile(o) {

        var node = this.sourceNode(o.fileName, '');

        node.add(this.path).
        add('.').
        add(this.target).
        add('.bind(');
        return this.compileList(this.arguments, node, o)

    }

}

export default BindExpression
