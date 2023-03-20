import { matrixToString } from "../../lib/matrixToString"
import { UNSET, UnsetValue } from "../../lib/unset"

export function stringifyMatrixProp(
  key: string,
  value: number[][] | UnsetValue
) {
  let prop = ""

  if (value === UNSET) {
    return prop
  } else {
    prop = `${key}="${matrixToString(value as number[][])}"`
  }
  return prop
}
