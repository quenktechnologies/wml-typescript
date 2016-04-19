export default {

    'should parse imports': {

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
                "line": 1,
                "column": 33
            }
        }


    },
    'should parse a self closing tag': {
        "type": "root",
        "tree": {
            "type": "tag",
            "name": "simple",
            "attributes": [],
            "children": [],
            "location": {
                "line": 1,
                "column": 0
            }
        }
    },
    'should parse a self closing tag with attributes': [{
        "type": "root",
        "tree": {
            "type": "tag",
            "name": "user",
            "attributes": [{
                "type": "attribute",
                "namespace": "name",
                "name": "space",
                "value": "test",
                "location": {
                    "line": 1,
                    "column": 44
                }
            }, {
                "type": "attribute-expression",
                "namespace": "",
                "name": "position",
                "filters": [{

                    "type": "filter",
                    "arguments": [0],
                    "name": "div"

                }],
                "value": "4",
                "location": {
                    "line": 1,
                    "column": 22
                }
            }, {
                "type": "attribute",
                "namespace": "",
                "name": "name",
                "value": "xyaa aaz",
                "location": {
                    "line": 1,
                    "column": 6
                }
            }],
            "children": [],
            "location": {
                "line": 1,
                "column": 0
            }
        }
    }, {
        "type": "root",
        "tree": {
            "type": "tag",
            "name": "user",
            "attributes": [{
                "type": "attribute",
                "namespace": "",
                "name": "id",
                "value": "24",
                "location": {
                    "line": 1,
                    "column": 22
                }
            }, {
                "type": "attribute",
                "namespace": "",
                "name": "name",
                "value": "xyaa aaz",
                "location": {
                    "line": 1,
                    "column": 6
                }
            }],
            "children": [],
            "location": {
                "line": 1,
                "column": 0
            }
        }
    }, {
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
    }],
    'should parse a parent tag': {
        type: 'root',
        tree: {
            type: 'tag',
            name: 'panel',
            attributes: [],
            children: [],
            location: {
                line: 1,
                column: 0
            }
        }
    },
    'should parse a parent tag with attributes': {
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
            'children': [],
            'location': {
                'line': 1,
                'column': 0
            }
        }
    },
    'should parse parent tags with mixed children': {
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
    },
    'should parse parent tags with tag children (L1)': {
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
    },
    'should parse parent tags with tag children (L2)': {
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
                    'filters': [],
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
    },
    'should parse parent tags with tag children (L3)': {
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
    },
    'should do it all together now': {
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
                    'column': 28
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
                }],
                'location': {
                    'line': 3,
                    'column': 24
                }
            }],
            'location': {
                'line': 1,
                'column': 0
            }
        }
    },
    'should parse for expressions': {
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
    },
    'should parse a template string': {
        'type': 'root',
        'tree': {
            'type': 'tag',
            'name': 'top',
            'attributes': [],
            'children': [{
                'type': 'tag',
                'name': 'tagness',
                'attributes': [{
                    'type': 'attribute-expression',
                    'namespace': '',
                    'name': 'id',
                    'value': '22',
                    'location': {
                        'line': 1,
                        'column': 14
                    }
                }],
                'children': [{
                    'type': 'text',
                    'value': 'Template ${strings} here',
                    'location': {
                        'line': 1,
                        'column': 24
                    }
                }],
                'location': {
                    'line': 1,
                    'column': 5
                }
            }],
            'location': {
                'line': 1,
                'column': 0
            }
        }
    }

};
