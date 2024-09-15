"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ = void 0;
const pd = __importStar(require("pareto-core-data"));
const shorthands_1 = require("lib-liana/dist/submodules/liana/shorthands");
const d = pd.d;
exports.$ = {
    'imports': d({}),
    'terminal types': d({
        "Text that is not inter-element whitespace": null,
        "tbd": null,
    }),
    'global types': d({
        /*
        Elements to do:
        summary (details)

        dl:
        dd
        dt

        legend (fieldset)

        li (list/menu)

        media:
        track

        meta:
        style

        source (picture/mediaelement)

        ruby:
        rp
        rt

        select:
        optgroup
        option

        table:
        caption
        col
        colgroup
        tbody
        td
        tfoot
        th
        thead
        tr
        */
        "Document": (0, shorthands_1.globalType)({}, (0, shorthands_1.group)({
            "lang": (0, shorthands_1.prop)((0, shorthands_1.optional)((0, shorthands_1.terminal)("tbd"))),
            "head": (0, shorthands_1.prop)((0, shorthands_1.group)({
                "title": (0, shorthands_1.prop)((0, shorthands_1.terminal)("Text that is not inter-element whitespace"))
            })),
            "body": (0, shorthands_1.prop)((0, shorthands_1.component)("Flow content", {}))
        })),
        "Edit": (0, shorthands_1.globalType)({}, (0, shorthands_1.group)({
            "cite": (0, shorthands_1.prop)((0, shorthands_1.optional)((0, shorthands_1.terminal)("tbd"))),
            "datetime": (0, shorthands_1.prop)((0, shorthands_1.optional)((0, shorthands_1.terminal)("tbd"))),
        })),
        "Embedded": (0, shorthands_1.globalType)({}, (0, shorthands_1.taggedUnion)({
            "audio": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            // If the element has a src attribute: zero or more track elements, then transparent, but with no media element descendants.
            // If the element does not have a src attribute: zero or more source elements, then zero or more track elements, then transparent, but with no media element descendants.
            })),
            "embed": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            // src — Address of the resource
            // type — Type of embedded resource
            // width — Horizontal dimension
            // height — Vertical dimension
            // Any other attribute that has no namespace (see prose).
            })),
            "iframe": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            // src — Address of the resource
            // srcdoc — A document to render in the iframe
            // name — Name of content navigable
            // sandbox — Security rules for nested content
            // allow — Permissions policy to be applied to the iframe's contents
            // allowfullscreen — Whether to allow the iframe's contents to use requestFullscreen()
            // width — Horizontal dimension
            // height — Vertical dimension
            // referrerpolicy — Referrer policy for fetches initiated by the element
            // loading — Used when determining loading deferral
            })),
            "img": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            // alt — Replacement text for use when images are not available
            // src — Address of the resource
            // srcset — Images to use in different situations, e.g., high-resolution displays, small monitors, etc.
            // sizes — Image sizes for different page layouts
            // crossorigin — How the element handles crossorigin requests
            // usemap — Name of image map to use
            // ismap — Whether the image is a server-side image map
            // width — Horizontal dimension
            // height — Vertical dimension
            // referrerpolicy — Referrer policy for fetches initiated by the element
            // decoding — Decoding hint to use when processing this image for presentation
            // loading — Used when determining loading deferral
            // fetchpriority — Sets the priority for fetches initiated by the element
            })),
            "object": (0, shorthands_1.option)((0, shorthands_1.group)({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Embedded content", {}))
            })),
            "video": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            // src — Address of the resource
            // crossorigin — How the element handles crossorigin requests
            // poster — Poster frame to show prior to video playback
            // preload — Hints how much buffering the media resource will likely need
            // autoplay — Hint that the media resource can be started automatically when the page is loaded
            // playsinline — Encourage the user agent to display video content within the element's playback area
            // loop — Whether to loop the media resource
            // muted — Whether to mute the media resource by default
            // controls — Show user agent controls
            // width — Horizontal dimension
            // height — Vertical dimension
            //Content:
            //If the element has a src attribute: zero or more track elements, then transparent, but with no media element descendants.
            //If the element does not have a src attribute: zero or more source elements, then zero or more track elements, then transparent, but with no media element descendants.
            })),
            "canvas": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            // width — Horizontal dimension
            // height — Vertical dimension
            //content
            //Transparent, but with no interactive content descendants except for a elements, img elements with usemap attributes, button elements, input elements whose type attribute are in the Checkbox or Radio Button states,
            // input elements that are buttons, and select elements with a multiple attribute or a display size greater than 1.
            })),
            "math": (0, shorthands_1.option)((0, shorthands_1.group)({ /*FIXME*/})),
            "picture": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            //Zero or more source elements, followed by one img element, optionally intermixed with script-supporting elements.
            })),
            "svg": (0, shorthands_1.option)((0, shorthands_1.group)({ /*FIXME*/})),
        })),
        "Embedded content": (0, shorthands_1.globalType)({}, (0, shorthands_1.array)((0, shorthands_1.component)("Embedded", {}))),
        "Flow": (0, shorthands_1.globalType)({}, (0, shorthands_1.taggedUnion)({
            //generic attributes
            "id": (0, shorthands_1.option)((0, shorthands_1.group)({
                "id": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "child": (0, shorthands_1.prop)((0, shorthands_1.component)("Flow", {}))
            })),
            "class": (0, shorthands_1.option)((0, shorthands_1.group)({
                "class": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "child": (0, shorthands_1.prop)((0, shorthands_1.component)("Flow", {}))
            })),
            /*
            a'phrase' element does not exist in HTML, but this deviation from the standard is needed to handle whitespace properly
            */
            "script supporting": (0, shorthands_1.option)((0, shorthands_1.component)("Script supporting", {})),
            "embedded": (0, shorthands_1.option)((0, shorthands_1.component)("Embedded", {})),
            "details": (0, shorthands_1.option)((0, shorthands_1.group)({
                "summary": (0, shorthands_1.prop)((0, shorthands_1.array)((0, shorthands_1.taggedUnion)({
                    "phrasing": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
                    "heading": (0, shorthands_1.option)((0, shorthands_1.component)("Heading", {})),
                }))),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Flow content", {})),
            })),
            "address": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            //Flow content, but with no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants.Flow content, but with no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants.
            })),
            "blockquote": (0, shorthands_1.option)((0, shorthands_1.group)({
                "cite": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Flow content", {}))
            })),
            "del": (0, shorthands_1.option)((0, shorthands_1.group)({
                "edit": (0, shorthands_1.prop)((0, shorthands_1.component)("Edit", {})),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Flow content", {}))
            })),
            "dialog": (0, shorthands_1.option)((0, shorthands_1.group)({
                "open": (0, shorthands_1.prop)((0, shorthands_1.optional)((0, shorthands_1.terminal)("tbd"))),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Flow content", {})),
            })),
            "div": (0, shorthands_1.option)((0, shorthands_1.component)("Flow content", {})),
            "dl": (0, shorthands_1.option)((0, shorthands_1.taggedUnion)({
                "divs": (0, shorthands_1.option)((0, shorthands_1.group)({ /*FIXME*/})),
                "dts": (0, shorthands_1.option)((0, shorthands_1.group)({ /*FIXME*/})),
            })), //description list
            "fieldset": (0, shorthands_1.option)((0, shorthands_1.group)({
                /*FIXME*/
                "legend": (0, shorthands_1.prop)((0, shorthands_1.optional)((0, shorthands_1.group)({ /*FIXME*/}))),
                // disabled — Whether the descendant form controls, except any inside legend, are disabled
                // form — Associates the element with a form element
                // name — Name of the element to use in the form.elements API.
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Flow content", {})),
            })),
            "figure": (0, shorthands_1.option)((0, shorthands_1.group)({
                "caption": (0, shorthands_1.prop)((0, shorthands_1.optional)((0, shorthands_1.group)({
                    "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Flow content", {})),
                    "position": (0, shorthands_1.prop)((0, shorthands_1.taggedUnion)({
                        "top": (0, shorthands_1.option)((0, shorthands_1.group)({})),
                        "botom": (0, shorthands_1.option)((0, shorthands_1.group)({})),
                    }))
                }))),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Flow content", {})),
            })),
            "footer": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            //Flow content, but with no header or footer element descendants
            })),
            "form": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            // accept-charset — Character encodings to use for form submission
            // action — URL to use for form submission
            // autocomplete — Default setting for autofill feature for controls in the form
            // enctype — Entry list encoding type to use for form submission
            // method — Variant to use for form submission
            // name — Name of form to use in the document.forms API
            // novalidate — Bypass form control validation for form submission
            // target — Navigable for form submission
            // rel
            //"content": Flow content, but with no form element descendants.
            })),
            "header": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            //Flow content, but with no header or footer element descendants
            })),
            "hr": (0, shorthands_1.option)((0, shorthands_1.group)({})),
            "ins": (0, shorthands_1.option)((0, shorthands_1.group)({
                "edit": (0, shorthands_1.prop)((0, shorthands_1.component)("Edit", {})),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Flow content", {}))
            })),
            /*
            FIXME
            A hierarchically correct main element is one whose ancestor elements are limited to html, body, div, form
            without an accessible name, and autonomous custom elements. Each main element must be a hierarchically correct main element.
            */
            "main": (0, shorthands_1.option)((0, shorthands_1.component)("Flow content", {})),
            "map": (0, shorthands_1.option)((0, shorthands_1.group)({
                "name": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Flow content", {}))
            })),
            "menu": (0, shorthands_1.option)((0, shorthands_1.array)((0, shorthands_1.taggedUnion)({
                "li": (0, shorthands_1.option)((0, shorthands_1.component)("Flow content", {})),
                "script supporting": (0, shorthands_1.option)((0, shorthands_1.component)("Script supporting", {})),
            }))),
            "object": (0, shorthands_1.option)((0, shorthands_1.group)({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Flow content", {}))
            })),
            "ol": (0, shorthands_1.option)((0, shorthands_1.group)({
                "reversed": (0, shorthands_1.prop)((0, shorthands_1.optional)((0, shorthands_1.terminal)("tbd"))),
                "start": (0, shorthands_1.prop)((0, shorthands_1.optional)((0, shorthands_1.terminal)("integer"))),
                "type": (0, shorthands_1.prop)((0, shorthands_1.optional)((0, shorthands_1.taggedUnion)({
                    "1": (0, shorthands_1.option)((0, shorthands_1.group)({})),
                    "a": (0, shorthands_1.option)((0, shorthands_1.group)({})),
                    "A": (0, shorthands_1.option)((0, shorthands_1.group)({})),
                    "i": (0, shorthands_1.option)((0, shorthands_1.group)({})),
                    "I": (0, shorthands_1.option)((0, shorthands_1.group)({})),
                }))),
                "content": (0, shorthands_1.prop)((0, shorthands_1.array)((0, shorthands_1.taggedUnion)({
                    "li": (0, shorthands_1.option)((0, shorthands_1.group)({
                        "value": (0, shorthands_1.prop)((0, shorthands_1.terminal)("ordinal value")),
                        "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Flow content", {})),
                    })),
                    "script supporting": (0, shorthands_1.option)((0, shorthands_1.component)("Script supporting", {})),
                })))
            })),
            "p": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "pre": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "search": (0, shorthands_1.option)((0, shorthands_1.component)("Flow content", {})),
            "slot": (0, shorthands_1.option)((0, shorthands_1.group)({
                "name": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Flow content", {})),
            })),
            "table": (0, shorthands_1.option)((0, shorthands_1.group)({
                /*FIXME*/
                "caption": (0, shorthands_1.prop)((0, shorthands_1.optional)((0, shorthands_1.component)("Flow content", {}))),
                "colgroups": (0, shorthands_1.prop)((0, shorthands_1.array)((0, shorthands_1.group)({ /*FIXME*/}))),
                //"thead": prop(optional(component("Flow content", {}))),
            })),
            "ul": (0, shorthands_1.option)((0, shorthands_1.array)((0, shorthands_1.taggedUnion)({
                "li": (0, shorthands_1.option)((0, shorthands_1.component)("Flow content", {})),
                "script supporting": (0, shorthands_1.option)((0, shorthands_1.component)("Script supporting", {})),
            }))),
            "heading": (0, shorthands_1.option)((0, shorthands_1.component)("Heading", {})),
            "sectioning": (0, shorthands_1.option)((0, shorthands_1.component)("Sectioning content", {})),
        })),
        "Flow content": (0, shorthands_1.globalType)({}, (0, shorthands_1.array)((0, shorthands_1.taggedUnion)({
            "phrase": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "flow": (0, shorthands_1.option)((0, shorthands_1.component)("Flow", {})),
        }))),
        "Heading": (0, shorthands_1.globalType)({}, (0, shorthands_1.taggedUnion)({
            "h1": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "h2": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "h3": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "h4": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "h5": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "h6": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "hgroup": (0, shorthands_1.option)((0, shorthands_1.group)({
                "content before": (0, shorthands_1.prop)((0, shorthands_1.taggedUnion)({
                    "p": (0, shorthands_1.option)((0, shorthands_1.group)({ /*FIXME*/})),
                    "script supporting": (0, shorthands_1.option)((0, shorthands_1.component)("Script supporting", {})),
                })),
                "heading": (0, shorthands_1.prop)((0, shorthands_1.taggedUnion)({
                    "h1 ": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
                    "h2": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
                    "h3": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
                    "h4": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
                    "h5": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
                    "h6": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
                })),
                "content after": (0, shorthands_1.prop)((0, shorthands_1.taggedUnion)({
                    "p": (0, shorthands_1.option)((0, shorthands_1.group)({ /*FIXME*/})),
                    "script supporting": (0, shorthands_1.option)((0, shorthands_1.component)("Script supporting", {})),
                })),
            })),
        })),
        //"Heading content": globalType({}, array(component("Heading", {}))),
        "Script supporting": (0, shorthands_1.globalType)({}, (0, shorthands_1.taggedUnion)({
            "script": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            // src — Address of the resource
            // type — Type of script
            // nomodule — Prevents execution in user agents that support module scripts
            // async — Execute script when available, without blocking while fetching
            // defer — Defer script execution
            // crossorigin — How the element handles crossorigin requests
            // integrity — Integrity metadata used in Subresource Integrity checks [SRI]
            // referrerpolicy — Referrer policy for fetches initiated by the element
            // blocking — Whether the element is potentially render-blocking
            // fetchpriority — Sets the priority for fetches initiated by the element
            //content:
            //If there is no src attribute, depends on the value of the type attribute, but must match script content restrictions.
            //If there is a src attribute, the element must be either empty or contain only script documentation that also matches script content restrictions.
            })),
            "template": (0, shorthands_1.option)((0, shorthands_1.component)("Template", {})),
        })),
        //"Script supporting content": globalType({}, array(component("Script supporting", {}))),
        "Template": (0, shorthands_1.globalType)({}, (0, shorthands_1.component)("Flow content", {})),
        "Phrasing": (0, shorthands_1.globalType)({}, (0, shorthands_1.taggedUnion)({
            //generic attributes
            "id": (0, shorthands_1.option)((0, shorthands_1.group)({
                "id": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "child": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing", {}))
            })),
            "class": (0, shorthands_1.option)((0, shorthands_1.group)({
                "class": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "child": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing", {}))
            })),
            //elements
            "link": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            // href — Address of the hyperlink
            // crossorigin — How the element handles crossorigin requests
            // rel — Relationship between the document containing the hyperlink and the destination resource
            // media — Applicable media
            // integrity — Integrity metadata used in Subresource Integrity checks [SRI]
            // hreflang — Language of the linked resource
            // type — Hint for the type of the referenced resource
            // referrerpolicy — Referrer policy for fetches initiated by the element
            // sizes — Sizes of the icons (for rel="icon")
            // imagesrcset — Images to use in different situations, e.g., high-resolution displays, small monitors, etc. (for rel="preload")
            // imagesizes — Image sizes for different page layouts (for rel="preload")
            // as — Potential destination for a preload request (for rel="preload" and rel="modulepreload")
            // blocking — Whether the element is potentially render-blocking
            // color — Color to use when customizing a site's icon (for rel="mask-icon")
            // disabled — Whether the link is disabled
            // fetchpriority — Sets the priority for fetches initiated by the element
            // Also, the title attribute has special semantics on this element: Title of the link; CSS style sheet set name.
            })),
            "meta": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            // name — Metadata name
            // http-equiv — Pragma directive
            // content — Value of the element
            // charset — Character encoding declaration
            // media — Applicable media
            //where to be used:
            // If the charset attribute is present, or if the element's http-equiv attribute is in the Encoding declaration state: in a head element.
            // If the http-equiv attribute is present but not in the Encoding declaration state: in a head element.
            // If the http-equiv attribute is present but not in the Encoding declaration state: in a noscript element that is a child of a head element.
            // If the name attribute is present: where metadata content is expected.
            // If the itemprop attribute is present: where metadata content is expected.
            // If the itemprop attribute is present: where phrasing content is expected.                
            })),
            "noscript": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            //content: 
            // When scripting is disabled, in a head element: in any order, zero or more link elements, zero or more style elements, and zero or more meta elements.
            // When scripting is disabled, not in a head element: transparent, but there must be no noscript element descendants.
            // Otherwise: text that conforms to the requirements given in the prose.
            })),
            "object": (0, shorthands_1.option)((0, shorthands_1.group)({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing content", {}))
            })),
            "script supporting": (0, shorthands_1.option)((0, shorthands_1.component)("Script supporting", {})),
            "a": (0, shorthands_1.option)((0, shorthands_1.group)({ /*FIXMEX*/})),
            "button": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            // disabled — Whether the form control is disabled
            // form — Associates the element with a form element
            // formaction — URL to use for form submission
            // formenctype — Entry list encoding type to use for form submission
            // formmethod — Variant to use for form submission
            // formnovalidate — Bypass form control validation for form submission
            // formtarget — Navigable for form submission
            // name — Name of the element to use for form submission and in the form.elements API
            // popovertarget
            // popovertargetaction
            // type — Type of button
            // value — Value to be used for form submission  
            //content:
            //Phrasing content, but there must be no interactive content descendant and no descendant with the tabindex attribute specified.
            })),
            "input": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            // accept — Hint for expected file type in file upload controls
            // alt — Replacement text for use when images are not available
            // autocomplete — Hint for form autofill feature
            // checked — Whether the control is checked
            // dirname — Name of form control to use for sending the element's directionality in form submission
            // disabled — Whether the form control is disabled
            // form — Associates the element with a form element
            // formaction — URL to use for form submission
            // formenctype — Entry list encoding type to use for form submission
            // formmethod — Variant to use for form submission
            // formnovalidate — Bypass form control validation for form submission
            // formtarget — Navigable for form submission
            // height — Vertical dimension
            // list — List of autocomplete options
            // max — Maximum value
            // maxlength — Maximum length of value
            // min — Minimum value
            // minlength — Minimum length of value
            // multiple — Whether to allow multiple values
            // name — Name of the element to use for form submission and in the form.elements API
            // pattern — Pattern to be matched by the form control's value
            // placeholder — User-visible label to be placed within the form control
            // popovertarget
            // popovertargetaction
            // readonly — Whether to allow the value to be edited by the user
            // required — Whether the control is required for form submission
            // size — Size of the control
            // src — Address of the resource
            // step — Granularity to be matched by the form control's value
            // type — Type of form control
            // value — Value of the form control
            // width — Horizontal dimension
            // Also, the title attribute has special semantics on this element: Description of pattern (when used with pattern attribute).
            })),
            "label": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            //for — Associate the label with form control
            //content: Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
            })),
            "select": (0, shorthands_1.option)((0, shorthands_1.group)({
                // autocomplete — Hint for form autofill feature
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // multiple — Whether to allow multiple values
                // name — Name of the element to use for form submission and in the form.elements API
                // required — Whether the control is required for form submission
                // size — Size of the control
                "content": (0, shorthands_1.prop)((0, shorthands_1.array)((0, shorthands_1.taggedUnion)({
                    "option": (0, shorthands_1.option)((0, shorthands_1.group)({ /*FIXME*/})),
                    "optgroup": (0, shorthands_1.option)((0, shorthands_1.group)({
                        //label
                        //disabled
                        "options": (0, shorthands_1.prop)((0, shorthands_1.array)((0, shorthands_1.group)({
                        /*FIXME*/
                        })))
                    })),
                    "script supporting": (0, shorthands_1.option)((0, shorthands_1.component)("Script supporting", {})),
                }))),
            })),
            "textarea": (0, shorthands_1.option)((0, shorthands_1.group)({
                /*FIXME*/
                // autocomplete — Hint for form autofill feature
                // cols — Maximum number of characters per line
                // dirname — Name of form control to use for sending the element's directionality in form submission
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // maxlength — Maximum length of value
                // minlength — Minimum length of value
                // name — Name of the element to use for form submission and in the form.elements API
                // placeholder — User-visible label to be placed within the form control
                // readonly — Whether to allow the value to be edited by the user
                // required — Whether the control is required for form submission
                // rows — Number of lines to show
                // wrap — How the value of the form control is to be wrapped for form submission 
                "content": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
            })),
            "abbr": (0, shorthands_1.option)((0, shorthands_1.group)({
                "title": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing content", {})),
            })),
            "area": (0, shorthands_1.option)((0, shorthands_1.group)({ //FIXME: needs a 'map' ancestor
            /*FIXME*/
            // alt — Replacement text for use when images are not available
            // coords — Coordinates for the shape to be created in an image map
            // shape — The kind of shape to be created in an image map
            // href — Address of the hyperlink
            // target — Navigable for hyperlink navigation
            // download — Whether to download the resource instead of navigating to it, and its filename if so
            // ping — URLs to ping
            // rel — Relationship between the location in the document containing the hyperlink and the destination resource
            // referrerpolicy — Referrer policy for fetches initiated by the element
            })),
            "b": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "bdi": (0, shorthands_1.option)((0, shorthands_1.group)({
                "dir": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing content", {})),
            })),
            "bdo": (0, shorthands_1.option)((0, shorthands_1.group)({
                "dir": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing content", {})),
            })),
            "br": (0, shorthands_1.option)((0, shorthands_1.group)({})), //line break
            "cite": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "code": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "data": (0, shorthands_1.option)((0, shorthands_1.group)({
                "value": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing content", {})),
            })),
            "datalist": (0, shorthands_1.option)((0, shorthands_1.taggedUnion)({
                "phrasing": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
                "options": (0, shorthands_1.option)((0, shorthands_1.array)((0, shorthands_1.taggedUnion)({
                    "option": (0, shorthands_1.option)((0, shorthands_1.group)({ /*FIXME*/})),
                    "script supporting": (0, shorthands_1.option)((0, shorthands_1.component)("Script supporting", {})),
                }))),
            })),
            "del": (0, shorthands_1.option)((0, shorthands_1.group)({
                "edit": (0, shorthands_1.prop)((0, shorthands_1.component)("Edit", {})),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing content", {}))
            })),
            "dfn": (0, shorthands_1.option)((0, shorthands_1.group)({
                "title": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing content", {})),
            })),
            "em": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "i": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "ins": (0, shorthands_1.option)((0, shorthands_1.group)({
                "edit": (0, shorthands_1.prop)((0, shorthands_1.component)("Edit", {})),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing content", {}))
            })),
            "kbd": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "map": (0, shorthands_1.option)((0, shorthands_1.group)({
                "name": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing content", {}))
            })),
            "mark": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "meter": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            // value — Current value of the element
            // min — Lower bound of range
            // max — Upper bound of range
            // low — High limit of low range
            // high — Low limit of high range
            // optimum — Optimum value in gauge
            // content:
            // Phrasing content, but there must be no meter element descendants.
            })),
            "output": (0, shorthands_1.option)((0, shorthands_1.group)({
                "for": (0, shorthands_1.prop)((0, shorthands_1.optional)((0, shorthands_1.terminal)("tbd"))),
                "form": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")), //optional?
                "name": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")), //optional?
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing content", {})),
            })),
            "progress": (0, shorthands_1.option)((0, shorthands_1.group)({
                "value": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "max": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing content", {})),
            })),
            "q": (0, shorthands_1.option)((0, shorthands_1.group)({
                "cite": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing content", {})),
            })),
            "ruby": (0, shorthands_1.option)((0, shorthands_1.group)({
            /*FIXME*/
            // One or the other of the following:
            // Phrasing content, but with no ruby elements and with no ruby element descendants
            // A single ruby element that itself has no ruby element descendants
            // One or the other of the following:
            // One or more rt elements
            // An rp element followed by one or more rt elements, each of which is itself followed by an rp element            
            })),
            "s": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "samp": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "slot": (0, shorthands_1.option)((0, shorthands_1.group)({
                "name": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing content", {})),
            })),
            "small": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "span": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "strong": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "sub": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "sup": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "time": (0, shorthands_1.option)((0, shorthands_1.taggedUnion)({
                "datetime": (0, shorthands_1.option)((0, shorthands_1.group)({
                    "value": (0, shorthands_1.prop)((0, shorthands_1.terminal)("tbd")),
                    "content": (0, shorthands_1.prop)((0, shorthands_1.component)("Phrasing content", {}))
                })),
                "text": (0, shorthands_1.option)((0, shorthands_1.terminal)("time")),
            })),
            "u": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "var": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing content", {})),
            "wbr": (0, shorthands_1.option)((0, shorthands_1.group)({})), //line break opportunity
            "embedded": (0, shorthands_1.option)((0, shorthands_1.component)("Embedded", {})),
        })),
        "Phrasing content": (0, shorthands_1.globalType)({}, (0, shorthands_1.array)((0, shorthands_1.taggedUnion)({
            "text": (0, shorthands_1.option)((0, shorthands_1.terminal)("tbd")),
            "element": (0, shorthands_1.option)((0, shorthands_1.component)("Phrasing", {})),
        }))),
        "Sectioning content": (0, shorthands_1.globalType)({}, (0, shorthands_1.taggedUnion)({
            "article": (0, shorthands_1.option)((0, shorthands_1.component)("Flow content", {})),
            "aside": (0, shorthands_1.option)((0, shorthands_1.component)("Flow content", {})),
            "nav": (0, shorthands_1.option)((0, shorthands_1.component)("Flow content", {})),
            "section": (0, shorthands_1.option)((0, shorthands_1.component)("Flow content", {})),
        })),
    }),
};
