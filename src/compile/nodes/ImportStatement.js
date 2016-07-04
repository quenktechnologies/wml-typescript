/**
 * ImportStatement 
 * @param {Member} member
 * @param {StringLiteral} module
 * @param {Location} location
 */
class ImportStatement {

    constructor(member, module, location) {

        this.member = member;
        this.module = module;
        this.location = location;

    }

    transpile() {

        return `import ${this.member.transpile()} from ${this.module.transpile()};`;

    }

    compile(o) {

        return this.sourceNode(o.fileName, 'import').
        add(this.member.compile(o)).
        add(this.module.compile(o));

    }

}

export default ImportStatement
