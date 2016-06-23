
/**
 * UnaryExpression 
 */
class UnaryExpression {

  constructor(op, expression, location) {

    this.op = op;
    this.expression = expression;
    this.location = location;

  }

  toString() {

return `${this.op}${this.expression}`;

  }

}
export default UnaryExpression

