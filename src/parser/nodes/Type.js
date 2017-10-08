import Node from './Node';

/**
 * Type
 * @property {Identifier} name
 * @property {Type[]} generics
 * @property {Location} location
 */
class Type extends Node {

    constructor(name, generics, location) {

        super();
        this.type = 'type';
        this.name = name;
        this.generics = generics;
        this.location = location;

    }

    transpile(o) {

        let g = this.generics.length > 0 ?
            `<${this.generics.map(g=>g.transpile(o)).join(',')}>`:
            '';

        return `${this.name.transpile(o)}${g}`;

    }

}

export default Type
