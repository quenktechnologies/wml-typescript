import Node from './Node';

var elses = 0;

/**
 * ElseClause
 * @param {array<Child>}
 */
class ElseClause extends Node {

    constructor(children = [], location = {}) {

        super();

        this.type = 'else-clause';
        this.children = children;
        this.location = location;

    }

    transpile(o) {

        return `function else_clause${elses++}() {` +
            `return $$box([${this.children.map(c=>c.transpile(o)).join(',')}]);` +
            `}.bind(this)`;

    }

}

export default ElseClause
