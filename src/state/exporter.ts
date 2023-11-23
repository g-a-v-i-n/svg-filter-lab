import { Edge, Node } from "reactflow";

// @ts-ignore - package does not contain types
import toposort from "toposort";
import { cloneDeep } from "lodash";
import { toXml } from "xast-util-to-xml";
import { Element as XastElement, Text as XastText } from "@types/xast";
import string from "@lib/string";

import {
	EdgeState,
	NodeState,
	Attribute,
	AttributeType,
	AttributeValue,
	Element,
	Matrix,
	Color,
} from "@/types";
import { STRING } from "../lib/attrTypes";

export function topologicalSort(edges: EdgeState[]): string[] {
	const _edges = edges.map((edge) => {
		return [edge.source, edge.target];
	});

	const order = toposort(_edges) as string[];
	return order;
}

const getAncestors = (edges: Edge[], nodeId: string): string[] => {
	const ancestors = new Set<string>();

	const findAncestors = (currentId: string) => {
		edges.forEach((edge) => {
			if (edge.target === currentId) {
				ancestors.add(edge.source);
				findAncestors(edge.source);
			}
		});
	};

	findAncestors(nodeId);
	return Array.from(ancestors);
};

// operates on entire document. Entrypoint for export codepaths
export function exporter(
	nodeId: string,
	edges: EdgeState[],
	connectedEdges: Edge[],
	data: { [key: string]: any },
) {
	// console.log("exporter");
	const nodes = Object.values(data);
	// console.log("render: ", data, nodes);
	// If there are no nodes, return an empty string
	if (nodes.length === 0) return "";

	const upstreamNodeIds = [nodeId, ...getAncestors(edges, nodeId)];
	const incomingEdges = connectedEdges.filter((edge) => edge.target === nodeId);
	const order = topologicalSort(edges);

	// Create the stack of filter element text to be used in the filter tag
	const stack = nodes
		// remove nodes that are not upstream of the selected node
		.filter((node) => upstreamNodeIds.includes(node.id))
		// sort nodes by topological order
		.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id))
		// convert nodes to xml
		.map((node: NodeState) => {
			console.log("exporter: ", data[node.id]);
			if (!data[node.id]) return "";

			const dataCopy = cloneDeep(data[node.id]);

			const in1 = incomingEdges.find((edge) => edge.target === "in1");
			const in2 = incomingEdges.find((edge) => edge.target === "in2");

			if (in1) {
				dataCopy.ast.attributes.in1 = { value: in1.source, type: STRING };
			}

			if (in2) {
				dataCopy.ast.attributes.in2 = { value: in2.source, type: STRING };
			}
			dataCopy.ast.attributes.result = { value: node.id, type: STRING };

			const xast = toXast(dataCopy.ast);
			return toXml(xast, { closeEmptyElements: true, tightClose: false });
		});

	const filterText = `<filter x="-50%" y="-50%" width="200%" height="200%" id="filter-${nodeId}">${stack.join(
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
					parsers[attrValue.type](attrValue.value);
				return acc;
			},
			{},
		),
		children: element.children?.map(toXast) || [],
	};
}

export const parsers = {
	string: (value: string) => {
		return value;
	},
	number: (value: number) => {
		return string.fromNumber(value);
	},
	boolean: (value: boolean) => {
		return string.fromBoolean(value);
	},
	array: (value: number[]) => {
		return string.fromArray(value);
	},
	matrix: (value: Matrix) => {
		return string.fromMatrix(value);
	},
	color: (value: Color) => {
		return string.fromColor(value);
	},
	null: (value: null) => {
		return "";
	},
};
