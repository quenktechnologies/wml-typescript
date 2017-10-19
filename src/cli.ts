#! /usr/bin/env node

import {
    dirname,
    basename,
    resolve,
    extname
} from 'path';
import * as fs from 'fs';
import * as os from 'os';
import * as docopt from 'docopt';
import * as Promise from 'bluebird';
import { Maybe } from 'afpl/lib/monad/Maybe';
import { compile as _compile, Options } from './';

const compileError = (path: string, e: Error) =>
    new Error(`Error while processing ${path}:${os.EOL}${e.stack ? e.stack : e.message}`);

const node = Promise.fromCallback;

const getFileName = (file: string) =>
    `${dirname(file)}/${basename(file, extname(file))}`;

const expand = (parent: string) => (path: string) => resolve(parent, path);

export interface Arguments {

    '--es5': boolean,
    '--pretty': boolean,
    '--main': string

}

export const stat = (path: string) =>
    node(cb => fs.stat(path, cb));

export const isDirectory = (path: string) =>
    stat(path).then(stats => Maybe.fromBoolean(stats.isDirectory()));

export const readdir = (path: string) =>
    node(cb => fs.readdir(path, cb));

export const readFile = (path: string) =>
    node(cb => fs.readFile(path, { encoding: 'utf8' }, cb));

export const writeFile = (path: string) => (contents: string) =>
    node(cb => fs.writeFile(path, contents, cb));

export const getOptions = (args: Arguments): Options => ({

    es5: args['--es5'],
    pretty: args['--pretty'],
    main: args['--main']

});

export const executeList = (path: string) => (list: string[]) =>
    Promise.all(list.map(expand(path)).map(execute));

export const compile = (path: string, options: Options) => (txt: string) => _compile(txt, options).cata(
    e => Promise.reject(compileError(path, e)),
    s => Promise.resolve(s)
);

const args = docopt.docopt(`

Usage:
  wml [options] <path>

Options:
  -h --help          Show this screen.
  --extension ext    The file extension to use when writing files. [default: js]
  --es5              Output ES5 javascript.
  --pretty           Pretty prints the output. (not implemented yet)
  --version          Show version.
`, {
        version: require('../package.json').version
    });

const execute = (path: string): Promise<void> =>
    isDirectory(path)
        .then(m =>
            m
                .map(() => readdir(path).then(executeList(path)))
                .orJust(() => (extname(path) !== '.wml') ? Promise.resolve(null) :
                    readFile(path)
                        .then(compile(path, getOptions(args)))
                        .then(writeFile(`${getFileName(path)}.${args['--extension']}`)))
                .get());

execute(expand(process.cwd())(args['<path>']))
    .then(() => process.exit(0))
    .catch(e => (console.error(e.stack ? e.stack : e), process.exit(255)));

