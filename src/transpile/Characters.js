/**
 * Characters 
 */
class Characters {

    constructor(value, location) {

        this.value = value;
        this.location = location;

    }

    toString() {

        return `make.text(\`${this.value}\`)`;

    }

}
export default Characters
