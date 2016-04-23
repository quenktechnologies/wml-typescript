var thens = 0;
var elses = 0;

/**
 * IfCondition 
 */
class IfCondition {

    constructor(expression, ithen, ielse, location) {

        this.expression = expression;
        this.then = ithen;
        this.else = [];
        this.location = location;

    }

    toString() {

        return `make.ifcondition(${this.expression}, ` +
            `function if_${thens}(){ return [${this.then.join(',')}];}.bind(this), ` +
            `function else_${elses}(){ return [${this.else.join(',')}];}.bind(this))`;

    }

}

export default IfCondition
