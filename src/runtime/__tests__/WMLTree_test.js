jest.autoMockOff();

import WMLTree from '../WMLTree';

var view;
var node;

function make() {

    return {

        onDOM(attrs, children) {

            var div = document.createElement('div');

            div.appendChild(document.createTextNode('Header'));
            Object.keys(attrs).forEach(k =>
                div.setAttribute(k, attrs[k]));

            children.forEach(c => div.appendChild(c.toDOMNode()));

            return div;

        }

    };

}

make.create = function(attrs) {
    return make(attrs.type);
}

beforeEach(function() {
    view = null;
});

describe('WMLTree', function() {

    describe('render', function() {

        it('should render a pure html view', function() {

            node = document.createElement('div');

            var heading = ['div', {
                    class: 'panel-heading'
                },
                ['Heading']
            ];

            var body = ['div', {
                    class: 'panel-body'
                },
                [
                    ['span', {},
                        ['Body']
                    ], 'After'
                ]
            ];

            view = () => ['div', {
                    class: 'panel panel-default'
                },
                [heading, body]
            ];

            (new WMLTree(view)).render(node);

            expect(node.innerHTML).toBe('<div class="panel panel-default">' +
                '<div class="panel-heading">Heading</div>' +
                '<div class="panel-body"><span>Body</span>After</div></div>');

        });

        it('should render views from widgets', function() {

            var heading = [make, {
                    type: 'div',
                    class: 'panel-heading'
                },
                ['Heading']
            ];

            var body = [make, {
                    type: 'div',
                    class: 'panel-body'
                },
                ['Body']
            ];

            view = () => ['div', {
                    class: 'panel panel-default'
                },
                [heading, body]
            ];

            node = document.createElement('div');
            (new WMLTree(view)).render(node);

            expect(node.innerHTML).toBe('<div class="panel panel-default">' +
                '<div type="div" class="panel-heading">HeaderHeading</div>' +
                '<div type="div" class="panel-body">HeaderBody</div></div>');

        });

    });

});
