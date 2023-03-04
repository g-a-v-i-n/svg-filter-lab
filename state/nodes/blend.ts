import { Node } from "reactflow"
import { UnsetValue } from "../../lib/unset"
import { stringifyProp } from "../stringify/stringifyProp"
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
  in1: null,
  in2: null,
  mode: 'normal',
}

export function stringify(node:NodeState) {
  const { id, data } = node
  const { mode, in1, in2 } = data

  const str = `<feBlend ${stringifyProp('mode', mode)} in="${in1}" in2="${in2}" result="${id}" />`
  return str
}
