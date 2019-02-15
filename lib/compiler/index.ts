import * as os from 'os';
import * as ts from './code/output';
import { Except } from '@quenk/noni/lib/control/error';
import {DOMGenerator} from './code/generator/dom';
import {Context} from './code';
import { parse } from '@quenk/wml-parser';

/**
 * OptionValue
 */
export type OptionValue = boolean | string | undefined;

/**
 * TypeScript output.
 */
export type TypeScript = string;

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
  parse(src).map(m => ts.module2TS(newContext(opts),m));

const newContext =  (opts:Options) : Context => {

  let options:any = opts;

  opts.EOL = os.EOL;

  return { options, generator: new DOMGenerator() };

};

