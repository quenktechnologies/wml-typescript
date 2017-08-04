import Node from './Node';

/**
 * TernaryExpression
 * @param {Expression} logic
 * @param {Expression} iftrue
 * @param {Expression} iffalse
 */
class TernaryExpression extends Node {

    constructor(logic, iftrue, iffalse, location) {

      super(location);
      this.type = 'ternary-expression';
        this.logic = logic;
        this.iftrue = iftrue;
        this.iffalse = iffalse;

    }

    transpile(o) {

        return `(${this.logic.transpile(o)})? ${this.iftrue.transpile(o)} : ${this.iffalse.transpile(o)}`;

    }

    compile(o) {

      return this.sourceNode(o.fileName, '(').
        add(this.logic.compile(o)).
        add(')?').
        add(this.iftrue.compile(o)).
        add(':').
        add(this.iffalse.compile(o));

    }

}

export default TernaryExpression
