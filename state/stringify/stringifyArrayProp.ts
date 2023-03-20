import { UNSET, UnsetValue } from "../../lib/unset"

export function stringifyArrayProp(
  key: string,
  value: string[] | number[] | UnsetValue
) {
  let prop = ""

  if (value === UNSET) {
    return prop
  } else {
    prop = `${key}="${value.join(" ")}"`
  }
  return prop
}
