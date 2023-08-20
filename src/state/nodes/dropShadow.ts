import { NodeDefinition } from "../../../types";
import { serialize } from "../exporter";

export const definition = {
    meta: {
        nodeType: "dropShadow",
        title: "Drop Shadow",
        tagName: "feDropShadow",
        icon: "􀣽", // Consider providing a new icon specific to Drop Shadow
        mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow",
        inputs: ['in1'],
        outputs: ['result'],
        width: 220,
        attributeOrder: ['dx', 'dy', 'stdDeviation', 'floodColor', 'floodOpacity'],
    },
    attributes: {
        dx: {
            key: 'dx',
            name: 'dx',
            title: 'X Offset',
            input: {
                type: 'number',
                min: -Infinity,
                max: Infinity,
                step: 0.1,
                precision: 2,
            },
            defaultValue: 1,
            serializer: serialize.number,
        },
        dy: {
            key: 'dy',
            name: 'dy',
            title: 'Y Offset',
            input: {
                type: 'number',
                min: -Infinity,
                max: Infinity,
                step: 0.1,
                precision: 2,
            },
            defaultValue: 1,
            serializer: serialize.number,
        },
        stdDeviation: {
            key: 'stdDeviation',
            name: 'stdDeviation',
            title: 'Blur Size',
            input: {
                type: 'number',
                min: 0,
                max: Infinity,
                step: 0.1,
                precision: 2,
            },
            defaultValue: 2,
            serializer: serialize.number,
        },
        floodColor: {
            key: 'floodColor',
            name: 'flood-color',
            title: 'Shadow Color',
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
            title: 'Opacity',
            input: {
                type: 'number',
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2,
            },
            defaultValue: 1,  // default to fully opaque
            serializer: serialize.number,
        },
    },
} as NodeDefinition;


// export const createData = createNodeFnFactory(definition);
// export const exportData = createExporter(definition);
