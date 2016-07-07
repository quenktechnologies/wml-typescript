import Property from 'property-seek';

/**
 * AttributeList provides an API for reading the 
 * attributes supplied to an Element.
 * @param {object} attrs 
 */
class AttributeList {

    constructor(attrs) {

        this._attrs = attrs;

    }

    /**
     * read a value form the internal list.
     * @param {string} path 
     * @param {*} defaultValue - This value is returned if the value is not set.
     */
    read(path, defaultValue) {

        return Property.get(this._attrs, path) || defaultValue;

    }


}

export default AttributeList
