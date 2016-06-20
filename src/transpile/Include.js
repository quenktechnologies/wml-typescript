/*
 * Include 
 */
class Include {

    constructor(tmpl, args, location) {

        this.tmpl = tmpl;
        this.arguments = args;
        this.location = location;

    }

    toString() {

        return `${this.tmpl}.apply(this, [make].concat(${this.arguments}))`;

    }

}

export default Include
