import Node from './Node';

/**
 * AggregateMember 
 * @param {stringr} member
 * @param {Location} location
 */
class AggregateMember extends Node {

    constructor(member, location) {

        super();
        this.type = 'aggregate-member';
        this.member = member;
        this.location = location;

    }

    transpile() {

        return `* as ${this.member}`

    }

    compile(o) {

        return this.sourceNode(o.fileName, `* as ${this.member}`).
        add(this.member.compile(o)).
        add(this.module.compile(o));

    }

}

export default AggregateMember
