import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({}),
    'root': {
        'types': d({
            "Document": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "body": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Flow content",
                            'arguments': d({}),
                        }]],
                    },
                    "head": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "title": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                            },
                        })],
                    },
                    "lang": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['string', null]],
                    },
                })]
            },
            "Edit": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "cite": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['string', null]],
                    },
                    "datetime": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['string', null]],
                    },
                })]
            },
            "Embedded": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "audio": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "canvas": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "embed": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "iframe": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "img": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "math": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "object": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Embedded content",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "picture": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "svg": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "video": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                })]
            },
            "Embedded content": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Embedded",
                    'arguments': d({}),
                }]]]
            },
            "Flow": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "address": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "blockquote": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "cite": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Flow content",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "class": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "child": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Flow",
                                'arguments': d({}),
                            }]],
                        },
                        "class": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "del": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Flow content",
                                'arguments': d({}),
                            }]],
                        },
                        "edit": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Edit",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "details": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Flow content",
                                'arguments': d({}),
                            }]],
                        },
                        "summary": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "heading": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Heading",
                                    'arguments': d({}),
                                }]],
                                "phrasing": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Phrasing content",
                                    'arguments': d({}),
                                }]],
                            })]],
                        },
                    })],
                    "dialog": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Flow content",
                                'arguments': d({}),
                            }]],
                        },
                        "open": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['string', null]],
                        },
                    })],
                    "div": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Flow content",
                        'arguments': d({}),
                    }]],
                    "dl": <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "divs": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "dts": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    })],
                    "embedded": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Embedded",
                        'arguments': d({}),
                    }]],
                    "fieldset": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Flow content",
                                'arguments': d({}),
                            }]],
                        },
                        "legend": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                    })],
                    "figure": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "caption": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "content": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Flow content",
                                        'arguments': d({}),
                                    }]],
                                },
                                "position": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "botom": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "top": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Flow content",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "footer": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "form": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "header": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "heading": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Heading",
                        'arguments': d({}),
                    }]],
                    "hr": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "id": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "child": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Flow",
                                'arguments': d({}),
                            }]],
                        },
                        "id": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "ins": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Flow content",
                                'arguments': d({}),
                            }]],
                        },
                        "edit": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Edit",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "main": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Flow content",
                        'arguments': d({}),
                    }]],
                    "map": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Flow content",
                                'arguments': d({}),
                            }]],
                        },
                        "name": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "menu": <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "li": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Flow content",
                            'arguments': d({}),
                        }]],
                        "script supporting": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Script supporting",
                            'arguments': d({}),
                        }]],
                    })]],
                    "object": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Flow content",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "ol": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "li": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "content": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "Flow content",
                                            'arguments': d({}),
                                        }]],
                                    },
                                    "value": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                    },
                                })],
                                "script supporting": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Script supporting",
                                    'arguments': d({}),
                                }]],
                            })]],
                        },
                        "reversed": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['string', null]],
                        },
                        "start": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['number', null]],
                        },
                        "type": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "1": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                "a": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                "A": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                "i": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                "I": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                            })]],
                        },
                    })],
                    "p": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "pre": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "script supporting": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Script supporting",
                        'arguments': d({}),
                    }]],
                    "search": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Flow content",
                        'arguments': d({}),
                    }]],
                    "sectioning": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Sectioning content",
                        'arguments': d({}),
                    }]],
                    "slot": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Flow content",
                                'arguments': d({}),
                            }]],
                        },
                        "name": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "table": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "caption": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Flow content",
                                'arguments': d({}),
                            }]]],
                        },
                        "colgroups": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                    })],
                    "ul": <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "li": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Flow content",
                            'arguments': d({}),
                        }]],
                        "script supporting": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Script supporting",
                            'arguments': d({}),
                        }]],
                    })]],
                })]
            },
            "Flow content": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "flow": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Flow",
                        'arguments': d({}),
                    }]],
                    "phrase": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                })]]
            },
            "Heading": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "h1": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "h2": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "h3": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "h4": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "h5": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "h6": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "hgroup": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content after": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "p": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                "script supporting": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Script supporting",
                                    'arguments': d({}),
                                }]],
                            })],
                        },
                        "content before": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "p": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                "script supporting": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Script supporting",
                                    'arguments': d({}),
                                }]],
                            })],
                        },
                        "heading": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "h1 ": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Phrasing content",
                                    'arguments': d({}),
                                }]],
                                "h2": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Phrasing content",
                                    'arguments': d({}),
                                }]],
                                "h3": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Phrasing content",
                                    'arguments': d({}),
                                }]],
                                "h4": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Phrasing content",
                                    'arguments': d({}),
                                }]],
                                "h5": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Phrasing content",
                                    'arguments': d({}),
                                }]],
                                "h6": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Phrasing content",
                                    'arguments': d({}),
                                }]],
                            })],
                        },
                    })],
                })]
            },
            "Phrasing": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "a": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "abbr": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Phrasing content",
                                'arguments': d({}),
                            }]],
                        },
                        "title": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "area": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "b": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "bdi": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Phrasing content",
                                'arguments': d({}),
                            }]],
                        },
                        "dir": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "bdo": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Phrasing content",
                                'arguments': d({}),
                            }]],
                        },
                        "dir": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "br": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "button": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "cite": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "class": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "child": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Phrasing",
                                'arguments': d({}),
                            }]],
                        },
                        "class": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "code": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "data": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Phrasing content",
                                'arguments': d({}),
                            }]],
                        },
                        "value": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "datalist": <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "options": <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "option": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                            "script supporting": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Script supporting",
                                'arguments': d({}),
                            }]],
                        })]],
                        "phrasing": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Phrasing content",
                            'arguments': d({}),
                        }]],
                    })],
                    "del": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Phrasing content",
                                'arguments': d({}),
                            }]],
                        },
                        "edit": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Edit",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "dfn": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Phrasing content",
                                'arguments': d({}),
                            }]],
                        },
                        "title": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "em": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "embedded": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Embedded",
                        'arguments': d({}),
                    }]],
                    "i": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "id": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "child": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Phrasing",
                                'arguments': d({}),
                            }]],
                        },
                        "id": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "input": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "ins": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Phrasing content",
                                'arguments': d({}),
                            }]],
                        },
                        "edit": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Edit",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "kbd": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "label": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "link": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "map": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Phrasing content",
                                'arguments': d({}),
                            }]],
                        },
                        "name": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "mark": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "meta": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "meter": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "noscript": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "object": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Phrasing content",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "output": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Phrasing content",
                                'arguments': d({}),
                            }]],
                        },
                        "for": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['string', null]],
                        },
                        "form": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                        "name": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "progress": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Phrasing content",
                                'arguments': d({}),
                            }]],
                        },
                        "max": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                        "value": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "q": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "cite": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Phrasing content",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "ruby": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "s": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "samp": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "script supporting": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Script supporting",
                        'arguments': d({}),
                    }]],
                    "select": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "optgroup": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "options": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                    },
                                })],
                                "option": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                "script supporting": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Script supporting",
                                    'arguments': d({}),
                                }]],
                            })]],
                        },
                    })],
                    "slot": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Phrasing content",
                                'arguments': d({}),
                            }]],
                        },
                        "name": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "small": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "span": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "strong": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "sub": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "sup": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "textarea": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                    "time": <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "datetime": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "content": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Phrasing content",
                                    'arguments': d({}),
                                }]],
                            },
                            "value": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                            },
                        })],
                        "text": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                    })],
                    "u": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "var": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing content",
                        'arguments': d({}),
                    }]],
                    "wbr": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                })]
            },
            "Phrasing content": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "element": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Phrasing",
                        'arguments': d({}),
                    }]],
                    "text": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                })]]
            },
            "Script supporting": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "script": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "template": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Template",
                        'arguments': d({}),
                    }]],
                })]
            },
            "Sectioning content": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "article": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Flow content",
                        'arguments': d({}),
                    }]],
                    "aside": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Flow content",
                        'arguments': d({}),
                    }]],
                    "nav": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Flow content",
                        'arguments': d({}),
                    }]],
                    "section": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Flow content",
                        'arguments': d({}),
                    }]],
                })]
            },
            "Template": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Flow content",
                    'arguments': d({}),
                }]]
            },
        }),
        'namespaces': d({
            "Document": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "body": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "head": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "title": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "lang": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Edit": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "cite": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "datetime": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Embedded": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "audio": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "canvas": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "embed": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "iframe": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "img": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "math": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "object": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "picture": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "svg": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "video": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Embedded content": {
                'types': d({}),
                'namespaces': d({
                    "A": {
                        'types': d({}),
                        'namespaces': d({}),
                    },
                }),
            },
            "Flow": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "address": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "blockquote": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "cite": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "class": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "child": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "class": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "del": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "edit": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "details": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "summary": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "A": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "TU": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "heading": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "phrasing": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "dialog": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "open": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "O": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "div": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "dl": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "divs": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "dts": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "embedded": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "fieldset": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "legend": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "O": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "figure": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "caption": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "O": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "content": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "position": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "TU": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "botom": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "G": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                    "top": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "G": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "footer": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "form": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "header": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "heading": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "hr": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "id": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "child": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "id": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "ins": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "edit": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "main": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "map": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "name": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "menu": {
                                'types': d({}),
                                'namespaces': d({
                                    "A": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "TU": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "li": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                    "script supporting": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "object": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "ol": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "A": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "TU": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "li": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "content": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                    "value": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "script supporting": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "reversed": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "O": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "start": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "O": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "type": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "O": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "TU": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "1": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "a": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "A": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "i": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "I": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "p": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "pre": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "script supporting": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "search": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "sectioning": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "slot": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "name": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "table": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "caption": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "O": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "colgroups": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "A": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "ul": {
                                'types': d({}),
                                'namespaces': d({
                                    "A": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "TU": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "li": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                    "script supporting": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Flow content": {
                'types': d({}),
                'namespaces': d({
                    "A": {
                        'types': d({}),
                        'namespaces': d({
                            "TU": {
                                'types': d({}),
                                'namespaces': d({
                                    "flow": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                    "phrase": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Heading": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "h1": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "h2": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "h3": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "h4": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "h5": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "h6": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "hgroup": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content after": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "TU": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "p": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "G": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                            "script supporting": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "content before": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "TU": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "p": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "G": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                            "script supporting": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "heading": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "TU": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "h1 ": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "h2": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "h3": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "h4": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "h5": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "h6": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Phrasing": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "a": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "abbr": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "title": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "area": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "b": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "bdi": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "dir": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "bdo": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "dir": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "br": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "button": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "cite": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "class": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "child": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "class": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "code": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "data": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "value": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "datalist": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "options": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "A": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "TU": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "option": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "script supporting": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "phrasing": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "del": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "edit": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "dfn": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "title": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "em": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "embedded": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "i": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "id": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "child": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "id": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "input": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "ins": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "edit": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "kbd": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "label": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "link": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "map": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "name": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "mark": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "meta": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "meter": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "noscript": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "object": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "output": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "for": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "O": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "form": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "name": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "progress": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "max": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "value": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "q": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "cite": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "ruby": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "s": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "samp": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "script supporting": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "select": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "A": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "TU": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "optgroup": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "options": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "A": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({
                                                                                                    "G": {
                                                                                                        'types': d({}),
                                                                                                        'namespaces': d({}),
                                                                                                    },
                                                                                                }),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "option": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "script supporting": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "slot": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "name": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "small": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "span": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "strong": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "sub": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "sup": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "textarea": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "content": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "time": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "datetime": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "content": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "value": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "text": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "u": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "var": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "wbr": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Phrasing content": {
                'types': d({}),
                'namespaces': d({
                    "A": {
                        'types': d({}),
                        'namespaces': d({
                            "TU": {
                                'types': d({}),
                                'namespaces': d({
                                    "element": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                    "text": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Script supporting": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "script": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "template": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Sectioning content": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "article": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "aside": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "nav": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "section": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Template": {
                'types': d({}),
                'namespaces': d({}),
            },
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}