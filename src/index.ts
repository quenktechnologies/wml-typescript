import * as Parser from './Parser';
import * as nodes from './AST';
import * as afpl from 'afpl';
import * as TypeScript from './TypeScript';
import { Either } from 'afpl';

export type Code = Either<Error, Context>;

export interface Options {

    debug?: boolean,
    main?: string,
    module?: string

}

export class Context {

    constructor(public text: string) { }

}

export const defaultOptions: Options = {
    debug: false,
    main: 'Main',
    module: '@quenk/wml-runtime',
};

export const parse = (str: string, ast: any = nodes): nodes.Module => {

    Parser.parser.yy = { ast };
    return Parser.parser.parse(str);

}

export const compile = (src: string, options: Options = {}): Either<Error, string> => {

     let opts = afpl.util.merge(defaultOptions, options);

    try {

        return Either.right<Error, string>(TypeScript.code(parse(src), opts));

    } catch (e) {

        return Either.left<Error, string>(e);

    }

}
