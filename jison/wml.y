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
<EXPRESSION>{Expression}                                  return 'EXPRESSION';
<EXPRESSION>'|'             this.begin('FILTER');         return '|';
<EXPRESSION>'}}'            this.popState();              return '}}';

<FILTER>{Identifier}                                      return 'FILTER';
<FILTER>{ArgumentList}                                    return 'FILTER_ARGUMENTS';
<FILTER>'}}'                this.popState(); this.popState();              return '}}';


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
%start root
%%

root
          : imports tag EOF {$$=
            {
            type:'root',
            imports:$1,
            tree:$2,
            }; return $$;}

          | tag EOF {$$=
            {
            type:'root',
            tree:$1
            }; return $$;}
          ;

imports
          : import          {$$ =  [$1];         }
          | imports import  {$$ = $1.concat($2); }
          ;

import    
          : IMPORT DEFAULT_MEMBER FROM MODULE ';'
            {$$ = {
              type:'import',
              id: $2,
              src: $4,
              location: {
               line:@$.first_line,
               column:@$.first_column
            }};}
          ;

tag
          : tag_start children tag_end 
            {
            $1.children = $1.children.concat($2);
            $$ = $1;
            }
          | empty_tag {$$ = $1;}
          ;

tag_start 
          : '<' NAME attributes '>'
            {$$ = {
             type: 'tag',
             name: $2,
             attributes:$3,
             children:[],
             location: {
             line:@$.first_line,
             column:@$.first_column
            }}}
          ;

tag_end
          : '</' NAME '>' {$$ = $2;}
          ;

empty_tag 
          : '<' NAME attributes '/>' 
            {$$ = {
              type:'tag',
              name:$2,
              attributes: $3,
              children: [],
              location: {
              line:@$.first_line,
              column:@$.first_column
            }}}
          ;

attributes
          : attribute attributes {$$ = $2.concat($1);}
          | {$$ = [];}
          ;

attribute 
          : attribute_name '=' string_literal
            {$$ = {
            type: 'attribute',
            namespace: $1.namespace,
            name: $1.name,  
            value: $3,
            location: {
            line:@$.first_line,
            column:@$.first_column
            }}}

          | attribute_name '=' expression
            {$$ = {
            type: 'attribute-expression',
            namespace: $1.namespace,
            name: $1.name,
            value: $3.expression,
            filters:$3.filters,
            location: {
            line:@$.first_line,
            column:@$.first_column
            }}}

          | attribute_name
            {$$ = {
            type: 'attribute-expression',
            namespace: $1.namespace,
            name: $1.name,  
            value: true,
            location: {
            line:@$.first_line,
            column:@$.first_column
            }}}
          ;

attribute_name
          : NAME               {$$ = {namespace:'', name: $1};}
          | NAME ':' NAME      {$$ = {namespace:$1, name: $3};}
          ;

string_literal
          : STRING_LITERAL {$$ = $1.substring(1, $1.length -1);}
          ;

expression
          : '{{' EXPRESSION '}}' 
            {$$ ={
              expression:$2,
              filters:[]
              };}

          | '{{' EXPRESSION '|' filters '}}' 
            {$$ = {
              expression:$2,
              filters:$4
            };}
          ;

filters
          : filter          {$$ =  [$1];         }
          | filters filter  {$$ = $1.concat($2); }
          ;

filter
          : FILTER 
            {$$ = {
              type: 'filter',
              name: $1,
              arguments: [],
            };}

          | FILTER FILTER_ARGUMENTS
            {$$ = {
              type: 'filter',
              name:$1,
              arguments:$2.substring(1, $2.length-1).split(',')
            };}
          ;

chardata
          : RAW_STRING
            {$$ = {
              type:'text',
              value: $1,
              location: {
              line:@$.first_line,
              column:@$.first_column
            }};}
          ;

for
          : '{%' W FOR W VAR_DEC ',' (VAR_DEC)? W IN W expression W '%}'
             W? tag W? '{%' W ENDFOR W '%}'
             {$$ = {
              type: 'for',
              expression: $9
             };} 
          ;

children   
          : tag children {
            var childs = [];
            childs.push($1);
            $$ = childs.concat($2);
            }
          | for_loop children {
            var childs = [];
            childs.push($1);
            $$ = childs.concat($2);
            }
          | template children {
            var childs = [];
            childs.push($1);
            $$ = childs.concat($2);
            }
          | chardata children {
            var childs = [];
            childs.push($1);
            $$ = childs.concat($2);
            } 
          | W children {$$ = [].concat($2);}
          | {$$ = [];}
          ;
