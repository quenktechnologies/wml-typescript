import Node from './Node';
var count = 0;

/**
 * SwitchStatement 
 * @param {Expression} expression
 * @param {array<CaseStatement>} cases 
 * @param {Location} location 
 */
class SwitchStatement extends Node {

    constructor(expression, cases, location) {

        super(location);
        this.expression = expression;
        this.cases = cases;

    }

    transpile() {

        var str = '{';

        count = count + 1;

        this.cases.forEach(c =>
            str = str + c.value.transpile() + ':' + c.transpile() + ',');

        str = str.substring(0, str.length - 1);
        str = str + '}';

        return `make.$switch${count}(${this.expression.transpile()},${str})`;

    }

    compile(o) {

        var node =  this.sourceNode(o.fileName, '');

        count = count + 1;
        node.add(`make.$switch${count}(`).
        add(this.expression.compile(o)).
        add(',{');

        this.cases.forEach((c, k, all) => {

            node.add(c.value.compile(o)).
            add(':').
            add(c.compile(o));

            if (k < all.length - 1)
                node.add(',');

        });

        return node.add('})');

    }

}

export default SwitchStatement
