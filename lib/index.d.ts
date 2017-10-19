/// <reference path="../src/Parser.d.ts" />
import * as nodes from './AST';
import { Either } from 'afpl';
export declare type Code = Either<Error, Context>;
export interface Options {
    debug?: boolean;
    es5?: boolean;
    pretty?: boolean;
    main?: string;
    module?: string;
}
export declare class Context {
    text: string;
    constructor(text: string);
}
export declare const defaultOptions: Options;
export declare const parse: (str: string, ast?: any) => Either<Error, nodes.Module>;
export declare const compile: (src: string, options?: Options) => Either<Error, string>;
