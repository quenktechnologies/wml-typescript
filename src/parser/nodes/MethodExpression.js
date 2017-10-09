import Node from './Node';

/**
 * MethodExpression
 * @param {string} path
 * @param {array} args
 */
class MethodExpression extends Node {

    constructor(path, args, location) {

        super(location);
        this.type = 'method-expression';
        this.path = path;
        this.arguments = args;

    }

    transpile(o) {

        var args = this.arguments.map(m => m.transpile(o)).join(',');
        return `${this.path}(${args})`;

    }

}
export default MethodExpression
