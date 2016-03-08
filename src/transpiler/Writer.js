/**
 * Writer
 * @param {string} buf 
 * @abstract
 */
class Writer {

    constructor(buf) {
        this.buf = buf || '';
    }

    /**
     * write some text to the buffer
     * @param {string} text 
     * @return {Writer}
     */
    write(text) {

        this.buf = this.buf + text;
        return this;

    }

    /**
     * finish finishes up writing and returns the result
     * @return {string} 
     */
    finish() {
        return this.buf;
    }

}
export default Writer
