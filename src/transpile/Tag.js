/**
 * Tag 
 * @param {string} name 
 * @param {array<Attribute>} attributes 
 * @param {array<Tag|Text|ForLoop|IfCondition>} children 
 * @param {Location} location 
 */
class Tag {

    constructor(name, attributes, children, location) {

        this.name = name;
        this.attributes = attributes;
        this.children = children;
        this.location = location;

    }

    toString() {

        var tag = (this.name[0] === this.name[0].toUpperCase()) ?
            `make.element(${this.name}` : `make.node('${this.name}'`;

        var ns = {};
        var html = [];
        var children;

        this.attributes.forEach(a => {

            var val = `'${a.name}':${a.toString()}`;

            if (a.namespace) {

                ns[a.namespace] = ns[a.namespace] || [];
                ns[a.namespace].push(val);

            } else {

                html.push(val);

            }

        });

        children = `[${this.children.map(c => c.toString()).join(',')}]`;
        ns = '{' + Object.keys(ns).map(key => `${key}:{${ns[key].join(',')}}`).join(',') + '}';
        html = '{' + html.join(',') + '}';

        ns = (ns) ? ns : '{}';
        html = (html) ? html : '{}';

        return `${tag},` +
            `{ns:${ns}, html:${html}}, ${children})`;

    }

}

export default Tag
