import { Node } from "reactflow";
import { INPUTS } from '../common';
import { serialize, createExporter } from '../exporter';
import { Attribute, NodeDefinition } from '../../types';
import { createNodeFnFactory } from '../common';

// Define the node for serialization, parsing and rendering
export const definition = {
  meta: {
    nodeType: "source",
    title: "Source",
    tagName: null,
    icon: "􀟗",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBlend",
    inputs: [],
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
          // these corrospond to property options for `in` and `in2` attributes
          { key: "sourceGraphic", title: "Source Graphic", cat: "source" },
          { key: "sourceAlpha", title: "Source Alpha", cat: "source" },
          { key: "backgroundImage", title: "Background Image", cat: "bg" },
          { key: "backgroundAlpha", title: "Background Alpha", cat: "bg" },
          { key: "fillPaint", title: "Fill Paint", cat: "paint" },
          { key: "strokePaint", title: "Stroke Paint", cat: "paint" },
        ]
      },
      defaultValue: 'sourceGraphic',
      serializer: (v: string) => serialize.string(v),
    }
  },
} as NodeDefinition;