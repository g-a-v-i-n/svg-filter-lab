import { NodeDefinition } from "../../types";
import { createNodeFnFactory } from "../common";
import { serialize } from "../exporter";

export const definition = {
    meta: {
        nodeType: "image",
        title: "Image",
        tagName: "feImage",
        icon: "􀏆", // Consider providing a new icon specific to Image
        mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feImage",
        inputs: [],
        outputs: ['result'],
        width: 220,
        attributeOrder: ['href', 'x', 'y', 'width', 'height', 'preserveAspectRatio'],
    },
    attributes: {
        href: {
            key: 'href',
            name: 'xlink:href', // For SVG 1.1; use 'href' for SVG 2
            title: 'Image URL',
            input: {
                type: 'string',
            },
            defaultValue: '',
            serializer: serialize.string,
        },
        x: {
            key: 'x',
            name: 'x',
            title: 'X Coord.',
            input: {
                type: 'number',
                min: 0,
                max: Infinity,
                step: 1,
                precision: 1,
            },
            defaultValue: 0,
            serializer: serialize.number,
        },
        y: {
            key: 'y',
            name: 'y',
            title: 'Y Coord.',
            input: {
                type: 'number',
                min: 0,
                max: Infinity,
                step: 1,
                precision: 1,
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
                step: 1,
                precision: 1,
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
                step: 1,
                precision: 1,
            },
            defaultValue: 100,  // Default height
            serializer: serialize.number,
        },
        preserveAspectRatio: {
            key: 'preserveAspectRatio',
            name: 'preserveAspectRatio',
            title: 'Preserve Aspect Ratio',
            input: {
                type: 'string',
            },
            defaultValue: 'xMidYMid meet',
            serializer: serialize.string,
        }
    },
} as NodeDefinition;

export const createData = createNodeFnFactory(definition);