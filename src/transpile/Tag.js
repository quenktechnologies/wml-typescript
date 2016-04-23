/**
 * Tag 
 * @param {string} name 
 * @param {array<Attribute>} attributes 
 * @param {array<Tag|Text|ForLoop|IfCondition} children 
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
            this.name : `'${this.name}'`;

        var ns = {};
        var html = {};
        var children;

        this.attributes.forEach(a => {

            if (a.namespace) {

                ns[a.namespace] = ns[a.namespace] || {};
                ns[a.namespace][a.name] = a.toString();

            } else {

                html[a.name] = a.toString();

            }

        });

        children = this.children.map(c => c.toString()).join(',');
        children = children || null;

        return `make.element(${tag},` +
            `{ns:${JSON.stringify(ns)}, html:${JSON.stringify(html)}}, ${children})`;

    }

}

export default Tag
