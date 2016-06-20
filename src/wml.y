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
DecimalIntegerLiteral [-]?([0]|({NonZeroDigit}{DecimalDigits}*))
ExponentPart {ExponentIndicator}{SignedInteger}
OctalIntegerLiteral [0]{OctalDigit}+
HexIntegerLiteral [0][xX]{HexDigit}+
DecimalLiteral ([-]?{DecimalIntegerLiteral}\.{DecimalDigits}*{ExponentPart}?)|(\.{DecimalDigits}{ExponentPart}?)|({DecimalIntegerLiteral}{ExponentPart}?)
NumberLiteral {DecimalLiteral}|{HexIntegerLiteral}|{OctalIntegerLiteral}
Identifier [a-zA-Z$0-9_][a-zA-Z$_0-9.-]*
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
%x CHILDREN
%s CONTROL
%%

/* Lexer rules */

/* whitespaces */
<*>\s+              return;

/* global lexer roles */
'import'                                        return 'IMPORT';
'from'                                          return 'FROM';
<CONTROL>'for'                                  return 'FOR';
<CONTROL>'endfor'                               return 'ENDFOR';
<CONTROL>'if'                                   return 'IF';
<CONTROL>'endif'                                return 'ENDIF';
<CONTROL>'else'                                 return 'ELSE';
<CONTROL>'elseif'                               return 'ELSEIF';
<CONTROL>'in'                                   return 'IN';
<CONTROL>'fragment'                             return 'FRAGMENT';
'true'|'false'                                  return 'BOOLEAN';
{NumberLiteral}                                 return 'NUMBER_LITERAL';
{StringLiteral}                                 return 'STRING_LITERAL';
'{{'                                            return '{{';
'}}'                                            return '}}';
'|'                                             return '|';
'=>'                                            return '=>';
'->'                                            return '->';
'{%'                this.begin('CONTROL');      return '{%';
'%}'                this.begin('CHILDREN');     return '%}';
'</'                                            return '</';
'/>'                this.begin('CHILDREN');     return '/>';
'>'                 this.begin('CHILDREN');     return '>';
'<'                                             return '<';
'('                                             return '(';
')'                                             return ')';
'['                                             return '[';
']'                                             return ']';
';'                                             return ';'
':'                                             return ':';
'='                                             return '='
'=='                                            return '==';
'!='                                            return '!=';
'>='                                            return '>=';
'<='                                            return '<=';
'+'                                             return '+';
'-'                                             return '-';
'*'                                             return '*';
'/'                                             return '/';
'!'                                             return '!';
','                                             return ',';
'?'                                             return '?';
'{'                                             return '{';
'}'                                             return '}';
{Identifier}                                    return 'ID';

<CHILDREN>'{{'       this.popState();           return '{{';
<CHILDREN>'{%'       this.begin('CONTROL');     return '{%';
<CHILDREN>'</'       this.popState();           return '</';
<CHILDREN>'<'        this.popState();           return '<';
<CHILDREN>[^/<>{%}]+ this.popState();           return 'CHARACTERS';

<*><<EOF>>                                      return 'EOF';

/lex
%right <*> '?' ':' '=>'
%right '!'

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
          : '<' tagname attributes '>' children? '</' tagname '>' 
             {
             yy.help.ensureTagsMatch($2, $8);
             $$ = new yy.ast.Tag($2, $3, $5?$5:[], yy.help.location(@$, @1, @8));
             }
             
          | '<' tagname attributes '/>' 
            { $$ = new yy.ast.Tag($2, $3, [], yy.help.location(@$, @1, @4)); }
          ;
tagname
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
          : variable 
            {$$ = new yy.ast.Filter($1, [], yy.help.location(@$, @1, @1));} 

          | variable '(' arguments ')' 
            {$$ = new yy.ast.Filter($1, $3, yy.help.location(@$, @1, @4));} 
          ;

arguments
          : expression                {$$ = [$1];          }
          | arguments ',' expression  {$$ = $1.concat($3); }
          ;

expression
          : value_expression
          | unary_expression
          | ternary_expression
          | binary_expression
          ;

