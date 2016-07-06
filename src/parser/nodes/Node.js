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
        return list.map(m => m.transpile()).join(',') || '';

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

        return JSON.stringify(this);

    }
}

export default Node
