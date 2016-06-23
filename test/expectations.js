export default {

    'should parse imports': {
        'type': 'template',
        'imports': [{
            'type': 'import',
            'member': 'lib',
            'module': {
                'type': 'string',
                'value': '"path/to/libs"',
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 16,
                        'last_column': 30
                    },
                    'start': {
                        'line': 1,
                        'column': 16
                    },
                    'end': {
                        'line': 1,
                        'column': 30
                    }
                }
            },
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 31
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 31
                }
            }
        }],
        'arguments': [],
        'tag': {
            'type': 'tag',
            'name': 'tag',
            'attributes': [],
            'children': [],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 33,
                    'last_column': 39
                },
                'start': {
                    'line': 1,
                    'column': 33
                },
                'end': {
                    'line': 1,
                    'column': 39
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 39
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 1,
                'column': 39
            }
        }
    },
    'should parse a self closing tag': {
        'type': 'template',
        'imports': [],
        'arguments': [],
        'tag': {
            'type': 'tag',
            'name': 'simple',
            'attributes': [],
            'children': [],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 9
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 9
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 9
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 1,
                'column': 9
            }
        }
    },
    'should parse a self closing tag with attributes': [{
            'type': 'template',
            'imports': [],
            'arguments': [],
            'tag': {
                'type': 'tag',
                'name': 'user',
                'attributes': [{
                    'type': 'attribute',
                    'name': 'name',
                    'namespace': null,
                    'value': {
                        'type': 'string',
                        'value': '"xyaa aaz"',
                        'location': {
                            'match': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 11,
                                'last_column': 21
                            },
                            'start': {
                                'line': 1,
                                'column': 11
                            },
                            'end': {
                                'line': 1,
                                'column': 21
                            }
                        }
                    },
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 6,
                            'last_column': 21
                        },
                        'start': {
                            'line': 1,
                            'column': 6
                        },
                        'end': {
                            'line': 1,
                            'column': 21
                        }
                    }
                }, {
                    'type': 'attribute',
                    'name': 'position',
                    'namespace': null,
                    'value': {
                        'type': 'interpolation',
                        'value': {
                            'type': 'number',
                            'value': '4',
                            'location': {
                                'match': {
                                    'first_line': 1,
                                    'last_line': 1,
                                    'first_column': 33,
                                    'last_column': 34
                                },
                                'start': {
                                    'line': 1,
                                    'column': 33
                                },
                                'end': {
                                    'line': 1,
                                    'column': 34
                                }
                            }
                        },
                        'filters': [{
                            'type': 'filter',
                            'name': 'x',
                            'arguments': [{
                                'type': 'number',
                                'value': '20',
                                'location': {
                                    'match': {
                                        'first_line': 1,
                                        'last_line': 1,
                                        'first_column': 37,
                                        'last_column': 39
                                    },
                                    'start': {
                                        'line': 1,
                                        'column': 37
                                    },
                                    'end': {
                                        'line': 1,
                                        'column': 39
                                    }
                                }
                            }]
                        }],
                        'location': {
                            'match': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 31,
                                'last_column': 42
                            },
                            'start': {
                                'line': 1,
                                'column': 31
                            },
                            'end': {
                                'line': 1,
                                'column': 42
                            }
                        }
                    },
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 22,
                            'last_column': 42
                        },
                        'start': {
                            'line': 1,
                            'column': 22
                        },
                        'end': {
                            'line': 1,
                            'column': 42
                        }
                    }
                }, {
                    'type': 'attribute',
                    'name': 'val',
                    'namespace': 'wml',
                    'value': {
                        'type': 'string',
                        'value': '"test"',
                        'location': {
                            'match': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 51,
                                'last_column': 57
                            },
                            'start': {
                                'line': 1,
                                'column': 51
                            },
                            'end': {
                                'line': 1,
                                'column': 57
                            }
                        }
                    },
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 43,
                            'last_column': 57
                        },
                        'start': {
                            'line': 1,
                            'column': 43
                        },
                        'end': {
                            'line': 1,
                            'column': 57
                        }
                    }
                }],
                'children': [],
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 0,
                        'last_column': 59
                    },
                    'start': {
                        'line': 1,
                        'column': 0
                    },
                    'end': {
                        'line': 1,
                        'column': 59
                    }
                }
            },
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 59
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 59
                }
            }
        }, {
            "type": "template",
            "imports": [],
            "arguments": [],
            "tag": {
                "type": "tag",
                "name": "user",
                "attributes": [{
                    "type": "attribute",
                    "name": "enabled",
                    "namespace": null,
                    "value": {
                        "type": "boolean",
                        "value": true
                    },
                    "location": {
                        "match": {
                            "first_line": 1,
                            "last_line": 1,
                            "first_column": 6,
                            "last_column": 13
                        },
                        "start": {
                            "line": 1,
                            "column": 6
                        },
                        "end": {
                            "line": 1,
                            "column": 13
                        }
                    }
                }, {
                    "type": "attribute",
                    "name": "id",
                    "namespace": null,
                    "value": {
                        "type": "number",
                        "value": "24",
                        "location": {
                            "match": {
                                "first_line": 1,
                                "last_line": 1,
                                "first_column": 17,
                                "last_column": 19
                            },
                            "start": {
                                "line": 1,
                                "column": 17
                            },
                            "end": {
                                "line": 1,
                                "column": 19
                            }
                        }
                    },
                    "location": {
                        "match": {
                            "first_line": 1,
                            "last_line": 1,
                            "first_column": 14,
                            "last_column": 19
                        },
                        "start": {
                            "line": 1,
                            "column": 14
                        },
                        "end": {
                            "line": 1,
                            "column": 19
                        }
                    }
                }],
                "children": [],
                "location": {
                    "match": {
                        "first_line": 1,
                        "last_line": 1,
                        "first_column": 0,
                        "last_column": 22
                    },
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 1,
                        "column": 22
                    }
                }
            },
            "location": {
                "match": {
                    "first_line": 1,
                    "last_line": 1,
                    "first_column": 0,
                    "last_column": 22
                },
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 22
                }
            }
        },
{
  'type': 'template',
  'imports': [
  ],
  'arguments': [
  ],
  'tag': {
    'type': 'tag',
    'name': 'user',
    'attributes': [
      {
        'type': 'attribute',
        'name': 'name',
        'namespace': null,
        'value': {
          'type': 'string',
          'value': '"xyaa aaz"',
          'location': {
            'match': {
              'first_line': 1,
              'last_line': 1,
              'first_column': 11,
              'last_column': 21
            },
            'start': {
              'line': 1,
              'column': 11
            },
            'end': {
              'line': 1,
              'column': 21
            }
          }
        },
        'location': {
          'match': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 6,
            'last_column': 21
          },
          'start': {
            'line': 1,
            'column': 6
          },
          'end': {
            'line': 1,
            'column': 21
          }
        }
      },
      {
        'type': 'attribute',
        'name': 'id',
        'namespace': null,
        'value': {
          'type': 'string',
          'value': '"24"',
          'location': {
            'match': {
              'first_line': 1,
              'last_line': 1,
              'first_column': 25,
              'last_column': 29
            },
            'start': {
              'line': 1,
              'column': 25
            },
            'end': {
              'line': 1,
              'column': 29
            }
          }
        },
        'location': {
          'match': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 22,
            'last_column': 29
          },
          'start': {
            'line': 1,
            'column': 22
          },
          'end': {
            'line': 1,
            'column': 29
          }
        }
      },
      {
        'type': 'attribute',
        'name': 'align',
        'namespace': null,
        'value': {
          'type': 'string',
          'value': '"left"',
          'location': {
            'match': {
              'first_line': 1,
              'last_line': 1,
              'first_column': 36,
              'last_column': 42
            },
            'start': {
              'line': 1,
              'column': 36
            },
            'end': {
              'line': 1,
              'column': 42
            }
          }
        },
        'location': {
          'match': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 30,
            'last_column': 42
          },
          'start': {
            'line': 1,
            'column': 30
          },
          'end': {
            'line': 1,
            'column': 42
          }
        }
      }
    ],
    'children': [
    ],
    'location': {
      'match': {
        'first_line': 1,
        'last_line': 1,
        'first_column': 0,
        'last_column': 44
      },
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 1,
        'column': 44
      }
    }
  },
  'location': {
    'match': {
      'first_line': 1,
      'last_line': 1,
      'first_column': 0,
      'last_column': 44
    },
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 44
    }
  }
}






    ],
    'should parse a parent tag': {
        'type': 'template',
        'imports': [],
        'tag': {
            'type': 'tag',
            'name': 'panel',
            'attributes': [],
            'children': [],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 10,
                    'first_column': 0,
                    'last_column': 10
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 10,
                    'column': 10
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 10,
                'first_column': 0,
                'last_column': 10
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 10,
                'column': 10
            }
        }
    },
    'should parse a parent tag with attributes': {
        'type': 'template',
        'imports': [],
        'tag': {
            'type': 'tag',
            'name': 'panel',
            'attributes': [{
                'type': 'attribute',
                'name': 'type',
                'namespace': null,
                'value': {
                    'type': 'string',
                    'value': '"default"',
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 12,
                            'last_column': 21
                        },
                        'start': {
                            'line': 1,
                            'column': 12
                        },
                        'end': {
                            'line': 1,
                            'column': 21
                        }
                    }
                },
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 7,
                        'last_column': 21
                    },
                    'start': {
                        'line': 1,
                        'column': 7
                    },
                    'end': {
                        'line': 1,
                        'column': 21
                    }
                }
            }, {
                'type': 'attribute',
                'name': 'size',
                'namespace': null,
                'value': {
                    'type': 'string',
                    'value': '"40"',
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 27,
                            'last_column': 31
                        },
                        'start': {
                            'line': 1,
                            'column': 27
                        },
                        'end': {
                            'line': 1,
                            'column': 31
                        }
                    }
                },
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 22,
                        'last_column': 31
                    },
                    'start': {
                        'line': 1,
                        'column': 22
                    },
                    'end': {
                        'line': 1,
                        'column': 31
                    }
                }
            }, {
                'type': 'attribute',
                'name': 'align',
                'namespace': null,
                'value': {
                    'type': 'string',
                    'value': '"left"',
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 38,
                            'last_column': 44
                        },
                        'start': {
                            'line': 1,
                            'column': 38
                        },
                        'end': {
                            'line': 1,
                            'column': 44
                        }
                    }
                },
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 32,
                        'last_column': 44
                    },
                    'start': {
                        'line': 1,
                        'column': 32
                    },
                    'end': {
                        'line': 1,
                        'column': 44
                    }
                }
            }],
            'children': [],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 54
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 54
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 54
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 1,
                'column': 54
            }
        }
    },
    'should parse parent tags with mixed children': {
        'type': 'template',
        'imports': [],
        'tag': {
            'type': 'tag',
            'name': 'panel',
            'attributes': [],
            'children': [{
                'type': 'characters',
                'value': 'This is my offsprings.',
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 7,
                        'last_column': 29
                    },
                    'start': {
                        'line': 1,
                        'column': 7
                    },
                    'end': {
                        'line': 1,
                        'column': 29
                    }
                }
            }, {
                'type': 'tag',
                'name': 'a',
                'attributes': [],
                'children': [{
                    'type': 'characters',
                    'value': 'Link',
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 32,
                            'last_column': 36
                        },
                        'start': {
                            'line': 1,
                            'column': 32
                        },
                        'end': {
                            'line': 1,
                            'column': 36
                        }
                    }
                }],
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 29,
                        'last_column': 40
                    },
                    'start': {
                        'line': 1,
                        'column': 29
                    },
                    'end': {
                        'line': 1,
                        'column': 40
                    }
                }
            }, {
                'type': 'characters',
                'value': 'Hey now! ',
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 40,
                        'last_column': 49
                    },
                    'start': {
                        'line': 1,
                        'column': 40
                    },
                    'end': {
                        'line': 1,
                        'column': 49
                    }
                }
            }, {
                'type': 'tag',
                'name': 'Input',
                'attributes': [],
                'children': [],
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 49,
                        'last_column': 57
                    },
                    'start': {
                        'line': 1,
                        'column': 49
                    },
                    'end': {
                        'line': 1,
                        'column': 57
                    }
                }
            }],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 65
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 65
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 65
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 1,
                'column': 65
            }
        }
    },
    'should parse parent tags with tag children (L1)': {
        'type': 'template',
        'imports': [],
        'tag': {
            'type': 'tag',
            'name': 'panel',
            'attributes': [],
            'children': [{
                'type': 'tag',
                'name': 'a',
                'attributes': [],
                'children': [],
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 7,
                        'last_column': 14
                    },
                    'start': {
                        'line': 1,
                        'column': 7
                    },
                    'end': {
                        'line': 1,
                        'column': 14
                    }
                }
            }],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 22
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 22
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 22
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 1,
                'column': 22
            }
        }
    },
    'should parse parent tags with tag children (L2)': {
        'type': 'template',
        'imports': [],
        'tag': {
            'type': 'tag',
            'name': 'panel',
            'attributes': [],
            'children': [{
                'type': 'tag',
                'name': 'a',
                'attributes': [{
                    'type': 'attribute',
                    'name': 'href',
                    'namespace': null,
                    'value': {
                        'type': 'string',
                        'value': '"link"',
                        'location': {
                            'match': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 15,
                                'last_column': 21
                            },
                            'start': {
                                'line': 1,
                                'column': 15
                            },
                            'end': {
                                'line': 1,
                                'column': 21
                            }
                        }
                    },
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 10,
                            'last_column': 21
                        },
                        'start': {
                            'line': 1,
                            'column': 10
                        },
                        'end': {
                            'line': 1,
                            'column': 21
                        }
                    }
                }, {
                    'type': 'attribute',
                    'name': 'onclick',
                    'namespace': null,
                    'value': {
                        'type': 'interpolation',
                        'value': {
                            'type': 'function-expression',
                            'name': 'this.someting.invoke',
                            'args': []
                        },
                        'filters': [],
                        'location': {
                            'match': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 30,
                                'last_column': 56
                            },
                            'start': {
                                'line': 1,
                                'column': 30
                            },
                            'end': {
                                'line': 1,
                                'column': 56
                            }
                        }
                    },
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 22,
                            'last_column': 56
                        },
                        'start': {
                            'line': 1,
                            'column': 22
                        },
                        'end': {
                            'line': 1,
                            'column': 56
                        }
                    }
                }],
                'children': [{
                    'type': 'characters',
                    'value': 'Click Here',
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 57,
                            'last_column': 67
                        },
                        'start': {
                            'line': 1,
                            'column': 57
                        },
                        'end': {
                            'line': 1,
                            'column': 67
                        }
                    }
                }],
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 7,
                        'last_column': 71
                    },
                    'start': {
                        'line': 1,
                        'column': 7
                    },
                    'end': {
                        'line': 1,
                        'column': 71
                    }
                }
            }, {
                'type': 'tag',
                'name': 'table',
                'attributes': [],
                'children': [],
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 71,
                        'last_column': 79
                    },
                    'start': {
                        'line': 1,
                        'column': 71
                    },
                    'end': {
                        'line': 1,
                        'column': 79
                    }
                }
            }],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 87
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 87
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 87
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 1,
                'column': 87
            }
        }
    },
    'should parse parent tags with tag children (L3)': {
        'type': 'template',
        'imports': [],
        'tag': {
            'type': 'tag',
            'name': 'panel',
            'attributes': [],
            'children': [{
                'type': 'tag',
                'name': 'a',
                'attributes': [{
                    'type': 'attribute',
                    'name': 'href',
                    'namespace': null,
                    'value': {
                        'type': 'string',
                        'value': '"link"',
                        'location': {
                            'match': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 15,
                                'last_column': 21
                            },
                            'start': {
                                'line': 1,
                                'column': 15
                            },
                            'end': {
                                'line': 1,
                                'column': 21
                            }
                        }
                    },
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 10,
                            'last_column': 21
                        },
                        'start': {
                            'line': 1,
                            'column': 10
                        },
                        'end': {
                            'line': 1,
                            'column': 21
                        }
                    }
                }],
                'children': [{
                    'type': 'characters',
                    'value': 'Click Here',
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 22,
                            'last_column': 32
                        },
                        'start': {
                            'line': 1,
                            'column': 22
                        },
                        'end': {
                            'line': 1,
                            'column': 32
                        }
                    }
                }],
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 7,
                        'last_column': 36
                    },
                    'start': {
                        'line': 1,
                        'column': 7
                    },
                    'end': {
                        'line': 1,
                        'column': 36
                    }
                }
            }, {
                'type': 'tag',
                'name': 'table',
                'attributes': [],
                'children': [],
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 36,
                        'last_column': 44
                    },
                    'start': {
                        'line': 1,
                        'column': 36
                    },
                    'end': {
                        'line': 1,
                        'column': 44
                    }
                }
            }, {
                'type': 'tag',
                'name': 'panel',
                'attributes': [{
                    'type': 'attribute',
                    'name': 'c',
                    'namespace': null,
                    'value': {
                        'type': 'string',
                        'value': '"22"',
                        'location': {
                            'match': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 53,
                                'last_column': 57
                            },
                            'start': {
                                'line': 1,
                                'column': 53
                            },
                            'end': {
                                'line': 1,
                                'column': 57
                            }
                        }
                    },
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 51,
                            'last_column': 57
                        },
                        'start': {
                            'line': 1,
                            'column': 51
                        },
                        'end': {
                            'line': 1,
                            'column': 57
                        }
                    }
                }],
                'children': [],
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 44,
                        'last_column': 66
                    },
                    'start': {
                        'line': 1,
                        'column': 44
                    },
                    'end': {
                        'line': 1,
                        'column': 66
                    }
                }
            }],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 74
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 74
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 74
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 1,
                'column': 74
            }
        }
    },
    'should do it all together now': {
        'type': 'template',
        'imports': [],
        'tag': {
            'type': 'tag',
            'name': 'modal',
            'attributes': [{
                'type': 'attribute',
                'name': 'name',
                'namespace': null,
                'value': {
                    'type': 'string',
                    'value': '"mymodal"',
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 12,
                            'last_column': 21
                        },
                        'start': {
                            'line': 1,
                            'column': 12
                        },
                        'end': {
                            'line': 1,
                            'column': 21
                        }
                    }
                },
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 7,
                        'last_column': 21
                    },
                    'start': {
                        'line': 1,
                        'column': 7
                    },
                    'end': {
                        'line': 1,
                        'column': 21
                    }
                }
            }, {
                'type': 'attribute',
                'name': 'x',
                'namespace': null,
                'value': {
                    'type': 'string',
                    'value': '"1"',
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 24,
                            'last_column': 27
                        },
                        'start': {
                            'line': 1,
                            'column': 24
                        },
                        'end': {
                            'line': 1,
                            'column': 27
                        }
                    }
                },
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 22,
                        'last_column': 27
                    },
                    'start': {
                        'line': 1,
                        'column': 22
                    },
                    'end': {
                        'line': 1,
                        'column': 27
                    }
                }
            }, {
                'type': 'attribute',
                'name': 'y',
                'namespace': null,
                'value': {
                    'type': 'string',
                    'value': '"2"',
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 30,
                            'last_column': 33
                        },
                        'start': {
                            'line': 1,
                            'column': 30
                        },
                        'end': {
                            'line': 1,
                            'column': 33
                        }
                    }
                },
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 28,
                        'last_column': 33
                    },
                    'start': {
                        'line': 1,
                        'column': 28
                    },
                    'end': {
                        'line': 1,
                        'column': 33
                    }
                }
            }],
            'children': [{
                'type': 'tag',
                'name': 'modal-header',
                'attributes': [],
                'children': [{
                    'type': 'characters',
                    'value': 'My Modal',
                    'location': {
                        'match': {
                            'first_line': 2,
                            'last_line': 2,
                            'first_column': 38,
                            'last_column': 46
                        },
                        'start': {
                            'line': 2,
                            'column': 38
                        },
                        'end': {
                            'line': 2,
                            'column': 46
                        }
                    }
                }],
                'location': {
                    'match': {
                        'first_line': 2,
                        'last_line': 2,
                        'first_column': 24,
                        'last_column': 61
                    },
                    'start': {
                        'line': 2,
                        'column': 24
                    },
                    'end': {
                        'line': 2,
                        'column': 61
                    }
                }
            }, {
                'type': 'tag',
                'name': 'modal-body',
                'attributes': [],
                'children': [{
                    'type': 'characters',
                    'value': '\n                         Creativity is inhibited by greed and corruption.\n                         ',
                    'location': {
                        'match': {
                            'first_line': 3,
                            'last_line': 5,
                            'first_column': 36,
                            'last_column': 25
                        },
                        'start': {
                            'line': 3,
                            'column': 36
                        },
                        'end': {
                            'line': 5,
                            'column': 25
                        }
                    }
                }, {
                    'type': 'tag',
                    'name': 'vote-button',
                    'attributes': [],
                    'children': [],
                    'location': {
                        'match': {
                            'first_line': 5,
                            'last_line': 5,
                            'first_column': 25,
                            'last_column': 39
                        },
                        'start': {
                            'line': 5,
                            'column': 25
                        },
                        'end': {
                            'line': 5,
                            'column': 39
                        }
                    }
                }, {
                    'type': 'tag',
                    'name': 'vote-count',
                    'attributes': [{
                        'type': 'attribute',
                        'name': 'source',
                        'namespace': null,
                        'value': {
                            'type': 'interpolation',
                            'value': 'this',
                            'filters': [],
                            'location': {
                                'match': {
                                    'first_line': 6,
                                    'last_line': 6,
                                    'first_column': 44,
                                    'last_column': 52
                                },
                                'start': {
                                    'line': 6,
                                    'column': 44
                                },
                                'end': {
                                    'line': 6,
                                    'column': 52
                                }
                            }
                        },
                        'location': {
                            'match': {
                                'first_line': 6,
                                'last_line': 6,
                                'first_column': 37,
                                'last_column': 52
                            },
                            'start': {
                                'line': 6,
                                'column': 37
                            },
                            'end': {
                                'line': 6,
                                'column': 52
                            }
                        }
                    }],
                    'children': [],
                    'location': {
                        'match': {
                            'first_line': 6,
                            'last_line': 6,
                            'first_column': 25,
                            'last_column': 54
                        },
                        'start': {
                            'line': 6,
                            'column': 25
                        },
                        'end': {
                            'line': 6,
                            'column': 54
                        }
                    }
                }, {
                    'type': 'characters',
                    'value': ' Votes\n                         ',
                    'location': {
                        'match': {
                            'first_line': 6,
                            'last_line': 7,
                            'first_column': 54,
                            'last_column': 25
                        },
                        'start': {
                            'line': 6,
                            'column': 54
                        },
                        'end': {
                            'line': 7,
                            'column': 25
                        }
                    }
                }, {
                    'type': 'tag',
                    'name': 'textarea',
                    'attributes': [{
                        'type': 'attribute',
                        'name': 'id',
                        'namespace': 'wml',
                        'value': {
                            'type': 'string',
                            'value': '"ta"',
                            'location': {
                                'match': {
                                    'first_line': 7,
                                    'last_line': 7,
                                    'first_column': 42,
                                    'last_column': 46
                                },
                                'start': {
                                    'line': 7,
                                    'column': 42
                                },
                                'end': {
                                    'line': 7,
                                    'column': 46
                                }
                            }
                        },
                        'location': {
                            'match': {
                                'first_line': 7,
                                'last_line': 7,
                                'first_column': 35,
                                'last_column': 46
                            },
                            'start': {
                                'line': 7,
                                'column': 35
                            },
                            'end': {
                                'line': 7,
                                'column': 46
                            }
                        }
                    }, {
                        'type': 'attribute',
                        'name': 'disabled',
                        'namespace': null,
                        'value': {
                            'type': 'boolean',
                            'value': true
                        },
                        'location': {
                            'match': {
                                'first_line': 7,
                                'last_line': 7,
                                'first_column': 47,
                                'last_column': 55
                            },
                            'start': {
                                'line': 7,
                                'column': 47
                            },
                            'end': {
                                'line': 7,
                                'column': 55
                            }
                        }
                    }, {
                        'type': 'attribute',
                        'name': 'size',
                        'namespace': null,
                        'value': {
                            'type': 'number',
                            'value': '32',
                            'location': {
                                'match': {
                                    'first_line': 7,
                                    'last_line': 7,
                                    'first_column': 61,
                                    'last_column': 63
                                },
                                'start': {
                                    'line': 7,
                                    'column': 61
                                },
                                'end': {
                                    'line': 7,
                                    'column': 63
                                }
                            }
                        },
                        'location': {
                            'match': {
                                'first_line': 7,
                                'last_line': 7,
                                'first_column': 56,
                                'last_column': 63
                            },
                            'start': {
                                'line': 7,
                                'column': 56
                            },
                            'end': {
                                'line': 7,
                                'column': 63
                            }
                        }
                    }, {
                        'type': 'attribute',
                        'name': 'onchange',
                        'namespace': null,
                        'value': {
                            'type': 'interpolation',
                            'value': 'this.setText',
                            'filters': [],
                            'location': {
                                'match': {
                                    'first_line': 7,
                                    'last_line': 7,
                                    'first_column': 73,
                                    'last_column': 89
                                },
                                'start': {
                                    'line': 7,
                                    'column': 73
                                },
                                'end': {
                                    'line': 7,
                                    'column': 89
                                }
                            }
                        },
                        'location': {
                            'match': {
                                'first_line': 7,
                                'last_line': 7,
                                'first_column': 64,
                                'last_column': 89
                            },
                            'start': {
                                'line': 7,
                                'column': 64
                            },
                            'end': {
                                'line': 7,
                                'column': 89
                            }
                        }
                    }],
                    'children': [{
                        'type': 'characters',
                        'value': '\n                           Various text\n                         ',
                        'location': {
                            'match': {
                                'first_line': 7,
                                'last_line': 9,
                                'first_column': 90,
                                'last_column': 25
                            },
                            'start': {
                                'line': 7,
                                'column': 90
                            },
                            'end': {
                                'line': 9,
                                'column': 25
                            }
                        }
                    }],
                    'location': {
                        'match': {
                            'first_line': 7,
                            'last_line': 9,
                            'first_column': 25,
                            'last_column': 36
                        },
                        'start': {
                            'line': 7,
                            'column': 25
                        },
                        'end': {
                            'line': 9,
                            'column': 36
                        }
                    }
                }],
                'location': {
                    'match': {
                        'first_line': 3,
                        'last_line': 10,
                        'first_column': 24,
                        'last_column': 37
                    },
                    'start': {
                        'line': 3,
                        'column': 24
                    },
                    'end': {
                        'line': 10,
                        'column': 37
                    }
                }
            }],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 11,
                    'first_column': 0,
                    'last_column': 28
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 11,
                    'column': 28
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 11,
                'first_column': 0,
                'last_column': 28
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 11,
                'column': 28
            }
        }
    },
    'should parse for expressions': {
        'type': 'template',
        'imports': [],
        'tag': {
            'type': 'tag',
            'name': 'root',
            'attributes': [],
            'children': [{
                'type': 'for-loop',
                'variable': 'item',
                'indexName': 'index',
                'target': 'list',
                'children': [{
                    'type': 'tag',
                    'name': 'stem',
                    'attributes': [],
                    'children': [{
                        'type': 'characters',
                        'value': 'A Stem',
                        'location': {
                            'match': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 34,
                                'last_column': 40
                            },
                            'start': {
                                'line': 1,
                                'column': 34
                            },
                            'end': {
                                'line': 1,
                                'column': 40
                            }
                        }
                    }],
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 28,
                            'last_column': 47
                        },
                        'start': {
                            'line': 1,
                            'column': 28
                        },
                        'end': {
                            'line': 1,
                            'column': 47
                        }
                    }
                }],
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 6,
                        'last_column': 59
                    },
                    'start': {
                        'line': 1,
                        'column': 6
                    },
                    'end': {
                        'line': 1,
                        'column': 59
                    }
                }
            }],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 66
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 66
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 66
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 1,
                'column': 66
            }
        }
    },
    'should parse if expressions':

    {
        'type': 'template',
        'imports': [],
        'tag': {
            'type': 'tag',
            'name': 'div',
            'attributes': [],
            'children': [{
                'type': 'if-condition',
                'expression': {
                    'type': 'binary-expression',
                    'left': {
                        'type': 'function-expression',
                        'name': 'length',
                        'args': [{
                            'type': 'function-expression',
                            'name': 'values',
                            'args': []
                        }]
                    },
                    'op': '>=',
                    'right': {
                        'type': 'number',
                        'value': '12',
                        'location': {
                            'match': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 32,
                                'last_column': 34
                            },
                            'start': {
                                'line': 1,
                                'column': 32
                            },
                            'end': {
                                'line': 1,
                                'column': 34
                            }
                        }
                    },
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 11,
                            'last_column': 35
                        },
                        'start': {
                            'line': 1,
                            'column': 11
                        },
                        'end': {
                            'line': 1,
                            'column': 35
                        }
                    }
                },
                'iftrue': [{
                    'type': 'characters',
                    'value': 'Your length is more than 11!',
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 38,
                            'last_column': 66
                        },
                        'start': {
                            'line': 1,
                            'column': 38
                        },
                        'end': {
                            'line': 1,
                            'column': 66
                        }
                    }
                }, {
                    'type': 'tag',
                    'name': 'eye',
                    'attributes': [],
                    'children': [{
                        'type': 'characters',
                        'value': 'Tiger',
                        'location': {
                            'match': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 71,
                                'last_column': 76
                            },
                            'start': {
                                'line': 1,
                                'column': 71
                            },
                            'end': {
                                'line': 1,
                                'column': 76
                            }
                        }
                    }],
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 66,
                            'last_column': 82
                        },
                        'start': {
                            'line': 1,
                            'column': 66
                        },
                        'end': {
                            'line': 1,
                            'column': 82
                        }
                    }
                }],
                'iffalse': [],
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 5,
                        'last_column': 92
                    },
                    'start': {
                        'line': 1,
                        'column': 5
                    },
                    'end': {
                        'line': 1,
                        'column': 92
                    }
                }
            }],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 98
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 98
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 98
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 1,
                'column': 98
            }
        }
    },
    'should parse bind expressions': {
        'type': 'template',
        'imports': [],
        'tag': {
            'type': 'tag',
            'name': 'div',
            'attributes': [{
                'type': 'attribute',
                'name': 'onfocus',
                'namespace': null,
                'value': {
                    'type': 'interpolation',
                    'value': {
                        'parent': 'this',
                        'target': 'doAction',
                        'args': []
                    },
                    'filters': [],
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 13,
                            'last_column': 31
                        },
                        'start': {
                            'line': 1,
                            'column': 13
                        },
                        'end': {
                            'line': 1,
                            'column': 31
                        }
                    }
                },
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 5,
                        'last_column': 31
                    },
                    'start': {
                        'line': 1,
                        'column': 5
                    },
                    'end': {
                        'line': 1,
                        'column': 31
                    }
                }
            }],
            'children': [],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 33
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 33
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 33
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 1,
                'column': 33
            }
        }
    },
    'should parse ternary expressions': {
        "type": "template",
        "imports": [],
        "tag": {
            "type": "tag",
            "name": "div",
            "attributes": [{
                "type": "attribute",
                "name": "id",
                "namespace": null,
                "value": {
                    "type": "interpolation",
                    "value": "this.id",
                    "filters": [],
                    "location": {
                        "match": {
                            "first_line": 1,
                            "last_line": 1,
                            "first_column": 8,
                            "last_column": 19
                        },
                        "start": {
                            "line": 1,
                            "column": 8
                        },
                        "end": {
                            "line": 1,
                            "column": 19
                        }
                    }
                },
                "location": {
                    "match": {
                        "first_line": 1,
                        "last_line": 1,
                        "first_column": 5,
                        "last_column": 19
                    },
                    "start": {
                        "line": 1,
                        "column": 5
                    },
                    "end": {
                        "line": 1,
                        "column": 19
                    }
                }
            }],
            "children": [{
                "type": "interpolation",
                "value": {
                    "logic": {
                        "type": "function-expression",
                        "name": "this.check",
                        "args": []
                    },
                    "iftrue": "a",
                    "iffalse": "b"
                },
                "filters": [],
                "location": {
                    "match": {
                        "first_line": 1,
                        "last_line": 1,
                        "first_column": 20,
                        "last_column": 45
                    },
                    "start": {
                        "line": 1,
                        "column": 20
                    },
                    "end": {
                        "line": 1,
                        "column": 45
                    }
                }
            }],
            "location": {
                "match": {
                    "first_line": 1,
                    "last_line": 1,
                    "first_column": 0,
                    "last_column": 51
                },
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 51
                }
            }
        },
        "location": {
            "match": {
                "first_line": 1,
                "last_line": 1,
                "first_column": 0,
                "last_column": 51
            },
            "start": {
                "line": 1,
                "column": 0
            },
            "end": {
                "line": 1,
                "column": 51
            }
        }
    },
    'should parse function literals': {
        'type': 'template',
        'imports': [],
        'tag': {
            'type': 'tag',
            'name': 'button',
            'attributes': [{
                'type': 'attribute',
                'name': 'onclick',
                'namespace': null,
                'value': {
                    'type': 'interpolation',
                    'value': {
                        'parameters': [
                            'e'
                        ],
                        'body': {
                            'type': 'function-expression',
                            'name': 'this.call',
                            'args': [
                                'e'
                            ]
                        }
                    },
                    'filters': [],
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 16,
                            'last_column': 37
                        },
                        'start': {
                            'line': 1,
                            'column': 16
                        },
                        'end': {
                            'line': 1,
                            'column': 37
                        }
                    }
                },
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 8,
                        'last_column': 37
                    },
                    'start': {
                        'line': 1,
                        'column': 8
                    },
                    'end': {
                        'line': 1,
                        'column': 37
                    }
                }
            }],
            'children': [],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 39
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 39
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 39
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 1,
                'column': 39
            }
        }
    },
    'should parse includes': {
        'type': 'template',
        'imports': [],
        'tag': {
            'type': 'tag',
            'name': 'tr',
            'attributes': [],
            'children': [{
                'type': 'for-loop',
                'variable': 'x',
                'indexName': 'i',
                'target': 'y',
                'children': [{
                    'type': 'include',
                    'template': {
                        'type': 'function-expression',
                        'name': 'this.getFrags',
                        'args': []
                    },
                    'arguments': {
                        'type': 'array',
                        'members': [
                            'ctx1',
                            'ctx2'
                        ],
                        'location': {
                            'match': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 49,
                                'last_column': 61
                            },
                            'start': {
                                'line': 1,
                                'column': 49
                            },
                            'end': {
                                'line': 1,
                                'column': 61
                            }
                        }
                    },
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 22,
                            'last_column': 64
                        },
                        'start': {
                            'line': 1,
                            'column': 22
                        },
                        'end': {
                            'line': 1,
                            'column': 64
                        }
                    }
                }, {
                    'type': 'include',
                    'template': 'val',
                    'arguments': [],
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 64,
                            'last_column': 81
                        },
                        'start': {
                            'line': 1,
                            'column': 64
                        },
                        'end': {
                            'line': 1,
                            'column': 81
                        }
                    }
                }],
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 4,
                        'last_column': 93
                    },
                    'start': {
                        'line': 1,
                        'column': 4
                    },
                    'end': {
                        'line': 1,
                        'column': 93
                    }
                }
            }],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 98
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 98
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 98
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 1,
                'column': 98
            }
        }
    },
    'should parse negative numbers': {
        'type': 'template',
        'imports': [],
        'tag': {
            'type': 'tag',
            'name': 'tag',
            'attributes': [{
                'type': 'attribute',
                'name': 'n',
                'namespace': null,
                'value': {
                    'type': 'interpolation',
                    'value': {
                        'type': 'binary-expression',
                        'left': {
                            'type': 'number',
                            'value': '-0.5',
                            'location': {
                                'match': {
                                    'first_line': 1,
                                    'last_line': 1,
                                    'first_column': 12,
                                    'last_column': 16
                                },
                                'start': {
                                    'line': 1,
                                    'column': 12
                                },
                                'end': {
                                    'line': 1,
                                    'column': 16
                                }
                            }
                        },
                        'op': '+',
                        'right': {
                            'type': 'number',
                            'value': '3',
                            'location': {
                                'match': {
                                    'first_line': 1,
                                    'last_line': 1,
                                    'first_column': 19,
                                    'last_column': 20
                                },
                                'start': {
                                    'line': 1,
                                    'column': 19
                                },
                                'end': {
                                    'line': 1,
                                    'column': 20
                                }
                            }
                        },
                        'location': {
                            'match': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 10,
                                'last_column': 21
                            },
                            'start': {
                                'line': 1,
                                'column': 10
                            },
                            'end': {
                                'line': 1,
                                'column': 21
                            }
                        }
                    },
                    'filters': [],
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 7,
                            'last_column': 24
                        },
                        'start': {
                            'line': 1,
                            'column': 7
                        },
                        'end': {
                            'line': 1,
                            'column': 24
                        }
                    }
                },
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 5,
                        'last_column': 24
                    },
                    'start': {
                        'line': 1,
                        'column': 5
                    },
                    'end': {
                        'line': 1,
                        'column': 24
                    }
                }
            }, {
                'type': 'attribute',
                'name': 'm',
                'namespace': null,
                'value': {
                    'type': 'interpolation',
                    'value': {
                        'type': 'binary-expression',
                        'left': {
                            'type': 'number',
                            'value': '4',
                            'location': {
                                'match': {
                                    'first_line': 1,
                                    'last_line': 1,
                                    'first_column': 30,
                                    'last_column': 31
                                },
                                'start': {
                                    'line': 1,
                                    'column': 30
                                },
                                'end': {
                                    'line': 1,
                                    'column': 31
                                }
                            }
                        },
                        'op': '+',
                        'right': {
                            'type': 'number',
                            'value': '-2',
                            'location': {
                                'match': {
                                    'first_line': 1,
                                    'last_line': 1,
                                    'first_column': 34,
                                    'last_column': 36
                                },
                                'start': {
                                    'line': 1,
                                    'column': 34
                                },
                                'end': {
                                    'line': 1,
                                    'column': 36
                                }
                            }
                        },
                        'location': {
                            'match': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 29,
                                'last_column': 37
                            },
                            'start': {
                                'line': 1,
                                'column': 29
                            },
                            'end': {
                                'line': 1,
                                'column': 37
                            }
                        }
                    },
                    'filters': [],
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 27,
                            'last_column': 39
                        },
                        'start': {
                            'line': 1,
                            'column': 27
                        },
                        'end': {
                            'line': 1,
                            'column': 39
                        }
                    }
                },
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 25,
                        'last_column': 39
                    },
                    'start': {
                        'line': 1,
                        'column': 25
                    },
                    'end': {
                        'line': 1,
                        'column': 39
                    }
                }
            }, {
                'type': 'attribute',
                'name': 'g',
                'namespace': null,
                'value': {
                    'type': 'interpolation',
                    'value': {
                        'type': 'binary-expression',
                        'left': {
                            'type': 'number',
                            'value': '10',
                            'location': {
                                'match': {
                                    'first_line': 1,
                                    'last_line': 1,
                                    'first_column': 46,
                                    'last_column': 48
                                },
                                'start': {
                                    'line': 1,
                                    'column': 46
                                },
                                'end': {
                                    'line': 1,
                                    'column': 48
                                }
                            }
                        },
                        'op': '-',
                        'right': {
                            'type': 'number',
                            'value': '-5',
                            'location': {
                                'match': {
                                    'first_line': 1,
                                    'last_line': 1,
                                    'first_column': 50,
                                    'last_column': 52
                                },
                                'start': {
                                    'line': 1,
                                    'column': 50
                                },
                                'end': {
                                    'line': 1,
                                    'column': 52
                                }
                            }
                        },
                        'location': {
                            'match': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 45,
                                'last_column': 53
                            },
                            'start': {
                                'line': 1,
                                'column': 45
                            },
                            'end': {
                                'line': 1,
                                'column': 53
                            }
                        }
                    },
                    'filters': [],
                    'location': {
                        'match': {
                            'first_line': 1,
                            'last_line': 1,
                            'first_column': 42,
                            'last_column': 56
                        },
                        'start': {
                            'line': 1,
                            'column': 42
                        },
                        'end': {
                            'line': 1,
                            'column': 56
                        }
                    }
                },
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 40,
                        'last_column': 56
                    },
                    'start': {
                        'line': 1,
                        'column': 40
                    },
                    'end': {
                        'line': 1,
                        'column': 56
                    }
                }
            }],
            'children': [],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 58
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 58
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 58
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 1,
                'column': 58
            }
        }
    },
    'should allow filter chaining': {
        'type': 'template',
        'imports': [],
        'tag': {
            'type': 'tag',
            'name': 'p',
            'attributes': [],
            'children': [{
                'type': 'interpolation',
                'value': 'value',
                'filters': [{
                    'type': 'filter',
                    'name': 'f1',
                    'arguments': []
                }, {
                    'type': 'filter',
                    'name': 'f2',
                    'arguments': [{
                        'type': 'number',
                        'value': '2',
                        'location': {
                            'match': {
                                'first_line': 1,
                                'last_line': 1,
                                'first_column': 22,
                                'last_column': 23
                            },
                            'start': {
                                'line': 1,
                                'column': 22
                            },
                            'end': {
                                'line': 1,
                                'column': 23
                            }
                        }
                    }]
                }, {
                    'type': 'filter',
                    'name': 'f3',
                    'arguments': [
                        'this.value'
                    ]
                }],
                'location': {
                    'match': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 3,
                        'last_column': 44
                    },
                    'start': {
                        'line': 1,
                        'column': 3
                    },
                    'end': {
                        'line': 1,
                        'column': 44
                    }
                }
            }],
            'location': {
                'match': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 48
                },
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 48
                }
            }
        },
        'location': {
            'match': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 48
            },
            'start': {
                'line': 1,
                'column': 0
            },
            'end': {
                'line': 1,
                'column': 48
            }
        }
    }




};
