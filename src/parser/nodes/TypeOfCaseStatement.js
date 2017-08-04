import Node from './Node';
import {flatten} from '../util';

/**
 * TypeOfCaseStatement
 */
class TypeOfCaseStatement extends Node {

    constructor(candidate, body, location) {

        super();

        this.type = 'typeof-case-statement';
        this.candidate = candidate;
        this.body = body;
        this.location = location;

    }

    toExpression(id, otherwise, o) {

        var body = flatten(this.body, o);
        return `(typeof ${id} === ${this.candidate.transpile(o)})? ${body} : ${otherwise}`;

    }

    transpile(o) {

        throw new Error('TypeOfCaseStatement cannot be traspiled!');

    }

}

export default TypeOfCaseStatement
