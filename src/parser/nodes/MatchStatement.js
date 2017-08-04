import Node from './Node';
import {flatten} from '../util';

/**
 * MatchStatement
 * @param {Expression} expression
 * @param {array<CaseStatement>} cases
 * @param {Location} location
 */
class MatchStatement extends Node {

    constructor(identifier, cases, otherwise, location) {

        super(location);
        this.type = 'match-statement';
        this.identifier = identifier;
        this.cases = cases;
        this.otherwise = otherwise;

    }

    transpile(o) {

        var otherwise = flatten(this.otherwise, o);
        var cases = this.cases.reduceRight((p, c) =>
            c.toExpression(this.identifier.transpile(o), p, o), otherwise);

        return `(function() { return ${cases}; }).call(this)`;

    }

}

export default MatchStatement
