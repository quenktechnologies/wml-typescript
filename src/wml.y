/*
 Grammar for the Widget Markup Language
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
Identifier [a-z$_][a-zA-Z$_0-9-]*
Constructor [A-Z][a-zA-Z$_0-9-]*
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
%x CONTROL
%x EXPRESSION
%x CONTROL_CHILD
%x TAG
%%

/* Lexer rules */

<*>\s+                                                   return;               

<INITIAL>'import'                                        return 'IMPORT';
<INITIAL>'from'                                          return 'FROM';
<INITIAL>'using'                                         return 'USING';
<INITIAL>'as'                                            return 'AS';
<INITIAL>'{%'                this.begin('CONTROL');      return '{%';
<INITIAL>'<!--'              this.begin('COMMENT');      return;
<INITIAL>'<'                 this.begin('TAG');          return '<';
<INITIAL>'{{'                this.begin('EXPRESSION');   return '{{';
<INITIAL>{Constructor}                                   return 'CONSTRUCTOR';
<INITIAL>{Identifier}                                    return 'IDENTIFIER';

<TAG>'true'                                              return 'TRUE';
<TAG>'false'                                             return 'FALSE';
<TAG>{Constructor}                                       return 'CONSTRUCTOR';
<TAG>{Identifier}                                        return 'IDENTIFIER';
<TAG>'/>'                    this.popState();            return '/>';
<TAG>'/'                                                 return 'NOSE';
<TAG>'>'                     this.begin('CHILDREN');     return '>';
<TAG>'{{'                    this.begin('EXPRESSION');   return '{{';

<CHILDREN>'{{'               this.begin('EXPRESSION');   return '{{';
<CHILDREN>'{%'               this.begin('CONTROL');      return '{%';
<CHILDREN>'<!--'             this.begin('COMMENT');      return;
<CHILDREN>'</'               this.begin('TAG');          return '</';
<CHILDREN>'<'                this.begin('TAG');          return '<';
<CHILDREN>[^/<>{%}]+                                     return 'CHARACTERS';

<CONTROL>'main'                                          return 'MAIN';
<CONTROL>'endmain'                                       return 'ENDMAIN';
<CONTROL>'macro'                                         return 'MACRO';
<CONTROL>'endmacro'                                      return 'ENDMACRO';
<CONTROL>'for'                                           return 'FOR';
<CONTROL>'endfor'                                        return 'ENDFOR';
<CONTROL>'if'                                            return 'IF';
<CONTROL>'endif'                                         return 'ENDIF';
<CONTROL>'else'                                          return 'ELSE';
<CONTROL>'elseif'                                        return 'ELSEIF';
<CONTROL>'in'                                            return 'IN';
<CONTROL>'case'                                          return 'CASE';
<CONTROL>'endcase'                                       return 'ENDCASE';
<CONTROL>'export'                                        return 'EXPORT';
<CONTROL>'from'                                          return 'FROM';
<CONTROL>'view'                                          return 'VIEW';
<CONTROL>'using'                                         return 'USING';
<CONTROL>'endview'                                       return 'ENDVIEW';
<CONTROL>'match'                                         return 'MATCH';
<CONTROL>'endmatch'                                      return 'ENDMATCH';
<CONTROL>'instanceof'                                    return 'INSTANCEOF';
<CONTROL>'typeof'                                        return 'TYPEOF';
<CONTROL>'this'                                          return 'THIS';
<CONTROL>'fun'                                           return 'FUN';
<CONTROL>'endfun'                                        return 'ENDFUN';
<CONTROL>'as'                                            return 'AS';
<CONTROL>'::'                                            return '::';
<CONTROL>'@'                                             return '@';
<CONTROL>'()'                                            return '()';
<CONTROL>'='                 this.begin('CONTROL_CHILD');return '=';
<CONTROL>{Constructor}                                   return 'CONSTRUCTOR';
<CONTROL>{Identifier}                                    return 'IDENTIFIER';
<CONTROL>'%}'                this.popState();            return '%}';

<CONTROL_CHILD>'<'           this.begin('TAG');          return '<';
<CONTROL_CHILD>'{{'          this.begin('EXPRESSION');   return '{{';
<CONTROL_CHILD>'%}'          this.popState();            return '%}';
<CONTROL_CHILD>{Constructor}                             return 'CONSTRUCTOR';
<CONTROL_CHILD>{Identifier}                              return 'IDENTIFIER';

