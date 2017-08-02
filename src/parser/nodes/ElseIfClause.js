import Node from './Node';

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

        return `function elseif${elseifs++}() {` +
            `return make.$if(${this.expression.transpile(o)},` +
            `function if${elseififs++}() {` +
            `return $$box([${this.then.map(t=>t.transpile(o)).join(',')}])}.bind(this),` +
            `${this.else.transpile(o)})}.bind(this)`;

    }

}

export default ElseIfClause
