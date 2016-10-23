import Node from './Node';
/**
 * ExportStatement
 * @param {string} id
 * @param {Tag} root
 * @param {Location} location
 */
class ExportStatement extends Node {

  constructor(id, root, location) {

    super();

    this.type = 'export-statement';
    this.id = id;
    this.root = root;
    this.location = location;

  }

  transpile() {

    return `export function ${this.id}(make) { ` +
      `return ${this.root.transpile()};}\n`;

  }

  compile(o) {

    return
    this.sourceNode(o.fileName, '').
      add(`export`).
    add(`function ${this.id}(make)`).
    add(`{`).
    add(`return`).
    add(this.root.compile(o)).
    add(`;}`).
    add(`\n`);

  }

}

export default ExportStatement