<EXPRESSION>'|'                                          return '|';
<EXPRESSION>'=>'                                         return '=>';
<EXPRESSION>'->'                                         return '->';
<EXPRESSION>'@'                                          return '@';
<EXPRESSION>'instanceof'                                 return 'INSTANCEOF';
<EXPRESSION>'true'                                       return 'TRUE';
<EXPRESSION>'false'                                      return 'FALSE';
<EXPRESSION>'if'                                         return 'IF';
<EXPRESSION>'then'                                       return 'THEN';
<EXPRESSION>'else'                                       return 'ELSE';
<EXPRESSION>'as'                                         return 'AS';
<EXPRESSION>{Constructor}                                return 'CONSTRUCTOR';
<EXPRESSION>{Identifier}                                 return 'IDENTIFIER';
<EXPRESSION>'}}'             this.popState();            return '}}';

<COMMENT>(.|\r|\n)*?'-->'    this.popState();            return;

<*>{NumberLiteral}                                       return 'NUMBER_LITERAL';
<*>{StringLiteral}                                       return 'STRING_LITERAL';
<*>'>'                                                   return '>';
<*>'<'                                                   return '<';
<*>'('                                                   return '(';
<*>')'                                                   return ')';
<*>'['                                                   return '[';
<*>']'                                                   return ']';
<*>';'                                                   return ';'
<*>':'                                                   return ':';
<*>'='                                                   return '='
<*>'=='                                                  return '==';
<*>'!='                                                  return '!=';
<*>'>='                                                  return '>=';
<*>'<='                                                  return '<=';
<*>'+'                                                   return '+';
<*>'-'                                                   return '-';
<*>'*'                                                   return '*';
<*>'/'                                                   return '/';
<*>'\\'                                                  return '\\';
<*>'&&'                                                  return '&&';
<*>'||'                                                  return '||';
<*>'^'                                                   return '^';
<*>'!'                                                   return '!';
<*>','                                                   return ',';
<*>'?'                                                   return '?';
<*>'.'                                                   return '.';
<*>'{'                                                   return '{';
<*>'}'                                                   return '}';

<*><<EOF>>                                               return 'EOF';

/lex
%right '?' ':' '=>'
%right '!'
%right ','

%ebnf
%start module
%%

module

          : imports exports main EOF
            {$$ =
            new yy.ast.Module($1, $2, $3, @$); 
            return $$;
            }

          | imports exports EOF
            {$$ =
            new yy.ast.Module($1, $2, null, @$); 
            return $$;
            }

          | imports main EOF
            {$$ =
            new yy.ast.Module($1, [], $2, @$); 
            return $$;
            }

          | imports EOF
            {$$ =
            new yy.ast.Module($1, [], null, @$); 
            return $$;
            }

          | exports main EOF
            {$$ =
            new yy.ast.Module([], $1, $2, @$); 
            return $$;
            }

          | exports EOF
            {$$ =
            new yy.ast.Module([], $1, null, @$); 
            return $$;
            }

          | main EOF
            {$$ =
            new yy.ast.Module([], [], $1, @$); 
            return $$;
            }
         ;

imports
          : import_statement          {$$ =  [$1];         }
          | imports import_statement  {$$ = $1.concat($2); }
          ;

import_statement
          : IMPORT import_member FROM string_literal (';')?
            {$$ = new yy.ast.ImportStatement($2, $4, @$);}
          ;

import_member
          : aggregate_member
          | aliased_member
          | composite_member
          ;

aliased_member
          : member AS member
            {$$ = new yy.ast.AliasedMember($1, $3, @$);}
          ;

aggregate_member
          : '*' AS member
            {$$ = new yy.ast.AggregateMember($3, @$);}
          ;

composite_member
          : '{' member_list '}'
            {$$ = new yy.ast.CompositeMember($2, @$);}
          ;

member_list
          : (member | aliased_member)
            {$$ = [$1];}

          | member_list ',' (member | aliased_member)
            {$$ = $1.concat($3);}
          ;

member
          : (unqualified_identifier | unqualified_constructor)
          ;

