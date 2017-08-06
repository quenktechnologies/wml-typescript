import Node from './Node';

/**
 * Tag
 * @param {string} name
 * @param {array<Attribute>} attributes
 * @param {array<Tag|Text|ForLoop|IfCondition>} children
 * @param {Location} location
 * @todo refactor spreads.
 */
class Tag extends Node {

    constructor(name, attributes, children, location) {

        super(location);
        this.type = 'tag';
        this.name = name;
        this.attributes = attributes;
        this.children = children;

    }

    _organizeNamespaces(butes, list, cb) {

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

    transpile(o) {

        var children;
        var butes = {
            html: [],
            wml: []
        };
        var name = this.name.transpile(o);
        var spreads = this.attributes.filter(a => a.type === 'attribute-spread');

        var tag = (name[0] === name[0].toUpperCase()) ?
            `$$widget(${name}` : `$$node('${name}'`;

        this.attributes.forEach(a => a.pushStringOnNamespace(butes, o));

        butes = spreads.reduce((prev, current) => current.wrapAttributesString(prev), '{' + (
            Object.keys(butes).map(ns => ns + ':{' + butes[ns].join(',') + '}')) + '}');

        children = `[${this.children.map(c => c.transpile(o)).join(',')}]`;
        return `${tag},${butes},${children}, view)`;

    }

}

export default Tag
