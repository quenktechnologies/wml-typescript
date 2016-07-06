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

      return this.path;

    }

    compile(o) {

        return this.sourceNode(o.fileName, this.path);

    }

}
export default PropertyExpression
