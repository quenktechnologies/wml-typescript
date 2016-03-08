import Writer from './Writer';

/**
 * ObjectWriter for writing object strings
 */
class ObjectWriter extends Writer {

    constructor() {

        super('{');

    }

    /**
     * writeValue will write a key value pair
     * @param {string} key 
     * @param {string} value 
     */
    writeValue(key, value) {
        this.write(`'${key}':${value}`);
    }

    finish() {

        this.write('}');
        return this.buf;

    }

}
export default ObjectWriter
