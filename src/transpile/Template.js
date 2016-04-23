/**
 * Template
 * @param {array<Import>} imports 
 * @param {Tag} root
 */
class Template {

    constructor(imports, root, location) {

        this.imports = imports;
        this.root = root;
        this.location = location;

    }

    toString() {

        var str = '';

        this.imports.forEach(i => str = str + i + '\n');

        str = str + `export default function (make) { return ${this.root}; }`


        return str;

    }

}

export default Template
