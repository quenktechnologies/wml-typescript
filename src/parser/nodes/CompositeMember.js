import Node from './Node';

/**
 * CompositeMember
 * @param {array<Member>} member
 * @param {Location} location
 */
class CompositeMember extends Node {

    constructor(members, location) {

        super();
        this.type = 'composite-member';
        this.members = members;
        this.location = location;

    }

    transpile(o) {

        return `{ ${this.members.map(m=>m.transpile(o)).join(',')} }`;

    }

}

export default CompositeMember
