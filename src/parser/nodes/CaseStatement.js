import Node from './Node';

var count = 0;

/**
 * CaseStatement
 * @param {ValueExpression} expression
 * @param {array<Expression>} children
 * @param {Location} location
 */
class CaseStatement extends Node {

    constructor(expression, children, location) {

        super();

        this.type = 'case-statement';
        this.expression = expression;
        this.children = children;
        this.location = location;

    }

    transpile() {

        count = count + 1;
        return `function case_statement${count}() { ` +
            `return $box([${this.children.map(c=>c.transpile(o)).join(',')}]);}.bind(this)`;

    }

}

    export default CaseStatement
