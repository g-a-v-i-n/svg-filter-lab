import { serialize } from '../exporter';
import { NodeSpecification } from '@/types';

// Define the node for serialization, parsing and rendering
export const specification = {
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
} as NodeSpecification;