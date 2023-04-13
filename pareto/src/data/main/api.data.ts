import * as pd from 'pareto-core-data'

import { algorithm, constructor, dependent, procedure, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "toXML": algorithm(sfunction("this", {}, "ToXML"), {}, dependent(null, {
            "merge": sfunction("array", {}, "Merge"),
            "filter": sfunction("dictionary", {}, "Filter"),
        }, {})),
        "serialize": algorithm(procedure("this", {}, "Serialize"), {}, dependent(null, {
            "toXML": sfunction("this", {}, "ToXML"),
            "serializeXML": procedure("xml", {}, "Serialize"),
            "createFile": procedure("fp", {}, "CreateFile"),
        }, {})),
    }),
}