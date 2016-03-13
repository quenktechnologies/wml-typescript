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
TagName [a-zA-Z_][-a-zA-Z0-9_.]*
Import 'import'
From 'from'

/* Lexer flags */
%options flex
%x CHARDATA JSEXPR CSTRUCT
%%

/* Lexer rules */

<INITIAL,CSTRUCT>\s+            return 'WS'
{Import}                        return 'IMPORT';
{From}                          return 'FROM';
':'                             return ':';
<*>'</'                         this.begin('INITIAL');    return '</';
<*>'<'                          this.begin('INITIAL');    return '<';

/* The following rules are meant to kick in 
   only when we are parsing the children of a tag.
   A tag's children can be one of:
   * Another tag.
   * A JS template string,
   * Control statement
   * JavaScript expression. */

/* character data */
'/>'                            this.begin('CHARDATA');   return '/>';
'>'                             this.begin('CHARDATA');   return '>';
<*>'{%'                         this.begin('CSTRUCT');    return '{%';
<CHARDATA>[^<>%]+               this.begin('INITIAL');    return 'CDATA';

/* control structures */
<CSTRUCT>'for'                  return 'FOR';
<CSTRUCT>'in'                   return 'IN';
<CSTRUCT>'endfor'               return 'ENDFOR';
<CSTRUCT>{Identifier}           return 'VAR_DEC';
<CSTRUCT>'%}'                   this.popState();    return '%}';

/* js expressions */
<*>'{{'                         this.begin('JSEXPR');     return '{{';
<JSEXPR>(.*)/'}}'               return 'EXPRESSION';
<JSEXPR>'}}'                    this.popState();    return '}}';

'='                             return '=';
';'                             return ';'
{TagName}                       return 'NAME';
{StringLiteral}                 return 'STRING_LITERAL';
<*><<EOF>>                      return 'EOF';

/lex
%ebnf
%start root
%%

root
          : tag chardata? EOF {$$=
            {
            type:'root',
            tree:$1
            }; return $$;}
          
          | imports tag chardata? EOF {$$=
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
          : IMPORT WS NAME WS FROM WS STRING_LITERAL ';' WS?
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
          : WS attribute attributes {$$ = $3.concat($2);}
          | WS? {$$ = [];}
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

chardata  
          : '`' CDATA '`'
            {$$ = {
              type:'text',
              value: $2,
              location: {
              line:@$.first_line,
              column:@$.first_column
            }};}
          ;

for_loop
          : '{%' WS FOR WS VAR_DEC WS IN WS expression WS '%}'
             tag '{%' WS ENDFOR WS '%}'
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
          | chardata children {
            var childs = [];
            childs.push($1);
            $$ = childs.concat($2);
            }
          | {$$ = [];}
          ;
