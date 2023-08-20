import { NodeDefinition } from "../../../types";
import { serialize } from "../exporter";

export const definition = {
    meta: {
        nodeType: "offset",
        title: "Offset",
        tagName: "feOffset",
        icon: "􀬑",
        mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feOffset",
        inputs: ['in1'],
        outputs: ['result'],
        width: 220,
        attributeOrder: ['dx', 'dy'],
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
            defaultValue: 0,
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
            defaultValue: 0,
            serializer: serialize.number,
        }
    },
} as NodeDefinition;

// export const createData = createNodeFnFactory(definition);