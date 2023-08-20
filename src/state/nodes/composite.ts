import { serialize } from '../exporter';
import { NodeState, NodeSpecification } from '@/types';

// Define the node for serialization, parsing and rendering
export const specification = {
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
      isHidden: (data: NodeState['data']) => data.attributes.operator.value !== 'arithmatic',
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
      isHidden: (data: NodeState['data']) => data.attributes.operator.value !== 'arithmatic',
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
      isHidden: (data: NodeState['data']) => data.attributes.operator.value !== 'arithmatic',
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
      isHidden: (data: NodeState['data']) => data.attributes.operator.value !== 'arithmatic',
    },
  },
} as NodeSpecification;