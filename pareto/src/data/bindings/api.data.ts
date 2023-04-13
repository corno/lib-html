import * as pd from 'pareto-core-data'

import { algorithm, constructor, procedure } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "serialize": algorithm(procedure("main", {}, "Serialize")),
    })
}