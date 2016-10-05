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

        var node = this.sourceNode(o.file, '{');

        this.keys.forEach((p, i, all) => {
            node.add([`'${p.key}':`, p.value.compile(o)]);
            if(i < (all.length - 1))
          node.add(',');
        });

        return node.add('}');    }

}

export default ObjectLiteral
