/**
 * Template
 * @param {array<Import>} imports 
 * @param {Tag} root
 */
class Template {

    constructor(imports, args, root, location) {

        this.imports = imports;
        this.arguments = args;
        this.root = root;
        this.location = location;

    }

    toString() {

        var str = '';
        var args = this.arguments.join(',');

        args = (args) ? ' ,' + args : args;

        this.imports.forEach(i => str = str + i + '\n');

        str = str + `export default function (make${args}) { return ${this.root}; }`

        return str;

    }

}

export default Template
