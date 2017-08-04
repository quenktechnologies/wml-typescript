import Node from './Node';

/**
 * TypableIdentifier
 */
export class TypableIdentifier extends Node {

    constructor(id, hint, types, array, location) {

        super();
        this.type = 'typable-identifier';
        this.id = id;
        this.hint = hint
        this.types = types;
        this.array = array;
        this.location = location;

    }

    transpile(o) {

        let id = this.id.transpile(o);
        let hint = this.hint.transpile(o);
        let types = this.types.map(t => t.transpile(o)).join(',');
        let array = `${this.array?'[]':''}`;

        return `${id}:${hint}${types?'<'+types+'>':''}${array}`;


    }

}

export default TypableIdentifier
