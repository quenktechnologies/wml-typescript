import Node from './Node';
/**
 * ExportFromStatement
 * @param {string} in
 * @param {StringLiteral} module
 * @param {Location} location
 */
class ExportFromStatement extends Node {

  constructor(id, module, location) {

    super();

    this.type = 'export-from-statement';
    this.id = id;
    this.module = module;
    this.location = location;

  }

  transpile() {

    return `export ${this.id} from ${this.module.transpile()};\n`;

  }

  compile(o) {

    return
    this.sourceNode(o.fileName, '').
    add(`export ${this.id} from `).
    add(this.module.compile(o)).
      add(`\n`);

  }

}

export default ExportFromStatement

