import * as pt from 'pareto-core-types'

import * as g_array from "res-pareto-array"
import * as g_dictionary from "res-pareto-dictionary"
import * as g_fp from "lib-fountain-pen"
import * as g_this from "./glossary"
import * as g_xml from "../submodules/xml"

export namespace D {
    
    export type serialize = {
        readonly 'createFile': g_fp.SYNC.A.P.CreateFile
        readonly 'serializeXML': g_xml.SYNC.A.P.Serialize
        readonly 'toXML': g_this.SYNC.A.F.ToXML
    }
    
    export type toXML = {
        readonly 'filter': g_dictionary.SYNC.A.F.Filter
        readonly 'merge': g_array.SYNC.A.F.Merge
    }
}

export namespace A {
    
    export type serialize = ($d: D.serialize, ) => g_this.SYNC.A.P.Serialize
    
    export type toXML = ($d: D.toXML, ) => g_this.SYNC.A.F.ToXML
}

export type API = {
    readonly 'serialize': A.serialize
    readonly 'toXML': A.toXML
}