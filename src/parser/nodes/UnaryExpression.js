import Node from './Node';

/**
 * UnaryExpression 
 * @param {string} op 
 * @param {Expression} expression 
 * @param {Location} location 
 */
class UnaryExpression extends Node {

  constructor(op, expression, location) {

    super(location);
    this.op = op;
    this.expression = expression;

  }

  transpile() {

return `${this.op}${this.expression.transpile()}`;

  }

  compile(o) {

    return this.sourceNode(o.fileName, this.op).
      add(this.expression.compile(o));

  }

}
export default UnaryExpression
