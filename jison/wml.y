/*
 Grammer for the Widget Markup Language
*/

/*
 This is the Lexer portion, the syntax here corresponds to 
 [flex](http://flex.sourceforge.net/manual)
*/

%lex

/* Definitions */


/* Source https://github.com/cjihrig/jsparser */
DecimalDigit [0-9]
DecimalDigits [0-9]+
NonZeroDigit [1-9]
OctalDigit [0-7]
HexDigit [0-9a-fA-F]
IdentifierStart [$_a-zA-Z]|("\\"[u]{HexDigit}{4})
IdentifierPart {IdentifierStart}|[0-9]
Identifier [a-zA-Z$0-9_][a-zA-Z$0-9.]+
ExponentIndicator [eE]
SignedInteger [+-]?[0-9]+
DecimalIntegerLiteral [0]|({NonZeroDigit}{DecimalDigits}*)
ExponentPart {ExponentIndicator}{SignedInteger}
OctalIntegerLiteral [0]{OctalDigit}+
HexIntegerLiteral [0][xX]{HexDigit}+
DecimalLiteral ({DecimalIntegerLiteral}\.{DecimalDigits}*{ExponentPart}?)|(\.{DecimalDigits}{ExponentPart}?)|({DecimalIntegerLiteral}{ExponentPart}?)
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
RegularExpressionNonTerminator [^\n\r]
RegularExpressionBackslashSequence \\{RegularExpressionNonTerminator}
RegularExpressionClassChar [^\n\r\]\\]|{RegularExpressionBackslashSequence}
RegularExpressionClass \[{RegularExpressionClassChar}*\]
RegularExpressionFlags {IdentifierPart}*
RegularExpressionFirstChar ([^\n\r\*\\\/\[])|{RegularExpressionBackslashSequence}|{RegularExpressionClass}
RegularExpressionChar ([^\n\r\\\/\[])|{RegularExpressionBackslashSequence}|{RegularExpressionClass}
RegularExpressionBody {RegularExpressionFirstChar}{RegularExpressionChar}*
RegularExpressionLiteral {RegularExpressionBody}\/{RegularExpressionFlags}

TagName [a-zA-Z_:][-a-zA-Z0-9_:]*

%options flex
%x CHARDATA
%%

/* Lexer rules */

\s+                             return 'WHITESPACE'
<*>'</'                         this.begin('INITIAL'); return '</';
<*>'<'                          this.begin('INITIAL'); return '<';
'/>'                            this.begin('CHARDATA'); return '/>';
'>'                             this.begin('CHARDATA'); return '>';
'='                             return '=';
{TagName}                       return 'NAME';
{StringLiteral}                 return 'STRING_LITERAL';
<*><<EOF>>                      return 'EOF';
<CHARDATA>[^&"'<>]+             this.begin('INITIAL'); return 'CDATA';                     

/lex
%ebnf
%start root
/* Section for raw js code */
%%

/* All wml files must export a single root object */
root
          : tag EOF {return $1;};

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
          : attribute_name '=' attribute_value
            {$$ = {
            type: 'attribute',
            name: $1,
            value: $3,
            location: {
            line:@$.first_line,
            column:@$.first_column
            }}}
          ;

attribute_name
          : NAME {$$ = $1;}
          ;

attribute_value
          : string_literal {$$ = $1;}
          ;

children   
          : chardata? (tag chardata?)* {
            var childs = [];
            $1 && childs.push($1);
            childs = ($2)? childs.concat($2) : childs;
            $$ = childs;
          }
          ;

chardata  
          : CDATA
            {$$ = {
              type:'text',
              value: $1,
              location: {
              line:@$.first_line,
              column:@$.first_column
            }};}
          ;

string_literal
          : STRING_LITERAL {$$ = $1.substring(1, $1.length -1);}
          ;
