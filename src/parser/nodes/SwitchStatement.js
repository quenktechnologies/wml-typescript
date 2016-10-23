import Node from './Node';

/**
 * SwitchStatement
 * @param {Expression} expression
 * @param {array<CaseStatement>} cases
 * @param {Location} location
 */
class SwitchStatement extends Node {

  constructor(expression, cases, location) {

    super(location);
    this.type = 'switch-statement';
    this.expression = expression;
    this.cases = cases;

  }

  transpile() {

    var str = '{';

    this.cases.forEach(c => {

      str = `${str} ${(c.expression) ? c.expression.transpile() : 'default'}` +
        ` : ${c.transpile()}, `;

    });

    str = str.substring(0, str.length - 1);
    str = str + '}';

    return `make.$switch(${this.expression.transpile()},${str})`;

  }

  compile(o) {

    var node = this.sourceNode(o.fileName, '');

    node.add(`make.$switch(`).
    add(this.expression.compile(o)).
    add(',{');

    this.cases.forEach((c, k, all) => {

      node.add((c.expression) ? c.expression.compile(o) : `default`).
      add(':').
      add(c.compile(o));

      if (k < all.length - 1)
        node.add(',');

    });

    return node.add('})');

  }

}

export default SwitchStatement

