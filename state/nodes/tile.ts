import { NodeDefinition } from "../../types";
import { createNodeFnFactory } from "../common";
import { serialize } from "../exporter";

export const definition = {
    meta: {
        nodeType: "tile",
        title: "Tile",
        tagName: "feTile",
        icon: "􀫐", // Consider providing a new icon specific to Tile
        mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTile",
        inputs: ['in1'],
        outputs: ['result'],
        width: 220,
        attributeOrder: [],  // No specific attributes to order for feTile; it typically uses input from other filter operations.
    },
    attributes: {
        // For feTile, there aren't any unique SVG attributes aside from the 'in' input.
        // If there are any custom attributes you want to add or handle, define them here.
    },
} as NodeDefinition;


// export const createData = createNodeFnFactory(definition);