import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as a_fp from "lib-fountain-pen"
import * as a_main from "../../main"
import * as a_xml from "../../submodules/xml"
import * as a_foreach from "res-pareto-foreach"
import * as a_dictionary from "res-pareto-dictionary"
import * as a_array from "res-pareto-array"
import * as a_collation from "res-pareto-collation"

import { A } from "../api.generated"

export const $$: A.serialize = () => {
    return a_main.$a.serialize({
        'serializeXML': a_xml.$a.serialize({
            'dictionaryForEach': a_foreach.$r.createDictionaryForEach({
                'compare': a_collation.$r.localeIsABeforeB(),
            }),
        }),
        'toXML': a_main.$a.toXML({
            'filter': a_dictionary.$r.filter(),
            'merge': a_array.$r.merge(),
        }),
        'createFile': a_fp.$b.createFile(),
    })
}