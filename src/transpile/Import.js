/**
 * Import 
 */
class Import {

    constructor(member, module, location) {

        this.member = member;
        this.module = module;
        this.location = location;

    }

    toString() {

        return `import ${this.member} from ${this.module};`;

    }

}

export default Import
