import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"
import * as g_fp from "lib-fountain-pen"

import { A } from "../api.generated"

export const $$: A.serialize = ($d,) => {
    function serializeElement($: g_this.T.Element, $i: g_fp.SYNC.I.Line) {
        $i.snippet(`<${$.id}`)
        $d.dictionaryForEach($.attributes, ($) => {
            $i.snippet(` ${$.key}="${$.value}"`)
        })
        $i.snippet(`>`)
        pl.cc($.type, ($) => {
            switch ($[0]) {
                case 'elements':
                    pl.ss($, ($) => {
                        $i.indent(($i) => {
                            $.children.__forEach(($) => {
                                $i.nestedLine(($i) => {
                                    serializeElement($, $i)
                                })
                            })
                        })
                    })
                    break
                case 'mixed':
                    pl.ss($, ($) => {
                        $.children.__forEach(($) => {
                            switch ($[0]) {
                                case 'element':
                                    pl.ss($, ($) => {
                                        serializeElement($, $i)
                                    })
                                    break
                                case 'text':
                                    pl.ss($, ($) => {
                                        $i.snippet($)
                                    })
                                    break
                                default: pl.au($[0])
                            }
                        })

                    })
                    break
                default: pl.au($[0])
            }
        })
        $i.snippet(`</${$.id}>`)
    }
    return ($, $i) => {
        $i.line(`<!DOCTYPE html>`)
        $i.nestedLine(($i) => {
            serializeElement($.root, $i)
        })
    }
}