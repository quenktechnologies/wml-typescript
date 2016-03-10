import ArrayWriter from './ArrayWriter';
import ObjectWriter from './ObjectWriter';

/**
 * TagWriter
 * @param {object} tag 
 */
class TagWriter {

    constructor(tag) {
        this._tag = tag;
    }

    /**
     * write 
     */
    write() {

        var attr = new ObjectWriter();
        var parent = new ArrayWriter();
        var childs = new ArrayWriter();
        var tag = this._tag;

        tag.attributes.forEach((a, k) => {

            if (a.type === 'attribute') {
                if (a.namespace) {
                    attr.writeSubObject(a.namespace, a.name, `'${a.value}'`);
                } else {
                    attr.writeValue(a.name, `'${a.value}'`);
                }
            }

            if (a.type === 'attribute-expression')
                attr.writeValue(a.name, a.value);

        });

        tag.children.forEach((c, k) => {

            if (c.type === 'text')
                childs.write(`\`${c.value.trim()}\``);

            if (c.type === 'tag')
                childs.write((new TagWriter(c)).write());

            if (k + 1 !== tag.children.length)
                childs.write(',');

        });

        parent.write((tag.name[0] === tag.name[0].toUpperCase()) ?
            tag.name : `'${tag.name}'`);

        parent.write(',');
        parent.write(attr.finish());
        parent.write(',');
        parent.write(childs.finish());

        return parent.finish();

    }

}
export default TagWriter
