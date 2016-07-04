import Template from './Template';
import ImportStatement from './ImportStatement';
import DefaultMember from './DefaultMember';
import CompositeMember from './CompositeMember';
import Tag from './Tag';
import Attribute from './Attribute';
import Interpolation from './Interpolation';
import ObjectLiteral from './ObjectLiteral';
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
import ForStatement from './ForStatement';
import IfStatement from './IfStatement';
import SwitchStatement from './SwitchStatement';
import CaseStatement from './CaseStatement';
import IncludeStatement from './IncludeStatement';

/**
 * AbstractSyntaxTree 
 */
class AbstractSyntaxTree {

    constructor() {

        this.Template = Template;
        this.ImportStatement = ImportStatement;
        this.DefaultMember = DefaultMember;
        this.CompositeMember = CompositeMember;
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
        this.ForStatement = ForStatement;
        this.IfStatement = IfStatement;
        this.SwitchStatement = SwitchStatement;
        this.CaseStatement = CaseStatement;
        this.IncludeStatement = IncludeStatement;

    }

}

export default AbstractSyntaxTree
