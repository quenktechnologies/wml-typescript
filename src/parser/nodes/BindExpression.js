import Node from './Node';

/**
 * BindExpression
 * @param {string} path
 * @param {string} target
 * @param {array<Expression>} args
 */
class BindExpression extends Node {

    constructor(object, member, args, location) {

        super(location);
        this.type = 'bind-expression';
        this.object = object;
        this.member = member;
        this.arguments = args;

    }

    transpile(o) {

        var args = this.arguments.map(a => a.transpile(o)).join(',');
        var object = this.object.transpile(o);
        var member = this.member.transpile(o);

        args = (args) ? ' ,' + args : args;

        return `${object}.${member}.bind(${object}${args})`;

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
