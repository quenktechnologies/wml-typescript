import Node from './Node';

/**
 * TypeAssertion
 */
export class TypeAssertion extends Node {

    constructor(expression, hint, location) {

        super();
        this.expression = expression;
        this.hint = hint;
        this.location = location;

    }

    transpile(o) {

        return `(<${this.hint.transpile(o)}>${this.expression.transpile(o)})`;

    }

}

export default TypeAssertion
