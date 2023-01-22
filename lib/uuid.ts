import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 16);

export function uuid() {
  return nanoid();
}
