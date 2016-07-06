import must from 'must';
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
    console.log(json(result));
}

function compare(tree, that) {

    must(tree).eql(that);

}

function makeTest(test, index) {

    if (!test.skip) {

        input = test.input;
        parse();
        return test.print ? print(result) : compare(result, test.expect);

    }
}

tests = {

    'should parse preamble': [{
        input: `import lib from "path/to/libs"; <tag/>`,
        expect: expects['should parse preamble'][0]
    }, {
        input: `import * as lib from "path/to/libs"; <tag/>`,
        expect: expects['should parse preamble'][1]
    }],
    'should parse a self closing tag': {
        input: '<simple/>',
        expect: expects['should parse a self closing tag']
    },
    'should parse a self closing tag with attributes': [{
        input: '<user name="xyaa aaz" position={{4|x(20)}} wml:val="test"/>',
        expect: expects['should parse a self closing tag wxith attributes'][0]

    }, {
        input: '<user enabled id=24 />',
        expect: expects['should parse a self closing tag wxith attributes'][1]
    }, {
        input: '<user name="xyaa aaz" id="24" align="left"/>',
        expect: expects['should parse a self closing tag wxith attributes'][2]

    }],

    'should parse a parent tag': {
        input: '<panel>  \n\n\n\n\n\n\n\n\n  </panel>',
        expect: expects['should parse a parent tag']
    },
    'should parse a parent tag with attributes': {
        input: '<panel type="default" size="40" align="left"> </panel>',
        expect: expects['should parse a parent tag with attributes']

    },
    'should parse parent tags wxith mixed children': {

        input: '<panel> This is my offsprings.<a>Link</a>Hey now! <Input/></panel>',
        expect: expects['should parse parent tags with mixed children']

    },

    'should parse parent tags with tag children (L1)': {

        input: '<panel><a></a></panel>',
        expect: expects['should parse parent tags with tag children (L1)']
    },

    'should parse parent tags wxith tag children (L2)': {

        input: '<panel><a href="link" onclick={{this.someting.invoke()}}>' +
            'Click Here</a><table/></panel>',
        expect: expects['should parse parent tags wxith tag children (L2)']


    },

    'should parse parent tags wxith tag children (L3)': {

        input: '<panel><a href="link">Click Here</a><table/><panel c="22"></panel></panel>',
        expect: expects['should parse parent tags wxith tag children (L3)']

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
            '</modal>',
        expect: expects['should do it all together now']

    },
    'should parse for expressions': {

        input: '<root>' +
            '{% for item in list %}' +
            '<stem>A Stem</stem>' +
            '{% endfor %}' +
            '</root>',
        expect: expects['should parse for expressions']

    },

    'should parse bind expressions': {

        input: '<div onfocus={{this::doAction}}/>',
        expect: expects['should parse bind expressions']

    },
    'should parse ternary expressions': {

        input: '<Html.div id={{this.id}}>{{this.check() ? a : b }}</div>',
        expect: expects['should parse ternary expressions']

    },
    'should parse function literals': {

        input: '<button onclick={{(e)=>this.call(e)}}/>',
        expect: expects['should parse function literals']

    },

    'should parse includes': {

        input: '<tr>{% for x,i in y %}' +
            '{% include this.getFrags() [ctx1, ctx2] %}{% include val %}{% endfor %}</tr>',
        expect: expects['should parse includes']

    },
    'should parse negative numbers': {

        input: '<tag n={{ ( -0.5 + 3) }} m={{(4 + -2)}} g={{ (10 --5) }}/>',
        expect: expects['should parse negative numbers']

    },

    'should allow filter chaining': {

        input: '<p>{{ this._::value | f1 | f2(2) | f3(this.value) }}</p>',
        expect: expects['should allow filter chaining']


    },
    'should parse switch statements': {

        input: 'import * as s from "statements";' +
            '<Tab>' +
            '{% switch this.getValue() %}' +
            '{% case 3 %}<s.Statement/>{% endcase %}' +
            '{% case "copper" %}<s.Statement/>{% endcase %}' +
            '{% case default %}<s.Statement.Default/>{% endcase %}' +
            '{% endswitch %}</Tab>',
        expect: expects['should parse switch statements']

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

                    makeTest(tests[k]);

                }

            });
        });

    });

});
