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
        return `function case_statement${count}() { return`+
          `[${this.transpileList(this.children)}];}.bind(this)`;

    }

    compile(o) {

        count = count + 1;

        var node = this.sourceNode(o.fileName, `function case_statement${count}() { return [`);

        return this.compileList(this.children, node, o).
        add('];}.bind(this');

    }

}

export default CaseStatement
