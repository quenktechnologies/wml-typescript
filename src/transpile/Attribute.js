/**
 * Attribute 
 */
class Attribute {

    constructor(name, namespace, value, location) {

        this.name = name;
        this.namespace = namespace;
        this.value = value;
        this.location = location;

    }

    toString() {

      return `${this.value.toString()}`; 

    }

}

export default Attribute
