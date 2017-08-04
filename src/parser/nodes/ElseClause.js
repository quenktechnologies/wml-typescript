import Node from './Node';
import { flatten } from '../util';
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

        return `function else_clause${elses++}()` +
            `{ return ${flatten(this.children, o)} }`;

    }

}

export default ElseClause
