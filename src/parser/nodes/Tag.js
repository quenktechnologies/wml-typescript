import Node from './Node';

/**
 * Tag 
 * @param {string} name 
 * @param {array<Attribute>} attributes 
 * @param {array<Tag|Text|ForLoop|IfCondition>} children 
 * @param {Location} location 
 */
class Tag extends Node {

    constructor(name, attributes, children, location) {

        super(location);
        this.type = 'tag';
        this.name = name;
        this.attributes = attributes;
        this.children = children;

    }

    _organizeNamespaces(list, cb) {

        var butes = {
        };

        list.forEach(a => {

            var val = cb(a);

            if (a.namespace) {

                butes[a.namespace] = butes[a.namespace] || [];
                butes[a.namespace].push(val);

            } else {

              butes.html = butes.html || [];
                butes.html.push(val);

            }

        });

        return butes;

    }

    transpile() {

        var children;
        var butes;
        var tag = (this.name[0] === this.name[0].toUpperCase()) ?
            `make.element(${this.name}` : `make.node('${this.name}'`;

        butes = this._organizeNamespaces(this.attributes,
            a => `'${a.name}':${a.transpile()}`);

        butes = '{' + (
            Object.keys(butes).map(ns => ns + ':{' + butes[ns].join(',') + '}')) + '}';

        children = `[${this.children.map(c => c.transpile()).join(',')}]`;

        return `${tag},${butes},${children})`;

    }

    compile(o) {

        var children;
        var node = this.sourceNode(o.fileName, '');
        var butes;

        var isEle = (this.name[0] === this.name[0].toUpperCase()) ?
            true : false;


        node.add('make.').
        add(isEle ?
            `element(${this.name}` :
            `node('${this.name}')`).
        add(',{');

        butes = this._organizeNamespaces(this.attributes,
            (a, i, all) => [`'${a.name}':`, a.compile(o)(i < all.length - 1) ? ',' : '']);

        Object.keys(butes).forEach((key, i, all) => {

            node.add([key, ': {']).
            butes[key].forEach(attr => node.add(attr));
            node.add('}');

            if (i < all.length - 1)
                node.add(',');

        });

        node.add('},').add('[');

        return this.compileList(this.children, node, o).
        add(']').
        add(')');

    }

}

export default Tag
