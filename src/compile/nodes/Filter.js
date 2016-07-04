import Node from './Node';

/**
 * Filter 
 */
class Filter extends Node {

    constructor(name, args, location) {

        super(location);
        this.name = name;
        this.arguments = args;

    }

    addValue(o) {

        this.arguments = [o].concat(this.arguments);
        return this;

    }

    transpile() {

        var args = this.arguments.slice();
        return `${this.name}.apply(this, [${this.transpileList(this.arguments)}])`;

    }

    compile(o) {

        var node = this.sourceNode(o.fileName, '');

        node.add(`${this.name}.apply(this,`).
        add('[');

        return this.compileList(this.arguments, node, o).
        add('])');

    }

}

export default Filter
