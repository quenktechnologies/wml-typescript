import Node from './Node';

/**
 * AttributeSpread 
 */
class AttributeSpread extends Node {

    constructor(value, key, location) {

        super();
        this.type = 'attribute-spread';
        this.key = key;
        this.value = value;
        this.location = location;

    }

    /**
     * pushStringOnNamespace adds this attribute's value to it's namespace.
     * @param {object} namespaces 
     */
    pushStringOnNamespace(namespaces) {

    }

    /**
     * pushNodeOnNamespace adds this attribute's SourceNode to it's namespace.
     * @param {object} namespacess 
     */
    pushNodeOnNamespace(namespaces, o) {
    
    }

    /**
     * wrapAttributesString wraps the attributes in a spread call.
     * @param {string} attrs 
     */
    wrapAttributesString(attrs) {

        return `make.spread(${this.value}, ${attrs}, '${this.key}')`;

    }

    /**
     * wrapAttributes wraps the attributes in a spread call SourceNode
     * @param {array} buf 
     * @param {object} o 
     */
    wrapAttributes(buf, o) {

        buf.unshift(this.sourceNode(o.fileName, `make.spread(${this.value},`));
        buf.push(`'{this.key}')`);
        return buf;

    }

    transpile() {

        throw new TypeError('Cannot transpile an AttributeSpread use pushStringOnNamespace()!');

    }

    compile(o) {

        throw new TypeError('Cannot compile an AttributeSpread use pushNodeOnNamespace()!');

    }

}

export default AttributeSpread
