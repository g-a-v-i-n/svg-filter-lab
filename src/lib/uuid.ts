import { customAlphabet } from "nanoid"

const nanoid = customAlphabet(
  "01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  8
)

export function uuid(type: string) {
  return type + "-" + nanoid()
}
