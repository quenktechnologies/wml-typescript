export default {
    'should parse preamble': [{
            'type': 'template',
            'imports': [{
                'type': 'import',
                'member': {
                    'type': 'default-member',
                    'member': 'lib',
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 7,
                        'last_column': 10
                    }
                },
                'module': {
                    'type': 'string',
                    'value': '"path/to/libs"',
                    'location': {
                        'first_line': 1,
                        'last_line': 1,
                        'first_column': 16,
                        'last_column': 30
                    }
                },
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 0,
                    'last_column': 31
                }
            }],
            'usage': '',
            'root': {
                'type': 'tag',
                'name': 'tag',
                'attributes': [],
                'children': [],
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 32,
                    'last_column': 38
                }
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 38
            }
        }


    ]

};
