import Node from './Node';
import { flatten } from '../util';

/**
 * FragmentStatement
 */
class FragmentStatement extends Node {

    constructor(id, generics, params, context, children, location) {

        super();

        this.type = 'fragment-statement';
        this.id = id;
        this.generics = generics;
        this.parameters = params;
        this.context = context;
        this.children = children;
        this.location = location;

    }

    transpile(o) {

        let generics =
            this.generics.length > 0 ?
            `<${this.generics.map(g => g.transpile(o)).join(',')}>` :
            '';

        let ctx = this.context.transpile(o);

        let args = [`$$ctx:${ctx}, view:AppView<$$ctx>`]
            .concat(this.parameters.map(a => a.transpile(o)));

        let id = this.id.transpile(o);

        return `export function ${id}${generics}(${args})` +
            `{ return ${flatten(this.children, o)}; } `;

    }

}

export default FragmentStatement
