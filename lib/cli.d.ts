import * as Promise from 'bluebird';
import { Maybe } from 'afpl/lib/monad/Maybe';
import { Options } from './';
export interface Arguments {
    '--es5': boolean;
    '--pretty': boolean;
    '--main': string;
}
export declare const stat: (path: string) => Promise<any>;
export declare const isDirectory: (path: string) => Promise<Maybe<boolean>>;
export declare const readdir: (path: string) => Promise<any>;
export declare const readFile: (path: string) => Promise<any>;
export declare const writeFile: (path: string) => (contents: string) => Promise<any>;
export declare const getOptions: (args: Arguments) => Options;
export declare const executeList: (path: string) => (list: string[]) => Promise<void[]>;
export declare const compile: (path: string, options: Options) => (txt: string) => Promise<string>;
