import Node from './Node';
import {
    view as viewFn,
    runtime as runtimeFn
} from '../Templates';
import * as babel from 'babel-core';
import es2015 from 'babel-preset-es2015';
import exports from 'babel-plugin-transform-export-extensions';
import {
    js_beautify
} from 'js-beautify';

const es5 = (js, opts = {}) =>
    babel.transform(js, Object.assign({
        sourceMaps: true,
        presets: [es2015],
        plugins: [exports],
        highlightCode: false
    }, opts)).code;

const pretty = js_beautify;

/**
 * Module
 * @param {array<Import>} imports
 * @param {array<string>} uses
 * @param {Tag} root
 * @param {Location} location
 */
class Module extends Node {

    constructor(imports, exports, root, location) {

        super();

        this.type = 'module';
        this.imports = imports;
        this.exports = exports;
        this.root = root;
        this.location = location;

    }

    transpile(o) {

        let pipeline = [];
        let runtime = runtimeFn(o.module);
        let imports = this.imports.map(i => i.transpile(o)).join('');
        let exports = this.exports.map(e => e.transpile(o)).join('');
        let view = this.root ? viewFn('Main', this.root, o) : '';
        let output = code => pipeline.reduce((p, c) => c(p), code);

        if (o.es5)
            pipeline.push((typeof o.es5 === 'object') ? s => es5(s, o.es5) : es5);

        if (o.pretty)
            pipeline.push(pretty);

        return output(`${runtime} \n ${imports} \n ${exports} ${view}`);

    }

}

export default Module