ternary_expression
          : expression  '?'  expression ':' expression
            {$$ = new yy.ast.TernaryExpression($1, $3, $5, yy.help.location(@$, @1, @5));}
          ;

binary_expression
          : '(' value_expression binary_operator value_expression  ')'
            {$$ = new yy.ast.BinaryExpression($2, $3, $4,  yy.help.location(@$, @1, @5));} 
          ;

binary_operator
          : ('>'|'>='|'<'|'<='|'=='|'!='|'+'|'/'|'-') 
            { $$ = yy.help.convertOperator($1);}
          ;

unary_expression
          : '!' expression
            {$$ = new yy.ast.UnaryExpression($1, $2, yy.help.location(@$, @1, @2));} 
          ;

value_expression
          : literal
          | variable
          | property_expression
          | function_expression
          | method_expression
          | bind_expression
          ;

literal
          : array_literal
          | function_literal
          | string_literal
          | number_literal
          | boolean_literal
          ;

array_literal
          : '[' ']' 
            {$$ = new yy.ast.ArrayLiteral([], yy.help.location(@$, @1, @2)); }

          | '[' arguments ']'
            {$$ = new yy.ast.ArrayLiteral($2, yy.help.location(@$, @1, @3)); }
          ;

function_literal
          : parameters '=>' expression
            {$$ = new yy.ast.FunctionLiteral($1, $3, yy.help.location(@$, @1, @3)); }
          ;

parameters
          : '(' ')'                           {$$ = [];                      }
          | '(' variable ')'                  {$$ = [$2];                    }
          | '(' parameters  ',' variable ')'  {$$ = $2.concat($4);           }
          ;

string_literal
          : STRING_LITERAL {$$ = new yy.ast.StringLiteral($1, yy.help.location(@$, @1, @1)); }
          ;

number_literal
          : NUMBER_LITERAL 
          {$$ = new yy.ast.NumberLiteral(yy.help.parseNumber($1), yy.help.location(@$, @1, @1)); }
          ;

boolean_literal
          : BOOLEAN  
          {$$ = new yy.ast.BooleanLiteral(yy.help.parseBoolean($1), yy.help.location(@$, @1, @1));}
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

bind_expression

          : variable '=>' 'variable'
            {$$ = new yy.ast.BindExpression($1, $3, [] , yy.help.location(@$, @1, @3));}

          |  variable '=>' 'variable' '(' arguments ')'
            {$$ = new yy.ast.BindExpression($1, $3, $5 , yy.help.location(@$, @1, @6));}

          | property_expression '=>' variable 
            {$$ = new yy.ast.BindExpression($1, $3, [], yy.help.location(@$, @1, @6));}

          | property_expression '=>' variable '(' arguments ')'
            {$$ = new yy.ast.BindExpression($1, $3, $5, yy.help.location(@$, @1, @6));}
          ;

children   
          : child           {$$ = [$1];          }
          | children child  {$$ = $1.concat($2); }
          ;

child
          : tag
          | control 
          | interpolation
          | characters
          ;

control
          : (for|if|fragment) {$$ = $1;}
          ;
for
          : '{%' FOR variable ','? (variable)? IN expression '%}' 
             children 
            '{%' ENDFOR '%}' 
            {
            
            $$ = new yy.ast.ForLoop($3, 
            ($5)? $5 : 'index',
            $7,
            $9,
            yy.help.location(@$, @1, @12)); 
            
            }
          ;

if
         : '{%' IF expression '%}'
            children 
           '{%' ENDIF '%}'
            {$$ = new yy.ast.IfCondition($3, $5, [], yy.help.location(@$, @1, @8)); }

         | '{%' IF expression '%}' children 
           '{%' 'ELSE' '%}' children '{%' ENDIF '%}'
           {$$ = new yy.ast.IfCondition($3, $5, $9, yy.help.location(@$, @1, @13));}
         ;

fragment : '{%' FRAGMENT arguments '%}'
            {$$ = new yy.ast.Fragment($3[0], $3.slice(1, $3.length), yy.help.location(@$, @1, @3));}
         ;

characters
          : (CHARACTERS)
            {$$ = new yy.ast.Characters($1, yy.help.location(@$, @1, @1)); }
          ;

variable
          : ID {$$ = $1;}
          ;

