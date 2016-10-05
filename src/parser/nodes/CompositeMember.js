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

    transpile() {

        return `{ ${this.members.map(m=>m.transpile()).join(',')} }`;

    }

    compile(o) {

        var nodes = this.members.map(m => m.compile(o));
        var node = this.sourceNode(o.fileName, 'import * as').
        add('{');

        nodes.forEach((n, i, all) => {

            node.add(n);

            if (i !== all.length - 1)
                node.add(',');

        });

        node.add('}').
        add(this.member.compile(o)).
        add(this.module.compile(o));

    }

}

export default CompositeMember
