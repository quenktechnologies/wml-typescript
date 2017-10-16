import * as Parser from './Parser';
import * as nodes from './Node';

export interface AST {

    [key: string]: nodes.Node

}

export const DEFAULT_OPTIONS = {
    debug: false,
    es5: false,
    main: 'Main',
    module: '@quenk/wml-runtime',
};

export const parse = (str: string, ast:any = nodes): nodes.Module => {

    Parser.parser.yy = { ast };
    return Parser.parser.parse(str);

}

