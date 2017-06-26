import Parser from './parser/Parser';
import * as nodes from './parser/nodes';
import * as babel from 'babel-core';
import es2015 from 'babel-preset-es2015';
import exports from 'babel-plugin-transform-export-extensions';

const DEFAULT_OPTIONS = {
  debug: false,
  es2015: false,
  fileName: 'wmloutput.js'
};

export function es5ify(js) {

  return babel.transform(js, {
    sourceMaps: true,
    presets: [es2015],
    plugins: [exports],
    highlightCode: false
  }).code;

}

export function compile(src, o = DEFAULT_OPTIONS, ast = nodes) {

  let output = Parser.parse(src, nodes).transpile();
  return (o.es2015) ? es5ify(output) : output;

}

export default compile

