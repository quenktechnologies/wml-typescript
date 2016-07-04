import Node from './Node';

/**
 * Template
 * @param {array<Import>} imports 
 * @param {array<string>} args 
 * @param {Tag} root
 * @param {Location} location 
 */
class Template extends Node {

    constructor(imports, args, root, location) {

        super(location);
        this.type = 'template';
        this.imports = imports;
        this.arguments = args;
        this.root = root;

    }

    transpile() {

        var str = '';
        var args = this.arguments.join(',');

        args = (args) ? ' ,' + args : args;
        this.imports.forEach(i => str = str + i + '\n');
        return str + `export default function (make${args}) { return ${this.root.transpile()}; }`

    }

    compile(o) {

        var str = '';
        var args = this.usage.join(',');

        args = (args) ? ' ,' + args : args;

        return this.sourceNode(o.fileName, '').
        add(`export default function (make${args}) { return `).
        add(this.imports.map(i => i.compile(o))).
        add(this.root.compile(o)).
        add('; }');


    }

}

export default Template
