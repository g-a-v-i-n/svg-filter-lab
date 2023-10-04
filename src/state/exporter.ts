import { getConnectedEdges } from "reactflow";

// @ts-ignore - package does not contain types
import toposort from "toposort";
import { cloneDeep } from "lodash";

import { toXml } from "xast-util-to-xml";
import { Element as XastElement, Text as XastText } from "@types/xast";

// import nodeDefinitions from './nodes/index'
import { getNodeById } from "./common";
import {
	NodeInputKey,
	EdgeState,
	NodeState,
	NodeMetadata,
	Attribute,
	AttributeType,
	AttributeValue,
	Element,
} from "@/types";
import { nodeMetadata } from "@components/nodes";

export function topologicalSort(edges: EdgeState[]): string[] {
	const dimunitiveEdges = edges.map((edge) => {
		return [edge.source, edge.target];
	});

	const order = toposort(dimunitiveEdges) as string[];
	return order;
}

function fillInputs(node: NodeState, nodes: NodeState[], edges: EdgeState[]) {
	const newNode = cloneDeep(node);
	const metadata = nodeMetadata[node.type] as NodeMetadata;

	// get edges connected to the node
	// @ts-ignore
	const connectedEdges = getConnectedEdges([newNode], edges);

	metadata.inputs.forEach((input: NodeInputKey) => {
		const edgeConnectedToThisInput = connectedEdges.find(
			({ targetHandle }) => targetHandle === input,
		);

		// we need to know if this edge is connected to a source node because if it is, we need to
		// get the value property from the attributes object instead of the id of an upstream connected node
		// if it is, we need to get the source node's value property and set it as the input value.
		// if it isn't, we need to set the input value to null.
		if (!edgeConnectedToThisInput) {
			newNode.data[input] = null;
			newNode.data.ast.attributes[input] = { value: null, type: "null" };
			return;
		}

		const upstreamNode = getNodeById(nodes, edgeConnectedToThisInput?.source);

		// if the upstream node is a source node, we need to get the value property from the attributes object
		// otherwise, we need to get the value property from the data object
		if (upstreamNode?.type === "source") {
			const value = upstreamNode?.data.attributes.value.value
				? { value: upstreamNode?.data.attributes.value.value, type: "string" }
				: { value: null, type: "null" };

			newNode.data.ast.attributes[input] = value;
			// This is handles the case where a node is connected
		} else {
			newNode.data.ast.attributes[input] = {
				value: edgeConnectedToThisInput?.source, // ID of the upstream node
				type: "string",
			};
		}
	});

	return newNode;
}

// operates on entire document. Entrypoint for export codepaths
export function exporter(
	nodeId: string,
	nodes: NodeState[],
	edges: EdgeState[],
) {
	// if there are no nodes, return an empty string
	if (nodes.length === 0) return "";

	// Fill in the missing inputs and outputs in node.data
	nodes = nodes.map((node) => fillInputs(node, nodes, edges));

	// Toposort the nodes. If there is only one node, we don't need to sort.
	const orderedNodeIds =
		nodes.length === 1 ? [nodes[0].id] : topologicalSort(edges);

	// // With the ordered filter IDs, get the node data for each node and run the exporter for each.
	const stack = orderedNodeIds
		.map((id: string) => {
			return nodes.find((node) => node.id === id) as NodeState;
		})
		.filter((node: NodeState) => {
			// Note we are using the React Flow node type here, not the node type from node data state
			return node.type !== "source";
		})
		.map((node: NodeState) => {
			return toXml(toXast(node.data.ast));
		});

	// we discard all nodes following the nodeId arg
	const index = orderedNodeIds.indexOf(nodeId);
	const filteredStack = stack.slice(0, index + 1);

	const filterText = `<filter id="filter-${nodeId}">${filteredStack.join(
		"\n",
	)}</filter>`;
	return filterText;
}

function toXast(element: Element): XastElement | XastText {
	if (element.omit) return { type: "text", value: "" };
	return {
		type: "element",
		name: element.tagName,
		attributes: Object.entries(element.attributes).reduce(
			(
				acc: { [key: string]: string },
				[attrName, attrValue]: [
					string,
					Attribute<AttributeValue, AttributeType>,
				],
			) => {
				// if the attribute has a primary function, we want to run it to select an attribute to use as the primary one
				if (attrValue?.primary) {
					attrValue.omit = !attrValue.primary(element);
				}

				// if omit is set, we don't want to include this attribute in the output
				if (attrValue.omit) return acc;

				// if the attribute is an alias, we want to use the alias name instead of the original name
				acc[attrValue?.aliasOf || attrName] =
					// parsers are indexed by attribute type, ie string, number, etc
					parsers[attrValue.type](attrValue);
				return acc;
			},
			{},
		),
		children: element.children?.map(toXast) || [],
	};
}

export const parsers = {
	string: (attrValue: Attribute<string, "string">) => {
		return attrValue.value;
	},
	number: (attrValue: Attribute<number, "number">) => {
		return attrValue.value.toString();
	},
	boolean: (attrValue: Attribute<boolean, "boolean">) => {
		return attrValue.value.toString();
	},
	array: (attrValue: Attribute<number[], "array">) => {
		return attrValue.value.join(" ");
	},
	matrix: (attrValue: Attribute<number[][], "matrix">) => {
		return attrValue.value.map((row) => row.join(" ")).join(" ");
	},
	color: (attrValue: Attribute<string, "color">) => {
		return attrValue.value;
	},
	null: (attrValue: Attribute<null, "null">) => {
		return "";
	},
} as {
	[key: string]: (
		attrValue: Attribute<AttributeValue, AttributeType>,
	) => string;
};
