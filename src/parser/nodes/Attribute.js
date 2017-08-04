import Node from './Node';

/**
 * Attribute
 */
class Attribute extends Node {

    constructor(name, namespace, value, location) {

        super(location);
        this.type = 'attribute';
        this.name = name;
        this.namespace = namespace;
        this.value = value;

    }

    /**
     * pushStringOnNamespace adds this attribute's value to it's namespace.
     * @param {object} namespaces
     */
    pushStringOnNamespace(namespaces, o) {

        var val = `'${this.name}': ${this.value.transpile(o)}`;

        if (this.namespace) {

            namespaces[this.namespace] = namespaces[this.namespace] || [];
            namespaces[this.namespace].push(val);

        } else {

            namespaces.html.push(val);

        }

    }

    /**
     * pushNodeOnNamespace adds this attribute's SourceNode to it's namespace.
     * @param {object} namespacess
     */
    pushNodeOnNamespace(namespaces, o) {

        if (this.namespace) {

            namespaces[this.namespace] = namespaces[this.namespace] || [];
            namespaces[this.namespace].push(`'${this.name}'`, ':', this.value.compile(o), ',');

        } else {

            namespaces.html.push(`'${this.name}'`, ':', this.value.compile(o), ',');

        }
    }

    transpile() {

        throw new TypeError('Cannot transpile an Attribute use pushStringOnNamespace()!');

    }

    compile(o) {

        throw new TypeError('Cannot compile an Attribute use pushNodeOnNamespace()!');

    }

}

export default Attribute
