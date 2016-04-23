/**
 * NumberLiteral 
 */
class NumberLiteral {

    constructor(value) {

        this.value = value;

    }

    toString() {

        return parseFloat(this.value);

    }

}

export default NumberLiteral
