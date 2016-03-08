import Writer from './Writer';

/**
 * ArrayWriter writes out an array string
 */
class ArrayWriter extends Writer {

    constructor() {
        super('[');
    }

    finish() {

      this.write(']');
      return this.buf;

    }

}
export default ArrayWriter
