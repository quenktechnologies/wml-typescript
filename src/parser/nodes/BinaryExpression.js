import Node from './Node';

/**
 * BinaryExpression 
 */
class BinaryExpression extends Node {

    constructor(left, op, right, location) {

        super(location);
        this.type = 'binary-expression';
        this.left = left;
        this.op = op;
        this.right = right;

    }

    transpile() {

        return `${this.left.transpile()} ${this.op} ${this.right.transpile()}`;

    }

    compile(o) {

        return this.sourceNode(o.fileName, '').
        add(this.left.compile(o)).
        add(this.op).
        add(this.right.compile(o));

        }

    }
    export default BinaryExpression
