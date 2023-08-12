import { NodeDefinition } from "../../types";
import { createNodeFnFactory } from "../common";
import { serialize } from "../exporter";

export const definition = {
    meta: {
        nodeType: "morphology",
        title: "Morphology",
        tagName: "feMorphology",
        icon: "􀭉", // Consider providing a new icon specific to Morphology
        mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMorphology",
        inputs: ['in1'],
        outputs: ['result'],
        width: 220,
        attributeOrder: ['operator', 'radius'],
    },
    attributes: {
        operator: {
            key: 'operator',
            name: 'operator',
            title: 'Operator',
            input: {
                type: 'enum',
                options: [
                    { key: "erode", title: "Erode" },
                    { key: "dilate", title: "Dilate" }
                ]
            },
            defaultValue: 'erode',
            serializer: serialize.string,
        },
        radius: {
            key: 'radius',
            name: 'radius',
            title: 'Radius',
            input: {
                type: 'number',
                min: 0,
                max: Infinity,
                step: 0.1,
                precision: 2,
            },
            defaultValue: 1,
            serializer: serialize.number,
        }
    },
} as NodeDefinition;

export const createData = createNodeFnFactory(definition);