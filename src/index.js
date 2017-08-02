import Parser from './parser/Parser';
import * as nodes from './parser/nodes';

const DEFAULT_OPTIONS = {
  debug: false,
  es5: false,
  main: 'Main',
 module: '@quenk/wml-runtime',
  typescript: false,
  pretty: false
};

export const compile = (src, o = {}, ast = nodes) =>
  Parser.parse(src, nodes).transpile(Object.assign(o, DEFAULT_OPTIONS));


export default compile

