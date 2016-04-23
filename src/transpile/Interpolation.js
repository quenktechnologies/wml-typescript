/**
 * Interpolation 
 */
class Interpolation {

    constructor(value, filters, location) {

        this.value = value;
        this.filters = filters;
        this.location = location;

    }

    toString() {

        return this.filters.reduce((prev, current) => (typeof current === 'string') ?
            current : current.wrap(prev), this.value.toString());

    }

}

export default Interpolation
