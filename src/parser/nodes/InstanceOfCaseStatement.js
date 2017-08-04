import Node from './Node';
import { flatten } from '../util';

/**
 * InstanceOfCaseStatement
 */
class InstanceOfCaseStatement extends Node {

    constructor(candidate, body, location) {

        super();

        this.type = 'instanceof-case-statement';
        this.candidate = candidate;
        this.body = body;
        this.location = location;

    }

    toExpression(id, otherwise, o) {

        var body = flatten(this.body, o);

        return `(${id} instanceof ${this.candidate.transpile(o)})? ${body} : ${otherwise}`;

    }

    transpile(o) {

        throw new Error('InstanceOfCaseStatement cannot be traspiled!');

    }

}

export default InstanceOfCaseStatement
