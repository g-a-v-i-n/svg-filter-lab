import { UNSET, UnsetValue } from "../../lib/unset"

export function stringifyProp(key:string, value:string|number| UnsetValue) {
    let prop = ""

    if (value !== UNSET) {
        prop = `${key}="${value}"`
    }

    return prop
}