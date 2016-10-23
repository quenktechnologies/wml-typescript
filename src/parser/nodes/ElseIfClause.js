import Node from './Node';

var elseifs = 0;
var elseififs = 0;
var elseifelses = 0;

/**
 * ElseIfClause
 * @param {Expression} expression
 * @param {array<Expression>} ithen
 * @param {array<Expression>} ielse
 */
class ElseIfClause extends Node {

  constructor(expression, $then, $else = function() {}, location = null) {

    super();

    this.type = 'else-if-clause';
    this.expression = expression;
    this.then = $then;
    this.else = $else;
    this.location = location;

  }

  transpile() {

    return `function elseif${elseifs++}() { ` +
      `return make.$if(` +
      `${this.expression.transpile()},` +
      `function if${elseififs++}() { ` +
      `return [${this.then.map(t=>t.transpile()).join(',')}];` +
      `}.bind(this),` +
      `${this.else.transpile()} ` +
      `);}.bind(this)`;

  }

  compile(o) {

    var sn = this.sourceNode(o.fileName, '').
    add(`function elseif${elseifs++}()`).
    add(`{`).
    add(`return`).
    add(`make.$if`).
    add(`(`).
    add(this.expression.compile(o)).
    add(`,`).
    add(`function if${elseififs++}()`).
    add(`{`).
    add(`return`).
    add(`[`);

    this.then.forEach(t => sn.add([t.compile(o), `,`]));

    return sn.add(`]`).
    add(`}`).
      add(`.`).
      add(`bind(this)`).
    add(`,`).
    add(this.else.compile(o)).
    add(`)`).
    add(`}`).
      add(`.`).
    add(`bind(this)`);

  }

}

export default ElseIfClause

