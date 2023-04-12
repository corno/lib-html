import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as main } from "./main/module.data"
import { $ as html } from "./submodules/html/module.data"
import { $ as xml } from "./submodules/xml/module.data"

export const $: mproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "HTML",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null,
        "res-pareto-foreach": null,
        "lib-fountain-pen": null,
    }),
    'type': ['library', {
        'main': main,
        'submodules': d({
            "html": html,
            "xml": xml,
        }),
        'bindings': [false],
        'executables': d({}),
        'test': {
            'dependencies': d({
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'parameters': d({}),
                        'imports': d({}),
                        'root': {
                            'namespaces': d({}),
                            'types': d({}),
                        },
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                    },
                    'imports': d({}),
                },
                'api': {
                    'root': {
                        'algorithms': d({}),
                    },
                    'imports': d({}),
                },
            },
            'imports': d({}),
        },
    }],
}