import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_html from "../../submodules/html"
import * as g_xml from "../../submodules/xml"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type ToXML = ($: g_html.T.Document) => g_xml.T.Document
        }
    }
}