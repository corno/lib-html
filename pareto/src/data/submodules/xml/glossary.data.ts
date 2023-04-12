import * as pd from 'pareto-core-data'

import {
    aInterface, aInterfaceMethod, aInterfaceReference, array, boolean, choice, data, dictionary, glossaryParameter, group, imp, member, parametrizedType,
    procedure,
    ref, sExternalInterfaceReference, streamconsumer, string, taggedUnion, type, typeParameter, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
    }),
    'imports': d({
        "fp": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Document": type(group({
                "root": member(ref(typeReference("Element"))),
            })),
            "Element": type(group({
                "id": member(string()),
                "attributes": member(dictionary(string())),
                "type": member(taggedUnion({
                    "mixed": group({
                        "children": member(array(taggedUnion({
                            "text": string(),
                            "element": ref(typeReference("Element"))
                        })))
                    }),
                    "elements": group({
                        "children": member(array(ref(typeReference("Element"))))
                    })
                }))
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({
        }),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "Serialize": procedure(data(typeReference("Document")), sExternalInterfaceReference("fp", "Block"))
        }),

    },
}