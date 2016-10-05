import property from 'property-seek';

/**
 * Attributes provides an API for reading the 
 * attributes supplied to an Element.
 * @param {object} attrs 
 */
class Attributes {

    constructor(attrs) {

        this._attrs = attrs;

    }

    static isset(value) {

      return [null, undefined].indexOf(value) < 0;

    }

    /**
     * read a value form the internal list.
     * @param {string} path 
     * @param {*} defaultValue - This value is returned if the value is not set.
     */
    read(path, defaultValue) {

        var ret = property(this._attrs, path.split(':').join('.'));

        defaultValue = Attributes.isset(defaultValue)? defaultValue : '';

        if(!Attributes.isset(ret))
            return defaultValue;

        return ret;

    }

    /**
     * require is like read but throws an Error if the value is not supplied.
     * @param {string} path 
     * @returns {*}
     */
    require(path) {

        var ret = this.read(path);

        if(!Attributes.isset(ret))
            throw new ReferenceError(`${path} is required!`);

        return ret;

    }

    /**
     * requireArray requires the value to be an array, if no 
     * value is read then default is provided.
     * @param {string} path 
     * @param {*} defaultValue 
     */
    requireArray(path, defaultValue) {

        var ret = this.read(path);

        if(!Attributes.isset(ret)) {

            if (Attributes.isset(defaultValue))
                return defaultValue;

            throw new ReferenceError(`${path} is required!`);

        } else {

            if (Array.isArray(ret))
                return ret;

            throw new TypeError(`${path} must be an array got ${typeof ret}!`);

        }

    }


}

export default Attributes
