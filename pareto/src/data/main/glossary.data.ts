import * as pd from 'pareto-core-data'

import {
    aExternalInterfaceReference,
    aInterface,
    aInterfaceMethod,
    aInterfaceReference,
    array, constructor, data, dictionary, externalTypeReference, glossaryParameter, group, imp,
    member, nested, procedure, ref, sInterface, sInterfaceMethod, sInterfaceReference, sfunction, streamconsumer, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
    }),
    'imports': d({
        "common": imp({ }),
        "html": imp({ }),
        "xml": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "SerializeParameters": type(group({
                "document": member(ref(externalTypeReference("html", "Document"))),
                "path": member(ref(externalTypeReference("common", "Path"))),
            }))
        }),
    },
    'asynchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
        }),
    },
    'synchronous': {
        'interfaces': d({
            "Nothing": sInterface(sInterfaceMethod(externalTypeReference("common", "Null"))),
        }),
        'algorithms': d({
            "ToXML": sfunction(externalTypeReference("xml", "Document"), data(externalTypeReference("html", "Document"))),
            "Serialize": procedure(data(typeReference("SerializeParameters")), sInterfaceReference("Nothing"))
        }),
    },
}