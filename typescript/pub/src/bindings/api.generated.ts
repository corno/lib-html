import * as pt from 'pareto-core-types'

import * as g_main from "../main"

export namespace D {
    
}

export namespace A {
    
    export type serialize = () => g_main.SYNC.A.P.Serialize
}

export type API = {
    readonly 'serialize': A.serialize
}