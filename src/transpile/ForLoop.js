var count = 0;
/**
 * ForLoop 
 */
class ForLoop {

    constructor(variable, indexName, target, children, location) {

        this.variable = variable;
        this.indexName = indexName;
        this.target = target;
        this.children = children;
        this.location = location;

    }

    toString() {

      count = count +1;

        return `make.forloop(${this.target},`+
            `function for_${count} (${this.variable}, ${this.indexName}) {` +
            `return [${this.children.join(',')}]; }.bind(this))`;

    }

}

export default ForLoop
