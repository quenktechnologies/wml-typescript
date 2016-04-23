import Transpiler from '../src/transpile/Transpiler';
import must from 'must';

var t;
var input;

beforeEach(function() {

    t = new Transpiler();

});

describe('Transpiler', function() {

    describe('transpile()', function() {

        it('should transpile a single tag', function() {

            input = `import lib from 'path/to/libs';<tag/>`;

            must(t.transpile(input)).eql(` 
import lib from 'path/to/libs';
export default function (make) { return make.element('tag',{ns:{}, html:{}}, null); }`.trim());

        });

        it('should transpile nested tags', function() {

            input = '<panel type="default" size="40" css:align="left"><a>Click</a>Here<Input/></panel>';

            must(t.transpile(input)).eql(`

export default function (make) { return make.element('panel',{ns:{"css":{"align":"left"}}, html:{"type":"default","size":"40"}}, make.element('a',{ns:{}, html:{}}, 'Click'),'Here',make.element(Input,{ns:{}, html:{}}, null)); }

              `.trim());


        });

        it('should transpile all together now', function() {

            input =
                '<modal name="mymodal" x="1" y="2">' +
                '<modal-header>My Modal</modal-header>' +
                '<modal-body>' +
                'Creativxity is inhibxited by greed and corruption.' +
                '<vote-button/>' +
                '<vote-count source=""/> Votes' +
                '<textarea size=32 onchange={{this.setText}}>' +
                'Various text <span>{{text}}</span>' +
                '</textarea>' +
                '{% if this.waiting() %}' +
                '<br/>' +
                '<br/>' +
                '{% for unit,name in this.getUnits() %}' +
                '<Unit name={{name}}/><Unit name={{name}}/><Unit name={{name}} u={{unit}}/>' +
                '{% endfor %}' +
                '{% endif %}' +
                '</modal-body>' +
                '</modal>';

        must(t.transpile(input)).eql(`

export default function (make) { return make.element('modal',{ns:{}, html:{"name":"mymodal","x":"1","y":"2"}}, make.element('modal-header',{ns:{}, html:{}}, 'My Modal'),make.element('modal-body',{ns:{}, html:{}}, 'Creativxity is inhibxited by greed and corruption.',make.element('vote-button',{ns:{}, html:{}}, null),make.element('vote-count',{ns:{}, html:{"source":""}}, null),' Votes',make.element('textarea',{ns:{}, html:{"size":"32","onchange":"this.setText"}}, 'Various text ',make.element('span',{ns:{}, html:{}}, text)),make.ifcondition(this.waiting(), function if_0(){ return [make.element('br',{ns:{}, html:{}}, null),make.element('br',{ns:{}, html:{}}, null),make.forloop(this.getUnits(),function for_1 (unit, name) {return [make.element(Unit,{ns:{}, html:{"name":"name"}}, null),make.element(Unit,{ns:{}, html:{"name":"name"}}, null),make.element(Unit,{ns:{}, html:{"name":"name","u":"unit"}}, null)]; }.bind(this))];}.bind(this), function else_0(){ return [];}.bind(this)))); }


            `.trim());

        });
    });
});
