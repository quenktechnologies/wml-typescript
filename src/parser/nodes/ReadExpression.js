import Node from './Node';

/**
 * ReadExpression
 * @param {Expression} path
 * @param {Expression} default
 * @param {Location} location
 */
class ReadExpression extends Node {

    constructor(path, defaults, location) {

        super();
        this.type = 'read-expression';
        this.path = path;
        this.defaults = defaults;
        this.location = location;

    }

    transpile(o) {

        let d = this.defaults ?  this.defaults.transpile(o) : `''`;
        return `that.attributes.read(${this.path.transpile(o)}, ${d}),`

    }

}

export default ReadExpression
