import Node from './Node';

/**
 * TypeClass
 * @property {Identifier} name
 * @property {Type} constraint
 * @property {Location} location
 */
class Type extends Node {

    constructor(name, constraint, location) {

        super();
        this.type = 'type-class';
        this.name = name;
        this.constraint = constraint;
        this.location = location;

    }

    transpile(o) {

        let c = this.constraint ?
            ` extends ${this.constraint.transpile(o)}` : '';

        return `${this.name.transpile(o)}${c}`;

    }

}

export default Type
