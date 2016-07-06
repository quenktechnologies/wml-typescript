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
Identifier [a-zA-Z$0-9_][a-zA-Z$_0-9-]*
DotIdentifier [a-zA-Z$0-9_][a-zA-Z$_0-9.-]*
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
TemplateStringCharacter ([^\`\\\n\r]+)|(\\{EscapeSequence})|{LineContinuation}
StringLiteral (\"{DoubleStringCharacter}*\")|(\'{SingleStringCharacter}*\')|(\`{TemplateStringCharacter}*\`)
Text ({DoubleStringCharacter}*)|({SingleStringCharacter}*)

/* Lexer flags */
%options flex
%x CHILDREN
%x COMMENT
%s CONTROL
%%

/* Lexer rules */

<*>\s+                                          return;
'import'                                        return 'IMPORT';
'from'                                          return 'FROM';
'uses'                                          return 'USES';
'as'                                            return 'AS';
<CONTROL>'for'                                  return 'FOR';
<CONTROL>'endfor'                               return 'ENDFOR';
<CONTROL>'if'                                   return 'IF';
<CONTROL>'endif'                                return 'ENDIF';
<CONTROL>'else'                                 return 'ELSE';
<CONTROL>'elseif'                               return 'ELSEIF';
<CONTROL>'in'                                   return 'IN';
<CONTROL>'switch'                               return 'SWITCH';
<CONTROL>'endswitch'                            return 'ENDSWITCH';
<CONTROL>'default'                              return 'DEFAULT';
<CONTROL>'case'                                 return 'CASE';
<CONTROL>'endcase'                              return 'ENDCASE';
<CONTROL>'include'                              return 'INCLUDE';
'true'|'false'                                  return 'BOOLEAN';
{NumberLiteral}                                 return 'NUMBER_LITERAL';
{StringLiteral}                                 return 'STRING_LITERAL';
'<!--'             this.begin('COMMENT');       return;
<COMMENT>'-->'     this.popState();             return;
<COMMENT>[.\n]+                                 return;
'{{'                                            return '{{';
'}}'                                            return '}}';
'|'                                             return '|';
'=>'                                            return '=>';
'::'                                            return '::';
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
'.'                                             return '.';
'{'                                             return '{';
'}'                                             return '}';
{Identifier}                                    return 'IDENTIFIER';

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
          : imports? usage? tag EOF 
            {$$ =
            new yy.ast.Template($1 || [], $2 || [], $3, @$); return $$;
            }
          ;

imports
          : import_statement          {$$ =  [$1];         }
          | imports import_statement  {$$ = $1.concat($2); }
          ;

import_statement    
          : IMPORT import_member FROM string_literal ';'
            {$$ = new yy.ast.ImportStatement($2, $4, @$);}
          ;

import_member
          : identifier
            {$$ = new yy.ast.DefaultMember($1, @$);}

          | '*' AS identifier
            {$$ = new yy.ast.CompositeMember('* as '+$3, @$);} 
          ;

usage
          : USES arguments
            {$$ = $2; }
          ;

tag
          : '<' tagname attributes '>' children? '</' tagname '>' 
             {
             yy.help.ensureTagsMatch($2, $8);
             $$ = new yy.ast.Tag($2, $3, $5?$5:[], @$);
             }
             
          | '<' tagname attributes '/>' 
            { $$ = new yy.ast.Tag($2, $3, [], @$); }
          ;
tagname
          : (identifier | member_access) {$$ = $1;}
          ;

attributes
          : attributes attribute {$$ = $1.concat($2);}
          | {$$ = [];}
          ;

attribute 
          : attribute_name '=' attribute_value
            {$$ = new yy.ast.Attribute($1.name, $1.namespace, $3, @$);} 

          | attribute_name
            {$$ = new yy.ast.Attribute($1.name, $1.namespace, 
            new yy.ast.BooleanLiteral(true, @$),@$);} 
          ;

attribute_name
          : identifier                {$$ = {namespace:null, name:$1};} 
          | identifier ':' identifier   {$$ = {namespace:$1, name:$3};}
          ;

attribute_value
          : interpolation                             {$$ = $1;}
          | (string_literal|number_literal)           {$$ = $1;} 
          ;

interpolation
          : '{{' (expression|function_literal) '}}' 
            {$$ = new yy.ast.Interpolation($2, [], @$);} 

          | '{{' expression filters '}}' 
            {$$ = new yy.ast.Interpolation($2, $3, @$);} 
          ;

filters
          : filter              {$$ =  [$1];     }
          | filters filter      {$$ = $1.concat($2); }
          ;

filter
          : '|'  identifier 
            {$$ = new yy.ast.Filter($2, [], @$);} 

          | '|'  identifier '(' arguments ')' 
            {$$ = new yy.ast.Filter($2, $4, @$);} 
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
          : (for_statement|if_statement|switch_statement|include_statement) {$$ = $1;}
          ;

for_statement
          : '{%' FOR identifier ','? (identifier)? IN expression '%}' for_children 
            {
            
            $$ = new yy.ast.ForStatement($3, 
            ($5)? $5 : 'index',
            $7,
            $9,
            @$); 
            
            }

          ;

for_children
          :  children '{%' ENDFOR '%}' 
             {$$ = $1;} 

          |  '{%' ELSE '%}' children '{%' ENDFOR '%}' 
             {$$ = $4;}
          ;
          
if_statement
         : '{%' IF expression '%}'
            children 
           '{%' ENDIF '%}'
            {$$ = new yy.ast.IfStatement($3, $5, [], @$); }

         | '{%' IF expression '%}' children 
           '{%' ELSE '%}' children '{%' ENDIF '%}'
           {$$ = new yy.ast.IfStatement($3, $5, $9, @$);}

       /*  | '{%' IF expression '%}' children 
           '{%' ELSEIF expression '%}' children '{%' ENDIF '%}'
           {$$ = new yy.ast.IfCondition($3, $5, $9, @$);} */
         ;

switch_statement
         : '{%' SWITCH expression '%}' case_statements '{%' ENDSWITCH '%}' 
            {$$ = new yy.ast.SwitchStatement($3, $5, @$);}
         ;

case_statements
         : case_statement                  {$$ = [$1];          }
         | case_statements case_statement  {$$ = $1.concat($2); }
         ;

case_statement
         : '{%' CASE (string_literal|number_literal|boolean_literal|DEFAULT) '%}'
            children '{%' ENDCASE '%}'
           {$$ = new yy.ast.CaseStatement($3, $5, @$);}
         ;

include_statement  
         :'{%' INCLUDE 
          (variable_expression|
          property_expression|
          function_expression|
          method_expression) array_literal ? 
          '%}'
          {$$ = new yy.ast.IncludeStatement($3, $4? $4 : null, @$);}
         ;

characters
          : (CHARACTERS)
            {$$ = new yy.ast.Characters($1, @$); }
          ;

arguments
          : value_expression                {$$ = [$1];          }
          | arguments ',' value_expression  {$$ = $1.concat($3); }
          ;

expression
          : grouped_expression
          | ternary_expression
          | binary_expression
          | unary_expression
          | value_expression
          ;

grouped_expression
          : '('  binary_expression ')' 
            {$$ = $2;}
          ;

ternary_expression
          : expression  '?'  expression ':' expression
            {$$ = new yy.ast.TernaryExpression($1, $3, $5, @$);}
          ;

binary_expression
          : value_expression binary_operator value_expression
            {$$ = new yy.ast.BinaryExpression($1, $2, $3, @$);} 
          ;

binary_operator
          : ('>'|'>='|'<'|'<='|'=='|'!='|'+'|'/'|'-'|'=') 
            { $$ = yy.help.convertOperator($1);}
          ;

unary_expression
          : '!' expression
            {$$ = new yy.ast.UnaryExpression($1, $2, @$);} 
          ;

value_expression
          : variable_expression
          | literal_expression
          | property_expression
          | function_expression
          | method_expression
          | bind_expression
          ;

variable_expression
          : identifier {$$ = new yy.ast.VariableExpression($1, @$); }
          ;

literal_expression
          : object_literal
          | array_literal
          | string_literal
          | number_literal
          | boolean_literal
          ;

object_literal
          : '{' '}'
            {$$ = new yy.ast.ObjectLiteral([], @$); }

          | '{' name_value_pairs '}'
            {$$ = new yy.ast.ObjectLiteral($2, @$); }
          ;

key_value_pairs
          : key_value_pair 
           {$$ = [$1]; }
          
          | key_value_pairs ',' key_value_pair 
           {$$ = $1.concat($3); }
          ;

key_value_pair
          : identifier ':' expression
            {$$ = {key:$1, value:$3}; }
          ;

array_literal
          : '[' ']' 
            {$$ = new yy.ast.ArrayLiteral([], @$); }

          | '[' arguments ']'
            {$$ = new yy.ast.ArrayLiteral($2, @$); }
          ;

string_literal
          : STRING_LITERAL {$$ = new yy.ast.StringLiteral($1, @$); }
          ;

number_literal
          : NUMBER_LITERAL 
          {$$ = new yy.ast.NumberLiteral(yy.help.parseNumber($1), @$); }
          ;

boolean_literal
          : BOOLEAN  
          {$$ = new yy.ast.BooleanLiteral(yy.help.parseBoolean($1), @$);}
          ;

function_expression
          : identifier '(' arguments ')'
            {$$ = new yy.ast.FunctionExpression($1, $3, @$);} 

          | identifier '('  ')'
            {$$ = new yy.ast.FunctionExpression($1, [], @$);} 
          ;

method_expression
          : member_access '(' arguments ')'
            {$$ = new yy.ast.MethodExpression($1, $3, @$);} 

          | member_access '(' ')'
            {$$ = new yy.ast.MethodExpression($1, [], @$);} 
          ;

property_expression
          : member_access
            {$$ = new yy.ast.PropertyExpression($1, @$); }
          ;

bind_expression
          : identifier '::' 'identifier'
            {$$ = new yy.ast.BindExpression($1, $3, [] , @$);}

          |  identifier '::' 'identifier' '(' arguments ')'
            {$$ = new yy.ast.BindExpression($1, $3, $5 , @$);}

          | member_access '::' identifier 
            {$$ = new yy.ast.BindExpression($1, $3, [], @$);}

          | member_access '::' identifier '(' arguments ')'
            {$$ = new yy.ast.BindExpression($1, $3, $5, @$);}
          ;

function_literal
          : parameters '=>'  expression 
            {$$ = new yy.ast.FunctionLiteral($1, $3, @$); }
          ;

parameters
          : '(' ')'                             {$$ = [];                      }
          | '(' identifier ')'                  {$$ = [$2];                    }
          | '(' parameters  ',' identifier ')'  {$$ = $2.concat($4);           }
          ;

member_access
          : identifier '.' identifier            {$$ = $1+'.'+$3;}
          | identifier '.' member_access {$$ = $1+'.'+$3;} 
          ;

identifier
          : IDENTIFIER {$$ = $1;}
          ;


