import must from 'must';
import {
    parser
}
from '../build/parser';

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

        it('should parse a self closing tag', function() {

            input = '<simple/>';
            parse();

            must(result).eql({
                type: 'tag',
                name: 'simple',
                children: [],
                attributes: [],
                location: {
                    line: 1,
                    column: 0,
                }
            });
        });

        it('should parse a self closing tag with attributes', function() {

            input = '<user name="xyaa aaz"/>';
            parse();

            must(result).eql({
                type: 'tag',
                name: 'user',
                children: [],
                location: {
                    line: 1,
                    column: 0,
                },
                attributes: [{
                    type: 'attribute',
                    name: 'name',
                    value: 'xyaa aaz',
                    location: {
                        line: 1,
                        column: 6
                    }
                }]
            });

            input = '<user name="xyaa aaz" id="24" />';
            parse();

            must(result).eql({
                    'type': 'tag',
                    'name': 'user',
                    'attributes': [{
                        'type': 'attribute',
                        'name': 'id',
                        'value': '24',
                        'location': {
                            'line': 1,
                            'column': 22
                        }
                    }, {
                        'type': 'attribute',
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


            );

            input = '<user name="xyaa aaz" id="24" align="left"/>';
            parse();

            must(result).eql(

                {
                    'type': 'tag',
                    'name': 'user',
                    'attributes': [{
                        'type': 'attribute',
                        'name': 'align',
                        'value': 'left',
                        'location': {
                            'line': 1,
                            'column': 30
                        }
                    }, {
                        'type': 'attribute',
                        'name': 'id',
                        'value': '24',
                        'location': {
                            'line': 1,
                            'column': 22
                        }
                    }, {
                        'type': 'attribute',
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

            );

        });

        it('should parse a parent tag', function() {

            input = '<panel> </panel>';
            parse();

            must(result).eql({
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
            });

        });

        it('should parse a parent tag with attributes', function() {

            input = '<panel type="default" size="40" align="left"> </panel>';
            parse();

            must(result).eql(

                {
                    'type': 'tag',
                    'name': 'panel',
                    'attributes': [{
                        'type': 'attribute',
                        'name': 'align',
                        'value': 'left',
                        'location': {
                            'line': 1,
                            'column': 32
                        }
                    }, {
                        'type': 'attribute',
                        'name': 'size',
                        'value': '40',
                        'location': {
                            'line': 1,
                            'column': 22
                        }
                    }, {
                        'type': 'attribute',
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




            );
        });

        it('should parse parent tags with children', function() {

            input = '<panel>This is my offsprings.</panel>';
            parse();

            must(result).eql({

                type: 'tag',
                name: 'panel',
                attributes: [],
                children: [{
                        type: 'text',
                        location: {
                            column: 7,
                            line: 1
                        },
                        value: 'This is my offsprings.'

                    }

                ],
                location: {
                    line: 1,
                    column: 0
                }

            });

        });

        it('should parse parent tags with tag children (L1)', function() {

            input = '<panel><a></a></panel>';
            parse();

            must(result).eql({
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


            );


        });

        it('should parse parent tags with tag children (L2)', function() {

            input = '<panel><a href="link">Click Here</a><table/></panel>';
            parse();

            must(result).eql(

                {
                    "type": "tag",
                    "name": "panel",
                    "attributes": [],
                    "children": [{
                        "type": "tag",
                        "name": "a",
                        "attributes": [{
                            "type": "attribute",
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
                    }],
                    "location": {
                        "line": 1,
                        "column": 0
                    }
                });


        });

        it('should parse parent tags with tag children (L3)', function() {

            input = '<panel><a href="link">Click Here</a><table/><panel c="22"></panel></panel>';
            parse();

            must(result).eql({
                "type": "tag",
                "name": "panel",
                "attributes": [],
                "children": [{
                    "type": "tag",
                    "name": "a",
                    "attributes": [{
                        "type": "attribute",
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
            });


        });

        it('should do it all together now', function() {
            input = `<modal name="mymodal" x="1", y="2">
                        <modal-header>My Modal</modal-header>
                        <modal-body>
                         Creativity is inhibited by greed and corruption.
                         <vote-button/>
                         <vote-count source="@this"/> Votes
                         <textarea size="32" onchange="@this.setText">
                           Various text
                         </textarea>
                        </modal-body>
                    </modal>`;

            parse();
            console.log(JSON.stringify(result));

        });


    });

});
