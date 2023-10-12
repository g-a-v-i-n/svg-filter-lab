import { nodeMetadata, nodeTypesByTagName, importers } from "@components/nodes";
import { uuid } from "@lib/uuid";
import { fromXml } from "xast-util-from-xml";
import { remove } from "unist-util-remove";
import string from "../lib/string";
import { XastElement } from "../../types";

export function importer(filterText: string) {
	let xast;

	// Parse the filter text into an xast tree
	try {
		xast = fromXml(filterText);
	} catch (error) {
		console.error(error);
		return { nodes: [], edges: [] };
	}

	// Remove all but elements from the xast tree
	remove(xast, (node) => node.type !== "element");

	// Get the first element in the xast tree, which should be the filter element
	const filterElement = xast.children[0] as XastElement;

	// Get the children of the filter element, which should be the filter stack
	let filterStack = filterElement.children as XastElement[];

	// We need to do three things in order.
	// 1. First, change `in` attributes to `in1` attributes, because `in` is a reserved word and cannot be destructured.
	// This is what the editor uses. We can't do that in the editor, because we need to use these IDs as unique IDs for each node and edges.
	filterStack = filterStack
		// Immediately change the tag name to the editor's version which drops the `fe` prefix
		.map(setTagName)
		// Set the `in` attribute to `in1` so we can destructure it
		// @ts-ignore. NB: We have already filtered out any non-elements, but TS doesn't know that and I don't want to write a type guard.
		.map(setInToIn1);

	// 2. Second, make all existing in1 and in2 values unique.
	// SVG filters can have multiple elements with the same id, because they are overwritten by duplicates moving down the element list.
	filterStack = uniquifyInputIds(filterStack);

	// 3. Third, fill in any missing in1 and in2 values.
	// SVG filters let you have implied connections between elements as you move down the element list. We can't do that in the editor, because edges need to be explicit.
	filterStack = fillInInputs(filterStack);

	const nodes = importNodes(filterStack);
	const edges = importEdges(filterStack);

	return { nodes, edges };
}

// if in1 or in2 is a reserved id, we need to add a source node to the stack and connect it to the node
function attachSourceNodes(filterStack: XastElement[]) {
	const newNodes = [];

	filterStack.forEach((node) => {
		const in1 = node.attributes.in1;
		const in2 = node.attributes.in2;
		const result = node.attributes.result;

		if (reservedIds.includes(in1)) {
			const newId = uuid(node.type);
			newNodes.push({
				type: "element",
				name: "source",
				attributes: {
					source: in1,
					result: newId,
				},
			});
			node.attributes.in1 = newId;
		}

		if (reservedIds.includes(in2)) {
			const newId = uuid(node.type);
			newNodes.push({
				type: "element",
				name: "source",
				attributes: {
					source: in2,
					result: newId,
				},
			});
			node.attributes.in2 = newId;
		}
	});

	return [...newNodes, ...filterStack];
}

function importNodes(filterStack: XastElement[]) {
	const nodes = filterStack.map((element, idx) => {
		return {
			id: element.attributes.result,
			type: element.name,
			data: importers[element.name](element),
			selected: false,
			dragging: false,
			position: { x: idx * 250, y: 0 },
		};
	});

	return nodes;
}

const reservedIds = [
	"SourceGraphic",
	"SourceAlpha",
	"BackgroundImage",
	"BackgroundAlpha",
	"FillPaint",
	"StrokePaint",
];

function importEdges(nodes: XastElement[]) {
	const in1Edges = {};
	const in2Edges = {};

	nodes.forEach((node) => {
		// console.log(node);
		const in1 = node.attributes.in1;
		const in2 = node.attributes.in2;
		const result = node.attributes.result;

		if (in1) {
			if (in1 in in1Edges) {
				in1Edges[in1].push(result);
			} else {
				in1Edges[in1] = [result];
			}
		}

		if (in2) {
			if (in2 in in2Edges) {
				in2Edges[in2].push(result);
			} else {
				in2Edges[in2] = [result];
			}
		}
	});

	const edges1 = Object.entries(in1Edges).map(([source, targets]) => {
		return targets.map((target) => {
			return {
				id: uuid("e"),
				type: "custom",
				source,
				sourceHandle: "result",
				target,
				targetHandle: "in1",
			};
		});
	});

	const edges2 = Object.entries(in2Edges).map(([source, targets]) => {
		return targets.map((target) => {
			return {
				id: uuid("e"),
				type: "custom",
				source,
				sourceHandle: "result",
				target,
				targetHandle: "in2",
			};
		});
	});

	return [...edges1.flat(), ...edges2.flat()];
}

function setInToIn1(elem: XastElement) {
	const in1 = elem.attributes.in;
	delete elem.attributes.in;
	elem.attributes.in1 = in1;
	return elem;
}

function setTagName(elem: XastElement) {
	elem.name = nodeTypesByTagName[elem.name];
	return elem;
}

