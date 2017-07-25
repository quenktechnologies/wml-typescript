import Node from './Node';

/**
 * MacroStatement
 */
class MacroStatement extends Node {

  constructor(id, args, root, location) {

    super();

    this.type = 'macro-statement';
    this.id = id;
    this.root = root;
    this.arguments = args;
    this.location = location;

  }

  transpile(o) {

    let args = ['view'].concat(this.arguments.map(a => a.transpile(o)));

    return `export function ${this.id}(${args}) { ` +
      `return ${this.root.transpile(o)};}\n`;

  }

}

export default MacroStatement

