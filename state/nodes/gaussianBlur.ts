import { Node } from "reactflow";
import { INPUTS } from '../common';
import { serialize, serializeTag } from '../exporter';
import { Attribute, NodeDefinition } from '../../types';
import { createNodeFnFactory } from '../common';

// Define the node for serialization, parsing and rendering
export const definition = {
  meta: {
    nodeType: "gaussianBlur",
    title: "Gaussian Blur",
    tagName: "feGaussianBlur",
    icon: "􀴿",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feGaussianBlur",
    inputs: ['in1'],
    outputs: ['result'],
    width: 200,
    attributeOrder: ['stdDeviation'],
  },
  attributes: {
    stdDeviation: {
      key: 'stdDeviation',
      name: 'stdDeviation',
      title: 'Std. Dev',
      input: {
        type: 'number',
        min: 0,
        max: 1000,
        step: 1,
        precision: 2,
      },
      defaultValue: 0,
      serializer: (v: number) => serialize.number(v),
    }
  },
} as NodeDefinition;

export const createData = createNodeFnFactory(definition);


export type NodeData = {
  in1: string | null
  in2: string | null
  attributes: {
    mode: number
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
