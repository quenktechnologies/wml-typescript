import Template from './Template';
import Import from './Import';
import Tag from './Tag';
import Attribute from './Attribute';
import Interpolation from './Interpolation';
import BooleanLiteral from './BooleanLiteral';
import NumberLiteral from './NumberLiteral';
import StringLiteral from './StringLiteral';
import ArrayLiteral from './ArrayLiteral';
import FunctionLiteral from './FunctionLiteral';
import Characters from './Characters';
import Filter from './Filter';
import TernaryExpression from './TernaryExpression';
import BinaryExpression from './BinaryExpression';
import UnaryExpression from './UnaryExpression';
import FunctionExpression from './FunctionExpression';
import MethodExpression from './MethodExpression';
import BindExpression from './BindExpression';
import ForLoop from './ForLoop';
import IfCondition from './IfCondition';
import Include from './Include';

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
        this.FunctionLiteral = FunctionLiteral;
        this.Characters = Characters;
        this.Filter = Filter;
        this.TernaryExpression = TernaryExpression;
        this.BinaryExpression = BinaryExpression;
        this.UnaryExpression = UnaryExpression;
        this.FunctionExpression = FunctionExpression;
        this.MethodExpression = MethodExpression;
        this.BindExpression = BindExpression;
        this.ForLoop = ForLoop;
        this.IfCondition = IfCondition;
        this.Include = Include;

    }

}

export default AbstractSyntaxTree
