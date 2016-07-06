export default {
    'should parse preamble': [{
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 38
            },
            'type': 'template',
            'imports': [{
                'type': 'import-statement',
                'member': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 7,
                        'last_column': 10
                    },
                    'type': 'default-member',
                    'member': 'lib'
                },
                'module': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 16,
                        'last_column': 30
                    },
                    'value': '"path/to/libs"',
                    'type': 'string-literal'
                },
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 31
                }
            }],
            'parameters': [],
            'root': {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 32,
                    'last_column': 38
                },
                'name': 'tag',
                'type': 'tag',
                'attributes': [],
                'children': []
            }
        }, {
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 43
            },
            'type': 'template',
            'imports': [{
                'type': 'import-statement',
                'member': {
                    'member': '* as lib',
                    'type': 'composite-member',
                    'module': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 7,
                        'last_column': 15
                    }
                },
                'module': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 21,
                        'last_column': 35
                    },
                    'value': '"path/to/libs"',
                    'type': 'string-literal'
                },
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 36
                }
            }],
            'parameters': [],
            'root': {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 37,
                    'last_column': 43
                },
                'name': 'tag',
                'type': 'tag',
                'attributes': [],
                'children': []
            }
        }



    ],
    'should parse a self closing tag': {
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 9
        },
        'type': 'template',
        'imports': [],
        'parameters': [],
        'root': {
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 9
            },
            'name': 'simple',
            'type': 'tag',
            'attributes': [],
            'children': []
        }
    },
    'should parse a self closing tag wxith attributes': [{
            'type': 'template',
            'imports': [],
            'parameters': [],
            'root': {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 59
                },
                'type': 'tag',
                'name': 'user',
                'attributes': [{
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 6,
                        'last_column': 21
                    },
                    'type': 'attribute',
                    'name': 'name',
                    'namespace': null,
                    'value': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 11,
                            'last_column': 21
                        },
                        'type': 'string-literal',
                        'value': '"xyaa aaz"'
                    }
                }, {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 22,
                        'last_column': 42
                    },
                    'type': 'attribute',
                    'name': 'position',
                    'namespace': null,
                    'value': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 31,
                            'last_column': 42
                        },
                        'type': 'interpolation',
                        'expression': {
                            'location': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 33,
                                'last_column': 34
                            },
                            'type': 'number-literal',
                            'value': '4'
                        },
                        'filters': [{
                            'location': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 34,
                                'last_column': 40
                            },
                            'type': 'filter',
                            'name': 'x',
                            'arguments': [{
                                'location': {
                                    'first_line': 1,
                                    'last_line': 1,
                                    'first_column': 37,
                                    'last_column': 39
                                },
                                'type': 'number-literal',
                                'value': '20'
                            }]
                        }]
                    }
                }, {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 43,
                        'last_column': 57
                    },
                    'type': 'attribute',
                    'name': 'val',
                    'namespace': 'wml',
                    'value': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 51,
                            'last_column': 57
                        },
                        'type': 'string-literal',
                        'value': '"test"'
                    }
                }],
                'children': []
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 59
            }
        }, {
            'type': 'template',
            'imports': [],
            'parameters': [],
            'root': {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 22
                },
                'type': 'tag',
                'name': 'user',
                'attributes': [{
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 6,
                        'last_column': 13
                    },
                    'type': 'attribute',
                    'name': 'enabled',
                    'namespace': null,
                    'value': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 6,
                            'last_column': 13
                        },
                        'type': 'boolean-literal',
                        'value': true
                    }
                }, {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 14,
                        'last_column': 19
                    },
                    'type': 'attribute',
                    'name': 'id',
                    'namespace': null,
                    'value': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 17,
                            'last_column': 19
                        },
                        'type': 'number-literal',
                        'value': '24'
                    }
                }],
                'children': []
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 22
            }
        },

        {
            'type': 'template',
            'imports': [],
            'parameters': [],
            'root': {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 44
                },
                'type': 'tag',
                'name': 'user',
                'attributes': [{
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 6,
                        'last_column': 21
                    },
                    'type': 'attribute',
                    'name': 'name',
                    'namespace': null,
                    'value': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 11,
                            'last_column': 21
                        },
                        'type': 'string-literal',
                        'value': '"xyaa aaz"'
                    }
                }, {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 22,
                        'last_column': 29
                    },
                    'type': 'attribute',
                    'name': 'id',
                    'namespace': null,
                    'value': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 25,
                            'last_column': 29
                        },
                        'type': 'string-literal',
                        'value': '"24"'
                    }
                }, {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 30,
                        'last_column': 42
                    },
                    'type': 'attribute',
                    'name': 'align',
                    'namespace': null,
                    'value': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 36,
                            'last_column': 42
                        },
                        'type': 'string-literal',
                        'value': '"left"'
                    }
                }],
                'children': []
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 44
            }
        }



    ],

    'should parse a parent tag': {
        'type': 'template',
        'imports': [],
        'parameters': [],
        'root': {
            'location': {
                'first_line': 1,
                'last_line': 10,
                'first_column': 0,
                'last_column': 10
            },
            'type': 'tag',
            'name': 'panel',
            'attributes': [],
            'children': []
        },
        'location': {
            'first_line': 1,
            'last_line': 10,
            'first_column': 0,
            'last_column': 10
        }
    },

    'should parse a parent tag with attributes': {

        'type': 'template',
        'imports': [],
        'parameters': [],
        'root': {
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 54
            },
            'type': 'tag',
            'name': 'panel',
            'attributes': [{
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 7,
                    'last_column': 21
                },
                'type': 'attribute',
                'name': 'type',
                'namespace': null,
                'value': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 12,
                        'last_column': 21
                    },
                    'type': 'string-literal',
                    'value': '"default"'
                }
            }, {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 22,
                    'last_column': 31
                },
                'type': 'attribute',
                'name': 'size',
                'namespace': null,
                'value': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 27,
                        'last_column': 31
                    },
                    'type': 'string-literal',
                    'value': '"40"'
                }
            }, {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 32,
                    'last_column': 44
                },
                'type': 'attribute',
                'name': 'align',
                'namespace': null,
                'value': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 38,
                        'last_column': 44
                    },
                    'type': 'string-literal',
                    'value': '"left"'
                }
            }],
            'children': []
        },
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 54
        }
    },
    'should parse parent tags with mixed children': {
        'type': 'template',
        'imports': [],
        'parameters': [],
        'root': {
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 66
            },
            'type': 'tag',
            'name': 'panel',
            'attributes': [],
            'children': [{
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 7,
                    'last_column': 30
                },
                'type': 'characters',
                'value': ' This is my offsprings.'
            }, {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 30,
                    'last_column': 41
                },
                'type': 'tag',
                'name': 'a',
                'attributes': [],
                'children': [{
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 33,
                        'last_column': 37
                    },
                    'type': 'characters',
                    'value': 'Link'
                }]
            }, {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 41,
                    'last_column': 50
                },
                'type': 'characters',
                'value': 'Hey now! '
            }, {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 50,
                    'last_column': 58
                },
                'type': 'tag',
                'name': 'Input',
                'attributes': [],
                'children': []
            }]
        },
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 66
        }
    },

    'should parse parent tags with tag children (L1)': {
        'type': 'template',
        'imports': [],
        'parameters': [],
        'root': {
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 22
            },
            'type': 'tag',
            'name': 'panel',
            'attributes': [],
            'children': [{
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 7,
                    'last_column': 14
                },
                'type': 'tag',
                'name': 'a',
                'attributes': [],
                'children': []
            }]
        },
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 22
        }
    },

    'should parse parent tags wxith tag children (L2)': {
        'type': 'template',
        'imports': [],
        'parameters': [],
        'root': {
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 87
            },
            'type': 'tag',
            'name': 'panel',
            'attributes': [],
            'children': [{
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 7,
                    'last_column': 71
                },
                'type': 'tag',
                'name': 'a',
                'attributes': [{
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 10,
                        'last_column': 21
                    },
                    'type': 'attribute',
                    'name': 'href',
                    'namespace': null,
                    'value': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 15,
                            'last_column': 21
                        },
                        'type': 'string-literal',
                        'value': '"link"'
                    }
                }, {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 22,
                        'last_column': 56
                    },
                    'type': 'attribute',
                    'name': 'onclick',
                    'namespace': null,
                    'value': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 30,
                            'last_column': 56
                        },
                        'type': 'interpolation',
                        'expression': {
                            'location': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 32,
                                'last_column': 54
                            },
                            'type': 'method-expression',
                            'path': 'this.someting.invoke',
                            'arguments': []
                        },
                        'filters': []
                    }
                }],
                'children': [{
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 57,
                        'last_column': 67
                    },
                    'type': 'characters',
                    'value': 'Click Here'
                }]
            }, {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 71,
                    'last_column': 79
                },
                'type': 'tag',
                'name': 'table',
                'attributes': [],
                'children': []
            }]
        },
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 87
        }
    },

    'should parse parent tags wxith tag children (L3)': {
        'type': 'template',
        'imports': [],
        'parameters': [],
        'root': {
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 74
            },
            'type': 'tag',
            'name': 'panel',
            'attributes': [],
            'children': [{
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 7,
                    'last_column': 36
                },
                'type': 'tag',
                'name': 'a',
                'attributes': [{
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 10,
                        'last_column': 21
                    },
                    'type': 'attribute',
                    'name': 'href',
                    'namespace': null,
                    'value': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 15,
                            'last_column': 21
                        },
                        'type': 'string-literal',
                        'value': '"link"'
                    }
                }],
                'children': [{
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 22,
                        'last_column': 32
                    },
                    'type': 'characters',
                    'value': 'Click Here'
                }]
            }, {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 36,
                    'last_column': 44
                },
                'type': 'tag',
                'name': 'table',
                'attributes': [],
                'children': []
            }, {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 44,
                    'last_column': 66
                },
                'type': 'tag',
                'name': 'panel',
                'attributes': [{
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 51,
                        'last_column': 57
                    },
                    'type': 'attribute',
                    'name': 'c',
                    'namespace': null,
                    'value': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 53,
                            'last_column': 57
                        },
                        'type': 'string-literal',
                        'value': '"22"'
                    }
                }],
                'children': []
            }]
        },
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 74
        }
    },

    'should do it all together now': {
        'type': 'template',
        'imports': [],
        'parameters': [],
        'root': {
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 292
            },
            'type': 'tag',
            'name': 'modal',
            'attributes': [{
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 7,
                    'last_column': 21
                },
                'type': 'attribute',
                'name': 'name',
                'namespace': null,
                'value': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 12,
                        'last_column': 21
                    },
                    'type': 'string-literal',
                    'value': '"mymodal"'
                }
            }, {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 22,
                    'last_column': 27
                },
                'type': 'attribute',
                'name': 'x',
                'namespace': null,
                'value': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 24,
                        'last_column': 27
                    },
                    'type': 'string-literal',
                    'value': '"1"'
                }
            }, {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 28,
                    'last_column': 33
                },
                'type': 'attribute',
                'name': 'y',
                'namespace': null,
                'value': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 30,
                        'last_column': 33
                    },
                    'type': 'string-literal',
                    'value': '"2"'
                }
            }],
            'children': [{
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 34,
                    'last_column': 71
                },
                'type': 'tag',
                'name': 'modal-header',
                'attributes': [],
                'children': [{
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 48,
                        'last_column': 56
                    },
                    'type': 'characters',
                    'value': 'My Modal'
                }]
            }, {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 71,
                    'last_column': 284
                },
                'type': 'tag',
                'name': 'modal-body',
                'attributes': [],
                'children': [{
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 83,
                        'last_column': 133
                    },
                    'type': 'characters',
                    'value': 'Creativxity is inhibxited by greed and corruption.'
                }, {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 133,
                        'last_column': 147
                    },
                    'type': 'tag',
                    'name': 'vote-button',
                    'attributes': [],
                    'children': []
                }, {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 147,
                        'last_column': 176
                    },
                    'type': 'tag',
                    'name': 'vote-count',
                    'attributes': [{
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 159,
                            'last_column': 174
                        },
                        'type': 'attribute',
                        'name': 'source',
                        'namespace': null,
                        'value': {
                            'location': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 166,
                                'last_column': 174
                            },
                            'type': 'interpolation',
                            "expression": {
                                "location": {
                                    "first_column": 168,
                                    "first_line": 1,
                                    "last_column": 172,
                                    "last_line": 1,
                                },
                                "name": "this",
                                "type": "variable-expression"
                            },


                            'filters': []
                        }
                    }],
                    'children': []
                }, {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 176,
                        'last_column': 182
                    },
                    'type': 'characters',
                    'value': ' Votes'
                }, {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 182,
                        'last_column': 271
                    },
                    'type': 'tag',
                    'name': 'textarea',
                    'attributes': [{
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 192,
                            'last_column': 203
                        },
                        'type': 'attribute',
                        'name': 'id',
                        'namespace': 'wml',
                        'value': {
                            'location': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 199,
                                'last_column': 203
                            },
                            'type': 'string-literal',
                            'value': '"ta"'
                        }
                    }, {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 204,
                            'last_column': 212
                        },
                        'type': 'attribute',
                        'name': 'disabled',
                        'namespace': null,
                        'value': {
                            'location': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 204,
                                'last_column': 212
                            },
                            'type': 'boolean-literal',
                            'value': true
                        }
                    }, {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 213,
                            'last_column': 220
                        },
                        'type': 'attribute',
                        'name': 'size',
                        'namespace': null,
                        'value': {
                            'location': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 218,
                                'last_column': 220
                            },
                            'type': 'number-literal',
                            'value': '32'
                        }
                    }, {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 221,
                            'last_column': 246
                        },
                        'type': 'attribute',
                        'name': 'onchange',
                        'namespace': null,
                        'value': {
                            'location': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 230,
                                'last_column': 246
                            },
                            'type': 'interpolation',
                            'expression': {
                                'location': {
                                    'first_line': 1,
                                    'last_line': 1,
                                    'first_column': 232,
                                    'last_column': 244
                                },
                                'type': 'property-expression',
                                'path': 'this.setText'
                            },
                            'filters': []
                        }
                    }],
                    'children': [{
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 247,
                            'last_column': 260
                        },
                        'type': 'characters',
                        'value': ' Various text'
                    }]
                }]
            }]
        },
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 292
        }
    },

    'should parse for expressions': {

        'type': 'template',
        'imports': [],
        'parameters': [],
        'root': {
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 66
            },
            'type': 'tag',
            'name': 'root',
            'attributes': [],
            'children': [{
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 6,
                    'last_column': 59
                },
                'type': 'for-statement',
                'variable': 'item',
                'indexName': 'index',

                "target": {
                    "location": {
                        "first_column": 21,
                        "first_line": 1,
                        "last_column": 25,
                        "last_line": 1,
                    },
                    "name": "list",
                    "type": "variable-expression"
                },
                'children': [{
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 28,
                        'last_column': 47
                    },
                    'type': 'tag',
                    'name': 'stem',
                    'attributes': [],
                    'children': [{
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 34,
                            'last_column': 40
                        },
                        'type': 'characters',
                        'value': 'A Stem'
                    }]
                }]
            }]
        },
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 66
        }


    },
    'should parse bind expressions': {

        'type': 'template',
        'imports': [],
        'parameters': [],
        'root': {
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 33
            },
            'type': 'tag',
            'name': 'div',
            'attributes': [{
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 5,
                    'last_column': 31
                },
                'type': 'attribute',
                'name': 'onfocus',
                'namespace': null,
                'value': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 13,
                        'last_column': 31
                    },
                    'type': 'interpolation',
                    'expression': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 15,
                            'last_column': 29
                        },
                        'type': 'bind-expression',
                        'path': 'this',
                        'target': 'doAction',
                        'arguments': []
                    },
                    'filters': []
                }
            }],
            'children': []
        },
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 33
        }

    },
    'should parse ternary expressions':

    {
        "location": {
            "first_line": 1,
            "last_line": 1,
            "first_column": 0,
            "last_column": 56
        },
        "type": "template",
        "imports": [],
        "parameters": [],
        "root": {
            "location": {
                "first_line": 1,
                "last_line": 1,
                "first_column": 0,
                "last_column": 56
            },
            "type": "tag",
            "name": "Html.div",
            "attributes": [{
                "location": {
                    "first_line": 1,
                    "last_line": 1,
                    "first_column": 10,
                    "last_column": 24
                },
                "type": "attribute",
                "name": "id",
                "namespace": null,
                "value": {
                    "location": {
                        "first_line": 1,
                        "last_line": 1,
                        "first_column": 13,
                        "last_column": 24
                    },
                    "type": "interpolation",
                    "expression": {
                        "location": {
                            "first_line": 1,
                            "last_line": 1,
                            "first_column": 15,
                            "last_column": 22
                        },
                        "type": "property-expression",
                        "path": "this.id"
                    },
                    "filters": []
                }
            }],
            "children": [{
                "location": {
                    "first_line": 1,
                    "last_line": 1,
                    "first_column": 25,
                    "last_column": 50
                },
                "type": "interpolation",
                "expression": {
                    "location": {
                        "first_line": 1,
                        "last_line": 1,
                        "first_column": 27,
                        "last_column": 47
                    },
                    "type": "ternary-expression",
                    "logic": {
                        "location": {
                            "first_line": 1,
                            "last_line": 1,
                            "first_column": 27,
                            "last_column": 39
                        },
                        "type": "method-expression",
                        "path": "this.check",
                        "arguments": []
                    },
                    "iftrue": {
                        "location": {
                            "first_line": 1,
                            "last_line": 1,
                            "first_column": 42,
                            "last_column": 43
                        },
                        "type": "variable-expression",
                        "name": "a"
                    },
                    "iffalse": {
                        "location": {
                            "first_line": 1,
                            "last_line": 1,
                            "first_column": 46,
                            "last_column": 47
                        },
                        "type": "variable-expression",
                        "name": "b"
                    }
                },
                "filters": []
            }]
        }
    },



    'should parse function literals': {
        'type': 'template',
        'imports': [],
        'parameters': [],
        'root': {
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 39
            },
            'type': 'tag',
            'name': 'button',
            'attributes': [{
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 8,
                    'last_column': 37
                },
                'type': 'attribute',
                'name': 'onclick',
                'namespace': null,
                'value': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 16,
                        'last_column': 37
                    },
                    'type': 'interpolation',
                    'expression': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 18,
                            'last_column': 35
                        },
                        'type': 'function-literal',
                        'parameters': [
                            'e'
                        ],
                        'body': {
                            'location': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 23,
                                'last_column': 35
                            },
                            'type': 'method-expression',
                            'path': 'this.call',
                            'arguments': [{
                                'location': {
                                    'first_line': 1,
                                    'last_line': 1,
                                    'first_column': 33,
                                    'last_column': 34
                                },
                                'type': 'variable-expression',
                                'name': 'e'
                            }]
                        }
                    },
                    'filters': []
                }
            }],
            'children': []
        },
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 39
        }

    },
    'should parse includes': {
        "location": {
            "first_line": 1,
            "last_line": 1,
            "first_column": 0,
            "last_column": 98
        },
        "type": "template",
        "imports": [],
        "parameters": [],
        "root": {
            "location": {
                "first_line": 1,
                "last_line": 1,
                "first_column": 0,
                "last_column": 98
            },
            "type": "tag",
            "name": "tr",
            "attributes": [],
            "children": [{
                "location": {
                    "first_line": 1,
                    "last_line": 1,
                    "first_column": 4,
                    "last_column": 93
                },
                "type": "for-statement",
                "variable": "x",
                "indexName": "i",
                "target": {
                    "location": {
                        "first_line": 1,
                        "last_line": 1,
                        "first_column": 18,
                        "last_column": 19
                    },
                    "type": "variable-expression",
                    "name": "y"
                },
                "children": [{
                    "location": {
                        "first_line": 1,
                        "last_line": 1,
                        "first_column": 22,
                        "last_column": 64
                    },
                    "type": "include-statement",
                    "template": {
                        "location": {
                            "first_line": 1,
                            "last_line": 1,
                            "first_column": 33,
                            "last_column": 48
                        },
                        "type": "method-expression",
                        "path": "this.getFrags",
                        "arguments": []
                    },
                    "arguments": {
                        "location": {
                            "first_line": 1,
                            "last_line": 1,
                            "first_column": 49,
                            "last_column": 61
                        },
                        "type": "array-literal",
                        "members": [{
                            "location": {
                                "first_line": 1,
                                "last_line": 1,
                                "first_column": 50,
                                "last_column": 54
                            },
                            "type": "variable-expression",
                            "name": "ctx1"
                        }, {
                            "location": {
                                "first_line": 1,
                                "last_line": 1,
                                "first_column": 56,
                                "last_column": 60
                            },
                            "type": "variable-expression",
                            "name": "ctx2"
                        }]
                    }
                }, {
                    "location": {
                        "first_line": 1,
                        "last_line": 1,
                        "first_column": 64,
                        "last_column": 81
                    },
                    "type": "include-statement",
                    "template": {
                        "location": {
                            "first_line": 1,
                            "last_line": 1,
                            "first_column": 75,
                            "last_column": 78
                        },
                        "type": "variable-expression",
                        "name": "val"
                    },
                    "arguments": null
                }]
            }]
        }
    },

    'should parse negative numbers': {
        'type': 'template',
        'imports': [],
        'parameters': [],
        'root': {
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 58
            },
            'type': 'tag',
            'name': 'tag',
            'attributes': [{
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 5,
                    'last_column': 24
                },
                'type': 'attribute',
                'name': 'n',
                'namespace': null,
                'value': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 7,
                        'last_column': 24
                    },
                    'type': 'interpolation',
                    'expression': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 12,
                            'last_column': 20
                        },
                        'type': 'binary-expression',
                        'left': {
                            'location': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 12,
                                'last_column': 16
                            },
                            'type': 'number-literal',
                            'value': '-0.5'
                        },
                        'op': '+',
                        'right': {
                            'location': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 19,
                                'last_column': 20
                            },
                            'type': 'number-literal',
                            'value': '3'
                        }
                    },
                    'filters': []
                }
            }, {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 25,
                    'last_column': 39
                },
                'type': 'attribute',
                'name': 'm',
                'namespace': null,
                'value': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 27,
                        'last_column': 39
                    },
                    'type': 'interpolation',
                    'expression': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 30,
                            'last_column': 36
                        },
                        'type': 'binary-expression',
                        'left': {
                            'location': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 30,
                                'last_column': 31
                            },
                            'type': 'number-literal',
                            'value': '4'
                        },
                        'op': '+',
                        'right': {
                            'location': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 34,
                                'last_column': 36
                            },
                            'type': 'number-literal',
                            'value': '-2'
                        }
                    },
                    'filters': []
                }
            }, {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 40,
                    'last_column': 56
                },
                'type': 'attribute',
                'name': 'g',
                'namespace': null,
                'value': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 42,
                        'last_column': 56
                    },
                    'type': 'interpolation',
                    'expression': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 46,
                            'last_column': 52
                        },
                        'type': 'binary-expression',
                        'left': {
                            'location': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 46,
                                'last_column': 48
                            },
                            'type': 'number-literal',
                            'value': '10'
                        },
                        'op': '-',
                        'right': {
                            'location': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 50,
                                'last_column': 52
                            },
                            'type': 'number-literal',
                            'value': '-5'
                        }
                    },
                    'filters': []
                }
            }],
            'children': []
        },
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 58
        }
    },
    'should allow filter chaining': {

        'type': 'template',
        'imports': [],
        'parameters': [],
        'root': {
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 56
            },
            'type': 'tag',
            'name': 'p',
            'attributes': [],
            'children': [{
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 3,
                    'last_column': 52
                },
                'type': 'interpolation',
                'expression': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 6,
                        'last_column': 19
                    },
                    'type': 'bind-expression',
                    'path': 'this._',
                    'target': 'value',
                    'arguments': []
                },
                'filters': [{
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 20,
                        'last_column': 24
                    },
                    'type': 'filter',
                    'name': 'f1',
                    'arguments': []
                }, {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 25,
                        'last_column': 32
                    },
                    'type': 'filter',
                    'name': 'f2',
                    'arguments': [{
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 30,
                            'last_column': 31
                        },
                        'type': 'number-literal',
                        'value': '2'
                    }]
                }, {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 33,
                        'last_column': 49
                    },
                    'type': 'filter',
                    'name': 'f3',
                    'arguments': [

                        {
                            "location": {
                                "first_column": 38,
                                "first_line": 1,
                                "last_column": 48,
                                "last_line": 1
                            },
                            "path": "this.value",
                            "type": "property-expression"
                        }


                    ]
                }]
            }]
        },
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 56
        }
    },
    'should parse switch statements': {

        'type': 'template',
        'imports': [{
            'type': 'import-statement',
            'member': {
                'type': 'composite-member',
                'member': '* as s',
                'module': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 7,
                    'last_column': 13
                }
            },
            'module': {
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 19,
                    'last_column': 31
                },
                'type': 'string-literal',
                'value': '"statements"'
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 32
            }
        }],
        'parameters': [],
        'root': {
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 32,
                'last_column': 224
            },
            'type': 'tag',
            'name': 'Tab',
            'attributes': [],
            'children': [{
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 37,
                    'last_column': 218
                },
                'type': 'switch-statement',
                'expression': {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 47,
                        'last_column': 62
                    },
                    'type': 'method-expression',
                    'path': 'this.getValue',
                    'arguments': []
                },
                'cases': [{
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 65,
                        'last_column': 104
                    },
                    'type': 'case-statement',
                    'expression': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 73,
                            'last_column': 74
                        },
                        'type': 'number-literal',
                        'value': '3'
                    },
                    'children': [{
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 77,
                            'last_column': 91
                        },
                        'type': 'tag',
                        'name': 's.Statement',
                        'attributes': [],
                        'children': []
                    }]
                }, {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 104,
                        'last_column': 150
                    },
                    'type': 'case-statement',
                    'expression': {
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 112,
                            'last_column': 120
                        },
                        'type': 'string-literal',
                        'value': '"copper"'
                    },
                    'children': [{
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 123,
                            'last_column': 137
                        },
                        'type': 'tag',
                        'name': 's.Statement',
                        'attributes': [],
                        'children': []
                    }]
                }, {
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 150,
                        'last_column': 203
                    },
                    'type': 'case-statement',
                    'expression': 'default',
                    'children': [{
                        'location': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 168,
                            'last_column': 190
                        },
                        'type': 'tag',
                        'name': 's.Statement.Default',
                        'attributes': [],
                        'children': []
                    }]
                }]
            }]
        },
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 224
        }
    }




};
