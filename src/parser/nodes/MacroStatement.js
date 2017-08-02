import Node from './Node';

/**
 * MacroStatement
 */
class MacroStatement extends Node {

    constructor(id, args, children, location) {

        super();

        this.type = 'macro-statement';
        this.id = id;
        this.children = children;
        this.arguments = args;
        this.location = location;

    }

    transpile(o) {

        let args = ['view'].concat(this.arguments.map(a => a.transpile(o)));
        let kids = this.children.map(c => c.transpile(o)).join(',');

        return `
        export function ${this.id}(${args}) {
        return $$box([${kids}]);}
        `;

    }

}

export default MacroStatement
