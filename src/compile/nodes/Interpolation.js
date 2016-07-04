import Node from './Node';

/**
 * Interpolation 
 */
class Interpolation extends Node {

    constructor(value, filters, location) {

        super(location);
        this.value = value;
        this.filters = filters;

    }

    transpile() {

        return this.filters.reduce((prev, current) =>
            (typeof current === 'string') ?
            current : current.addValue(prev), this.value.transpile());

    }

    compile(o) {

        return this.sourceNode(o.fileName, '').
        add(this.filters.
            reduce((prev, current) => current.addValue(prev), this.value).
            compile(o));

    }

}

export default Interpolation
