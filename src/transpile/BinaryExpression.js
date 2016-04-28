
/**
 * BinaryExpression 
 */
class BinaryExpression {

  constructor(left, op, right, location) {

    this.left = left;
    this.op = op;
    this.right = right;
    this.location = location;

  }

  toString() {

    return `${this.left.toString()} ${this.op} ${this.right.toString()}`;

  }

}
export default BinaryExpression

