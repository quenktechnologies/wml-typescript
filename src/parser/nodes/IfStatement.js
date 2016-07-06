import Node from './Node';

var thenCount = 0;
var elseCount = 0;

/**
 * IfStatement 
 * @param {Expression} expression
 * @param {array<Expression>} ithen 
 * @param {array<Expression>} ielse 
 */
class IfStatement extends Node {

    constructor(expression, ithen, ielse, location) {

        super(location);
        this.type = 'if-statement';
        this.expression = expression;
        this.then = ithen;
        this.else = ielse;

    }

    transpile() {

        var thens = this.then.map(c => c.transpile());
        var elses = this.else.map(c => c.transpile());

        return `make.$if(${this.expression.transpile()}, ` +
            `function if_${thenCount}(){ return [${thens}];}.bind(this), ` +
            `function else_${elseCount}(){ return [${elses}];}.bind(this))`;

    }

    compile(o) {

        var thens = this.then.map(c => c.compile(o));
        var elses = this.else.map(c => c.compile());

        return this.sourceNode(o.fileName, '').
        add('make.$if(').
        add(this.expression.compile(o)).
        add(`, function if_${thenCount}(){ return [`).
        add(thens).
        add(`}];}.bind(this), function else_${elseCount}(){ return [`).
        add(elses).
        add('}];}.bind(this))');

    }

}

export default IfStatement
