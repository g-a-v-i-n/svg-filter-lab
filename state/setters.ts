import { set as _set } from "lodash"
import { UNSET, UnsetValue } from "../lib/unset"
import { State, Node } from "./store"

export function createNodePropSetter(set: Function, path: string) {
  const setter = (id: string, newValue: any) => {
    set((state: State) => {
      const index = state.nodes.findIndex((node) => node.id === id)
      const root = state.nodes[index].data
      _set(root, path, newValue)
    })
  }
  return setter
}

export function createNodeMatrixSetter(set: Function, path: string) {
  const setter = (
    id: string,
    newValue: number | UnsetValue,
    i: number,
    j: number
  ) => {
    set((state: State) => {
      const index = state.nodes.findIndex((node: Node) => node.id === id)
      const root = state.nodes[index].data

      if (newValue === UNSET) {
        _set(root, path, newValue)
      } else {
        _set(root, `${path}[${i}][${j}]`, newValue)
      }
    })
  }
  return setter
}
