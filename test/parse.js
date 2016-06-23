import must from 'must';
import expects from './expectations';
import Parser from '../src/parse/Parser';

var input = null;
var result = null;

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

describe('Parser', function() {

    beforeEach(function() {

        input = null;
        result = null;

    });

    describe('parse()', function() {

        it('should parse imports', function() {

            input = `import lib from "path/to/libs";  <tag/>`;
            parse();
            compare(result, expects[this.test.title]);

        });

        it('should parse a self closing tag', function() {

            input = '<simple/>';
            parse();
            compare(result, expects[this.test.title]);

        });

        it('should parse a self closing tag with attributes', function() {

            input = '<user name="xyaa aaz" position={{4|x(20)}} wml:val="test"/>';
            parse();
            compare(result, expects[this.test.title][0]);

            input = '<user enabled id=24 />';
            parse();
            compare(result, expects[this.test.title][1]);

            input = '<user name="xyaa aaz" id="24" align="left"/>';
            parse();
            compare(result, expects[this.test.title][2]);

        });

        xit('should parse a parent tag', function() {

            input = '<panel>  \n\n\n\n\n\n\n\n\n  </panel>';
            parse();
            compare(result, expects[this.test.title]);

        });

        xit('should parse a parent tag with attributes', function() {

            input = '<panel type="default" size="40" align="left"> </panel>';
            parse();
            compare(result, expects[this.test.title]);

        });

        xit('should parse parent tags with mixed children', function() {

            input = '<panel>This is my offsprings.<a>Link</a>Hey now! <Input/></panel>';
            parse();
            compare(result, expects[this.test.title]);

        });

        xit('should parse parent tags with tag children (L1)', function() {

            input = '<panel><a></a></panel>';
            parse();
            compare(result, expects[this.test.title]);

        });

        xit('should parse parent tags with tag children (L2)', function() {

            input = '<panel><a href="link" onclick={{this.someting.invoke()}}>' +
                'Click Here</a><table/></panel>';
            parse();
            compare(result, expects[this.test.title]);


        });

        xit('should parse parent tags with tag children (L3)', function() {

            input = '<panel><a href="link">Click Here</a><table/><panel c="22"></panel></panel>';
            parse();
            compare(result, expects[this.test.title]);

        });

        xit('should do it all together now', function() {

            input = `<modal name="mymodal" x="1" y="2">
                        <modal-header>My Modal</modal-header>
                        <modal-body>
                         Creativity is inhibited by greed and corruption.
                         <vote-button/>
                         <vote-count source={{this}}/> Votes
                         <textarea wml:id="ta" disabled size=32 onchange={{this.setText}}>
                           Various text
                         </textarea>
                        </modal-body>
                    </modal>`;

            parse();
            compare(result, expects[this.test.title]);

        });

        xit('should parse for expressions', function() {

            input = '<root>' +
                '{% for item in list %}' +
                '<stem>A Stem</stem>' +
                '{% endfor %}' +
                '</root>';
            parse();
            compare(result, expects[this.test.title]);


        });

        xit('should parse if expressions', function() {

            input =
                '<div>' +
                '{% if (length(values()) >= 12) %}' +
                'Your length is more than 11!' +
                '<eye>Tiger</eye>' +
                '{% endif%}' +
                '</div>';

            parse();
            compare(result, expects[this.test.title]);

        });

        xit('should parse bind expressions', function() {

            input = '<div onfocus={{this::doAction}}/>';
            parse();
            compare(result, expects[this.test.title]);

        });

        xit('should parse ternary expressions', function() {

            input = '<div id={{this.id}}>{{this.check() ? a : b }}</div>';
            parse();
            compare(result, expects[this.test.title]);

        });

        xit('should parse function literals', function() {

            input = '<button onclick={{(e)=>this.call(e)}}/>';
            parse();
            compare(result, expects[this.test.title]);

        });

        xit('should parse includes', function() {

            input = '<tr>{% for x,i in y %}{% include this.getFrags() [ctx1, ctx2] %}{% include val %}{% endfor %}</tr>';
            parse();
            compare(result, expects[this.test.title]);

        });

        xit('should parse negative numbers', function() {

            input = '<tag n={{ ( -0.5 + 3) }} m={{(4 + -2)}} g={{ (10 --5) }}/>';
            parse();
            compare(result, expects[this.test.title]);

        });

        xit('should allow filter chaining', function() {

            input = '<p>{{ value | f1 | f2(2) | f3(this.value) }}</p>';
            parse();
            compare(result, expects[this.test.title]);

        });


    });

});
