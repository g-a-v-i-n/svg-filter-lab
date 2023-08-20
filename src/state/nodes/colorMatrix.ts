import { INPUTS } from '../common';
import { serialize } from '../exporter';
import { NodeSpecification, NodeState } from '@/types';

export const specification = {
  meta: {
    nodeType: "colorMatrix",
    title: "Color Matrix",
    tagName: "feColorMatrix",
    icon: "􀝦",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix",
    inputs: ['in1'],
    outputs: ['result'],
    width: 220,
    attributeOrder: ['type', 'matrixValues', 'hueRotateValues', 'luminanceToAlphaValues', 'saturateValues'],
  },
  attributes: {
    matrixValues: {
      key: 'matrixValues',
      name: 'values',
      title: 'Values',
      input: {
        type: 'matrix',
        rows: 4,
        cols: 5,
      },
      defaultValue: [
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
      ],
      serializer: serialize.matrix,
      isHidden: (data: NodeState['data']) => data.attributes.type.value !== 'matrix',
    },
    hueRotateValues: {
      key: 'hueRotateValues',
      name: 'values',
      title: 'Values',
      input: {
        type: 'number',
        min: 0,
        max: 360,
        step: 1,
        precision: 2,
      },
      defaultValue: 1,
      serializer: serialize.number,
      isHidden: (data: NodeState['data']) => data.attributes.type.value !== 'hueRotate',
    },
    luminanceToAlphaValues: {
      key: 'luminanceToAlphaValues',
      name: 'values',
      title: 'Values',
      input: {
        type: 'number',
        min: 0,
        max: 360,
        step: 1,
        precision: 2,
      },
      defaultValue: 1,
      serializer: serialize.number,
      isHidden: (data: NodeState['data']) => data.attributes.type.value !== 'luminanceToAlpha',
    },
    saturateValues: {
      key: 'saturateValues',
      name: 'values',
      title: 'Values',
      input: {
        type: 'number',
        min: 0,
        max: 360,
        step: 1,
        precision: 2,
      },
      defaultValue: 1,
      serializer: serialize.number,
      isHidden: (data: NodeState['data']) => data.attributes.type.value !== 'saturateValues',
    },
    type: {
      key: 'type',
      name: 'type',
      title: 'Type',
      input: {
        type: INPUTS.ENUM,
        options: [
          { key: "matrix", title: "Matrix", cat: "matrix" },
          { key: "hueRotate", title: "Hue Rotate", cat: "numeric" },
          { key: "luminanceToAlpha", title: "Luminance to Alpha", cat: "numeric" },
          { key: "saturate", title: "Saturate", cat: "numeric" },
        ]
      },
      defaultValue: 'matrix',
      serializer: serialize.string,
    }
  },
} as NodeSpecification
