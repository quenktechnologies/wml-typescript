import Node from './Node';

var thenCount = 0;

/**
 * IfStatement
 * @param {Expression} expression
 * @param {array<Expression>} ithen
 * @param {array<Expression>} ielse
 */
class IfStatement extends Node {

  constructor(expression, ithen, ielse = function() {}, location = null) {

    super(location);

    this.type = 'if-statement';
    this.expression = expression;
    this.then = ithen;
    this.else = ielse;
    this.location = location;

  }

  transpile() {

    return `make.$if(${this.expression.transpile()}, ` +
      `function if${thenCount}(){return [${this.then.map(t=>t.transpile()).join(',')}];}.bind(this),` +
      `${this.else.transpile()})`;

  }

  compile(o) {

    var sn = this.sourceNode(o.fileName, '').
    add(`make`).
    add(`$if`).
    add(`(`).
    add(this.expression.transpile()).
    add(`,`).
    add(`function if${thenCount}()`).
    add(`{`).
    add(`return`).
    add(`[`);

    this.then.forEach(t => sn.add(t.compile(o)).add(`,`));

    return sn.add(`]`).
    add(`;`).
    add(`}`).
    add(`.`).
    add(`bind(this)`).
    add(`,`).
    add(this.else.compile(o)).
    add(`)`);

  }

}

export default IfStatement

