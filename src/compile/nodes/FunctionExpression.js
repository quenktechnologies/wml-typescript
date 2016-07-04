import Node from './Node';

/**
 * FunctionExpression
 */
class FunctionExpression extends Node{

  constructor(name, args, location) {

    super(location);
    this.name = name;
    this.arguments = args;

  }

  transpile() {

    var args = this.transpileList(this.arguments);
    return `${this.name}(${args})`;

  }

  compile(o) {

    var node  = this.sourceNode(o.fileName, this.name).
      add('(');

    return this.compileList(this.arguments, node, o);



  }

}
export default FunctionExpression

