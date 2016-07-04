import Node from './Node';

/*
 * IncludeStatement 
 */
class IncludeStatement extends Node {

    constructor(tmpl, args, location) {

        super(location);
        this.template = tmpl;
        this.arguments = args;

    }

    transpile() {

        var args = this.transpileList(this.arguments);
        return `${this.template.transpile()}.apply(this, [make].concat([${args}]))`;

    }

    compile(o) {

      var node = this.sourceNode(o.fileName, this.template.compile(o));

      node.add('.apply(this, [make].concat([');

            this.compileList(this.arguments, node, o);

            return node.add(']))');

            }

}

export default IncludeStatement
