import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_html from "../../submodules/html"
import * as g_xml from "../../submodules/xml"

export namespace N {}

export namespace T {
    
    export namespace SerializeParameters {
        
        export type document = g_html.T.Document
        
        export type path = g_common.T.Path
    }
    
    export type SerializeParameters = {
        readonly 'document': g_html.T.Document
        readonly 'path': g_common.T.Path
    }
}