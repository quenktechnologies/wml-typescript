import Node from './Node';

/*
 * CallStatement
 */
class CallStatement extends Node {

    constructor(tmpl, args, location) {

        super();
        this.type = 'call-statement';
        this.template = tmpl;
        this.arguments = args;
        this.location = location;

    }

    transpile(o) {

        var args = this.arguments.args.length > 0 ?
            `,${this.arguments.map(a => a.transpile(o)).join(',')}` :
            '';

        return `${this.template.transpile(o)}($$ctx,view${args})`;

    }

}

export default CallStatement
