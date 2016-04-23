import Template from './Template';
import Import from './Import';
import Tag from './Tag';
import Attribute from './Attribute';
import Interpolation from './Interpolation';
import BooleanLiteral from './BooleanLiteral';
import NumberLiteral from './NumberLiteral';
import StringLiteral from './StringLiteral';
import ArrayLiteral from './ArrayLiteral';
import Characters from './Characters';
import Filter from './Filter';
import UnaryExpression from './UnaryExpression';
import BinaryExpression from './BinaryExpression';
import FunctionExpression from './FunctionExpression';
import MethodExpression from './MethodExpression';
import ForLoop from './ForLoop';
import IfCondition from './IfCondition';

/**
 * AbstractSyntaxTree 
 */
class AbstractSyntaxTree {

    constructor() {

        this.Template = Template;
        this.Import = Import;
        this.Tag = Tag;
        this.Attribute = Attribute;
        this.Interpolation = Interpolation;
        this.BooleanLiteral = BooleanLiteral;
        this.NumberLiteral = NumberLiteral;
        this.StringLiteral = StringLiteral;
        this.ArrayLiteral = ArrayLiteral;
        this.Characters = Characters;
        this.Filter = Filter;
        this.UnaryExpression = UnaryExpression;
        this.BinaryExpression = BinaryExpression;
        this.FunctionExpression = FunctionExpression;
        this.MethodExpression = MethodExpression;
        this.ForLoop = ForLoop;
        this.IfCondition = IfCondition;

    }

}

export default AbstractSyntaxTree
