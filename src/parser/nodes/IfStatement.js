import Node from './Node';
import { flatten } from '../util';

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

        return `$$if(${this.expression.transpile(o)}, ` +
            `function if${thenCount++}()` +
            `{ return ${flatten(this.then, o)} }.bind(this),` +
            `${this.else ? this.else.transpile(o) : '$$empty'})`;

    }

}

export default IfStatement
