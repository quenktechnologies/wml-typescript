import sourceMap from 'source-map';

/**
 * Node parent of all the nodes
 */
class Node {

    constructor(location) {

        this.location = location;

    }

    sourceNode(file, chunk) {

        return new sourceMap.SourceNode(this.location.first_line,
            this.location.first_column,
            file,
            chunk || null);

    }

    transpileList(list) {

        return this.members.map(m => m.transpile()).join(',');

    }

    compileList(list, node, o) {

        list.forEach((a, i, all) => {

            node.add(a.compile(o))

            if (i < all.length - 1)
                node.add(',');

        });

        return node;

    }

    toString() {

        var o = Object.create(null);
        Object.keys(this).forEach(k => o[k] = this[k]);
        return JSON.stringify(o);

    }
}

export default Node
