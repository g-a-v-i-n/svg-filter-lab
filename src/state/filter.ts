import { NodeDefinition } from "../types";
import { serialize } from "./exporter";
import { createNodeCreator } from "./common";
import { createNodeExporter } from "./exporter";

// This is using the same pattern as the other nodes, but it is not implemented as a node in the UI.
const definition = {
  meta: {
    nodeType: "filter",
    title: "Filter",
    tagName: "filter",
    icon: "􀮟", // Consider providing a new icon specific for Filter
    mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter",
    inputs: [],
    outputs: [], // Depending on your system, this could be different. 
    width: 220,
    attributeOrder: ['id', 'x', 'y', 'width', 'height', 'filterUnits', 'primitiveUnits'],
  },
  attributes: {
    id: {
      key: 'id',
      name: 'id',
      title: 'ID',
      input: {
        type: 'string',
      },
      defaultValue: 'filter',
      serializer: serialize.string,
    },
    x: {
      key: 'x',
      name: 'x',
      title: 'X Coordinate',
      input: {
        type: 'number',
      },
      defaultValue: 0,
      serializer: serialize.number,
    },
    y: {
      key: 'y',
      name: 'y',
      title: 'Y Coordinate',
      input: {
        type: 'number',
      },
      defaultValue: 0,
      serializer: serialize.number,
    },
    width: {
      key: 'width',
      name: 'width',
      title: 'Width',
      input: {
        type: 'number',
        min: 0,
        max: Infinity,
      },
      defaultValue: 100,  // Default width
      serializer: serialize.number,
    },
    height: {
      key: 'height',
      name: 'height',
      title: 'Height',
      input: {
        type: 'number',
        min: 0,
        max: Infinity,
      },
      defaultValue: 100,  // Default height
      serializer: serialize.number,
    },
    filterUnits: {
      key: 'filterUnits',
      name: 'filterUnits',
      title: 'Filter Units',
      input: {
        type: 'enum',
        options: [
          { key: "userSpaceOnUse", title: "User Space On Use" },
          { key: "objectBoundingBox", title: "Object Bounding Box" },
        ],
      },
      defaultValue: 'objectBoundingBox',
      serializer: serialize.string,
    },
    primitiveUnits: {
      key: 'primitiveUnits',
      name: 'primitiveUnits',
      title: 'Primitive Units',
      input: {
        type: 'enum',
        options: [
          { key: "userSpaceOnUse", title: "User Space On Use" },
          { key: "objectBoundingBox", title: "Object Bounding Box" },
        ],
      },
      defaultValue: 'userSpaceOnUse',
      serializer: serialize.string,
    }
  },
} as NodeDefinition;

export default {
  definition,
  createData: createNodeCreator(definition),
  exportData: createNodeExporter(definition),
}