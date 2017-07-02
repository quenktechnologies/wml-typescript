import Parser from './parser/Parser';
import * as nodes from './parser/nodes';

const DEFAULT_OPTIONS = {
  debug: false,
  es5: false,
  main: 'Main',
  typescript: false,
  pretty: false
};

export const compile = (src, o = DEFAULT_OPTIONS, ast = nodes) =>
  Parser.parse(src, nodes).transpile(o);


export default compile

