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
        this.name = name;
        this.attributes = attributes;
        this.children = children;

    }

    _organizeNamespaces(list, cb) {

        var butes = {
            html: []
        };

        list.forEach(a => {

            var val = cb(a);

            if (a.namespace) {

                butes[a.namespace] = butes[a.namespace] || [];
                butes[a.namespace].push(val);

            } else {

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
            a => `'${a.name}':${a.transpile()}`).join(',');

        butes = Object.keys(butes).map(ns => '{' + butes[ns].join(',') + '}');

        children = `[${this.children.map(c => c.transpile()).join(',')}]`;

        return `${tag},${butes},${children})`;

    }

    compile(o) {

        var children;

        var isEle = (this.name[0] === this.name[0].toUpperCase()) ?
            true : false;

        var node = this.sourceNode(o.fileName, '');

        node.add('make.').
        add(isEle ?
            `element(${this.name}` :
            `node('${this.name}')`).
        add(',{');

        this._organizeNamespaces(this.attributes,
            (a, i, all) => [`'${a.name}':`, a.compile(o)(i < all.length - 1) ? ',' : '']);

        node.add('},').add('[');

        return this.compileList(this.children, node, o).
        add(']').
        add(')');

    }

}

export default Tag
