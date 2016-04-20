/*
 Grammer for the Widget Markup Language
*/

/*
 This is the Lexer portion, the syntax here corresponds to 
 [flex](http://flex.sourceforge.net/manual)
*/

%lex

/* Definitions */
DecimalDigit [0-9]
DecimalDigits [0-9]+
NonZeroDigit [1-9]
OctalDigit [0-7]
HexDigit [0-9a-fA-F]
ExponentIndicator [eE]
SignedInteger [+-]?[0-9]+
DecimalIntegerLiteral [0]|({NonZeroDigit}{DecimalDigits}*)
ExponentPart {ExponentIndicator}{SignedInteger}
OctalIntegerLiteral [0]{OctalDigit}+
HexIntegerLiteral [0][xX]{HexDigit}+
DecimalLiteral ({DecimalIntegerLiteral}\.{DecimalDigits}*{ExponentPart}?)|(\.{DecimalDigits}{ExponentPart}?)|({DecimalIntegerLiteral}{ExponentPart}?)
NumberLiteral {DecimalLiteral}|{HexIntegerLiteral}|{OctalIntegerLiteral}
Identifier [a-zA-Z$0-9_][a-zA-Z$0-9.]*
LineContinuation \\(\r\n|\r|\n)
OctalEscapeSequence (?:[1-7][0-7]{0,2}|[0-7]{2,3})
HexEscapeSequence [x]{HexDigit}{2}
UnicodeEscapeSequence [u]{HexDigit}{4}
SingleEscapeCharacter [\'\"\\bfnrtv]
NonEscapeCharacter [^\'\"\\bfnrtv0-9xu]
CharacterEscapeSequence {SingleEscapeCharacter}|{NonEscapeCharacter}
EscapeSequence {CharacterEscapeSequence}|{OctalEscapeSequence}|{HexEscapeSequence}|{UnicodeEscapeSequence}
DoubleStringCharacter ([^\"\\\n\r]+)|(\\{EscapeSequence})|{LineContinuation}
SingleStringCharacter ([^\'\\\n\r]+)|(\\{EscapeSequence})|{LineContinuation}
StringLiteral (\"{DoubleStringCharacter}*\")|(\'{SingleStringCharacter}*\')
Literal {NumberLiteral}|{StringLiteral}
TagName [a-zA-Z_$][-a-zA-Z0-9_.]*
PropertyAccess {Identifier}((\.{Identifier})|(\[\'{Identifier}\'\]))+ 
ArgumentFragment ((','{Identifier}|{PropertyAccess}|{Literal})+)
ArgumentList '('(({Identifier}|{PropertyAccess}|{Literal})({ArgumentFragment})?)?')'
MethodCall {PropertyAccess}{ArgumentList}
FunctionCall {Identifier}{ArgumentList}
Expression {Identifier}|{MethodCall}|{FunctionCall}
Filter {Identifier}(([,]{Identifier})+)?

/* Lexer flags */
%options flex
%x TAG CHILDREN EXPRESSION FILTER CONTROL FORLOOP
%%

/* Lexer rules */

/* whitespaces */
<*>\s+              return;

/* Top Level, parses import statements and tags. */

<INITIAL>'import'                                        return 'IMPORT';
<INITIAL>'from'                                          return 'FROM';
<INITIAL>';'                                             return ';'
<INITIAL>'<'                         this.begin('TAG');  return '<';
<INITIAL>{StringLiteral}                                 return 'MODULE';
<INITIAL>{Identifier}                                    return 'DEFAULT_MEMBER';

/* tag parsing */
<TAG>':'                                                  return ':';
<TAG>'='                                                  return '='
<TAG>{TagName}                                            return 'NAME';
<TAG>{StringLiteral}                                      return 'STRING_LITERAL';
<TAG>'{{'                   this.begin('EXPRESSION');     return '{{';
<TAG>'/>'                   this.begin('CHILDREN');       return '/>';
<TAG>'>'                    this.begin('CHILDREN');       return '>';

/* tag children parsing <tag>here</tag> */
<CHILDREN>'{{'              this.begin('EXPRESSION');     return '{{';
<CHILDREN>'{%'              this.begin('CONTROL');        return '{%';
<CHILDREN>'<'               this.begin('TAG');            return '<';
<CHILDREN>'</'              this.begin('TAG');            return '</';
<CHILDREN>[^<>]+                                          return 'RAW_STRING';

/* expression parsing eg. {{this.something|filter}} */
<EXPRESSION>{NumberLiteral}                               return 'NUMBER_LITERAL';
<EXPRESSION>'|'                    return '|';
<EXPRESSION>'}}'            this.popState();              return '}}';



/* control stuctures */
<CONTROL>'for'              this.begin('FORLOOP');        return 'FOR';
<CONTROL>'%}'               this.popState();              return '%}';

/* for loop */
<FORLOOP>{Identifier}                                     return 'VAR';
<FORLOOP>','                                              return ',';
<FORLOOP>'in'                                             return 'IN';
<FORLOOP>{ValueExpression}                                return 'VALUE';
<FORLOOP>'endfor'                                         return 'ENDFOR';
<FORLOOP>'%}'               this.popState();              return '%}';
<*><<EOF>>                                                return 'EOF';

/lex
%ebnf
%start template
%%

template
          : imports tag EOF 
            {$$ = new yy.ast.Template($1, $2, yy.help.location(@$, @1, @2)); return $$;}

          | tag EOF
            {$$ = new yy.ast.Template([], $1, yy.help.location(@$, @1, @1)); return $$;}
          ;

imports
          : import          {$$ =  [$1];         }
          | imports import  {$$ = $1.concat($2); }
          ;

import    
          : IMPORT DEFAULT_MEMBER FROM MODULE ';' 
            {$$ = new yy.ast.Import($2, $4, yy.help.location(@$, @1, @5));}
          ;

tag
          : '<' variable attributes '>' children '</' variable '>' 
             {
             yy.help.ensureTagsMatch($2, $8);
             $$ = new yy.ast.Tag($2, $3, $5, yy.help.location(@$, @1, @8));
             }
             
          | '<' variable attributes '/>' 
            { $$ = new yy.ast.Tag($2, $3, [], yy.help.location(@$, @1, @4)); }
          ;

attributes
          : attribute attributes {$$ = $2.concat($1);}
          | {$$ = [];}
          ;

attribute 
          : attribute_name '=' attribute_value
            {$$ = new yy.ast.Attribute($1, $3, yy.help.location(@$, @1, @3));} 

          | attribute_name
            {$$ = new yy.ast.Attribute($1, 
            new yy.ast.BooleanLiteral(true, yy.help.location(@$, @1, @1)),
            yy.help.location(@$, @1, @1));} 
          ;

attribute_name
          : variable
            {$$ = new yy.ast.AttributeName($1, null, yy.help.location(@$, @1, @1));} 
          | variable ':' variable
            {$$ = new yy.ast.AttributeName($1, $3, yy.help.location(@$, @1, @3));} 
          ;

attribute_value
          : interpolation                             {$$ = $1;}
          | (string_literal|number_literal)           {$$ = $1;} 
          ;

interpolation
          : '{{' expression '}}' 
            {$$ = new yy.ast.Interpolation($2, [], yy.help.location(@$, @1, @3));} 

          | '{{' expression '|' filters '}}' 
            {$$ = new yy.ast.Interpolation($2, $4, yy.help.location(@$, @1, @5));} 
          ;

filters
          : filter          {$$ =  [$1];         }
          | filters filter  {$$ = $1.concat($2); }
          ;

filter
          : variable 
            {$$ = new yy.ast.Filter($1, [], yy.help.location(@$, @1, @1));} 

          | variable arguments 
            {$$ = new yy.ast.Filter($1, $2, yy.help.location(@$, @1, @2));} 
          ;

arguments
          : '(' ')'               {$$ = [];}
          | '(' argument_list ')' {$$ = $2;}
          ;

argument_list
          : expression  {$$ = [$1];} 
          | argument_list ',' expression {$$ = $1.contact($2);}
          ;

expression
          : variable
          | literal
          | function_expression
          | property_expression
          | method_expression
          ;

variable
          : NAME {$$ = $1;}
          ;

literal
    : (boolean_literal|number_literal|string_literal|array_literal) {$$ = $1;}
    ;

boolean_literal
    : BOOLEAN  
      {$$ = new yy.ast.BooleanLiteral(yy.help.parseBoolean($1), yy.help.location(@$, @1, @1));}
    ;

number_literal
    : NUMBER_LITERAL 
      {$$ = new yy.ast.NumberLiteral(yy.help.parseNumber($1), yy.help.location(@$, @1, @1)); }
    ;

string_literal
    : STRING_LITERAL {$$ = new yy.ast.StringLiteral($1, yy.help.location(@$, @1, @1)); }
    ;

array_literal
          : '[' ']' 
            {$$ = new yy.ast.ArrayLiteral([], yy.help.location(@$, @1, @2)); }

          | '[' argument_list ']'
            {$$ = new yy.ast.ArrayLiteral($2, yy.help.location(@$, @1, @3)); }
          ;

function_expression
          : variable arguments
            {$$ = new yy.ast.FunctionExpression($1, $2, yy.help.location(@$, @1, @2));} 
          ;

property_expression
          : variable '.' variable            {$$ = $1+'.'+$3;}
          | variable '.' property_expression {$$ = $1+'.'+$3;} 
          ;

method_expression
          : property_expression arguments
            {$$ = new yy.ast.MethodExpression($1, $2, yy.help.location(@$, @1, @2));} 
          ;

children   
          : (tag|control|characters) children {
            var childs = [];
            childs.push($1);
            $$ = childs.concat($2);
            }
          ;

control
          : (for|if) {$$ = $1;}
          ;
for
          : '{%' FOR variable (',' variable)? IN expression '%}' children '{%' 'endfor' '%}' 
            {$$ = new yy.ast.ForLoop($3, ($4)? $4.substring(1, $4.length-1):'index', $6, $7,
            yy.help.location(@$, @1, @12)); }
          ;

if
          : '{%' IF (expression | binary_comparison) '%}' children '{%' 'endif' '%}'
            {$$ = new yy.ast.IfCondition($3, $5, yy.help.location(@$, @1, @8)); }

          ;
characters
          : CHARACTERS
            {$$ = new yy.ast.Characters($1, yy.help.location(@$, @1, @1)); }
          ;


