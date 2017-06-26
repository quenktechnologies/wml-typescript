import Node from './Node';

/**
 * Interpolation 
 * @param {Expression} expression 
 * @param {array<Filter>} filters 
 * @param {Location} location 
 */
class Interpolation extends Node {

    constructor(expression, filters, location) {

        super(location);
        this.type = 'interpolation';
        this.expression = expression;
        this.filters = filters;

    }

    transpile() {

        return this.filters.reduce((prev, current) => current.addValue(prev),
            this.expression).transpile();

    }

    compile(o) {

        return this.sourceNode(o.fileName, '').
        add(this.filters.reduce((prev, current) => current.addValue(prev),
            this.expression).compile(o));

    }

}

export default Interpolation