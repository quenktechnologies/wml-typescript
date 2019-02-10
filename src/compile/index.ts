import * as ts from './typescript';
import { Except } from '@quenk/noni/lib/control/error';
import { parse } from '@quenk/wml-parser';

/**
 * OptionValue
 */
export type OptionValue = boolean | string | undefined;

/**
 * Options the compiler understands.
 */
export interface Options {

    [key: string]: OptionValue

    debug?: boolean,

    main?: string,

    module?: string

}

/**
 * compile a string of WML into typescript code.
 */
export const compile = (src: string, opts: Options = {}): Except<string> =>
    parse(src).map(m => ts.code(m, opts));

