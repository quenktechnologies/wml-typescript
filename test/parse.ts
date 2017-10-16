import * as must from 'must/register';
import * as fs from 'fs';
import {
    parse
} from '../src';

var input = null;
var tests = null;

function json(tree: any): string {
    return JSON.stringify(tree);
}

function compare(tree: any, that: any): void {

    must(tree).eql(that);

}

function makeTest(test, index) {

    var file = index.replace(/\s/g, '-');


    if (!test.skip) {

        if (process.env.GENERATE) {
            fs.writeFileSync(`./test/expectations/${file}.json`, json(parse(test.input)));
            return;
        }


        compare(json(parse(test.input)), fs.readFileSync(`./test/expectations/${file}.json`, {
            encoding: 'utf8'
        }));

    }

}
tests = {

    'should parse default import': {
        input: `import lib from "path/to/libs" <tag/>`
    },
    'should parse all import': {
        input: `import * as lib from "path/to/libs" <tag/>`
    },
    'should parse named import': {
        input: `import {A, B} from "path/to/a/b"`
    },
    'should parse a self closing tag': {
        input: '<simple/>'
    },
    'should parse a self closing tag with attributes 0': {
        input: '<user name="xyaa aaz" position={{4|x(20)}} wml:val="test"/>',
    },
    'should parse a self closing tag with attributes 1': {
        input: '<user enabled id=24 />',
    },
    'should parse a self closing tag with attributes 2': {
        input: '<user name="xyaa aaz" id="24" align="left"/>',
    },
    'should parse a parent tag': {
        input: '<panel>  \n\n\n\n\n\n\n\n\n  </panel>'
    },
    'should parse a parent tag with attributes': {
        input: '<panel type="default" size="40" align="left"> </panel>'
    },
    'should parse parent tags with mixed children': {
        input: '<panel> This is my offsprings.<a>Link</a>Hey now! <Input/></panel>'
    },
    'should parse parent tags with tag children (L1)': {
        input: '<panel><a></a></panel>'
    },
    'should parse parent tags with tag children (L2)': {
        input: '<panel><a href="link" onclick={{@someting.invoke()}}>' +
        'Click Here</a><table/></panel>'
    },
    'should parse parent tags with tag children (L3)': {
        input: '<panel><a href="link">Click Here</a><table/><panel c="22"></panel></panel>'
    },
    'should do it all together now': {

        input: '<modal name="mymodal" x="1" y="2">' +
        '<modal-header>My Modal</modal-header>' +
        '<modal-body>' +
        'Creativxity is inhibxited by greed and corruption.' +
        '<vote-button/>' +
        '<vote-count source={{@}}/> Votes' +
        '<textarea wml:id="ta" disabled size=32 onchange={{@setText}}>' +
        ' Various text' +
        '</textarea>' +
        '</modal-body>' +
        '</modal>'

    },
    'should parse for expressions': {

        input: '<root>' +
        '{% for item in list %}' +
        '<stem>A Stem</stem>' +
        '{% endfor %}' +
        '</root>'

    },
    'should parse if then expressions': {

        input: '<Html id={{@id}}>{{ if @check() then a else b }}</Html>'

    },
    'should parse function expressions': {

        input: '<button onclick={{\\e =>@call(e)}}/>'

    },

    'should parse calls': {

        input: '<tr>{% for x,i in y %} {{ f(x,i) }} {% endfor %} </tr>'

    },
    'should parse negative numbers': {

        input: '<tag n={{ ( -0.5 + 3) }} m={{(4 + -2)}} g={{ (10 --5) }}/>'

    },

    'should allow filter chaining': {

        input: '<p>{{ @value | f1 | f2(2) | f3(@value) }}</p>'

    },
    'should parse if statements': {

        input: '<Tag>{% if value %} <text>Text</text> {% else %} no text {% endif %}</Tag>'

    },

    'should parse if else statements': {

        input: '<Tag>{% if value %}<text>Text</text>{% else %}<text>else</text>{% endif %}</Tag>'

    },

    'should parse if else if statements': {

        input: '<Tag>{% if value %}<text>Text</text>{% else if value %} <text>else</text>{% endif %}</Tag>'

    },

    'should parse short fun statements': {

        input: '{% fun vue = <View/> %}'

    },

    'should parse short fun statements with arguments': {

        input: '{% fun vue(a,b,c:string) = <View a={{a}} b={{b}} c={{c}}/> %}'

    },

    'should parse short fun statements with type classes': {

        input: '{% fun vue [A,B:C,C] (a:A, b:B) = {{ (a + b) + c }} %}'

    },

    'should parse extended fun statements': {

        input: '{% fun vue %} <View/> {% endfun %}'

    },

    'should parse extended fun statements with arguments': {

        input: '{% fun vue(a,b,c:string) %}<View a={{a}} b={{b}} c={{c}}/> {% endfun %}'

    },

    'should parse extended fun statements with type classes': {

        input: '{% fun vue [A,B:C,C] (a:A, b:B) %} {{ (a + b) + c }} {% endfun %}'

    },

    'should parse export from statements': {

        input: '{% export _view from "somewhere" %}'

    },

    'should parse binary expressions': {

        input: '<p>{{(Styles.A  + Styles.B)}}</p>'


    },

    'should parse complicated expressions': {

        input: '<div class={{((Styles.A + " ") + Style.B)}}/>'
    },

    'should allow for expression after fun': {

        input: '{% fun sven %} {% for a in b %} {{b}} {% endfor %} {% endfun %}'

    },
    'should allow if expression after fun': {

        input: '{% fun ate (o:object) %} {% if a %} {{a}} {% else %} {{a}} {% endif %} {% endfun %}'

    },
    'should allow for booleans in interpolations': {

        input: '<bool active={{true}}>{{if fun() then false else true}}</bool>'

    },

    'should allow calls on expressions': {

        input: '<div>{{((@content() || bar))(foo)}}</div>'

    },
    'should allow boolean attribute values': {

        input: '<tag on=true off=false/>'

    },
    'should parse typed views': {

        input: '{% view Main using Context %} <p>{{@value}}</p>{% endview %}'

    },

    'should parse typed views with generics': {

        input: '{% view Main using Context[string] %} <p>{{@value}}</p>{% endview %}'

    },
    'should parse typed views with type classes': {

        input: '{% view Main [A,B] using Context[A,B] %} <p>{{@values}}</p> {% endview %}'

    },
    'should parse attribute reads': {

        input: `<p class={{concat([x, someValue['ww:class' as string ], some.other.value['ww:variant' as string ?'default']])}}/>`

    },
    'should parse context variables': {

        input: '<Input name={{@level.name}}/>'

    },
    'should allow read expressions in if expressions': {

        input: `<p>{% if @taggin['attr' as string] %}x{% else %} yz fefd {% endif %}</p>`

    }

};

describe('Parser', function() {

    beforeEach(function() {

        input = null;

    });

    describe('parse()', function() {

        Object.keys(tests).forEach(k => {

            it(k, function() {

                if (Array.isArray(tests[k])) {

                    tests[k].forEach(makeTest);

                } else {

                    makeTest(tests[k], k);

                }

            });
        });

    });

});
