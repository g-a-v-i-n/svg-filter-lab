import { Node } from "reactflow"

import { setNodeProp } from "../../lib/setNodeProp"
import { UnsetValue } from "../../lib/unset"
import { createNodePropSetter } from "../setters"

export const metadata = {
  type: "blend",
  title: "Blend",
  tagName: "feBlend",
  icon: "􀟗",
  mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBlend",
}

export type BlendModeKey = UnsetValue
| 'normal' 
| 'multiply' 
| 'screen' 
| 'darken' 
| 'lighten'
| 'color-dodge'
| 'color-burn'
| 'hard-light'
| 'soft-light'
| 'difference'
| 'exclusion'
| 'hue'
| 'saturation'
| 'color'
| 'luminosity'

export type NodeData = {
  in1: string | null,
  in2: string | null,
  result: string | null,
  mode: BlendModeKey
}

export type NodeState = Node<NodeData> & { selected: boolean }

export type Slice = {
  mode: {
    set: Function
  }
}

export const createSlice = (set:Function) => ({
  blendNode: {
    mode: {
      set: createNodePropSetter(set, "mode"),
    }
  },
})

export const defaultData: NodeData = {
  mode: 'normal',
}

export function render(node:NodeState) {
  const { id, data } = node
  const { mode, in1, in2, result } = data

    // The value is a list of numbers, which is interpreted differently depending on the value of the type attribute:
    let modeStr = ""

    // For type="matrix", values is a list of 20 matrix values (a00 a01 a02 a03 a04 a10 a11 … a34), separated by whitespace and/or a comma.
    if (mode !== 'unset') {
      modeStr = `mode="${mode}"`
    }

  const str = `<feBlend id="${id}" ${modeStr} in="${in1}" in2="${in2}" result="${result}" />`
  return str
}

export function importer(ast) {
  // console.log(ast)
  // const { id, mode, in: in1, in2, result } = ast
  // const data = { mode, in1, in2, result }
  // return { id, data }
}