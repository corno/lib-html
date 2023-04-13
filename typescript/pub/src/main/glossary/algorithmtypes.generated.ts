import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_html from "../../submodules/html"
import * as g_xml from "../../submodules/xml"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type Nothing = ($: g_common.T.Null, ) => void
    }
    
    export namespace A {
        
        
        export namespace P {
            export type Serialize = ($: T.SerializeParameters, $i: SYNC.I.Nothing) => void
        }
        
        
        export namespace F {
            export type ToXML = ($: g_html.T.Document) => g_xml.T.Document
        }
    }
}