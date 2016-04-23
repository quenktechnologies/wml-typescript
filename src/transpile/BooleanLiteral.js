/**
 * BooleanLiteral 
 */
class BooleanLiteral {

    constructor(value, location) {

        this.value = value;
        this.location = location;

    }

    toString() {

      return this.value;


    }

}

export default BooleanLiteral