main
          : '{%' MAIN type_classes? '(' type ')' parameters? '%}' tag
            { $$ = new yy.ast.TypedMain($3||[], $5, $7, $9, @$); }

          | tag 
            {$$ = new yy.ast.UntypedMain($1, @$); }
          ;

exports
          : export
            {$$ = [$1]; }

          | exports export
            {$$ = $1.concat($2);}

          ;

export
          : export_statement 
          | view_statement 
          | fun_statement 
            {$$ = $1; }
          ;

export_statement
          : '{%' EXPORT composite_member FROM string_literal   '%}'
            {$$ = new yy.ast.ExportStatement($3, $5, @$);  }
          ;

view_statement
          : '{%' VIEW unqualified_constructor type_classes? '(' type ')' parameters?'%}'
            tag
            '{%' ENDVIEW '%}'
            { $$ = new yy.ast.ViewStatement($3, $4||[], $6, $8||[], $10, @$); }
          ;

fun_statement
          : '{%' FUN unqualified_identifier type_classes parameters '=' child '%}'
            {$$ = new yy.ast.FunStatement($3, $4, $5, $7, @$);    }

          | '{%' FUN unqualified_identifier parameters '=' child '%}'
            {$$ = new yy.ast.FunStatement($3, [], $4, $6, @$);    }

          | '{%' FUN unqualified_identifier '=' child '%}' 
            {$$ = new yy.ast.FunStatement($3, [], [], $5, @$);        }

          | '{%' FUN unqualified_identifier '%}' children '{%' ENDFUN '%}'
            {$$ = new yy.ast.FunStatement($3, [], [], $5, @$);        }

          | '{%' FUN unqualified_identifier type_classes parameters '%}' 
            children '{%' ENDFUN '%}'
            {$$ = new yy.ast.FunStatement($3, $4, $5, $7, @$);    }

          | '{%' FUN unqualified_identifier parameters '%}' 
            children '{%' ENDFUN '%}'
            {$$ = new yy.ast.FunStatement($3, [], $4, $6, @$);    }
          ;

type_classes
          : '[' type_class_list ']' {$$ = $2; }
          ;

type_class_list
          : type_class
            {$$ = [$1];                     }

          | type_class_list ',' type_class
            {$$ = $1.concat($3);            }
          ;

type_class
          : unqualified_identifier 
           {$$ = new yy.ast.TypeClass($1, null, @$);}

          | unqualified_identifier ':' type
           {$$ = new yy.ast.TypeClass($1, $3, @$);}

          | unqualified_constructor 
           {$$ = new yy.ast.TypeClass($1, null, @$);}

          | unqualified_constructor ':' type
           {$$ = new yy.ast.TypeClass($1, $3, @$);}
          ;

type 
          : (unqualified_identifier|cons) type_classes?
            {$$ = new yy.ast.Type($1, $2||[], @$);                             }
          ;

parameters
          : '(' ')'                  {$$ = [];}
          | '(' parameter_list ')'   {$$ = $2;}
          ;

parameter_list
          : parameter
            {$$ = [$1];                                     }

          | parameter_list ',' parameter
            {$$ = $1.concat($3);                            }
          ;

parameter
          : unqualified_identifier ':' type
            { $$ = new yy.ast.TypedParameter($1, $3, @$); }

          | unqualified_identifier
            { $$ = new yy.ast.UntypedParameter($1, @$);  }
          ;

children
          : child           {$$ = [$1];          }
          | children child  {$$ = $1.concat($2); }
          ;

child
          : (tag | interpolation | control | characters | identifier)
            { $$ = $1; }
          ;

tag
          : node    { $$ = $1; }
          | widget  { $$ = $1; }
          ;

node
          : '<' identifier attributes '>' children? '</' identifier '>'
             {$$ = new yy.ast.Node($2, $3, $5||[], $7, @$);}

          | '<' identifier '>' children? '</' identifier '>'
             {$$ = new yy.ast.Node($2, [], $4||[], $6, @$);}

          | '<' identifier attributes '/>'
            { $$ = new yy.ast.Node($2, $3, [], $2, @$); }

          | '<' identifier '/>'
            { $$ = new yy.ast.Node($2, [], [], $2, @$); }
          ;

