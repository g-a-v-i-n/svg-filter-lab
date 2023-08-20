import { NodeSpecification } from '@/types';
import { serialize } from "../exporter";

export const specification = {
    meta: {
        nodeType: "displacementMap",
        title: "Displacement Map",
        tagName: "feDisplacementMap",
        icon: "􀙋",
        mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap",
        inputs: ['in1', 'in2'],
        outputs: ['result'],
        width: 220,
        attributeOrder: ['scale', 'xChannelSelector', 'yChannelSelector'],
    },
    attributes: {
        scale: {
            key: 'scale',
            name: 'scale',
            title: 'Scale',
            input: {
                type: 'number',
                min: 0,
                max: Infinity,
                step: 0.1,
                precision: 2,
            },
            defaultValue: 0,
            serializer: serialize.number,
        },
        xChannelSelector: {
            key: 'xChannelSelector',
            name: 'xChannelSelector',
            title: 'X Channel Selector',
            input: {
                type: 'enum',
                options: [
                    { key: "R", title: "Red" },
                    { key: "G", title: "Green" },
                    { key: "B", title: "Blue" },
                    { key: "A", title: "Alpha" }
                ]
            },
            defaultValue: 'A',
            serializer: serialize.string,
        },
        yChannelSelector: {
            key: 'yChannelSelector',
            name: 'yChannelSelector',
            title: 'Y Channel Selector',
            input: {
                type: 'enum',
                options: [
                    { key: "R", title: "Red" },
                    { key: "G", title: "Green" },
                    { key: "B", title: "Blue" },
                    { key: "A", title: "Alpha" }
                ]
            },
            defaultValue: 'A',
            serializer: serialize.string,
        }
    },
} as NodeSpecification;
