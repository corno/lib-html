import * as pm from 'pareto-core-map'
import * as pa from 'pareto-core-async'
import * as pd from 'pareto-core-dev'

const a = pm.wrapRawArray

import * as g_pub from "../../../../../pub"
import * as g_html from "../../../../../pub/dist/submodules/html"

import { A } from "../api.generated"

export const $$: A.getTestSet = ($) => {
    //pd.implementMe("IMPLEMENT A TESTSET")

    const html: g_html.T.Document = {
        'lang': [true, "NL"],
        'head': {
            'title': "FOO"
        },
        'body': a([
            ['phrase', a([
                ['text', "BAR"]
            ])]
        ])
    }

    g_pub.$b.serialize()({
        'document': html,
        'path': [$.testDirectory, "generated.html"]
    }, () => {}
    )

    return pa.asyncValue({
        elements: pm.wrapRawDictionary({})
    })
}