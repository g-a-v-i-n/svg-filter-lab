import { Node } from 'reactflow'
import nodeDefinitions from './nodes/index'

export function exportFilter(nodes: Node[], filter: Filter) {

    const stack = nodes.map((node) => {
        return nodeDefinitions[node.type].exportData(node)
    });

    // We'll add the filter tag here later
    return stack.join('\n');
}


// Creates a partially applied function which takes a node definition and returns a function which takes a node and returns function which takes an attribute and returns a string
export function createNodeExporter(definition: NodeDefinition) {

    return function exporter(nodeState: NodeState) {
        // For inputs, we map over the inputs array in the definition using state for input.
        // Input keys will have already been backfilled and made unique by the importer, or by state transitions.
        const inputs = definition.meta.inputs.map((input) => {
            return `${input}="${nodeState.data[input]}"`;
        })

        // For attributes, we map over the attributeOrder array in the definition using state for attribute values.
        // We also need to look at the attribute definition to determine the serializer to use.
        // And, we also need to look at the `isHidden` function to determine if the attribute should be serialized at all.
        const attrs = definition.meta.attributeOrder.map((attrKey) => {
            const attr = definition.attributes[attrKey];
            const attrName = attr.name;
            const value = nodeState.data.attributes[attrKey].value;
            const serializer = attr.serializer;
            const isHidden = attr?.isHidden || false;

            // If the attribute is hidden, we return an empty string.
            if (isHidden && isHidden(nodeState.data)) {
                return "";
            }

            // If the attribute is not hidden, we serialize the value using the serializer.
            return `${attrName}="${serializer(value)}"`;
        });

        return `<${definition.meta.tagName} ${inputs.join(' ')} ${attrs.join(' ')} />`;
    }
}


// Function to serialize attributes into a string representation
export const serialize = {
    string: (v) => {
        return v
    },
    number: (v) => {
        return String(v)
    },
    boolean: (v) => {
        return String(v)
    },
    array: (v) => {
        return v.join(' ')
    },
    matrix: (v) => {
        return v.map((row) => row.join(' ')).join(' ')
    },
    color: (v) => {
        return v
    },
};