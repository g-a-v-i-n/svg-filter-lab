import { UNSET, UnsetValue } from "../../lib/unset"

export function stringifyBooleanProp(key:string, value:boolean | UnsetValue) {
    let prop = ""

    if (value !== UNSET) {
        prop = `${key}="${value ? 'true' : 'false'}"`
    }

    return prop
}