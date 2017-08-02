import Node from './Node';

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

        var variable = this.variable.transpile(o);
        var index = this.index ? this.index.transpile(o) : '_';
        var array = this.array ? this.array.transpile(o) : '__';
        var src = this.src.transpile(o);
        var otherwise = this.otherwise.map(c => c.transpile(o));

        count = count + 1;

        return `$$for(${src},` +
            `function for${count} (${variable}, ${index}, ${array}) {` +
            `return $$box([${this.children.map(c=>c.transpile(o)).join(',')}])}` +
            `.bind(this), function otherwise${count}() {` +
            `return $$box([${this.otherwise.map(c=>c.transpile(o)).join(',')}])}.bind(this))`;

    }

}

export default ForStatement
