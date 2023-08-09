import { UNSET } from "../../lib/unset"

export function parseProp(value) {
  if (typeof value === 'undefined') {
    return UNSET
  }
  return value
}


export function parseMatrix(value) {
  if (typeof value === 'undefined') {
    return UNSET
  }
  return value
}