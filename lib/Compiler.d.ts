/// <reference path="../src/Parser.d.ts" />
import * as nodes from './AST';
import * as afpl from 'afpl';
export interface Options {
    debug?: boolean;
    es5?: boolean;
    pretty?: boolean;
    main?: string;
    module?: string;
}
/**
 * parse a string as WML returning either an error or an AST.
 */
export declare const parse: (str: string, ast?: any) => afpl.Either<Error, nodes.Module>;
/**
 * pretty up the output.
 */
export declare const pretty: (doit: boolean) => (s: string) => string;
/**
 * compile a string of WML turning it into typescript code.
 */
export declare const compile: (src: string, options?: Options) => afpl.Either<Error, string>;
