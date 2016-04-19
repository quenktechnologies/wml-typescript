import must from 'must';
import expects from './expectations';
import {
    parser
}
from '../src/parser';

var input = null;
var result = null;

function parse(text) {
    result = parser.parse(text || input);
}

describe('Parser', function() {

    beforeEach(function() {

        input = null;
        result = null;

    });

    describe('parse()', function() {

        it('should parse imports', function() {

            input = `import lib from 'path/to/libs';  <tag/>`;
            parse();
            must(result).eql(expects[this.test.title]);

        });

        it('should parse a self closing tag', function() {

            input = '<simple/>';
            parse();
            must(result).eql(expects[this.test.title]);

        });

        it('should parse a self closing tag with attributes', function() {

            input = '<user name="xyaa aaz" position={{4|div(0)}} name:space="test"/>';
            parse();
            must(result).eql(expects[this.test.title][0]);

            input = '<user name="xyaa aaz" id="24" />';
            parse();
            must(result).eql(expects[this.test.title][1]);

            input = '<user name="xyaa aaz" id="24" align="left"/>';
            parse();
            must(result).eql(expects[this.test.title][2]);

        });

        it('should parse a parent tag', function() {

            input = '<panel>    \n\n\n\n\n\n\n\n\n  </panel>';
            parse();
            must(result).eql(expects[this.test.title]);

        });

        it('should parse a parent tag with attributes', function() {

            input = '<panel type="default" size="40" align="left"> </panel>';
            parse();

            must(result).eql(expects[this.test.title]);
        });

        it('should parse parent tags with mixed children', function() {

            input = '<panel>This is my offsprings.<a>Link</a>Hey now! <Input/></panel>';
            parse();

            must(result).eql(expects[this.test.title]);

        });

        it('should parse parent tags with tag children (L1)', function() {

            input = '<panel><a></a></panel>';
            parse();

            must(result).eql(expects[this.test.title]);

        });

        xit('should parse parent tags with tag children (L2)', function() {

            input = '<panel><a href="link" onclick={{this.someting.invoke()}}>' +
                'Click Here</a><table/></panel>';
            parse();

            must(result).eql(expects[this.test.title]);


        });

        xit('should parse parent tags with tag children (L3)', function() {

            input = '<panel><a href="link">Click Here</a><table/><panel c="22"></panel></panel>';
            parse();

            must(result).eql(expects[this.test.title]);

        });

        xit('should do it all together now', function() {
            input = `<modal name="mymodal" x="1" y="2">
                        <modal-header>My Modal</modal-header>
                        <modal-body>
                         Creativity is inhibited by greed and corruption.
                         <vote-button/>
                         <vote-count source="@this"/> Votes
                         <textarea size="32" onchange={{this.setText}}>
                           Various text
                         </textarea>
                        </modal-body>
                    </modal>`;

            parse();

            must(result).eql(expects[this.test.title]);

        });

        xit('should parse a template string', function() {

            input = '<top>' +
                '<tagness id={{22}}>' +
                '`Template ${strings} here`' +
                '</tagness>' +
                '</top>';

            parse();
            must(result).eql(expects[this.test.title]);

        });

        xit('should parse for expressions', function() {

            input = '<root>' +
                '{% for item in {{list}} %}' +
                '<stem>A Stem</stem>' +
                '{% endfor %}' +
                '</root>';
            parse();

            must(result).eql(expects[this.test.title]);

        });


    });

});
