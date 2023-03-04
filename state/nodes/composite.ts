import { Node } from "reactflow"
import { addProperty } from "../../lib/addProperty"
import { UnsetValue } from "../../lib/unset"
import { stringifyProp } from "../stringify/stringifyProp"
import { createNodePropSetter } from "../setters"

export const metadata = {
  type: "composite",
  title: "Composite",
  tagName: "feComposite",
  icon: "􀯮",
  mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite",
}

export type OperatorKey = UnsetValue | "over" | "in" | "out" | "atop" | "xor" | "arithmetic"

export type NodeData = {
  in1: string | null,
  in2: string | null,
  result: string | null,
  operator: OperatorKey
  k1: number | UnsetValue
  k2: number | UnsetValue
  k3: number | UnsetValue
  k4: number | UnsetValue
}

export type NodeState = Node<NodeData> & { selected: boolean }

export type Slice = {
  operator: {
    set: Function,
  }
  k1: {
    set: Function,
  }
  k2: {
    set: Function,
  }
  k3: {
    set: Function,
  }
  k4: {
    set: Function,
  }
}

export const createSlice = (set:Function) => ({
  compositeNode: {
    operator: {
      set: createNodePropSetter(set, "operator"),
    },
    k1: {
      set: createNodePropSetter(set, "k1"),
    },
    k2: {
      set: createNodePropSetter(set, "k2"),
    },
    k3: {
      set: createNodePropSetter(set, "k3"),
    },
    k4: {
      set: createNodePropSetter(set, "k4"),
    },
  },
})

export const defaultData: NodeData = {
  in1: null,
  in2: null,
  result: null,
  operator: "over",
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
}

export function exporter({ data }: NodeState) {
  const filterStr = `
    <feComposite
      ${addProperty("in", data.in1)}
      ${addProperty("in2", data.in2)}
      ${addProperty("operator", data.operator)}
      ${addProperty("k1", data.k1)}
      ${addProperty("k2", data.k2)}
      ${addProperty("k3", data.k3)}
      ${addProperty("k4", data.k4)}
      ${addProperty("result", data.result)}/>
  `

  return ""
}


export function stringify(node:NodeState) {
  const { id, data } = node
  const { in1, in2, operator, k1, k2, k3, k4 } = data

  let kProperties = ""

  if (operator === "arithmetic") {
    kProperties = `${stringifyProp('k1', k1)} ${stringifyProp('k2', k2)} ${stringifyProp('k3', k3)} ${stringifyProp('k4', k4)} `
  }


  const str = `<feComposite in2="${in2}" operator="${operator}" kProperties in="${in1}" result="${id}" />`
  return str
}