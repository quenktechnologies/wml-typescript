/**
 * MethodExpression 
 */
class MethodExpression {

    constructor(path, args, location) {

        this.path = path;
        this.args = args;
        this.location = location;

    }

    toString() {

        return `${this.path}(${this.args.join(',')})`;

    }

}
export default MethodExpression
