import Node from './Node';

var thenCount = 0;

/**
 * IfStatement
 * @param {Expression} expression
 * @param {array<Expression>} ithen
 * @param {array<Expression>} ielse
 */
class IfStatement extends Node {

    constructor(expression, ithen, ielse = null, location = null) {

        super(location);

        this.type = 'if-statement';
        this.expression = expression;
        this.then = ithen;
        this.else = ielse;
        this.location = location;

    }

    transpile(o) {

        return `$$if(${this.expression.transpile()}, ` +
            `function if${thenCount++}() {` +
            `return $$box([${this.then.map(t =>t.transpile(o)).join(',')}])` +
            `}.bind(this), ` +
            ` ${this.else ? this.else.transpile(o) : '$$empty'})`;

    }

}

export default IfStatement
