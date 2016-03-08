import * as wml from '../parser';
import ScriptWriter from './ScriptWriter';

/**
 * Transpiler turns a wml AST into javascript.
 *
 * The code produced is es6 (ES2015) format and 
 * intentioned to be used as part of a bundling process that
 * includes something like babel.
 */
class Transpiler {

    /**
     * transpile a string into js code.
     * @param {string} src 
     */
    transpile(src) {

        var w = new ScriptWriter();
        var ast = wml.parser.parse(src);

        w.writeImports(ast.imports);
        w.writeTree(ast.tree);
        return w.finish();

    }

}

export default Transpiler
