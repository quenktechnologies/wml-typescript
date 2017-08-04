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

    transpile(o) {

        return '{' + this.keys.map(k => `${k.key}:${k.value.transpile(o)}`).join(',') + '}';

    }

    compile(o) {

        var node = this.sourceNode(o.file, '{');

        this.keys.forEach((p, i, all) => {
            node.add([`'${p.key}':`, p.value.compile(o)]);
            if(i < (all.length - 1))
          node.add(',');
        });

        return node.add('}');    }

}

export default ObjectLiteral
