/// <reference path='Parser.d.ts' />
import * as Parser from './Parser';
import * as nodes from './AST';
import * as afpl from 'afpl';
import * as jsfmt from 'js-beautify';
import * as TypeScript from './TypeScript';
import { Either } from 'afpl';

export interface Options {

    debug?: boolean,
    es5?: boolean,
    pretty?: boolean,
    main?: string,
    module?: string

}

const defaultOptions: Options = {
    debug: false,
    main: 'Main',
    module: '@quenk/wml',
};

/**
 * parse a string as WML returning either an error or an AST.
 */
export const parse = (str: string, ast: any = nodes): Either<Error, nodes.Module> => {

    Parser.parser.yy = { ast };

    try {

        return Either.right<Error, nodes.Module>(Parser.parser.parse(str));

    } catch (e) {

        return Either.left<Error, nodes.Module>(e);

    }

}

/**
 * pretty up the output.
 */
export const pretty = (doit: boolean) => (s: string): string =>
 doit ? jsfmt(s, {}) : s;

/**
 * compile a string of WML turning it into typescript code.
 */
export const compile = (src: string, options: Options = {}): Either<Error, string> => {

    let opts = afpl.util.merge(defaultOptions, options);

    return parse(src)
        .map(m => TypeScript.code(m, opts))
        .map(pretty(options.pretty));
}
