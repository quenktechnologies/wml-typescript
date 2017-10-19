/// <reference path="../src/Parser.d.ts" />
import * as nodes from './AST';
import { Either } from 'afpl';
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
export declare const parse: (str: string, ast?: any) => Either<Error, nodes.Module>;
/**
 * compile a string of WML turning it into typescript code.
 */
export declare const compile: (src: string, options?: Options) => Either<Error, string>;
