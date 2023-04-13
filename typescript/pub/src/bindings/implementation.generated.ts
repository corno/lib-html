import { API } from "./api.generated"
import { $$ as iserialize } from "./implementations/serialize.b"

export const $api: API = {
    'serialize': iserialize,
}