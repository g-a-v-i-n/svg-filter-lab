import { serialize } from '../exporter';
import { NodeSpecification } from '@/types';

export const specification = {
  meta: {
    nodeType: "convolveMatrix",
    title: "Convolve Matrix",
    tagName: "feConvolveMatrix",
    icon: "􀦸",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix",
    inputs: ['in1'],
    outputs: ['result'],
    width: 200,
    attributeOrder: ['kernelMatrix'],
  },
  attributes: {
    kernelMatrix: {
      key: 'kernelMatrix',
      name: 'kernelMatrix',
      title: 'Kernal matrix',
      input: {
        type: 'matrix',
        rows: 3,
        cols: 3,
      },
      defaultValue: [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
      serializer: serialize.matrix,
    },
  },
} as NodeSpecification