widget
          : '<' cons attributes '>' children? '</' cons '>'
             {$$ = new yy.ast.Widget($2, $3, $5||[], $7, @$);}

          | '<' cons '>' children? '</' cons '>'
             {$$ = new yy.ast.Widget($2, [], $4||[], $6, @$);}

          | '<' cons attributes '/>'
            { $$ = new yy.ast.Widget($2, $3, [], $2, @$); }

          | '<' cons '/>'
            { $$ = new yy.ast.Widget($2, [], [], $2, @$); }
          ;

attributes
          : attribute            {$$ = [$1];     }
          | attributes attribute {$$ = $1.concat($2);}
          ;

attribute
          : unqualified_identifier ':' unqualified_identifier '=' attribute_value
            {$$ = new yy.ast.Attribute($1, $3, $5, @$);}

          | unqualified_identifier '=' attribute_value
            {$$ =
            new yy.ast.Attribute(new yy.ast.UnqualifiedIdentifier('html', @$),
            $1, $3, @$);}

          | unqualified_identifier ':' unqualified_identifier
            {$$ = new yy.ast.Attribute($1, $3, new yy.ast.BooleanLiteral(true, @$), @$);  }

          | unqualified_identifier
            {$$ = new yy.ast.Attribute(
            new yy.ast.UnqualifiedIdentifier('html', @$),
            $1, new yy.ast.BooleanLiteral(true, @$), @$);  }
          ;

attribute_value
          : (interpolation|literal)
            {$$ = $1;}
          ;

interpolation
          : '{{' expression '}}'
            {$$ = new yy.ast.Interpolation($2, [], @$);}

          | '{{' expression filters '}}'
            {$$ = new yy.ast.Interpolation($2, $3, @$);}
          ;

filters
          : filter              {$$ =  [$1];     }
          | filters filter      {$$ = $1.concat($2); }
          ;

filter
          : '|'  expression
            {$$ = $2}
          ;

control
          : (for_statement|if_statement) 
            {$$ = $1;}
          ;

for_statement
          : '{%' FOR parameter IN expression '%}' children '{%' ENDFOR '%}'
            {$$ = new yy.ast.ForStatement($3, null, null, $5, $7, [], @$);}

          | '{%' FOR parameter ',' parameter IN expression '%}' children '{%' ENDFOR '%}'
            {$$ = new yy.ast.ForStatement($3, $5, null, $7, $9, [], @$);}

          | '{%' FOR parameter ',' parameter ',' parameter IN expression '%}'
            children '{%' ENDFOR '%}'
            {$$ = new yy.ast.ForStatement($3, $5, $7, $9, $11, [], @$);}

          | '{%' FOR parameter IN expression '%}' 
             children 
             '{%' OTHERWISE '%}' children '{%' ENDFOR '%}'
            {$$ = new yy.ast.ForStatement($3, null, null, $5, $7, $11, @$);}

          | '{%' FOR parameter ',' parameter IN expression '%}' 
            children 
            '{%' OTHERWISE '%}' children '{%' ENDFOR '%}'
            {$$ = new yy.ast.ForStatement($3, $5, null, $7, $9, $13, @$);}

          | '{%' FOR parameter ',' parameter ',' parameter IN expression '%}'
            children 
            '{%' OTHERWISE '%}' children '{%' ENDFOR '%}'
            {$$ = new yy.ast.ForStatement($3, $5, null, $7, $9, $15, @$);}
          ;

if_statement
          : '{%' IF expression '%}' children else_clause
           {$$ = new yy.ast.IfStatement($3, $5, $6, @$); }
          ;

else_clause

         :  '{%' ELSE '%}' children '{%' ENDIF '%}'
            { $$ = new yy.ast.ElseClause($4, @$); }

         |  '{%' ELSE IF expression '%}' children else_clause 
            { $$ = new yy.ast.ElseIfClause($4, $6, $7, @$); }
         ;

characters
          : CHARACTERS
            {$$ = new yy.ast.Characters($1, @$); }
          ;

arguments
          : '(' ')'
            {$$ = [];                                      }

          | '(' argument_list ')'
            {$$ = $2;                                      }

          ;

argument_list
          : expression
            {$$ = [$1];                                    }

          | argument_list ',' expression
            {$$ = $1.concat($3);                           }
          ;

