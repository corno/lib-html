import { API } from "./api.generated"
import { $$ as itoXML } from "./implementations/toXML.s.f"

export const $api: API = {
    'toXML': itoXML,
}