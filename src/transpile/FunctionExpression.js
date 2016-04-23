
/**
 * FunctionExpression
 */
class FunctionExpression {

  constructor(name, args) {

    this.name = name;
    this.args = args;

  }

  toString() {

    return `${this.name}(${this.args.join(',')})`;

  }

}
export default FunctionExpression

