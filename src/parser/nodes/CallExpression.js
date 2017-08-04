import Node from './Node';

/**
 * CallExpression
 */
class CallExpression extends Node {

    constructor(callee, hints, args, location) {

        super();
        this.type = 'function-expression';
        this.callee = callee;
        this.hints = hints;
        this.arguments = args;
        this.location = location;

    }

    transpile(o) {

        var callee = this.callee.transpile(o);
        var args = this.arguments.map(a => a.transpile(o));
        var hints = this.hints.map(h => h.transpile(o)).join(',');

        return `${callee}${hints?'<'+hints+'>':''}(${args})`;

    }


}
export default CallExpression
