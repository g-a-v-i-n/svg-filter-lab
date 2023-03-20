import { Node } from "reactflow"
import { UnsetValue } from "../../lib/unset"
import { stringifyProp } from "../stringify/stringifyProp"
import { createNodePropSetter } from "../setters"
import { stringifyMatrixProp } from "../stringify/stringifyMatrixProp"
import { stringifyBooleanProp } from "../stringify/stringifyBooleanProp"

export const metadata = {
  type: "specularLighting",
  title: "Specular Lighting",
  tagName: "feSpecularLighting",
  icon: "􀦸",
  mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence",
  inputs: ['in1', 'in2'],
  outputs: ['result'],
  width: 200,
}

export type NodeData = {
  in1: string | null
}

export type NodeState = Node<NodeData> & { selected: boolean }

export type Slice = {}

export const createSlice = (set: Function) => ({
  specularLightingNode: {},
})

export const defaultData: NodeData = {
  in1: null,
}

// if the value value in state === null
// in the renderer, do not add the attribute
// in the node component, use a HTML `placeholder` instead of value
export function stringify(node: NodeState) {
  const { id, data } = node
  const { in1 } = data

  const str = `<feSpecularLighting in="${in1}" result="${id}" />`
  return str
}

export function parse(node):NodeState {
  return {
    ...node.attributes
  }
}