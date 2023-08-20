import {
    Node,
    Edge,
    getConnectedEdges,
} from 'reactflow'
import toposort from "toposort"

import nodeDefinitions from './nodes/index'
import { getNodeById } from './common'
import { NodeInputKey } from '../types'

export function topologicalSort(edges) {
    const dimunitiveEdges = edges.map((edge) => {
        return [edge.source, edge.target]
    })

    const order = toposort(dimunitiveEdges)
    return order
}

function fillInputs(node: Node, nodes: Node[], edges: Edge[]) {
    const newNode = structuredClone(node);

    const definition = nodeDefinitions[newNode.type].definition;

    // get edges connected to the node
    const connectedEdges = getConnectedEdges([newNode], edges);

    definition.meta.inputs.forEach((input: NodeInputKey) => {
        const edgeConnectedToThisInput = connectedEdges
            .find(({ targetHandle }) => targetHandle === input);

        // we need to know if this edge is connected to a source node.
        // if it is, we need to get the source node's value property and set it as the input value.
        // if it isn't, we need to set the input value to null.
        if (!edgeConnectedToThisInput) {
            newNode.data[input] = null;
            return;
        }

        const upstreamNode = getNodeById(nodes, edgeConnectedToThisInput?.source)

        // if the upstream node is a source node, we need to get the value property from the attributes object
        // otherwise, we need to get the value property from the data object
        if (upstreamNode?.type === 'source') {
            newNode.data[input] = upstreamNode?.data.attributes.mode.value || null
        } else {
            newNode.data[input] = edgeConnectedToThisInput?.source
        }
    })

    return newNode
}

export function exporter(nodeId: string, nodes: Node[], edges: Edge[]) {
    // Fill in the missing inputs and outputs in node.data
    nodes = nodes.map((node) => fillInputs(node, nodes, edges))

    console.log('nodes', nodes)

    const orderedNodeIds = topologicalSort(edges);

    // // With the ordered filter IDs, get the node data for each node and run the exporter for each.
    const stack = orderedNodeIds
        .map((id) => {
            return nodes.find((node) => node.id === id)
        })
        .filter((node) => {
            return node.type !== 'source'
        })
        .map((node) => {
            return nodeDefinitions[node.type].exportData(node)
        })


    // // we discard all nodes following the nodeId arg
    const index = orderedNodeIds.indexOf(nodeId);
    const filteredStack = stack.slice(0, index + 1);

    const filterText = `<filter id="${'filter'}">${filteredStack.join('\n')}</filter>`
    console.log('filterText', filterText)
    // We'll add the filter tag here later
    return filterText;
}




// Creates a partially applied function which takes a node definition and returns a function which takes a node and returns function which takes an attribute and returns a string
export function createNodeExporter(definition: NodeDefinition) {

    return function exporter(nodeState: NodeState) {
        // For inputs, we map over the inputs array in the definition using state for input.
        // Input keys will have already been backfilled and made unique by the importer, or by state transitions.
        const inputs = definition.meta.inputs.map((input) => {
            const inputKey = input === 'in1' ? 'in' : input;
            const inputValue = nodeState.data[input] || 'sourceGraphic';
            return `${inputKey}="${inputValue}"`;
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
