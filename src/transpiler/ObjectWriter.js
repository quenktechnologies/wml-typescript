import Writer from './Writer';

/**
 * ObjectWriter for writing object strings
 */
class ObjectWriter extends Writer {

    constructor() {

        super('{');
        this._subs = Object.create(null);

    }

    /**
     * writeValue will write a key value pair
     * @param {string} key 
     * @param {string} value 
     */
    writeValue(key, value) {
        this.write(`'${key}':${value},`);
    }

    /**
     * writeSubObject writes an object
     * @param {string} location
     * @param {string} key 
     * @param {*} value 
     */
    writeSubObject(location, key, value) {

        this._subs[`'${location}'`] = this._subs[location] || new ObjectWriter();
        this._subs[`'${location}'`].writeValue(key, value);

    }

    finish() {

            Object.keys(this._subs).
            forEach(l => this.write(`${l}: ${this._subs[l].finish()}`));

        if (this.buf[this.buf.length - 1] === ',')
            this.buf = this.buf.slice(0, this.buf.length - 1)

        this.write('}');
        return this.buf;

    }

}
export default ObjectWriter
