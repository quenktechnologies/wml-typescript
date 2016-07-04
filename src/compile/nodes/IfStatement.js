import Node from './Node';

var thens = 0;
var elses = 0;

/**
 * IfStatement 
 * @param {Expression} expression
 * @param {Expression} ithen 
 * @param {Expression} ielse 
 */
class IfStatement extends Node {

    constructor(expression, ithen, ielse, location) {

        super(location);
        this.expression = expression;
        this.then = ithen;
        this.else = ielse;

    }

    transpile() {

        return `make.ifcondition(${this.expression.transpile()}, ` +
            `function if_${thens}(){ return [${this.then.transpile()}];}.bind(this), ` +
            `function else_${elses}(){ return [${this.else.transpile()}];}.bind(this))`;

    }

    compile(o) {

        return this.sourceNode(o.fileName, '').
        add('make.ifcondition(').
        add(this.expression.compile(o)).
        add(`, function if_${thens}(){ return [`).
        add(this.then.compile(o)).
        add(`}];}.bind(this), function else_${elses}(){ return [`).
        add(this.else.compile(o)).
        add('}];}.bind(this))');

    }

}

export default IfStatement
