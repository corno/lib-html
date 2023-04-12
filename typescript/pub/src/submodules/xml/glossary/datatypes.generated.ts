import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"

export namespace N {}

export namespace T {
    
    export namespace Document {
        
        export type root = T.Element
    }
    
    export type Document = {
        readonly 'root': T.Element
    }
    
    export namespace Element {
        
        export namespace attributes {
            
            export type D = string
        }
        
        export type attributes = pt.Dictionary<string>
        
        export type id = string
        
        export namespace _ltype {
            
            export namespace elements {
                
                export namespace children {
                    
                    export type A = T.Element
                }
                
                export type children = pt.Array<T.Element>
            }
            
            export type elements = {
                readonly 'children': pt.Array<T.Element>
            }
            
            export namespace mixed {
                
                export namespace children {
                    
                    export namespace A {
                        
                        export type element = T.Element
                        
                        export type text = string
                    }
                    
                    export type A = 
                        | ['element', T.Element]
                        | ['text', string]
                }
                
                export type children = pt.Array<
                    | ['element', T.Element]
                    | ['text', string]
                >
            }
            
            export type mixed = {
                readonly 'children': pt.Array<
                    | ['element', T.Element]
                    | ['text', string]
                >
            }
        }
        
        export type _ltype = 
            | ['elements', {
                readonly 'children': pt.Array<T.Element>
            }]
            | ['mixed', {
                readonly 'children': pt.Array<
                    | ['element', T.Element]
                    | ['text', string]
                >
            }]
    }
    
    export type Element = {
        readonly 'attributes': pt.Dictionary<string>
        readonly 'id': string
        readonly 'type': 
            | ['elements', {
                readonly 'children': pt.Array<T.Element>
            }]
            | ['mixed', {
                readonly 'children': pt.Array<
                    | ['element', T.Element]
                    | ['text', string]
                >
            }]
    }
}