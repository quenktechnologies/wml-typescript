import Transpiler from '../Transpiler';

var t;
var input;

beforeEach(function() {

    t = new Transpiler();

});

describe('Transpiler', function() {

    describe('transpile()', function() {

        it('should transpile a single tag', function() {

            input = `import lib from 'path/to/libs';<tag/>`;

            expect(t.transpile(input)).
            toBe(
                `import lib from 'path/to/libs';export default function(){return ['tag',{},[]];}`);

        });

        it('should transpile nested tags', function() {

            input = '<panel type="default" size="40" css:align="left"><a>Click</a>Here<Input/></panel>';
            expect(t.transpile(input)).
            toBe(
                "export default function(){return ['panel',{'size':'40'," +
                "'type':'default','css': {'align':'left'}},[['a',{},[`Click`]]," +
                "`Here`,[Input,{},[]]]];}"
            );
        });

        it('should transpile all together now', function() {

            var text = 'span-text';

            input = '<modal name="mymodal" x="1", y="2">' +
                '<modal-header>My Modal</modal-header>' +
                '<modal-body>' +
                'Creativity is inhibited by greed and corruption.' +
                '<vote-button/>' +
                '<vote-count source="@this"/> Votes' +
                '<textarea size="32" onchange={this.setText}>' +
                'Various text <span>${text}</span>' +
                '</textarea>' +
                '</modal-body>' +
                '</modal>';

            expect(t.transpile(input)).toBe(

                "export default function(){return ['modal',{'y':'2','x':'1','name':'mymodal'}" +
                ",[['modal-header',{},[`My Modal`]],['modal-body',{}," +
                "[`Creativity is inhibited by greed and corruption.`," +
                "['vote-button',{},[]],['vote-count',{'source':'@this'},[]],`Votes`," +
                "['textarea',{'onchange':this.setText,'size':'32'}," +
                "[\`Various text\`,['span',{},[\`${text}`]]]]]]]];}");
        });
    });
});
