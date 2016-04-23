/**
 * StringLiteral 
 */
class StringLiteral {

    constructor(value, location) {

        this.value = value;
        this.location = location;

    }

    toString() {

        return this.value.split('"').join('');

    }

}

export default StringLiteral
