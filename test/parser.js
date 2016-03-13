import must from 'must';
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

            input = `import lib from 'path/to/libs';
            <tag/>`;

            parse();

            must(result).eql({
                "type": "root",
                "imports": [{
                    "type": "import",
                    "id": "lib",
                    "src": "'path/to/libs'",
                    "location": {
                        "line": 1,
                        "column": 0
                    }
                }],
                "tree": {
                    "type": "tag",
                    "name": "tag",
                    "attributes": [],
                    "children": [],
                    "location": {
                        "line": 2,
                        "column": 12
                    }
                }
            });
        });

        it('should parse a self closing tag', function() {

            input = '<simple/>';
            parse();

            must(result).eql({
                type: 'root',
                tree: {
                    type: 'tag',
                    name: 'simple',
                    children: [],
                    attributes: [],
                    location: {
                        line: 1,
                        column: 0,
                    }
                }
            });
        });

        it('should parse a self closing tag with attributes', function() {

            input = '<user name="xyaa aaz" position={{4}} name:space="test"/>';
            parse();

            must(result).eql({
                    'type': 'root',
                    'tree': {
                        'type': 'tag',
                        'name': 'user',
                        'attributes': [{
                            'type': 'attribute',
                            'namespace': 'name',
                            'name': 'space',
                            'value': 'test',
                            'location': {
                                'line': 1,
                                'column': 37
                            }
                        }, {
                            'type': 'attribute-expression',
                            'namespace': '',
                            'name': 'position',
                            'value': '4',
                            'location': {
                                'line': 1,
                                'column': 22
                            }
                        }, {
                            'type': 'attribute',
                            'namespace': '',
                            'name': 'name',
                            'value': 'xyaa aaz',
                            'location': {
                                'line': 1,
                                'column': 6
                            }
                        }],
                        'children': [],
                        'location': {
                            'line': 1,
                            'column': 0
                        }
                    }
                }

            );

            input = '<user name="xyaa aaz" id="24" />';
            parse();

            must(result).eql({
                type: 'root',
                tree: {
                    'type': 'tag',
                    'name': 'user',
                    'attributes': [{
                        'type': 'attribute',
                        'namespace': '',
                        'name': 'id',
                        'value': '24',
                        'location': {
                            'line': 1,
                            'column': 22
                        }
                    }, {
                        'type': 'attribute',
                        'namespace': '',
                        'name': 'name',
                        'value': 'xyaa aaz',
                        'location': {
                            'line': 1,
                            'column': 6
                        }
                    }],
                    'children': [],
                    'location': {
                        'line': 1,
                        'column': 0
                    }
                }
            });

            input = '<user name="xyaa aaz" id="24" align="left"/>';
            parse();

            must(result).eql({
                type: 'root',
                tree: {
                    'type': 'tag',
                    'name': 'user',
                    'attributes': [{
                        'type': 'attribute',
                        'namespace': '',
                        'name': 'align',
                        'value': 'left',
                        'location': {
                            'line': 1,
                            'column': 30
                        }
                    }, {
                        'type': 'attribute',
                        'namespace': '',
                        'name': 'id',
                        'value': '24',
                        'location': {
                            'line': 1,
                            'column': 22
                        }
                    }, {
                        'type': 'attribute',
                        'namespace': '',
                        'name': 'name',
                        'value': 'xyaa aaz',
                        'location': {
                            'line': 1,
                            'column': 6
                        }
                    }],
                    'children': [],
                    'location': {
                        'line': 1,
                        'column': 0
                    }
                }
            });
        });

        it('should parse a parent tag', function() {

            input = '<panel> </panel>';
            parse();

            must(result).eql({
                type: 'root',
                tree: {
                    type: 'tag',
                    name: 'panel',
                    attributes: [],
                    children: [{
                        location: {
                            column: 7,
                            line: 1
                        },
                        type: 'text',
                        value: ' '
                    }],
                    location: {
                        line: 1,
                        column: 0
                    }
                }
            });

        });

        it('should parse a parent tag with attributes', function() {

            input = '<panel type="default" size="40" align="left"> </panel>';
            parse();

            must(result).eql({
                type: 'root',
                tree: {
                    'type': 'tag',
                    'name': 'panel',
                    'attributes': [{
                        'type': 'attribute',
                        'namespace': '',
                        'name': 'align',
                        'value': 'left',
                        'location': {
                            'line': 1,
                            'column': 32
                        }
                    }, {
                        'type': 'attribute',
                        'namespace': '',
                        'name': 'size',
                        'value': '40',
                        'location': {
                            'line': 1,
                            'column': 22
                        }
                    }, {
                        'type': 'attribute',
                        'namespace': '',
                        'name': 'type',
                        'value': 'default',
                        'location': {
                            'line': 1,
                            'column': 7
                        }
                    }],
                    'children': [{
                        'type': 'text',
                        'value': ' ',
                        'location': {
                            'line': 1,
                            'column': 45
                        }
                    }],
                    'location': {
                        'line': 1,
                        'column': 0
                    }
                }
            });
        });

        it('should parse parent tags with mixed children', function() {

            input = '<panel>This is my offsprings.<a>Link</a>Hey now! <Input/></panel>';
            parse();

            must(result).eql({
                'type': 'root',
                'tree': {
                    'type': 'tag',
                    'name': 'panel',
                    'attributes': [],
                    'children': [{
                        'type': 'text',
                        'value': 'This is my offsprings.',
                        'location': {
                            'line': 1,
                            'column': 7
                        }
                    }, {
                        'type': 'tag',
                        'name': 'a',
                        'attributes': [],
                        'children': [{
                            'type': 'text',
                            'value': 'Link',
                            'location': {
                                'line': 1,
                                'column': 32
                            }
                        }],
                        'location': {
                            'line': 1,
                            'column': 29
                        }
                    }, {
                        'type': 'text',
                        'value': 'Hey now! ',
                        'location': {
                            'line': 1,
                            'column': 40
                        }
                    }, {
                        'type': 'tag',
                        'name': 'Input',
                        'attributes': [],
                        'children': [],
                        'location': {
                            'line': 1,
                            'column': 49
                        }
                    }],
                    'location': {
                        'line': 1,
                        'column': 0
                    }
                }
            });

        });

        it('should parse parent tags with tag children (L1)', function() {

            input = '<panel><a></a></panel>';
            parse();

            must(result).eql({
                type: 'root',
                tree: {
                    "type": "tag",
                    "name": "panel",
                    "attributes": [],
                    "children": [{
                        "type": "tag",
                        "name": "a",
                        "attributes": [],
                        "children": [],
                        "location": {
                            "line": 1,
                            "column": 7
                        }
                    }],
                    "location": {
                        "line": 1,
                        "column": 0
                    }
                }
            });

        });

        it('should parse parent tags with tag children (L2)', function() {

            input = '<panel><a href="link" onclick={{this.someting.invoke()}}>' +
                'Click Here</a><table/></panel>';
            parse();

            must(result).eql({
                    'type': 'root',
                    'tree': {
                        'type': 'tag',
                        'name': 'panel',
                        'attributes': [],
                        'children': [{
                            'type': 'tag',
                            'name': 'a',
                            'attributes': [{
                                'type': 'attribute-expression',
                                'namespace': '',
                                'name': 'onclick',
                                'value': 'this.someting.invoke()',
                                'location': {
                                    'line': 1,
                                    'column': 22
                                }
                            }, {
                                'type': 'attribute',
                                'namespace': '',
                                'name': 'href',
                                'value': 'link',
                                'location': {
                                    'line': 1,
                                    'column': 10
                                }
                            }],
                            'children': [{
                                'type': 'text',
                                'value': 'Click Here',
                                'location': {
                                    'line': 1,
                                    'column': 57
                                }
                            }],
                            'location': {
                                'line': 1,
                                'column': 7
                            }
                        }, {
                            'type': 'tag',
                            'name': 'table',
                            'attributes': [],
                            'children': [],
                            'location': {
                                'line': 1,
                                'column': 71
                            }
                        }],
                        'location': {
                            'line': 1,
                            'column': 0
                        }
                    }
                }

            );


        });

        it('should parse parent tags with tag children (L3)', function() {

            input = '<panel><a href="link">Click Here</a><table/><panel c="22"></panel></panel>';
            parse();

            must(result).eql({
                type: 'root',
                tree: {
                    "type": "tag",
                    "name": "panel",
                    "attributes": [],
                    "children": [{
                        "type": "tag",
                        "name": "a",
                        "attributes": [{
                            "type": "attribute",
                            'namespace': '',
                            "name": "href",
                            "value": "link",
                            "location": {
                                "line": 1,
                                "column": 10
                            }
                        }],
                        "children": [{
                            "type": "text",
                            "value": "Click Here",
                            "location": {
                                "line": 1,
                                "column": 22
                            }
                        }],
                        "location": {
                            "line": 1,
                            "column": 7
                        }
                    }, {
                        "type": "tag",
                        "name": "table",
                        "attributes": [],
                        "children": [],
                        "location": {
                            "line": 1,
                            "column": 36
                        }
                    }, {
                        "type": "tag",
                        "name": "panel",
                        "attributes": [{
                            "type": "attribute",
                            'namespace': '',
                            "name": "c",
                            "value": "22",
                            "location": {
                                "line": 1,
                                "column": 51
                            }
                        }],
                        "children": [],
                        "location": {
                            "line": 1,
                            "column": 44
                        }
                    }],
                    "location": {
                        "line": 1,
                        "column": 0
                    }
                }
            });

        });

        it('should do it all together now', function() {
            input = `<modal name="mymodal" x="1", y="2">
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

            must(result).eql({
                'type': 'root',
                'tree': {
                    'type': 'tag',
                    'name': 'modal',
                    'attributes': [{
                        'type': 'attribute',
                        'namespace': '',
                        'name': 'y',
                        'value': '2',
                        'location': {
                            'line': 1,
                            'column': 29
                        }
                    }, {
                        'type': 'attribute',
                        'namespace': '',
                        'name': 'x',
                        'value': '1',
                        'location': {
                            'line': 1,
                            'column': 22
                        }
                    }, {
                        'type': 'attribute',
                        'namespace': '',
                        'name': 'name',
                        'value': 'mymodal',
                        'location': {
                            'line': 1,
                            'column': 7
                        }
                    }],
                    'children': [{
                        'type': 'text',
                        'value': '\n                        ',
                        'location': {
                            'line': 1,
                            'column': 35
                        }
                    }, {
                        'type': 'tag',
                        'name': 'modal-header',
                        'attributes': [],
                        'children': [{
                            'type': 'text',
                            'value': 'My Modal',
                            'location': {
                                'line': 2,
                                'column': 38
                            }
                        }],
                        'location': {
                            'line': 2,
                            'column': 24
                        }
                    }, {
                        'type': 'text',
                        'value': '\n                        ',
                        'location': {
                            'line': 2,
                            'column': 61
                        }
                    }, {
                        'type': 'tag',
                        'name': 'modal-body',
                        'attributes': [],
                        'children': [{
                            'type': 'text',
                            'value': '\n                         Creativity is inhibited by greed and corruption.\n                         ',
                            'location': {
                                'line': 3,
                                'column': 36
                            }
                        }, {
                            'type': 'tag',
                            'name': 'vote-button',
                            'attributes': [],
                            'children': [],
                            'location': {
                                'line': 5,
                                'column': 25
                            }
                        }, {
                            'type': 'text',
                            'value': '\n                         ',
                            'location': {
                                'line': 5,
                                'column': 39
                            }
                        }, {
                            'type': 'tag',
                            'name': 'vote-count',
                            'attributes': [{
                                'type': 'attribute',
                                'namespace': '',
                                'name': 'source',
                                'value': '@this',
                                'location': {
                                    'line': 6,
                                    'column': 37
                                }
                            }],
                            'children': [],
                            'location': {
                                'line': 6,
                                'column': 25
                            }
                        }, {
                            'type': 'text',
                            'value': ' Votes\n                         ',
                            'location': {
                                'line': 6,
                                'column': 53
                            }
                        }, {
                            'type': 'tag',
                            'name': 'textarea',
                            'attributes': [{
                                'type': 'attribute-expression',
                                'namespace': '',
                                'name': 'onchange',
                                'value': 'this.setText',
                                'location': {
                                    'line': 7,
                                    'column': 45
                                }
                            }, {
                                'type': 'attribute',
                                'namespace': '',
                                'name': 'size',
                                'value': '32',
                                'location': {
                                    'line': 7,
                                    'column': 35
                                }
                            }],
                            'children': [{
                                'type': 'text',
                                'value': '\n                           Various text\n                         ',
                                'location': {
                                    'line': 7,
                                    'column': 71
                                }
                            }],
                            'location': {
                                'line': 7,
                                'column': 25
                            }
                        }, {
                            'type': 'text',
                            'value': '\n                        ',
                            'location': {
                                'line': 9,
                                'column': 36
                            }
                        }],
                        'location': {
                            'line': 3,
                            'column': 24
                        }
                    }, {
                        'type': 'text',
                        'value': '\n                    ',
                        'location': {
                            'line': 10,
                            'column': 37
                        }
                    }],
                    'location': {
                        'line': 1,
                        'column': 0
                    }
                }
            });

        });

        it('should parse for expressions', function() {

            input = '<root>' +
                '{% for item in {{list}} %}' +
                '<stem>A Stem</stem>' +
                '{% endfor %}' +
                '</root>';
            parse();

            must(result).eql({
                "type": "root",
                "tree": {
                    "type": "tag",
                    "name": "root",
                    "attributes": [],
                    "children": [{
                        "type": "for-loop",
                        "variable": "item",
                        "expression": "list"
                    }],
                    "location": {
                        "line": 1,
                        "column": 0
                    }
                }
            });

    input = '<root>' +
                '{% for item in {{list}} %}' +
                '{% for inner in {{list.inner}} %}' +
                '<stem>${inner}</stem>'+
                '{% endfor %}' +
                '{% endfor %}' +
                '</root>';
            parse();

            console.log(result);



        });


    });

});
