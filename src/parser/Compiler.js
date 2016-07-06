import Parser from './Parser';
import AbstractSyntaxTree from './nodes/AbstractSyntaxTree';

/**
 * Compiler turns wml markup into javascript.
 *
 * The code produced uses somes ES2015 and should be ran through
 * a compiler if backward support is desired
 *
 */
class Compiler {

    /**
     * compile a string into js code.
     * @param {string} src 
     * @param {object} o 
     */
    compile(src, o) {

        var {
            debug
        } = o || {
            debug: false,
            fileName: 'wmloutput.js'
        };

        return Parser.parse(src, new AbstractSyntaxTree()).transpile();

    }

}

export default Compiler
