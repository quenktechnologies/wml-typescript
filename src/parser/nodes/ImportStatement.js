import Node from './Node';
/**
 * ImportStatement
 * @param {Member} member
 * @param {StringLiteral} module
 * @param {Location} location
 */
class ImportStatement extends Node {

    constructor(member, module, location) {

        super();
        this.type = 'import-statement';
        this.member = member;
        this.module = module;
        this.location = location;

    }

    transpile() {

        return `import ${this.member.transpile()} from ${this.module.transpile()};\n`;

    }

    compile(o) {

        return this.sourceNode(o.fileName, 'import ').
        add(this.member.compile(o)).
        add(' ').
        add(this.module.compile(o)).
        add(';').
        add(`\n`);

    }

}

export default ImportStatement
