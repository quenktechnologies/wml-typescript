jest.autoMockOff();

import WMLTree from '../WMLTree';

var view;
var node;

beforeEach(function() {
    view = null;
});

describe('WMLTree', function() {

    describe('render', function() {

        it('should render a pure html view', function() {

            node = document.createElement('div');

            view = ['div', {
                    class: 'panel panel-default'
                },
                [
                    ['div', {
                            class: 'panel-heading'
                        },
                        ['Heading']
                    ],
                    ['div', {
                            class: 'panel-body'
                        },
                        ['Body']
                    ]
                ]
            ];

            (new WMLTree(view)).render(node);

            expect(node.innerHTML).toBe('<div class="panel panel-default">'+
                '<div class="panel-heading">Heading</div>'+
                '<div class="panel-body">Body</div></div>');

        });

    });

});
