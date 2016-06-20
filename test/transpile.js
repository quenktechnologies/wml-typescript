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
export default function (make) { return make.node('tag',{ns:{}, html:{}}, []); }

`.trim());

        });

        it('should transpile nested tags', function() {

            input = '<panel type="default" size="40" css:align="left"><a>Click</a>Here<Input/></panel>';

            must(t.transpile(input)).eql(`

export default function (make) { return make.node('panel',{ns:{css:{'align':'left'}}, html:{'type':'default','size':'40'}}, [make.node('a',{ns:{}, html:{}}, [make.text(\`Click\`)]),make.text(\`Here\`),make.element(Input,{ns:{}, html:{}}, [])]); }              `.trim());


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
                'Various text <span>{{text | foo}}</span>' +
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

export default function (make) { return make.node('modal',{ns:{}, html:{'name':'mymodal','x':'1','y':'2'}}, [make.node('modal-header',{ns:{}, html:{}}, [make.text(\`My Modal\`)]),make.node('modal-body',{ns:{}, html:{}}, [make.text(\`Creativxity is inhibxited by greed and corruption.\`),make.node('vote-button',{ns:{}, html:{}}, []),make.node('vote-count',{ns:{}, html:{'source':''}}, []),make.text(\` Votes\`),make.node('textarea',{ns:{}, html:{'size':32,'onchange':this.setText}}, [make.text(\`Various text \`),make.node('span',{ns:{}, html:{}}, [foo.apply(this, [text])])]),make.ifcondition(this.waiting(), function if_0(){ return [make.node('br',{ns:{}, html:{}}, []),make.node('br',{ns:{}, html:{}}, []),make.forloop(this.getUnits(),function for_1 (unit, name) {return [make.element(Unit,{ns:{}, html:{'name':name}}, []),make.element(Unit,{ns:{}, html:{'name':name}}, []),make.element(Unit,{ns:{}, html:{'name':name,'u':unit}}, [])]; }.bind(this))];}.bind(this), function else_0(){ return [];}.bind(this))])]); }
               
                `.trim());

        });

        it('should transpile includes', function() {

            input = '<tr>{% for x,i in y %}{% include this.getFrags() [ctx1, ctx2] %}' +
                '{% include val %}{% endfor %}</tr>';

             must(t.transpile(input)).eql(`
               
              export default function (make) { return make.node('tr',{ns:{}, html:{}}, [make.forloop(y,function for_2 (x, i) {return [this.getFrags().apply(this, [make].concat([ ctx1,ctx2 ])),val.apply(this, [make].concat())]; }.bind(this))]); } 
               
               
               `.trim());


        });

    });
});
