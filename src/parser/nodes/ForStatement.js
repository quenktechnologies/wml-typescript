import Node from './Node';
import { flatten } from '../util';

var count = 0;
/**
 * ForStatement
 */
class ForStatement extends Node {

    constructor(variable, index, array, src, children, otherwise, location) {

        super(location);
        this.type = 'for-statement';
        this.variable = variable;
        this.index = index;
        this.array = array;
        this.src = src;
        this.children = children;
        this.otherwise = otherwise;

    }

    transpile(o) {

        var args = [
            this.variable.transpile(o),
            this.index && this.index.transpile(o),
            this.array && this.array.transpile(o)
        ].filter(a => a).join(',');

        var src = this.src.transpile(o);
        var otherwise = this.otherwise.map(c => c.transpile(o));

        count = count + 1;

        return `$$for(${src}, function for${count} (${args})` +
            `{ return ${flatten(this.children, o)} },` +
            `function for_otherwise${count}()` +
            `{ return ${flatten(this.otherwise, o)} })`;



    }
}

export default ForStatement
