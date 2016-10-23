import Node from './Node';

var elses = 0;

/**
 * ElseClause
 * @param {array<Child>}
 */
class ElseClause extends Node {

  constructor(children = [], location = {}) {

    super();

    this.type = 'else-clause';
    this.children = children;
    this.location = location;

  }

  transpile() {

    return `function else_clause${elses++}() { return ` +
      `[${this.children.map(c=>c.transpile()).join(',')}];}.bind(this)`;

  }

  compile(o) {

    var sn = this.sourceNode(o.fileName, '').
    add(`function else_clause${elses++}()`).
    add(`{`).
    add(`return`).
    add(`[`);

    this.children.forEach(c => sn.add(c.compile(o)).add(','));

    return sn.add(`]`).
      add(`;`).
    add(`}`).
      add(`.`).
      add(`bind(this)`);

  }

}

export default ElseClause

