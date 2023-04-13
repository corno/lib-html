import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import { A } from "../api.generated"

export const $$: A.serialize = ($d,) => {
    return ($) => {
        $d.createFile(
            ($i) =>  {
                $i($.path, ($i) => {
                    $d.serializeXML($d.toXML($.document), $i)
                })
            },
            {
                'logError': ($) => {
                    pd.logDebugMessage(`FIX ERROR`)
                }
            }
        )
    }
}