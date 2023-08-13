import { NodeDefinition } from "../../types";
import { createNodeFnFactory } from "../common";
import { serialize } from "../exporter";

export const definition = {
    meta: {
        nodeType: "turbulence",
        title: "Turbulence",
        tagName: "feTurbulence",
        icon: "􁎄", // Consider providing a new icon specific to Turbulence
        mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence",
        inputs: [],
        outputs: ['result'],
        width: 220,
        attributeOrder: ['type', 'baseFrequency', 'numOctaves', 'seed', 'stitchTiles'],
    },
    attributes: {
        type: {
            key: 'type',
            name: 'type',
            title: 'Type',
            input: {
                type: 'enum',
                options: [
                    { key: "fractalNoise", title: "Fractal Noise" },
                    { key: "turbulence", title: "Turbulence" }
                ]
            },
            defaultValue: 'turbulence',
            serializer: serialize.string,
        },
        baseFrequency: {
            key: 'baseFrequency',
            name: 'baseFrequency',
            title: 'Base Freq.',
            input: {
                type: 'number',
                min: 0,
                max: Infinity,
                step: 0.1,
                precision: 2,
            },
            defaultValue: 1,
            serializer: serialize.number,
        },
        numOctaves: {
            key: 'numOctaves',
            name: 'numOctaves',
            title: 'Octaves',
            input: { // this needs to be an integer
                type: 'number',
                min: 0,
                max: Infinity,
                step: 0.1,
                precision: 2,
            },
            defaultValue: 1,
            serializer: serialize.number,
        },
        seed: {
            key: 'seed',
            name: 'seed',
            title: 'Seed',
            input: {
                type: 'number',
                min: 0,
                max: Infinity,
                step: 1,
                precision: 0,
            },
            defaultValue: 0,
            serializer: serialize.number,
        },
        stitchTiles: {
            key: 'stitchTiles',
            name: 'stitchTiles',
            title: 'Stitch Tiles',
            input: {
                type: 'enum',
                options: [
                    { key: "stitch", title: "Stitch" },
                    { key: "noStitch", title: "No Stitch" }
                ]
            },
            defaultValue: 'noStitch',
            serializer: serialize.string,
        }
    },
} as NodeDefinition;

// export const createData = createNodeFnFactory(definition);