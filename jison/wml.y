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
Identifier [a-zA-Z$0-9_][a-zA-Z$0-9.-]*
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
Text ({DoubleStringCharacter}*)|({SingleStringCharacter}*)

/* Lexer flags */
%options flex
%s CHILDREN
%%

/* Lexer rules */

/* whitespaces */
<*>\s+              return;

/* global lexer roles */
'import'                                        return 'IMPORT';
'from'                                          return 'FROM';
'for'                                           return 'FOR';
'endfor'                                        return 'ENDFOR';
'if'                                            return 'IF';
'endif'                                         return 'ENDIF';
'else'                                          return 'ELSE';
'elseif'                                        return 'ELSEIF';
'in'                                            return 'IN';
'true'|'false'                                  return 'BOOLEAN';
'{{'                                            return '{{';
'}}'                                            return '}}';
'|'                                             return '|';
'{%'                this.begin('INITIAL');      return '{%';
'%}'                                            return '%}';
'</'                                            return '</';
'/>'                this.begin('CHILDREN');     return '/>';
'>'                 this.begin('CHILDREN');     return '>';
'<'                 this.begin('INITIAL');      return '<';
'('                                             return '(';
')'                                             return ')';
'['                                             return '[';
']'                                             return ']';
';'                                             return ';'
':'                                             return ':';
'='                                             return '='
{NumberLiteral}                                 return 'NUMBER_LITERAL';
{StringLiteral}                                 return 'STRING_LITERAL';
{Identifier}                                    return 'NAME';
<CHILDREN>[^<>{%}]+    this.popState();            return 'CHARACTERS';
<*><<EOF>>                                      return 'EOF';

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
          : IMPORT variable FROM string_literal ';' 
            {$$ = new yy.ast.Import($2, $4, yy.help.location(@$, @1, @5));}
          ;

tag
          : '<' name attributes '>' children? '</' name '>' 
             {
             yy.help.ensureTagsMatch($2, $8);
             $$ = new yy.ast.Tag($2, $3, $5?$5:[], yy.help.location(@$, @1, @8));
             }
             
          | '<' name attributes '/>' 
            { $$ = new yy.ast.Tag($2, $3, [], yy.help.location(@$, @1, @4)); }
          ;

name
          : (variable | property_expression) {$$ = $1;}
          ;

attributes
          : attributes attribute {$$ = $1.concat($2);}
          | {$$ = [];}
          ;

attribute 
          : attribute_name '=' attribute_value
            {$$ = new yy.ast.Attribute($1.name, $1.namespace, $3, yy.help.location(@$, @1, @3));} 

          | attribute_name
            {$$ = new yy.ast.Attribute($1.name, $1.namespace, 
            new yy.ast.BooleanLiteral(true, yy.help.location(@$, @1, @1)),
            yy.help.location(@$, @1, @1));} 
          ;

attribute_name
          : variable                {$$ = {namespace:null, name:$1};} 
          | variable ':' variable   {$$ = {namespace:$1, name:$3};}
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
          : name 
            {$$ = new yy.ast.Filter($1, [], yy.help.location(@$, @1, @1));} 

          | name '(' arguments ')' 
            {$$ = new yy.ast.Filter($1, $3, yy.help.location(@$, @1, @4));} 
          ;

arguments
          : expression                {$$ = [$1];          }
          | arguments ',' expression  {$$ = $1.concat($3); }
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
          : boolean_literal
          | number_literal
          | string_literal
          | array_literal
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

          | '[' arguments ']'
            {$$ = new yy.ast.ArrayLiteral($2, yy.help.location(@$, @1, @3)); }
          ;

function_expression
          : variable '(' arguments ')'
            {$$ = new yy.ast.FunctionExpression($1, $3, yy.help.location(@$, @1, @4));} 

          | variable '('  ')'
            {$$ = new yy.ast.FunctionExpression($1, [], yy.help.location(@$, @1, @3));} 
          ;

property_expression
          : variable '.' variable            {$$ = $1+'.'+$3;}
          | variable '.' property_expression {$$ = $1+'.'+$3;} 
          ;

method_expression
          : property_expression '(' arguments ')'
            {$$ = new yy.ast.MethodExpression($1, $3, yy.help.location(@$, @1, @4));} 

          | property_expression '(' ')'
            {$$ = new yy.ast.MethodExpression($1, [], yy.help.location(@$, @1, @3));} 
          ;

children   
          : child           {$$ = [$1];          }
          | children child  {$$ = $1.concat($2); }
          ;

child
          : tag
          | control 
          | characters
          ;

control
          : (for|if) {$$ = $1;}
          ;
for
          : '{%' FOR variable (',' variable)? IN expression '%}' 
             children 
            '{%' ENDFOR '%}' 
            {
            
            $$ = new yy.ast.ForLoop($3, 
            ($4)? $4.substring(1, $4.length-1):'index',
            $6,
            $8,
            yy.help.location(@$, @1, @11)); 
            
            }
          ;

if
          : '{%' IF (expression | binary_comparison) '%}' children '{%' ENDIF '%}'
            {$$ = new yy.ast.IfCondition($3, $5, yy.help.location(@$, @1, @8)); }

          ;
characters
          : (CHARACTERS|name)
            {$$ = new yy.ast.Characters($1, yy.help.location(@$, @1, @1)); }
          ;


