import Node from './Node';

/**
 * ArrayLiteral
 * @param {array} members
 * @param {Location} location
 */
class ArrayLiteral extends Node {

    constructor(members, location) {
        super(location);
        this.type = 'array-literal';
        this.members = members;
    }

    transpile(o) {

        return '[' + this.members.map(m => m.transpile(o)).join(',') + ']';

    }

}

export default ArrayLiteral
