import { set as _set } from "lodash"
import { State, Node } from "./store"
import { ZustandSet, NodeDefinition } from '../types'
import { uuid } from "../lib/uuid"
import nodes from './nodes/index'

export const INPUTS = {
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean',
    MATRIX: 'matrix',
    ARRAY: 'array',
    ENUM: 'enum',
    COLOR: 'color',
}

function getNodeIndexById(nodes, id) {
    const index = nodes.findIndex((node: Node) => node.id === id);
    // If index is -1, the node was not found
    if (index === -1) {
        // Log a warning and exit the updater function
        console.warn(`Node with ID ${id} not found`);
        return;
    }
    return index
}

// Function to create a property setter function for a node.
// key is a specific property of the node's data.attributes object
export function genericSetter(set: ZustandSet, key: string) {
    // Return a new function that takes a node Id and a new value
    return (id: string, newValue: any) => {

        // Call the provided `set` function with an updater function
        set((state: State) => {

            // Find the index of the node with the given ID
            const index = getNodeIndexById(state.nodes, id)

            // Get the data object for the found node
            const root = state.nodes[index].data.attributes;

            // Use lodash's _set function to set the new value at the specified path
            // _set(root, key + '.value', newValue);
            _set(root, `${key}.value`, newValue)
        });
    };
}


export function createNodeMatrixSetter(set: ZustandSet, key: string) {
    const setter = (
        id: string,
        newValue: number,
        i: number,
        j: number
    ) => {
        set((state: State) => {
            // Find the index of the node with the given ID
            const index = getNodeIndexById(state.nodes, id)
            const root = state.nodes[index].data;
            _set(root, `${key}.value[${i}][${j}]`, newValue)

        })
    }
    return setter
}

export function createNodeArraySetter(set: ZustandSet, key: string) {
    const setter = (
        id: string,
        newValue: number,
        i: number,
    ) => {
        set((state: State) => {
            // Find the index of the node with the given ID
            const index = getNodeIndexById(state.nodes, id)
            const root = state.nodes[index].data;
            _set(root, `${key}.value[${i}]`, newValue)
        })
    }
    return setter
}


// Function to create a node slice for Zustand
export function createNodeSlice(set: ZustandSet, definition: NodeDefinition) {
    const slice = {}
    const nodeType = definition.meta.nodeType;
    const attributes = definition.attributes;

    // Create a setter for each attribute
    Object.keys(attributes).forEach((key) => {
        let setter;

        switch (attributes[key].input.type) {
            case INPUTS.STRING:
            case INPUTS.NUMBER:
            case INPUTS.BOOLEAN:
            case INPUTS.COLOR:
            case INPUTS.ENUM:
                setter = genericSetter(set, key);
                break;
            case INPUTS.MATRIX:
                setter = createNodeMatrixSetter(set, key);
                break;
            case INPUTS.ARRAY:
                setter = genericSetter(set, key);
                break;
            default:
                throw new Error(`Unknown input type: ${attributes[key].input}`);
        }

        slice[key] = {
            set: setter,
        }
    });

    return {
        [nodeType]: slice,
    };
}

export function createNode(props): Node {
    return {
        id: uuid(props.nodeType),
        // xyFlow specific, key must be called type
        type: props.nodeType,
        position: props.position,
        data: nodes[props.nodeType].createData(),
    }
}

export function createNodeCreator(definition: NodeDefinition) {
    return function (props) {
        let out = {
            attributes: {}
        }

        // read the inputs entry from node metadata and create a property for each
        definition.meta.inputs.forEach((input: string) => {
            out[input] = props?.[input] || null
        })

        // read the attributes entry and create a property for each
        Object.values(definition.attributes).forEach((attr: AttributeDefinition) => {
            console.log(attr)
            const key = attr.key;
            out.attributes[key] = {
                value: props?.attributes[key].value || definition.attributes[key].defaultValue,
                input: definition.attributes[key].input,
                hasValue: props?.attributes[key].hasValue || true,
                hasError: props?.attributes[key].hasError || false,
            }
        })

        return out;
    }
}