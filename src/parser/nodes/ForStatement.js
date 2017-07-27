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
        var children = this.children.map(c => c.transpile(o));
        var otherwise = this.otherwise.map(c => c.transpile(o));

        count = count + 1;

        return `$$for(${src},` +
            `function for${count} (${variable}, ${index}, ${array}) {` +
            `return [${children}]; }.bind(this),` +
            `function otherwise${count}() {
               return [${otherwise}];
            })`;

    }

    compile(o) {

        var node = this.sourceNode(o.fileName, '');

        count = count + 1;

        node.add('make.$for(').
        add(this.target.compile(o)).
        add(`function for_${count} (${this.variable}, ${this.index}, ${this.array}) {`).
        add('return [');

        this.compileList(this.children, node, o);
        return node.add(']; }.bind(this))');


    }

}

export default ForStatement
