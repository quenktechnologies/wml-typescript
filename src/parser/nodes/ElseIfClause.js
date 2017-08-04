import Node from './Node';
import { flatten } from '../util';

var elseifs = 0;
var elseififs = 0;
var elseifelses = 0;

/**
 * ElseIfClause
 * @param {Expression} expression
 * @param {array<Expression>} ithen
 * @param {array<Expression>} ielse
 */
class ElseIfClause extends Node {

    constructor(expression, $then, $else = function() {}, location = null) {

        super();

        this.type = 'else-if-clause';
        this.expression = expression;
        this.then = $then;
        this.else = $else;
        this.location = location;

    }

    transpile(o) {

        return `function elseif${elseifs++}()` +
            `{ return $$if(${this.expression.transpile(o)},` +
            `function if${elseififs++}() ` +
            `{ return ${flatten(this.then, o)}; }.bind(this), ` +
            `${this.else.transpile(o)});}.bind(this)`;

    }

}

export default ElseIfClause
