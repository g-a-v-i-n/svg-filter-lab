import { getConnectedEdges } from "reactflow";

// @ts-ignore - package does not contain types
import toposort from "toposort";
import { cloneDeep } from "lodash";

import { toXml } from "xast-util-to-xml";
import { Element as XastElement, Text as XastText } from "@types/xast";

// import nodeDefinitions from './nodes/index'
import { getNodeById } from "../lib/node";
import {
	NodeTargetKey,
	EdgeState,
	NodeState,
	NodeMetadata,
	Attribute,
	AttributeType,
	AttributeValue,
	Element,
} from "@/types";
import { nodeMetadata } from "@components/nodes";
import { STRING } from "../lib/attrTypes";

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

	metadata.targets.forEach((targetKey: NodeTargetKey) => {
		const edgeConnectedToThisTarget = connectedEdges.find(
			({ targetHandle }) => targetHandle === targetKey,
		);

		if (!edgeConnectedToThisTarget) {
			// If the target has no connect edges, we want to use the value from the in1 or in2 dropdown
			// newNode.data.ast.attributes[targetKey] = {
			// 	value: newNode.data.ast[targetKey].value, // ID of the upstream node
			// 	type: STRING,
			// };
		} else {
			// If the target has connected edges, we want to use the ID of the upstream node
			newNode.data.ast.attributes[targetKey] = {
				value: edgeConnectedToThisTarget.source, // ID of the upstream node
				type: STRING,
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
	console.log("exporter called");
	// if there are no nodes, return an empty string
	if (nodes.length === 0) return "";

	// Fill in the missing inputs and outputs in node.data
	nodes = nodes.map((node) => fillInputs(node, nodes, edges));

	// Toposort the nodes. If there is only one node, we don't need to sort.
	const orderedNodeIds =
		nodes.length === 1 ? [nodes[0].id] : topologicalSort(edges);

	// With the ordered filter IDs, get the node data for each node and run the exporter for each.
	const stack = orderedNodeIds
		.map((id) => getNodeById(nodes, id))
		.map((node: NodeState) => {
			node.data.ast.attributes.result = { value: node.id, type: STRING };
			return toXml(toXast(node.data.ast), { closeEmptyElements: true });
		});

	// we discard all nodes following the nodeId arg
	const index = orderedNodeIds.indexOf(nodeId);
	const filteredStack = stack.slice(0, index + 1);

	const filterText = `<filter x="-50%" y="-50%" width="200%" height="200%" id="filter-${nodeId}">${filteredStack.join(
		"\n",
	)}</filter>`;
	return filterText;
}

function toXast(element: Element): XastElement | XastText {
	if (element.omit) return { type: "text", value: "" };

	if ("in1" in element.attributes) {
		element.attributes.in = element.attributes.in1;
		delete element.attributes.in1;
	}

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
