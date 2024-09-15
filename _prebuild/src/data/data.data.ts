import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/main"

import { $ as html } from "./models/html.data"

export const $: g_liana.T.CompileParameters<pd.SourceLocation> = {
    'outputs': pd.a([
        {
            'path': `../../pareto/src/data/submodules/html/glossary.generated.ts`,
            'data': {
                'settings': {
                    'annotations': false,
                    'datamodel': [true, {
                        'properties optional': false,
                        'reference mapping': ['string', null],
                    }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': html,

                    'terminal mapping': pd.d({
                        "Text that is not inter-element whitespace": ['string', null],
                        "tbd": ['string', null],
                        "integer": ['number', null],
                        "ordinal value": ['string', null],
                        "time": ['string', null],
                    }),
                },
            }
        }
    ])
}