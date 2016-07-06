import Node from './Node';

var count = 0;
/**
 * FunctionLiteral 
 * @param {array<string>} parameters 
 * @param {Expression} body 
 * @param {Location} location 
 */
class FunctionLiteral extends Node {

    constructor(parameters, body, location) {

        super(location);
        this.type = 'function-literal';
        this.parameters = parameters;
        this.body = body;

    }

    transpile() {

        var params = this.parameters.join(',');
        count = count + 1;

        return `function function_literal_${count}(${params})` +
            `{ return ${this.body.transpile()}; }.bind(this)`;

    }

    compile(o) {

      var node = this.sourceNode(o.fileName, '');

      node.add(`function function_literal_${count}(${this.parameters.join(',')})`).
        add('{ return ');

        return this.compileList(this.body.compile(o)).
            add('; } bind(this)');

    }

}

export default FunctionLiteral
