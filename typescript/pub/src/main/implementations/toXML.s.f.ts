import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pm from 'pareto-core-map'

import * as g_in from "../../submodules/html"
import * as g_out from "../../submodules/xml"

import { A } from "../api.generated"

const d = pm.wrapRawDictionary
const a = pm.wrapRawArray

export const $$: A.toXML = () => {
    function mixedContentElement(id: string, attributes: g_out.T.Element.attributes, children: g_out.T.Element._ltype.mixed.children): g_out.T.Element {
        return {
            'attributes': attributes,
            'id': id,
            'type': ['mixed', {
                'children': children
            }]
        }
    }
    function nonTextElement(id: string, attributes: g_out.T.Element.attributes, children: g_out.T.Element._ltype.elements.children): g_out.T.Element {
        return {
            'attributes': attributes,
            'id': id,
            'type': ['elements', {
                'children': children
            }]
        }
    }

    function map_Document($: g_in.T.Document): g_out.T.Document {
        return {
            'root': nonTextElement("html", d({}), a([
                nonTextElement("head", d({}), a([
                    mixedContentElement("title", d({}), a([
                        ['text', $.head.title]
                    ]))
                ])),
                nonTextElement("body", d({}), map_Flow__content($.body)),

            ]))
        }
    }
    function map_Edit($: g_in.T.Edit): g_out.T.Element.attributes {
        return d({
            // 'cite': pl.cc($, ($) => pl.optional(
            //     $,
            //     ($) => [true, $],
            //     () => [false],
            // )),
            // 'datetime': pl.cc($, ($) => pl.optional(
            //     $,
            //     ($) => [true, $],
            //     () => [false],
            // )),
        })

    }
    function map_Embedded($: g_in.T.Embedded): g_out.T.Element {
        return pl.cc($, ($) => {
            switch ($[0]) {
                case 'audio': return pl.ss($, ($) => nonTextElement("audio", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'embed': return pl.ss($, ($) => nonTextElement("embed", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'iframe': return pl.ss($, ($) => nonTextElement("iframe", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'img': return pl.ss($, ($) => nonTextElement("img", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'object': return pl.ss($, ($) => nonTextElement("object", pm.wrapRawDictionary({}), map_Embedded__content($.content)))
                case 'video': return pl.ss($, ($) => nonTextElement("video", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'canvas': return pl.ss($, ($) => nonTextElement("canvas", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'math': return pl.ss($, ($) => nonTextElement("math", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'picture': return pl.ss($, ($) => nonTextElement("picture", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'svg': return pl.ss($, ($) => nonTextElement("svg", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                default: return pl.au($[1])
            }
        })
    }
    function map_Embedded__content($: g_in.T.Embedded__content): g_out.T.Element._ltype.elements.children {
        return $.map(($) => map_Embedded($))
    }
    function map_Flow($: g_in.T.Flow): g_out.T.Element {
        return pl.cc($, ($) => {
            switch ($[0]) {
                case 'id': return pl.ss($, ($) => map_Flow($.child))
                case 'class': return pl.ss($, ($) => map_Flow($.child))
                case 'script supporting': return pl.ss($, ($) => map_Script__supporting($))
                case 'embedded': return pl.ss($, ($) => map_Embedded($))
                case 'details': return pl.ss($, ($) => nonTextElement("details", pm.wrapRawDictionary({}), map_Flow__content($.content)))
                // /*({
                //     'summary': pl.cc($, ($) => $.map(($) => pl.cc($, ($) => {
                //         switch ($[0]) {
                //             case 'phrasing': return pl.ss($, ($) => nonTextElement("phrasing", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //             /*map_Phrasing__content($)*/
                //             case 'heading': return pl.ss($, ($) => nonTextElement("heading", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //             /*map_Heading__content($)*/
                //             default: return pl.au($[1])
                //         }
                //     }))),
                // })*/
                case 'address': return pl.ss($, ($) => nonTextElement("address", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'blockquote': return pl.ss($, ($) => nonTextElement("blockquote", pm.wrapRawDictionary({}), map_Flow__content($.content)))
                /*({
                    'cite': pl.cc($, ($) => $),
                })*/
                case 'del': return pl.ss($, ($) => nonTextElement("del", pm.wrapRawDictionary({}), map_Flow__content($.content)))
                /*({
                    'edit': pl.cc($, ($) => map_Edit($)),
                })*/
                case 'dialog': return pl.ss($, ($) => nonTextElement("dialog", pm.wrapRawDictionary({}), map_Flow__content($.content)))
                /*({
                    'open': pl.cc($, ($) => pl.optional(
                        $,
                        ($) => [true, $],
                        () => [false],
                    )),
                })*/
                case 'div': return pl.ss($, ($) => nonTextElement("div", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Flow__content($)*/
                case 'dl': return pl.ss($, ($) => nonTextElement("dl", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                // /*pl.cc($, ($) => {
                //     switch ($[0]) {
                //         case 'divs': return pl.ss($, ($) => nonTextElement("divs", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //        
                //         case 'dts': return pl.ss($, ($) => nonTextElement("dts", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //        
                //         default: return pl.au($[1])
                //     }
                // })*/
                case 'fieldset': return pl.ss($, ($) => nonTextElement("fieldset", pm.wrapRawDictionary({}), map_Flow__content($.content)))
                /*({
                    'legend': pl.cc($, ($) => pl.optional(
                        $,
                        ($) => [true, ({})],
                        () => [false],
                    )),
                })*/
                case 'figure': return pl.ss($, ($) => nonTextElement("figure", pm.wrapRawDictionary({}), map_Flow__content($.content)))
                // /*({
                //     'caption': pl.cc($, ($) => pl.optional(
                //         $,
                //         ($) => [true, ({
                //             'content': pl.cc($, ($) => map_Flow__content($)),
                //             'position': pl.cc($, ($) => pl.cc($, ($) => {
                //                 switch ($[0]) {
                //                     case 'top': return pl.ss($, ($) => nonTextElement("top", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //                    
                //                     case 'botom': return pl.ss($, ($) => nonTextElement("botom", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //                    
                //                     default: return pl.au($[1])
                //                 }
                //             })),
                //         })],
                //         () => [false],
                //     )),
                // })*/
                case 'footer': return pl.ss($, ($) => nonTextElement("footer", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'form': return pl.ss($, ($) => nonTextElement("form", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'header': return pl.ss($, ($) => nonTextElement("header", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'hr': return pl.ss($, ($) => nonTextElement("hr", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'ins': return pl.ss($, ($) => nonTextElement("ins", pm.wrapRawDictionary({}), map_Flow__content($.content)))
                /*({
                    'edit': pl.cc($, ($) => map_Edit($)),
                })*/
                case 'main': return pl.ss($, ($) => nonTextElement("main", pm.wrapRawDictionary({}), map_Flow__content($)))
                case 'map': return pl.ss($, ($) => nonTextElement("map", pm.wrapRawDictionary({}), map_Flow__content($.content)))
                /*({
                    'name': pl.cc($, ($) => $),
                })*/
                case 'menu': return pl.ss($, ($) => nonTextElement("menu", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                // /*$.map(($) => pl.cc($, ($) => {
                //     switch ($[0]) {
                //         case 'li': return pl.ss($, ($) => nonTextElement("li", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //         /*map_Flow__content($)*/
                //         case 'script supporting': return pl.ss($, ($) => nonTextElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //         /*map_Script__supporting__content($)*/
                //         default: return pl.au($[1])
                //     }
                // }))*/
                case 'object': return pl.ss($, ($) => nonTextElement("object", pm.wrapRawDictionary({}), map_Flow__content($.content)))
                case 'ol': return pl.ss($, ($) => nonTextElement("ol", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                // /*({
                //     'reversed': pl.cc($, ($) => pl.optional(
                //         $,
                //         ($) => [true, $],
                //         () => [false],
                //     )),
                //     'start': pl.cc($, ($) => pl.optional(
                //         $,
                //         ($) => [true, $],
                //         () => [false],
                //     )),
                //     'type': pl.cc($, ($) => pl.optional(
                //         $,
                //         ($) => [true, pl.cc($, ($) => {
                //             switch ($[0]) {
                //                 case '1': return pl.ss($, ($) => nonTextElement("1", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //                
                //                 case 'a': return pl.ss($, ($) => nonTextElement("a", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //                
                //                 case 'A': return pl.ss($, ($) => nonTextElement("A", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //                
                //                 case 'i': return pl.ss($, ($) => nonTextElement("i", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //                
                //                 case 'I': return pl.ss($, ($) => nonTextElement("I", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //                
                //                 default: return pl.au($[1])
                //             }
                //         })],
                //         () => [false],
                //     )),
                //     'content': pl.cc($, ($) => $.map(($) => pl.cc($, ($) => {
                //         switch ($[0]) {
                //             case 'li': return pl.ss($, ($) => nonTextElement("li", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //             /*({
                //                 'value': pl.cc($, ($) => $),
                //                 'content': pl.cc($, ($) => map_Flow__content($)),
                //             })*/
                //             case 'script supporting': return pl.ss($, ($) => nonTextElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //             /*map_Script__supporting__content($)*/
                //             default: return pl.au($[1])
                //         }
                //     }))),
                // })*/
                case 'p': return pl.ss($, ($) => mixedContentElement("p", pm.wrapRawDictionary({}), map_Phrasing__content($)))
                case 'pre': return pl.ss($, ($) => mixedContentElement("pre", pm.wrapRawDictionary({}), map_Phrasing__content($)))
                case 'search': return pl.ss($, ($) => nonTextElement("search", pm.wrapRawDictionary({}), map_Flow__content($)))
                case 'slot': return pl.ss($, ($) => nonTextElement("slot", pm.wrapRawDictionary({}), map_Flow__content($.content)))
                /*({
                    'name': pl.cc($, ($) => $),
                })*/
                case 'table': return pl.ss($, ($) => nonTextElement("table", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*({
                    'caption': pl.cc($, ($) => pl.optional(
                        $,
                        ($) => [true, map_Flow__content($)],
                        () => [false],
                    )),
                    'colgroups': pl.cc($, ($) => $.map(($) => ({}))),
                })*/
                case 'ul': return pl.ss($, ($) => nonTextElement("ul", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                // /*$.map(($) => pl.cc($, ($) => {
                //     switch ($[0]) {
                //         case 'li': return pl.ss($, ($) => nonTextElement("li", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //         /*map_Flow__content($)*/
                //         case 'script supporting': return pl.ss($, ($) => nonTextElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //         /*map_Script__supporting__content($)*/
                //         default: return pl.au($[1])
                //     }
                // }))*/
                case 'heading': return pl.ss($, ($) => map_Heading($))
                case 'sectioning': return pl.ss($, ($) => nonTextElement("sectioning", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Sectioning__content($)*/
                default: return pl.au($[1])
            }
        })
    }
    function map_Flow__content($: g_in.T.Flow__content): g_out.T.Element._ltype.elements.children {


        return $.map(($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'flow': return pl.ss($, ($) => pd.implementMe(`case`))
                case 'phrase': return pl.ss($, ($) => pd.implementMe(`case`))
                //case 'phrase': return pl.ss($, ($) => nonTextElement("phrase", pm.wrapRawDictionary({}),))
                default: return pl.au($[0])
            }
        }))
    }
    function map_Heading($: g_in.T.Heading): g_out.T.Element {
        return pl.cc($, ($) => {
            switch ($[0]) {
                case 'h1': return pl.ss($, ($) => mixedContentElement("h1", pm.wrapRawDictionary({}), map_Phrasing__content($)))
                case 'h2': return pl.ss($, ($) => mixedContentElement("h2", pm.wrapRawDictionary({}), map_Phrasing__content($)))
                case 'h3': return pl.ss($, ($) => mixedContentElement("h3", pm.wrapRawDictionary({}), map_Phrasing__content($)))
                case 'h4': return pl.ss($, ($) => mixedContentElement("h4", pm.wrapRawDictionary({}), map_Phrasing__content($)))
                case 'h5': return pl.ss($, ($) => mixedContentElement("h5", pm.wrapRawDictionary({}), map_Phrasing__content($)))
                case 'h6': return pl.ss($, ($) => mixedContentElement("h6", pm.wrapRawDictionary({}), map_Phrasing__content($)))
                case 'hgroup': return pl.ss($, ($) => nonTextElement("hgroup", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                // /*({
                //     'content before': pl.cc($, ($) => pl.cc($, ($) => {
                //         switch ($[0]) {
                //             case 'p': return pl.ss($, ($) => nonTextElement("p", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //            
                //             case 'script supporting': return pl.ss($, ($) => nonTextElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //             /*map_Script__supporting__content($)*/
                //             default: return pl.au($[1])
                //         }
                //     })),
                //     'heading': pl.cc($, ($) => pl.cc($, ($) => {
                //         switch ($[0]) {
                //             case 'h1 ': return pl.ss($, ($) => nonTextElement("h1 ", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //             /*map_Phrasing__content($)*/
                //             case 'h2': return pl.ss($, ($) => nonTextElement("h2", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //             /*map_Phrasing__content($)*/
                //             case 'h3': return pl.ss($, ($) => nonTextElement("h3", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //             /*map_Phrasing__content($)*/
                //             case 'h4': return pl.ss($, ($) => nonTextElement("h4", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //             /*map_Phrasing__content($)*/
                //             case 'h5': return pl.ss($, ($) => nonTextElement("h5", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //             /*map_Phrasing__content($)*/
                //             case 'h6': return pl.ss($, ($) => nonTextElement("h6", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //             /*map_Phrasing__content($)*/
                //             default: return pl.au($[1])
                //         }
                //     })),
                //     'content after': pl.cc($, ($) => pl.cc($, ($) => {
                //         switch ($[0]) {
                //             case 'p': return pl.ss($, ($) => nonTextElement("p", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //            
                //             case 'script supporting': return pl.ss($, ($) => nonTextElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //             /*map_Script__supporting__content($)*/
                //             default: return pl.au($[1])
                //         }
                //     })),
                // })*/
                default: return pl.au($[1])
            }
        })
    }
    // function map_Heading__content($: g_in.T.Heading__content): g_out.T.Element._ltype.elements.children {
    //     return $.map(($) => ['element', map_Phrasing($)])
    // }
    function map_Script__supporting($: g_in.T.Script__supporting): g_out.T.Element {
        return pl.cc($, ($) => {
            switch ($[0]) {
                case 'script': return pl.ss($, ($) => nonTextElement("script", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'template': return pl.ss($, ($) => nonTextElement("template", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Template($)*/
                default: return pl.au($[1])
            }
        })
    }
    // function map_Template($: g_in.T.Template): g_out.T.Element {
    //     return map_Flow__content($)
    // }
    function map_Phrasing($: g_in.T.Phrasing): g_out.T.Element {
        return pl.cc($, ($) => {
            switch ($[0]) {
                case 'id': return pl.ss($, ($) => map_Phrasing($.child))
                case 'class': return pl.ss($, ($) => map_Phrasing($.child))
                case 'text': return pl.ss($, ($) => mixedContentElement("text", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*$*/
                case 'link': return pl.ss($, ($) => mixedContentElement("link", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'meta': return pl.ss($, ($) => mixedContentElement("meta", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'noscript': return pl.ss($, ($) => mixedContentElement("noscript", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'object': return pl.ss($, ($) => mixedContentElement("object", pm.wrapRawDictionary({}), map_Phrasing__content($.content)))
                case 'script supporting': return pl.ss($, ($) => mixedContentElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Script__supporting__content($)*/
                case 'a': return pl.ss($, ($) => mixedContentElement("a", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'button': return pl.ss($, ($) => mixedContentElement("button", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'input': return pl.ss($, ($) => mixedContentElement("input", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'label': return pl.ss($, ($) => mixedContentElement("label", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'select': return pl.ss($, ($) => mixedContentElement("select", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                // /*({
                //     'content': pl.cc($, ($) => $.map(($) => pl.cc($, ($) => {
                //         switch ($[0]) {
                //             case 'option': return pl.ss($, ($) => mixedContentElement("option", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //            
                //             case 'optgroup': return pl.ss($, ($) => mixedContentElement("optgroup", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //             /*({
                //                 'options': pl.cc($, ($) => $.map(($) => ({}))),
                //             })*/
                //             case 'script supporting': return pl.ss($, ($) => mixedContentElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //             /*map_Script__supporting__content($)*/
                //             default: return pl.au($[1])
                //         }
                //     }))),
                // })*/
                case 'textarea': return pl.ss($, ($) => mixedContentElement("textarea", pm.wrapRawDictionary({}), pm.wrapRawArray([
                    ['text', $.content]
                ])))
                case 'abbr': return pl.ss($, ($) => mixedContentElement("abbr", pm.wrapRawDictionary({}), map_Phrasing__content($.content)))
                /*({
                    'title': pl.cc($, ($) => $),
                })*/
                case 'area': return pl.ss($, ($) => mixedContentElement("area", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                case 'b': return pl.ss($, ($) => mixedContentElement("b", pm.wrapRawDictionary({}), map_Phrasing__content($)))
                case 'bdi': return pl.ss($, ($) => mixedContentElement("bdi", pm.wrapRawDictionary({}), map_Phrasing__content($.content)))
                /*({
                    'dir': pl.cc($, ($) => $),
                })*/
                case 'bdo': return pl.ss($, ($) => mixedContentElement("bdo", pm.wrapRawDictionary({}), map_Phrasing__content($.content)))
                /*({
                    'dir': pl.cc($, ($) => $),
                })*/
                case 'br': return pl.ss($, ($) => mixedContentElement("br", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                case 'cite': return pl.ss($, ($) => mixedContentElement("cite", pm.wrapRawDictionary({}), map_Phrasing__content($)))
                case 'code': return pl.ss($, ($) => mixedContentElement("code", pm.wrapRawDictionary({}), map_Phrasing__content($)))
                case 'data': return pl.ss($, ($) => mixedContentElement("data", pm.wrapRawDictionary({}), map_Phrasing__content($.content)))
                /*({
                    'value': pl.cc($, ($) => $),
                })*/
                case 'datalist': return pl.ss($, ($) => mixedContentElement("datalist", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                // /*pl.cc($, ($) => {
                //     switch ($[0]) {
                //         case 'phrasing': return pl.ss($, ($) => mixedContentElement("phrasing", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //         /*map_Phrasing__content($)*/
                //         case 'options': return pl.ss($, ($) => mixedContentElement("options", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //         /*$.map(($) => pl.cc($, ($) => {
                //             switch ($[0]) {
                //                 case 'option': return pl.ss($, ($) => mixedContentElement("option", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //                
                //                 case 'script supporting': return pl.ss($, ($) => mixedContentElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //                 /*map_Script__supporting__content($)*/
                //                 default: return pl.au($[1])
                //             }
                //         }))*/
                //         default: return pl.au($[1])
                //     }
                // })*/
                case 'del': return pl.ss($, ($) => mixedContentElement("del", pm.wrapRawDictionary({}), map_Phrasing__content($.content)))
                /*({
                    'edit': pl.cc($, ($) => map_Edit($)),
                })*/
                case 'dfn': return pl.ss($, ($) => mixedContentElement("dfn", pm.wrapRawDictionary({}), map_Phrasing__content($.content)))
                /*({
                    'title': pl.cc($, ($) => $),
                })*/
                case 'em': return pl.ss($, ($) => mixedContentElement("em", pm.wrapRawDictionary({}), map_Phrasing__content($)))
                case 'i': return pl.ss($, ($) => mixedContentElement("i", pm.wrapRawDictionary({}), map_Phrasing__content($)))
                case 'ins': return pl.ss($, ($) => mixedContentElement("ins", pm.wrapRawDictionary({}), map_Phrasing__content($.content)))
                /*({
                    'edit': pl.cc($, ($) => map_Edit($)),
                })*/
                case 'kbd': return pl.ss($, ($) => mixedContentElement("kbd", pm.wrapRawDictionary({}), map_Phrasing__content($)))
                case 'map': return pl.ss($, ($) => mixedContentElement("map", pm.wrapRawDictionary({}), map_Phrasing__content($.content)))
                /*({
                    'name': pl.cc($, ($) => $),
                })*/
                case 'mark': return pl.ss($, ($) => mixedContentElement("mark", pm.wrapRawDictionary({}), map_Phrasing__content($)))
                case 'meter': return pl.ss($, ($) => mixedContentElement("meter", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'output': return pl.ss($, ($) => mixedContentElement("output", pm.wrapRawDictionary({}), map_Phrasing__content($.content)))
                /*({
                    'for': pl.cc($, ($) => pl.optional(
                        $,
                        ($) => [true, $],
                        () => [false],
                    )),
                    'form': pl.cc($, ($) => $),
                    'name': pl.cc($, ($) => $),
                })*/
                case 'progress': return pl.ss($, ($) => mixedContentElement("progress", pm.wrapRawDictionary({}), map_Phrasing__content($.content)))
                /*({
                    'value': pl.cc($, ($) => $),
                    'max': pl.cc($, ($) => $),
                })*/
                case 'q': return pl.ss($, ($) => mixedContentElement("q", pm.wrapRawDictionary({}), map_Phrasing__content($.content)))
                /*({
                    'cite': pl.cc($, ($) => $),
                })*/
                case 'ruby': return pl.ss($, ($) => mixedContentElement("ruby", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 's': return pl.ss($, ($) => mixedContentElement("s", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Phrasing__content($)*/
                case 'samp': return pl.ss($, ($) => mixedContentElement("samp", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Phrasing__content($)*/
                case 'slot': return pl.ss($, ($) => mixedContentElement("slot", pm.wrapRawDictionary({}), map_Phrasing__content($.content)))
                /*({
                    'name': pl.cc($, ($) => $),
                })*/
                case 'small': return pl.ss($, ($) => mixedContentElement("small", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Phrasing__content($)*/
                case 'span': return pl.ss($, ($) => mixedContentElement("span", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Phrasing__content($)*/
                case 'strong': return pl.ss($, ($) => mixedContentElement("strong", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Phrasing__content($)*/
                case 'sub': return pl.ss($, ($) => mixedContentElement("sub", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Phrasing__content($)*/
                case 'sup': return pl.ss($, ($) => mixedContentElement("sup", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Phrasing__content($)*/
                case 'time': return pl.ss($, ($) => mixedContentElement("time", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                // /*pl.cc($, ($) => {
                //     switch ($[0]) {
                //         case 'datetime': return pl.ss($, ($) => mixedContentElement("datetime", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //         /*({
                //             'value': pl.cc($, ($) => $),
                //             'content': pl.cc($, ($) => map_Phrasing__content($)),
                //         })*/
                //         case 'text': return pl.ss($, ($) => mixedContentElement("text", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                //         /*$*/
                //         default: return pl.au($[1])
                //     }
                // })*/
                case 'u': return pl.ss($, ($) => mixedContentElement("u", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Phrasing__content($)*/
                case 'var': return pl.ss($, ($) => mixedContentElement("var", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Phrasing__content($)*/
                case 'wbr': return pl.ss($, ($) => mixedContentElement("wbr", pm.wrapRawDictionary({}), pm.wrapRawArray([])))

                case 'embedded': return pl.ss($, ($) => mixedContentElement("embedded", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Embedded($)*/
                default: return pl.au($[1])
            }
        })
    }
    function map_Phrasing__content($: g_in.T.Phrasing__content): g_out.T.Element._ltype.mixed.children {
        return $.map(($) => ['element', map_Phrasing($)])
    }
    function map_Sectioning__content($: g_in.T.Sectioning__content): g_out.T.Element {
        return pl.cc($, ($) => {
            switch ($[0]) {
                case 'article': return pl.ss($, ($) => nonTextElement("article", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Flow__content($)*/
                case 'aside': return pl.ss($, ($) => nonTextElement("aside", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Flow__content($)*/
                case 'nav': return pl.ss($, ($) => nonTextElement("nav", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Flow__content($)*/
                case 'section': return pl.ss($, ($) => nonTextElement("section", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                /*map_Flow__content($)*/
                default: return pl.au($[1])
            }
        })
    }
    return ($) => {
        return map_Document($)
    }
}