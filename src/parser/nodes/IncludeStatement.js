import Node from './Node';

/*
 * IncludeStatement
 */
class IncludeStatement extends Node {

    constructor(tmpl, args, location) {

        super(location);
        this.type = 'include-statement';
        this.template = tmpl;
        this.arguments = args;

    }

    transpile() {

        var args = (this.arguments !== null) ? this.arguments.transpile() : '[]';
        return `${this.template.transpile()}.apply(this, [view].concat(${args}))`;

    }

    compile(o) {

        var args = (this.arguments !== null) ? this.arguments.compile() : '[]';

        return this.sourceNode(o.fileName, this.template.compile(o)).
        add('.apply(this, [make].concat(').
        add(args).
        add('))');

    }

}

export default IncludeStatement
