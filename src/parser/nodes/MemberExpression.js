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

}
export default MemberExpression
