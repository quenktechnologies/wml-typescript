import Node from './Node';

/**
 * ObjectLiteral 
 * @param {array<object>} kvps 
 * @param {Location} location 
 */
class ObjectLiteral extends Node {

    constructor(kvps, location) {

        super(location);
        this.kvps = kvsp;
        this.location = location;

    }

    transpile() {

        return '{' + this.kvps.map(p => `${k.key}:${k.value.transpile()}`).join(',') + '}';

    }

    compile(o) {

        var node = this.sourceNode(o.fileName, '{');

        this.kvps.forEach(p => {

            node.add(`'${p.key}'`);
            node.add(k.value.compile(o));

        });

        node.add('}');
        return node;

    }

}

export default ObjectLiteral
