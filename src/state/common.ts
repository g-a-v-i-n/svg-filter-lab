import { set as _set } from "lodash"
import { AttributeDefinition, ZustandSet, NodeSpecification, NodeState, NodeStates, NodeInputKey, State } from "../../types"

export const INPUTS = {
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean',
    MATRIX: 'matrix',
    ARRAY: 'array',
    ENUM: 'enum',
    COLOR: 'color',
}

export function getNodeIndexById(nodes: NodeStates, id: string) {
    const index = nodes.findIndex((node: NodeState) => node.id === id);
    // If index is -1, the node was not found
    if (index === -1) {
        // Log a warning and exit the function
        console.warn(`Node with ID ${id} not found`);
        return index;
    }
    return index
}

export function getNodeById(nodes: NodeStates, id: string) {
    const index = getNodeIndexById(nodes, id)
    return nodes[index]
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
export function createNodeSlice(set: ZustandSet, specification: NodeSpecification) {
    const slice = {} as {
        [key: string]: any
    }
    const nodeType = specification.meta.nodeType;
    const attributes = specification.attributes;

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


export function createNodeCreator(specification: NodeSpecification) {
    return function (): NodeState['data'] {
        let out = {
            attributes: {}
        } as NodeState['data']

        // read the inputs entry from node metadata and create a property for each
        specification.meta.inputs.forEach((inputKey: NodeInputKey) => {
            out[inputKey] = null
        })

        // read the attributes entry and create a property for each
        Object.values(specification.attributes).forEach((attr: AttributeDefinition) => {
            const key = attr.key;
            out.attributes[key] = {
                value: specification.attributes[key].defaultValue,
                input: specification.attributes[key].input,
                hasValue: true,
                hasError: false,
            }
        })

        return out;
    }
}