expression
          : if_expression
            { $$ = $1; }
          
          | binary_expression
            { $$ = $1; }

          | unary_expression
            { $$ =$1; }

          | simple_expression
            { $$ = $1; }

          | read_expression
            { $$ = $1; }

          | function_expression
            { $$ = $1; }

          | '(' expression ')'
            { $$ = $2; }
          ;

if_expression
          : IF expression THEN expression ELSE expression
            { $$ = new yy.ast.IfThenExpression($2, $4, $6, @$); }
          ;

binary_expression

          : simple_expression binary_operator simple_expression
            {$$ = new yy.ast.BinaryExpression($1, $2, $3, @$); }

          | simple_expression binary_operator '(' expression ')'
            {$$ = new yy.ast.BinaryExpression($1, $2, $4, @$); }

          | '(' expression ')' binary_operator simple_expression
            {$$ = new yy.ast.BinaryExpression($2, $4, $5, @$); }
 
          | '(' expression ')' binary_operator '(' expression ')'
            {$$ = new yy.ast.BinaryExpression($2, $4, $6, @$); }
          ;

unary_expression
          : '!' simple_expression
            {$$ = new yy.ast.UnaryExpression($1, $2, @$);      }

          | '!' '(' expression ')'
            {$$ = new yy.ast.UnaryExpression($1, $3, @$);      }
          ;

simple_expression
          : (construct_expression | call_expression | member_expression 
             | literal | context_property | cons | identifier | context_variable)
            { $$ = $1; }
          ;

construct_expression
          : cons arguments
            { $$ = new yy.ast.ConstructExpression($1, $2, @$); }
          ;

call_expression
          : identifier type_arguments arguments
            {$$ = new yy.ast.CallExpression($1, $2, $3, @$);    }

          | identifier arguments
            {$$ = new yy.ast.CallExpression($1, [], $2, @$);    }

          | context_property type_arguments arguments
            {$$ = new yy.ast.CallExpression($1, $2, $3, @$);    }

          | context_property arguments
            {$$ = new yy.ast.CallExpression($1, [], $2, @$);    }

          | member_expression type_arguments arguments
            {$$ = new yy.ast.CallExpression($1, $2, $3, @$);    }

          | member_expression arguments
            {$$ = new yy.ast.CallExpression($1, [], $2, @$);    }

          | '(' expression ')' type_arguments arguments
            {$$ = new yy.ast.CallExpression($2, $4, $5, @$);    }

          | '(' expression ')' arguments
            {$$ = new yy.ast.CallExpression($2, [], $4, @$);    }
          ;

member_expression

          : qualified_identifier '.' unqualified_identifier
            {$$ = new yy.ast.MemberExpression($1, $3, @$); }

          | qualified_constructor '.' unqualified_identifier
            {$$ = new yy.ast.MemberExpression($1, $3, @$); }

          | context_variable '.' unqualified_identifier
            {$$ = new yy.ast.MemberExpression($1, $3, @$); }

          | context_property '.' unqualified_identifier
            {$$ = new yy.ast.MemberExpression($1, $3, @$); }

          | list '.' unqualified_identifier   
            {$$ = new yy.ast.MemberExpression($1, $3, @$); }

          | record '.' unqualified_identifier   
            {$$ = new yy.ast.MemberExpression($1, $3, @$); }

          | string_literal '.' unqualified_identifier
            {$$ = new yy.ast.MemberExpression($1, $3, @$); }

          | call_expression '.' unqualified_identifier
            {$$ = new yy.ast.MemberExpression($1, $3, @$); }

          |'(' expression ')' '.' unqualified_identifier
            {$$ = new yy.ast.MemberExpression($2, $5, @$); }

          | member_expression '.' unqualified_identifier
            {$$ = new yy.ast.MemberExpression($1, $3, @$); }
          ;

