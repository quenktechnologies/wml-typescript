import Writer from './Writer';
import TagWriter from './TagWriter';

/**
 * ScriptWriter 
 */
class ScriptWriter extends Writer {

    /**
     * writeImports writes the import heading
     * @param {array} imports
     */
    writeImports(imports) {

        if (Array.isArray(imports))
            imports.forEach(i => this.write(`import ${i.id} from ${i.src};`));
        return this;

    }

    /**
     * writeTree writes out the tag tree
     * @param {object|null} tag 
     */
    writeTree(tag) {

        var t;

        if (!tag) return this;

        t = new TagWriter(tag);
        return this.writeExport(t.write());

    }

    /**
     * writeExport lays the last rites
     * @param {string} text 
     */
    writeExport(text) {

        this.write(`export default function(){return ${text};}`);

    }
}
export default ScriptWriter