export function uniquifyInputIds(tags) {
	const aliases = {
		// oldId: 'newId'
	};

	const newTags = tags.map((tag) => {
		const in1 = tag.attributes.in1;
		const in2 = tag.attributes.in2;
		const result = tag.attributes.result;

		if (result) {
			if (result in aliases) {
				// If this attribute has been seen before, assign the the id an alias in
				// both aliases and replace it with the new value in the tag
				const newId = uuid("n");
				tag.attributes.result = newId;
				aliases[result] = newId;
			} else {
				// If its a new id, add it to aliases but don't change it.
				// aliases[result] = result
				const newId = uuid("n");
				tag.attributes.result = newId;
				aliases[result] = newId;
			}
		}

		if (in1) {
			if (in1 in aliases) {
				// if this id has an alias, use the alias instead of the existing ID
				tag.attributes.in1 = aliases[in1];
			} else {
				// if this id has no result id at all, it may be an error, or it could be a reserved id.
				// console.log(in1);
			}
		}

		if (in2) {
			if (in2 in aliases) {
				// if this id has an alias, use the alias instead of the existing ID
				tag.attributes.in2 = aliases[in2];
			} else {
				// if this id has no result id at all, it may be an error, or it could be a reserved id.
				// console.log(in2);
			}
		}

		return tag;
	});
	return newTags;
}

export function fillInInputs(tags) {
	let lastUnsetResult = "SourceGraphic";

	const newTags = tags.map((tag) => {
		const in1 = tag.attributes.in1;
		const in2 = tag.attributes.in2;
		const result = tag.attributes.result;

		if (in1) {
			// noop
		} else {
			const metadata = nodeMetadata[tag.name];
			if (metadata.inputs.includes("in1")) {
				tag.attributes.in1 = lastUnsetResult;
			}
		}

		if (in2) {
			// noop
		} else {
			const metadata = nodeMetadata[tag.name];
			if (metadata.inputs.includes("in2")) {
				tag.attributes.in2 = lastUnsetResult;
			}
		}

		if (result) {
			// noop
		} else {
			const newId = uuid("n");
			tag.attributes.result = newId;
			lastUnsetResult = newId;
		}

		return tag;
	});

	return newTags;
}

// function nodeProps(i) {
//     return {
//         position: {
//             x: i * 300,
//             y: 0,
//         },
//         positionAbsolute: {
//             x: i * 300,
//             y: 0,
//         },
//         width: 250,
//         height: 104,
//         selected: false,
//         dragging: false,
//     }
// }

// export function parse(str) {
//     let errors = []

//     const options = {
//         space: "svg",
//         fragment: true,
//         verbose: true,
//         onerror: (error) => {
//             errors.push({ ...error })
//         },
//     }

//     const ast = fromXml(
//         str,
//         // @ts-ignore
//         options
//     )

//     const filterNodes = ast
//         .children[0].children
//         .filter((node) => node.type === "element")
//         .map(setInToIn1)

//     // these functions must run in order
//     const normalizedTags = infill(
//         uniquify(filterNodes)
//     )

//     const nodes = normalizedTags.reduce((acc, tag, i) => {

//         const name = nodeTypesByTagName[tag.name]

//         // only used to replace reserved ids
//         const newId = uuid('n')

//         const nodesToAdd = [
//             {
//                 id: tag.attributes.result,
//                 type: name,
//                 data: parsers[name](tag),
//                 ...nodeProps(i)
//             }
//         ];

//         if (reservedIds.includes(tag.attributes.in1)) {
//             nodesToAdd[0].data.in1 = newId;
//             nodesToAdd.push({
//                 id: newId,
//                 type: 'source',
//                 data: {
//                     source: tag.attributes.in1,
//                     result: newId
//                 },
//                 ...nodeProps(i)
//             }
//             )
//         }

//         if (reservedIds.includes(tag.attributes.in2)) {
//             nodesToAdd[0].data.in2 = newId;
//             nodesToAdd.push({
//                 id: newId,
//                 type: 'source',
//                 data: {
//                     source: tag.attributes.in2,
//                     result: newId
//                 },
//                 ...nodeProps(i)
//             }
//             )
//         }

//         return [...acc, ...nodesToAdd]

//     }, [])

//     const edges = nodes.reduce((acc, node, i) => {
//         const edgeProps = {
//             selected: false,
//             type: "custom",
//         }
//         const in1Edges = nodes
//             .filter(n => node.data.result === n.data.in1)
//             .map(n => ({
//                 id: uuid("e"),
//                 source: node.id,
//                 sourceHandle: "result",
//                 target: n.id,
//                 targetHandle: "in1",
//                 ...edgeProps
//             }))

//         const in2Edges = nodes
//             .filter(n => node.data.result === n.data.in2)
//             .map(n => ({
//                 id: uuid("e"),
//                 source: node.id,
//                 sourceHandle: "result",
//                 target: n.id,
//                 targetHandle: "in2",
//                 ...edgeProps
//             }))

//         return [...acc, ...in1Edges, ...in2Edges]

//     }, [])

//     console.log(nodes, edges)

//     return {
//         nodes,
//         edges,
//     }
// }
