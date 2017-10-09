import Node from './Node';
import {
    main as viewFn,
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
 * @param {ExportStatement[]} exports
 * @param {TypeClass[]} generics
 * @param {Type} context
 * @param {Tag} root
 * @param {Location} location
 */
class Module extends Node {

    constructor(imports, exports, generics, context, root, location) {

        super();

        this.type = 'module';
        this.imports = imports;
        this.exports = exports;
        this.generics = generics;
        this.context = context;
        this.root = root;
        this.location = location;

    }

    transpile(o) {

        let pipeline = [];
        let runtime = runtimeFn(o.module);
        let imports = this.imports.map(i => i.transpile(o)).join('');
        let exports = this.exports.map(e => e.transpile(o)).join('');

        let classes = this.generics.length.length > 0 ?
            `<${this.generics.map(g=>g.transpile(o)).join(',')}>` :
            '';

        let context = this.context.transpile(o);
        let root = this.root ? this.root.transpile(o) : '';
        let view = root ? viewFn('Main', classes, context,  root, o) : root;
        let output = code => pipeline.reduce((p, c) => c(p), code);

        if (o.es5)
            pipeline.push((typeof o.es5 === 'object') ? s => es5(s, o.es5) : es5);

        if (o.pretty)
            pipeline.push(pretty);

        return output(`${runtime} \n ${imports} \n ${exports} ${view}`);

    }

}

export default Module
