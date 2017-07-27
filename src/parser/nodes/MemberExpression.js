import Node from './Node';
import Identifier from './Identifier';

/**
 * MemberExpression
 * @param {Expression} object
 * @param {Expression} member
 */
class MemberExpression extends Node {

    constructor(object, member, location) {

        super();
        this.type = 'member-expression';
        this.object = object;
        this.member = member;
        this.location = location;

    }

    transpile(o) {

        return `${this.object.transpile(o)}.${this.member.transpile(o)}`;

    }

    compile(o) {

        var parts = this.path.split('.');
        var head = parts.shift();

        parts = parts.join('.');

        return this.sourceNode(o.fileName, `$$resolve(${head}, '${parts}')`);

    }

}
export default MemberExpression
