var count = 0;
/**
 * FunctionLiteral 
 * @param {array<string>} parameters 
 * @param {Expression} body 
 */
class FunctionLiteral {

    constructor(parameters, body) {

        this.parameters = parameters;
        this.body = body;

    }

    toString() {

        count = count + 1;

        return `function func_literal_${count}(${this.parameters.join('')})` +
            `{ return ${this.body}; }.bind(this)`;

    }

}

export default FunctionLiteral