read_expression

          : identifier '[' readable_expression AS type ']'
            {$$ = new yy.ast.ReadExpression($1, $3, $5, null, @$);       }

          | identifier '[' readable_expression AS type '?' expression ']'
            {$$ = new yy.ast.ReadExpression($1, $3, $5, $7, @$);         }

          | context_variable '[' readable_expression AS type ']'
            {$$ = new yy.ast.ReadExpression($1, $3, $5, null, @$);       }

          | context_variable '[' readable_expression AS type '?' expression ']'
            {$$ = new yy.ast.ReadExpression($1, $3, $5, $7, @$);         }

          | context_property '[' readable_expression AS type ']'
            {$$ = new yy.ast.ReadExpression($1, $3, $5, null, @$);       }

          | context_property '[' readable_expression AS type '?' expression ']'
            {$$ = new yy.ast.ReadExpression($1, $3, $5, $7, @$);         }

          | member_expression '[' readable_expression AS type ']'
            {$$ = new yy.ast.ReadExpression($1, $3, $5, null, @$);       }

          | member_expression '[' readable_expression AS type '?' expression ']'
            {$$ = new yy.ast.ReadExpression($1, $3, $5, $7, @$);         }

          | '(' expression ')'  '[' expression AS type '?' expression ']'
            {$$ = new yy.ast.ReadExpression($1, $3, $5, $7, @$);       }

          | '(' expression ')' '[' expression AS type ']'
            {$$ = new yy.ast.ReadExpression($1, $3, $5, null, @$);       }
          ;

readable_expression

          : (string_literal|member_expression|context_property|call_expression)
            {$$ = $1;}

          | '(' expression ')'
            {$$ = $2;}
          ;

function_expression

          : '\\' parameter_list '=>'  expression
            {$$ = new yy.ast.FunctionExpression($2, $4, @$);   }

          | '=>' expression
            {$$ = new yy.ast.FunctionExpression([], $2, @$);   }
          ;


literal 
        : (record|list|string_literal|number_literal|boolean_literal)
        ;

record
          : '{' '}'
            {$$ = new yy.ast.Record([], @$); }

          | '{' properties '}'
            {$$ = new yy.ast.Record($2, @$); }
          ;

properties
          : property
           {$$ = [$1]; }

          | properties ',' property
           {$$ = $1.concat($3); }
          ;

property
          : (unqualified_identifier|string_literal) ':' expression
            { $$ = new yy.ast.Property($1, $3, @$); }
          ;

list
          : '[' ']'
            {$$ = new yy.ast.List([], @$); }

          | '[' argument_list ']'
            {$$ = new yy.ast.List($2, @$); }
          ;

string_literal
          : STRING_LITERAL 
            {$$ = new yy.ast.StringLiteral($1.slice(1, $1.length - 1, @$)); }
          ;

number_literal
          : NUMBER_LITERAL
          {$$ = new yy.ast.NumberLiteral($1, @$); }
          ;

boolean_literal
          : TRUE
            {$$ = new yy.ast.BooleanLiteral(true, @$);}

          | FALSE
            {$$ = new yy.ast.BooleanLiteral(false, @$);}
          ;

context_property
          : '@' unqualified_identifier
            { $$ = new yy.ast.ContextProperty($2, @$) }
          ;

context_variable
          : '@' {$$ = new yy.ast.ContextVariable(@$);}
          ;

cons
         : qualified_constructor   { $$ = $1; }
         | unqualified_constructor { $$ = $1; }
         ;

qualified_constructor
        : IDENTIFIER '.' CONSTRUCTOR
          { $$ = new yy.ast.QualifiedConstructor($1, $3, @$); }

        | CONSTRUCTOR '.' CONSTRUCTOR
          { $$ = new yy.ast.QualifiedConstructor($1, $3, @$); }
        ;

unqualified_constructor
        : CONSTRUCTOR 
          { $$ = new yy.ast.UnqualifiedConstructor($1, @$); }
        ;

identifier
        : qualified_identifier 
          { $$ = $1; }

        | unqualified_identifier
          { $$ = $1; }
        ;

qualified_identifier
         : IDENTIFIER '.' IDENTIFIER
           {$$ = new yy.ast.QualifiedIdentifier($1, $3, @$); }

         | CONSTRUCTOR '.' IDENTIFIER
          {$$ = new yy.ast.QualifiedIdentifier($1, $3, @$); }
         ;

unqualified_identifier
         : IDENTIFIER
           {$$ = new yy.ast.UnqualifiedIdentifier($1, @$);   }
         ;

binary_operator
          : ('>'|'>='|'<'|'<='|'=='|'!='|'+'|'/'|'-'|'='|'&&'|'||'|'^'|INSTANCEOF)
            { $$ = $1; }
          ;
