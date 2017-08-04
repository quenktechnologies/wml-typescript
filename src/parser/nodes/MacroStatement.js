import Node from './Node';
import { flatten } from '../util';

/**
 * MacroStatement
 */
class MacroStatement extends Node {

    constructor(id, generics, params, children, location) {

        super();

        this.type = 'macro-statement';
        this.id = id;
        this.children = children;
        this.generics = generics;
        this.parameters = params;
        this.location = location;

    }

    transpile(o) {

        let generics = this.generics.map(g => g.transpile(o)).concat('Z').join(',');

        let args = [`view${o.typescript?':AppView<Z>':''}`]
            .concat(this.parameters.map(a => a.transpile(o)));

        return `export function ${this.id}${o.typescript?'<'+generics+'>':''}(${args})` +
            `{ return ${flatten(this.children, o)}; } `;

    }

}

export default MacroStatement
