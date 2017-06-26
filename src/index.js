import Parser from './parser/Parser';
import * as nodes from './parser/nodes';

const DEFAULT_OPTIONS = {
  debug: false,
  fileName: 'wmloutput.js'
};

export function compile(src, ast = nodes, o = DEFAULT_OPTIONS) {

  return Parser.parse(src, nodes).transpile();

}

export default compile

