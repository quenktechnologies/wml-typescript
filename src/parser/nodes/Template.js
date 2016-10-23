import Node from './Node';

/**
 * Template
 * @param {array<Import>} imports
 * @param {array<string>} uses
 * @param {Tag} root
 * @param {Location} location
 */
class Template extends Node {

  constructor(imports, uses, exports, root, location) {

    super();

    this.type = 'template';
    this.imports = imports;
    this.uses = uses;
    this.exports = exports;
    this.root = root;
    this.location = location;

  }

  transpile() {

    var str = '';
    var args = this.uses.map(p => p.transpile()).join(',');

    args = (args) ? ' ,' + args : args;

    this.imports.forEach(i => str = str + i.transpile());
    str = `${str}\n`;
    this.exports.forEach(e => str = str + e.transpile());

    return `${str}\nexport default function (make${args}) { return ${this.root.transpile()}; }`;

  }

  compile(o) {

    var str = '';
    var args = this.uses.map(p => p.compile(o));

    args = (args) ? ' ,' + args : args;

    var sn = this.sourceNode(o.fileName, '').
    add(this.imports.map(i => i.compile(o))).
    add(`\n`).
    add(this.exports.map(e => e.compile(o))).
    add(`\n`).
    add(`export`).
    add(` { `);

    this.exports.forEach(e => sn.add(`${e.id}`).add(`,`));

    return sn.add(`}`).
    add(`;`).
    add(`\n`).
    add('export default function (make').
    add(args).
    add('{ return ').
    add(this.root.compile(o)).
    add('; }');


  }

}

export default Template

