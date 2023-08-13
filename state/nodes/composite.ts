import { Node } from "reactflow";
import { INPUTS } from '../common';
import { serialize, serializeTag } from '../exporter';
import { Attribute, NodeDefinition } from '../../types';
import { createNodeFnFactory } from '../common';

// Define the node for serialization, parsing and rendering
export const definition = {
  meta: {
    nodeType: "composite",
    title: "Composite",
    tagName: "feComposite",
    icon: "􀧏",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite",
    inputs: ['in1', 'in2'],
    outputs: ['result'],
    width: 200,
    attributeOrder: ['operator', 'k1', 'k2', 'k3', 'k4'],
  },
  attributes: {
    operator: {
      key: 'operator',
      name: 'operator',
      title: 'Operator',
      input: {
        type: 'enum',
        options: [
          { key: "over", title: "Over", cat: "normal" },
          { key: "in", title: "In", cat: "normal" },
          { key: "out", title: "Out", cat: "normal" },
          { key: "atop", title: "Atop", cat: "normal" },
          { key: "xor", title: "Xor", cat: "normal" },
          { key: "arithmetic", title: "Arithmetic", cat: "normal" },
        ]
      },
      defaultValue: 'over',
      serializer: (v: string) => serialize.string(v),
    },
    k1: {
      key: 'k1',
      name: 'k1',
      title: 'K1',
      input: {
        type: 'number',
        min: 0,
        max: Infinity,
        step: 1,
        precision: 1,
      },
      defaultValue: 1,
      serializer: serialize.number,
      isHidden: (data: NodeData) => data.attributes.operator.value !== 'arithmatic',
    },
    k2: {
      key: 'k2',
      name: 'k2',
      title: 'K2',
      input: {
        type: 'number',
        min: 0,
        max: Infinity,
        step: 1,
        precision: 1,
      },
      defaultValue: 1,
      serializer: serialize.number,
      isHidden: (data: NodeData) => data.attributes.operator.value !== 'arithmatic',
    },
    k3: {
      key: 'k3',
      name: 'k3',
      title: 'K3',
      input: {
        type: 'number',
        min: 0,
        max: Infinity,
        step: 1,
        precision: 1,
      },
      defaultValue: 1,
      serializer: serialize.number,
      isHidden: (data: NodeData) => data.attributes.operator.value !== 'arithmatic',
    },
    k4: {
      key: 'k4',
      name: 'k4',
      title: 'K4',
      input: {
        type: 'number',
        min: 0,
        max: Infinity,
        step: 1,
        precision: 1,
      },
      defaultValue: 1,
      serializer: serialize.number,
      isHidden: (data: NodeData) => data.attributes.operator.value !== 'arithmatic',
    },
  },
} as NodeDefinition;

// export const createData = createNodeFnFactory(definition);

// export const exportData = createExporter(definition);

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
