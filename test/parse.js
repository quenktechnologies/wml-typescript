import must from 'must';
import crypto from 'crypto';
import fs from 'fs';
import expects from './expectations';
import Parser from '../src/parser/Parser';

var input = null;
var result = null;
var tests = null;

function parse(text) {
    result = '' + Parser.parse(text || input);
    result = JSON.parse(result);
}

function json(tree) {
    return JSON.stringify(tree);
}

function print(tree) {

    var hash = crypto.createHash('md5');
    console.log('================================BEGIN');
    console.log(json(result));
    console.log(hash.update(json(tree)).digest('hex'));
    console.log('================================END');

}

function compare(tree, that) {

    must(tree).eql(that);

}

function makeTest(test, index) {

    var hash = crypto.createHash('md5');
    var file = index.replace(/\s/g, '-');

    input = test.input;
    parse();

    if (process.env.GENERATE)
        return fs.writeFileSync(`./test/expectations/${file}.json`, json(result));

    if (!test.skip) {

        if (test.print)
            return print(result, index);

        compare(json(result), fs.readFileSync(`./test/expectations/${file}.json`, {
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
        input: '<panel><a href="link" onclick={{this.someting.invoke()}}>' +
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
            '<vote-count source={{this}}/> Votes' +
            '<textarea wml:id="ta" disabled size=32 onchange={{this.setText}}>' +
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

    'should parse bind expressions': {

        input: '<div onfocus={{this::doAction}}/>'

    },
    'should parse ternary expressions': {

        input: '<Html.div id={{this.id}}>{{this.check() ? a : b }}</div>'

    },
    'should parse function expressions': {

        input: '<button onclick={{\\e =>this.call(e)}}/>'

    },

    'should parse includes': {

        input: '<tr>{% for x,i in y %}' +
            '{% include (this.getFrags()) (ctx1, ctx2) %}{% include val %}{% endfor %}</tr>'

    },
    'should parse negative numbers': {

        input: '<tag n={{ ( -0.5 + 3) }} m={{(4 + -2)}} g={{ (10 --5) }}/>'

    },

    'should allow filter chaining': {

        input: '<p>{{ this._::value | f1 | f2(2) | f3(this.value) }}</p>'

    },
    'should parse switch statements': {

        input: 'import * as s from "statements"' +
            '<Tab>' +
            '{% switch this.getValue() %}' +
            '{% case 3 %}<s.Statement/>{% endcase %}' +
            '{% case "copper" %}<s.Statement/>{% endcase %}' +
            '{% default case %}<s.Statement.Default/>{% endcase %}' +
            '{% endswitch %}</Tab>'

    },
    'should parse if statements': {

        input: '<Tag>{% if value %} <text>Text</text> {% endif %}</Tag>'

    },

    'should parse if else statements': {

        input: '<Tag>{% if value %}<text>Text</text>{% else %}<text>else</text>{% endif %}</Tag>'

    },

    'should parse if else if statements': {

        input: '<Tag>{% if value %}<text>Text</text>{% else if value %} <text>else</text>{% endif %}</Tag>'

    },

    'should parse macro statements': {

        input: '{% macro _view %}<View/>{% endmacro %}'

    },

    'should parse macro statements with args': {

        input: '{% macro _view(a,b,c) %} <View a={{a}} b={{b}} c={{c}}/> {% endmacro %}'

    },

    'should parse export from statements': {

        input: '{% export _view from "somewhere" %}'

    },

    'should parse binary expressions': {

        input: '<p>{{(Styles.A  + Styles.B)}}</p>'


    },

    'should parse complicated expressions': {

        input: '<div class={{((Styles.A + " ") + Style.B)}}/>'
    }

};

describe('Parser', function() {

    beforeEach(function() {

        input = null;
        result = null;

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
