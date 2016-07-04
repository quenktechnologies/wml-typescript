import Parser from '../parse/Parser';
import AbstractSyntaxTree from './AbstractSyntaxTree';

/**
 * Transpiler turns wml markup into javascript.
 *
 * The code produced uses somes ES2015 and should be ran through
 * a transpiler if backward support is desired.
 *
 */
class Transpiler {

    /**
     * transpile a string into js code.
     * @param {string} src 
     */
    transpile(src) {

        return ''+Parser.parse(src, new AbstractSyntaxTree());

    }

}

export default Transpiler
