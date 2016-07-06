import Compiler from '../src/parser/Compiler';
import must from 'must';

var t;
var input;

beforeEach(function() {

    t = new Compiler();

});

describe('Compiler', function() {

    describe('compile()', function() {

        it('should compile a single tag', function() {

            input = `import lib from 'path/to/libs';<tag/>`;

            must(t.compile(input)).eql(` 

import lib from 'path/to/libs';
export default function (make) { return make.node('tag',{},[]); }

`.trim());

        });

        it('should compile nested tags', function() {

            input = '<panel type="default" size="40" css:align="left"><a>Click</a>Here<Input/></panel>';
            must(t.compile(input)).eql(`

export default function (make) { return make.node('panel',{html:{'type':"default",'size':"40"},css:{'align':"left"}},[make.node('a',{},[make.text(\`Click\`)]),make.text(\`Here\`),make.element(Input,{},[])]); }              `.trim());


        });

        it('should compile all together now', function() {

            input =
                'uses x,y' +
                '<modal name="mymodal" x="1" y="2">' +
                '<modal-header>My Modal</modal-header>' +
                '<modal-body>' +
                'Creativity is inhibxited by greed and corruption.' +
                '{% include creativity [x, y] %}' +
                '<vote-button/>' +
                '<vote-count source=""/> Votes' +
                '<textarea size=32 onchange={{this.setText}}>' +
                'Various text <span>{{this.getSpanText()}}</span>' +
                '<span>{{text | foo}}</span>' +
                '<span>{{text | inverse | reverse | truncate(5) | captialize("x")}}</span>' +
                '{% include this.moreText() %}' +
                '</textarea>' +
                '{% if this.waiting() %}' +
                '<br/>' +
                '<br/>' +
                '{% switch x + y %}' +
                '{% case 12 %}<s.Statement/>{% endcase %}' +
                '{% case 22 %}<s.Statement/>{% endcase %}' +
                '{% endswitch %}' +
                '{% for unit,name in this.getUnits() %}' +
                '<Unit name={{name}}/><Unit name={{!this.private?name:this.otherName()}}/><Unit name={{name}} u={{unit}}/>' +
                '{% endfor %}' +
                '{% endif %}' +
                '</modal-body>' +
                '</modal>';

            must(t.compile(input)).eql(`
export default function (make ,x,y) { return make.node('modal',{html:{'name':"mymodal",'x':"1",'y':"2"}},[make.node('modal-header',{},[make.text(\`My Modal\`)]),make.node('modal-body',{},[make.text(\`Creativity is inhibxited by greed and corruption.\`),creativity.apply(this, [make].concat([x,y])),make.node('vote-button',{},[]),make.node('vote-count',{html:{'source':""}},[]),make.text(\` Votes\`),make.node('textarea',{html:{'size':32,'onchange':this.setText}},[make.text(\`Various text \`),make.node('span',{},[this.getSpanText()]),make.node('span',{},[foo.apply(this, [text])]),make.node('span',{},[captialize.apply(this, [truncate.apply(this, [reverse.apply(this, [inverse.apply(this, [text])]),5]),"x"])]),this.moreText().apply(this, [make].concat([]))]),make.$if(this.waiting(), function if_0(){ return [make.node('br',{},[]),make.node('br',{},[]),make.$switch(x + y,{12:function case_statement1() { return[make.node('s.Statement',{},[])];}.bind(this),22:function case_statement2() { return[make.node('s.Statement',{},[])];}.bind(this)}),make.$for(this.getUnits(),function for_1 (unit, name) {return [make.element(Unit,{html:{'name':name}},[]),make.element(Unit,{html:{'name':(!this.private)? name : this.otherName()}},[]),make.element(Unit,{html:{'name':name,'u':unit}},[])]; }.bind(this))];}.bind(this), function else_0(){ return [];}.bind(this))])]); }

                `.trim());

        });

        });
});
