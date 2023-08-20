import { Node } from "reactflow";
import { INPUTS } from '../common';
import { serialize } from '../exporter';
import { Attribute, NodeDefinition } from '../../../types';

// Define the node for serialization, parsing and rendering
export const definition = {
  meta: {
    nodeType: "blend",
    title: "Blend",
    tagName: "feBlend",
    icon: "􀟗",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBlend",
    inputs: ['in1', 'in2'],
    outputs: ['result'],
    width: 200,
    attributeOrder: ['mode'],
  },
  attributes: {
    mode: {
      key: 'mode',
      name: 'mode',
      title: 'Mode',
      input: {
        type: INPUTS.ENUM,
        options: [
          { key: "normal", title: "Normal", cat: "normal" },
          { key: "multiply", title: "Multiply", cat: "normal" },
          { key: "screen", title: "Screen", cat: "normal" },
          { key: "darken", title: "Darken", cat: "normal" },
          { key: "lighten", title: "Lighten", cat: "normal" },
          { key: "color-dodge", title: "Color Dodge", cat: "normal" },
          { key: "color-burn", title: "Color Burn", cat: "normal" },
          { key: "hard-light", title: "Hard Light", cat: "normal" },
          { key: "soft-light", title: "Soft Light", cat: "normal" },
          { key: "difference", title: "Difference", cat: "normal" },
          { key: "exclusion", title: "Exclusion", cat: "normal" },
          { key: "hue", title: "Hue", cat: "normal" },
          { key: "saturation", title: "Saturation", cat: "normal" },
          { key: "color", title: "Color", cat: "normal" },
          { key: "luminosity", title: "Luminosity", cat: "normal" },
        ]
      },
      defaultValue: 'normal',
      serializer: (v: string) => serialize.string(v),
    }
  },
} as NodeDefinition;

export type BlendModeKey =
  | "normal"
  | "multiply"
  | "screen"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity"


export type NodeData = {
  in1: string | null
  in2: string | null
  attributes: {
    mode: Attribute<BlendModeKey>
  }
}

export type NodeState = Node<NodeData> & { selected: boolean }

export type Slice = {
  mode: {
    set: Function
  }
}




// export function createSlice() {
//   return createNodeSlice(tag.attributes)
// }

// export const createSlice = (set: (nextStateOrUpdater: any, shouldReplace?: boolean | undefined) => void) => ({
//   blendNode: {
//     mode: {
//       set: genericSetter(set, "mode"),
//     },
//   },
// })

// export const defaultData: NodeData = {
//   in1: null,
//   in2: null,
//   mode: {
//     value: "normal",
//     type: 'SELECT',
//   },
// }

// export function stringify(node: NodeState) {
//   const { id, data } = node
//   const { mode, in1, in2 } = data

//   const str = `<feBlend ${stringifyProp(
//     "mode",
//     mode
//   )} in="${in1}" in2="${in2}" result="${id}" />`
//   return str
// }

// export function parse(node): NodeState['data'] {
//   return {
//     in1: node.attributes.in1,
//     in2: node.attributes.in2,
//     mode: parseProp(node.attributes.mode)
//   }
// }
