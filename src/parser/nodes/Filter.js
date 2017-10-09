import Node from './Node';

/**
 * Filter
 */
class Filter extends Node {

    constructor(name, args, location) {

        super(location);
        this.type = 'filter';
        this.name = name;
        this.arguments = args;

    }

    addValue(o) {

        this.arguments = [o].concat(this.arguments);
        return this;

    }

    transpile(o) {

        var args = this.arguments.map(a=>a.transpile(o));
        return `${this.name}(${args})`;

    }

}

export default Filter
