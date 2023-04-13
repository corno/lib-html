import { API } from "./api.generated"
import { $$ as iserialize } from "./implementations/serialize.s.p"
import { $$ as itoXML } from "./implementations/toXML.s.f"

export const $api: API = {
    'serialize': iserialize,
    'toXML': itoXML,
}