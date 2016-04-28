/**
 * TernaryExpression 
 * @param {Expression} logic 
 * @param {Exoression} iftrue 
 * @param {Expression} iffalse 
 */
class TernaryExpression {

    constructor(logic, iftrue, iffalse) {

        this.logic = logic;
        this.iftrue = iftrue;
        this.iffalse = iffalse;

    }

    toString() {

        return `(${this.logic})? ${this.iftrue} : ${this.iffalse}`;

    }

}

export default TernaryExpression
