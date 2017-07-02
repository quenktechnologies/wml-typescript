import Node from './Node';

/**
 * PropertyExpression
 * @param {string} path
 */
class PropertyExpression extends Node {

  constructor(path, location) {

    super(location);
    this.type = 'property-expression';
    this.path = path;

  }

  transpile() {

    var parts = this.path.split('.');
    var head = parts.shift();

    parts = parts.join('.');

    return `$$resolve(${head}, '${parts}')`;

  }

  compile(o) {

    var parts = this.path.split('.');
    var head = parts.shift();

    parts = parts.join('.');

    return this.sourceNode(o.fileName, `$$resolve(${head}, '${parts}')`);

  }

}
export default PropertyExpression

