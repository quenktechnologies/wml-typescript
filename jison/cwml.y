/*
 Grammer for the Widget Markup Language
*/

/*
 This is the Lexer portion, the syntax here corresponds to 
 [flex](http://flex.sourceforge.net/manual)
*/

%lex

/* Definitions */

IdentifierStart [$_a-zA-Z]|("\\"[u]{HexDigit}{4})
IdentifierPart {IdentifierStart}|[0-9]
Identifier [a-zA-Z$0-9_][a-zA-Z$0-9.]+
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
TagName [a-zA-Z_$][-a-zA-Z0-9_.]*
Import 'import'
From 'from'

/* Lexer flags */
%options flex
%x TAG CHILDISH JSEXPR CSTRUCT TEMPLATE
%%

/* Lexer rules */

<*>\s+                                                    return 'WHITESPACE';
{Import}                                                  return 'IMPORT';
{From}                                                    return 'FROM';
'{{'                            this.begin('JSEXPR');     return '{{';
';'                                                       return ';'

/* tag parsing */
<INITIAL,CHILDISH>'<'          this.begin('TAG');         return '<';
<CHILDISH>'</'                 this.begin('TAG');         return '</';
<TAG>':'                                                  return ':';
<TAG>'='                                                  return '=';
<TAG,INITIAL>{TagName}                                    return 'NAME';
<TAG,INITIAL>{StringLiteral}                              return 'STRING_LITERAL';
<TAG>'/>'                       this.begin('CHILDISH');   return '/>';
<TAG>'>'                        this.begin('CHILDISH');   return '>';

/* js expressions */
<CHILDISH,TAG>'{{'              this.begin('JSEXPR');     return '{{';
<JSEXPR>(.*)/'}}'               return 'EXPRESSION';
<JSEXPR>'}}'                    this.popState();          return '}}';

/* The following rules are meant to kick in a only when we are parsing the children of a tag.
   A tag's children can be one of:
   * Another tag. (handled above by <*>'>'
   * A JS template string.
   * A limited string (see rule).
   * Control statement.
   * JavaScript expression.
*/

<CHILDISH>'{%'                  this.begin('CSTRUCT');    return '{%';
<CHILDISH>'`'                   this.begin('TEMPLATE');   return 'START_TICK';
<CHILDISH>[^{%`<>]+                                       return 'RAW_STRING';

/* foreach */
<CSTRUCT>'for'                                            return 'FOR';
<CSTRUCT>'in'                                             return 'IN';
<CSTRUCT>'endfor'                                         return 'ENDFOR';
<CSTRUCT>'{{'                   this.begin('JSEXPR');     return '{{';
<CSTRUCT>{Identifier}                                     return 'VAR_DEC';
<CSTRUCT>'%}'                   this.popState();          return '%}';

/* template strings */

<TEMPLATE>[^`]+                                           return 'TDATA';
<TEMPLATE>'`'                   this.popState();          return 'END_TICK';

<*><<EOF>>                                                return 'EOF';

/lex
%ebnf
%start root
%%

root
          : tag EOF {$$=
            {
            type:'root',
            tree:$1
            }; return $$;}
          
          | imports tag EOF {$$=
            {
            type:'root',
            imports:$1,
            tree:$2,
            }; return $$;}
          ;

imports
          : import          {$$ =  [$1];         }
          | imports import  {$$ = $1.concat($2); }
          ;

import    
          : IMPORT WHITESPACE? NAME WHITESPACE? FROM WHITESPACE? STRING_LITERAL ';' WHITESPACE?
            {$$ = {
              type:'import',
              id: $3,
              src: $7,
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
          : WHITESPACE attribute attributes {$$ = $3.concat($2);}
          | WHITESPACE? {$$ = [];}
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
            value: $3,
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
          : '{{' EXPRESSION '}}' {$$ = $2;}
          ;

template  
          : START_TICK TDATA END_TICK
            {$$ = {
              type:'text',
              value: $2,
              location: {
              line:@$.first_line,
              column:@$.first_column
            }};}
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

for_loop
          : '{%' WHITESPACE FOR WHITESPACE VAR_DEC WHITESPACE IN WHITESPACE expression WHITESPACE '%}'
             WHITESPACE? tag WHITESPACE? '{%' WHITESPACE ENDFOR WHITESPACE '%}'
             {$$ = {
              type: 'for-loop',
              variable: $5,
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
          | WHITESPACE children {$$ = [].concat($2);}
          | {$$ = [];}
          ;
