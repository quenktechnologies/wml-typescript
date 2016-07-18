import Node from './Node';

/**
 * ObjectLiteral 
 * @param {array<object>} keys 
 * @param {Location} location 
 */
class ObjectLiteral extends Node {

    constructor(keys, location) {

        super(location);
        this.type = 'object-literal';
        this.keys = keys;
        this.location = location;

    }

    transpile() {

        return '{' + this.keys.map(p => `${k.key}:${k.value.transpile()}`).join(',') + '}';

    }

    compile(o) {

        var node = this.sourceNode(o.fileName, '{');

        this.keys.forEach(p => {

            node.add(`'${p.key}'`);
            node.add(k.value.compile(o));

        });

        node.add('}');
        return node;

    }

}

export default ObjectLiteral
