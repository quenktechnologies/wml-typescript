import Node from './Node';

/**
 * AliasMember 
 * @param {string} member
 * @param {string} alias 
 * @param {Location} location
 */
class AliasMember extends Node {

    constructor(member, alias, location) {

        super(location);
        this.type = 'alias-member';
        this.member = member;
        this.alias = alias;

    }

    transpile() {

        return `${this.member} as ${this.alias}`;

    }

    compile(o) {

        return this.sourceNode(o.fileName, `${this.member} as ${this.alias}`).
        add(this.member.compile(o)).
        add(this.module.compile(o));

    }

}

export default AliasMember
