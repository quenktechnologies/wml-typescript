import ParserImpl from './ParserImpl';
import AbstractSyntaxTree from './nodes/AbstractSyntaxTree';

let help = {

  convertUsage(list) {

    if(!list) return '';

    if(list.length < 0 ) return '';

    return [','].con
    
    },
    parseNumber(str) {

        return str;

    },
    parseBoolean(bool) {
        return bool;

    },
    ensureTagsMatch() {

    },
    convertOperator(op) {

        switch (op) {

            case '==':
                return '===';

            case '!=':
                return '!==';

            default:
                return op;

        }

    }

};

class Parser {

    /** 
     * parse input and return an AST
     * @param {string} input 
     * @param {AbstractSyntaxTree} userAST 
     * @returns {object}
     */
    static parse(input, userAST) {

        ParserImpl.parser.yy = {};
        ParserImpl.parser.yy.help = help;
        ParserImpl.parser.yy.ast = (typeof userAST === 'object') ? userAST : new AbstractSyntaxTree();
        return ParserImpl.parser.parse(input);

    }

}

export default Parser
