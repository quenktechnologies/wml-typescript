/**
 * BindExpression 
 */
class BindExpression {

    constructor(parent, target, args) {

        this.parent = parent;
        this.target = target;
        this.args = args;

    }

    toString() {

        var args = this.args.join(',');
        args = (args)? ' ,'+args : args;

        return `${this.parent}.${this.target}.bind(${this.parent}${args})`;

    }



}
export default BindExpression
