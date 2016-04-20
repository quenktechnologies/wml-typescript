import ParserImpl from './ParserImpl';
import * as ast from './ast';

let help = {

    location(src, firstToken, lastToken) {

        return {

            match: src,
            start: {
                line: firstToken.first_line,
                column: firstToken.first_column,
            },
            end: {
                line: lastToken.last_line,
                column: lastToken.last_column
            }

        };


    },
    parseNumber(str) {

        return str;

    },
    parseBoolean(bool) {
        return bool;

    },
    ensureTagsMatch() {

    }

};

class Parser {

    /** 
     * parse input and return an AST
     * @param {string} input 
     * @param {object} userAST 
     * @returns {object}
     */
    static parse(input, userAST) {
        ParserImpl.parser.yy = {};
        ParserImpl.parser.yy.help = help;
        ParserImpl.parser.yy.ast = userAST || ast;
        return ParserImpl.parser.parse(input);

    }

}

export default Parser
