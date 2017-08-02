import Node from './Node';

/*
 * IncludeStatement
 */
class IncludeStatement extends Node {

    constructor(tmpl, args, location) {

        super();
        this.type = 'include-statement';
        this.template = tmpl;
        this.arguments = args;
        this.location = location;

    }

    transpile(o) {

        var args = this.arguments.map(a => a.transpile(o)).join(',');

        return `${this.template.transpile(o)}.apply(this, [view, ${args}])`;

    }

}

export default IncludeStatement
