import { NodeDefinition } from "../../types";
import { createNodeFnFactory } from "../common";
import { serialize } from "../exporter";

export const definition = {
    meta: {
        nodeType: "flood",
        title: "Flood",
        tagName: "feFlood",
        icon: "􀣯",
        mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFlood",
        inputs: [],
        outputs: ['result'],
        width: 220,
        attributeOrder: ['floodColor', 'floodOpacity'],
    },
    attributes: {
        floodColor: {
            key: 'floodColor',
            name: 'flood-color',
            title: 'Flood Color',
            input: {
                type: 'color',
                format: 'hex', // Assume the color is in HEX format; adjust if needed.
            },
            defaultValue: '#000000',  // default to black
            serializer: serialize.string,
        },
        floodOpacity: {
            key: 'floodOpacity',
            name: 'flood-opacity',
            title: 'Flood Opacity',
            input: {
                type: 'number',
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2,
            },
            defaultValue: 1,  // default to fully opaque
            serializer: serialize.number,
        }
    },
} as NodeDefinition;

// export const createData = createNodeFnFactory(definition);
// export const exportData = createExporter(definition);
