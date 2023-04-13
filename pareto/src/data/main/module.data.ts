import * as pd from 'pareto-core-data'

import { external, sibling, submodule, tempSubmodule, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "xml": tempSubmodule("xml"),
                "html": tempSubmodule("html"),
                "common": external("glo-pareto-common"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                //"common": "glo-pareto-common",
                "this": this_(),
                "array": external("res-pareto-array"),
                "dictionary": external("res-pareto-dictionary"),
                "fp": external("lib-fountain-pen"),
                "xml": submodule("xml"),
            }),
        }
    },
    'implementation': ['typescript', null],
}