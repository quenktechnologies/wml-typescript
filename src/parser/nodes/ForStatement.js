import Node from './Node';

var count = 0;
/**
 * ForStatement 
 */
class ForStatement extends Node {

    constructor(variable, indexName, target, children, location) {

        super(location);
        this.type = 'for-statement';
        this.variable = variable;
        this.indexName = indexName;
        this.target = target;
        this.children = children;

    }

    transpile() {

        count = count + 1;

        return `make.$for(${this.target.transpile()},` +
            `function for_${count} (${this.variable}, ${this.indexName}) {` +
            `return [${this.transpileList(this.children)}]; }.bind(this))`;

    }

    compile(o) {

        var node = this.sourceNode(o.fileName, '');

        count = count + 1;

        node.add('make.$for(').
        add(this.target.compile(o)).
        add(`function for_${count} (${this.variable}, ${this.indexName}) {`).
        add('return [');

        this.compileList(this.children, node, o);
        return node.add(']; }.bind(this))');


    }

}

export default ForStatement
