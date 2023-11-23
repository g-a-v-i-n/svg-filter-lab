import { fromXml } from "xast-util-from-xml";
import { remove } from "unist-util-remove";
import {
	nodeMetadata,
	nodeTypesByElementName,
	importers,
} from "@components/nodes";
import { uuid } from "@lib/uuid";
import sourceKeys, { valueIsASourceKey } from "@lib/sourceKeys";
import { XastElement } from "@/types";

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

	// 1. Change `in` attributes to `in1` attributes, because `in` is a reserved word and cannot be destructured.
	// This is what the editor uses. We can't do that in the editor, because we need to use these IDs as unique IDs for each node and edges.
	filterStack = filterStack
		// Change the element name to the editor's version which drops the `fe` prefix
		.map(setElementName)
		// Set the `in` attribute to `in1` so we can destructure it
		.map(setInToIn1);

	// normalize

	// console.log(JSON.stringify(filterStack, null, 2));

	// 2. If there is an element with a `result` attribute which doesn't appear in any other nodes's `in1` or `in2` attributes, the result attribute on these elements should be removed.
	filterStack = removeSingularResultAttributes(filterStack);

	// 3. Make all existing in1 and in2 values unique.
	// SVG filters can have multiple elements with the same id, because they are overwritten by duplicates moving down the element list.
	filterStack = uniquifyInputIds(filterStack);

	// 4. Fill in any missing in1 and in2 values.
	// SVG filters let you have implied connections between elements as you move down the element list. We can't do that in the editor, because edges need to be explicit.
	filterStack = fillInInputs(filterStack);

	const nodes = importNodes(filterStack);
	const data = importData(filterStack);
	const edges = importEdges(filterStack);

	console.log("importer: ", data);

	return { nodes, edges, data };
}

// function assignNormalizedIds(elements: XastElement[]) {
// 	const aliases = new Map<string, string>();

// 	elements.forEach(element => {

// 	})
// }

function importNodes(filterStack: XastElement[]) {
	const nodes = filterStack.map((element, idx) => {
		return {
			id: element.attributes.result,
			type: element.name,
			selected: false,
			dragging: false,
			position: { x: idx * 250, y: 0 },
		};
	});

	return nodes;
}

function importData(filterStack: XastElement[]) {
	const data = filterStack.reduce((acc, element, idx) => {
		const id = element.attributes.result;
		return {
			...acc,
			[id as string]: {
				ast: importers[element.name](element),
				id,
			},
		};
	}, {});

	return data;
}

function importEdges(nodes: XastElement[]) {
	const in1Edges = {};
	const in2Edges = {};

	nodes.forEach((node) => {
		const in1 = node.attributes.in1;
		const in2 = node.attributes.in2;
		const result = node.attributes.result;

		if (in1 && !valueIsASourceKey(in1)) {
			if (in1 in in1Edges) {
				in1Edges[in1].push(result);
			} else {
				in1Edges[in1] = [result];
			}
		}

		if (in2 && !valueIsASourceKey(in2)) {
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

function setElementName(elem: XastElement) {
	elem.name = nodeTypesByElementName[elem.name];
	return elem;
}

export function uniquifyInputIds(elements: XastElement[]) {
	const aliases = {
		// oldId: 'newId'
	};

	const newElements = elements.map((element: XastElement) => {
		const in1 = element.attributes.in1;
		const in2 = element.attributes.in2;
		const result = element.attributes.result;

		if (result) {
			if (result in aliases) {
				// If this attribute has been seen before, assign the the id an alias in
				// both aliases and replace it with the new value in the element
				const newId = uuid(element.name);
				element.attributes.result = newId;
				aliases[result] = newId;
			} else {
				// If its a new id, add it to aliases but don't change it.
				// aliases[result] = result
				const newId = uuid(element.name);
				element.attributes.result = newId;
				aliases[result] = newId;
			}
		}

		if (in1) {
			if (in1 in aliases) {
				// if this id has an alias, use the alias instead of the existing ID
				element.attributes.in1 = aliases[in1];
			} else {
				// if this id has no result id at all, it may be an error, or it could be a reserved id.
				// console.log(in1);
			}
		}

		if (in2) {
			if (in2 in aliases) {
				// if this id has an alias, use the alias instead of the existing ID
				element.attributes.in2 = aliases[in2];
			} else {
				// if this id has no result id at all, it may be an error, or it could be a reserved id.
				// console.log(in2);
			}
		}

		return element;
	});
	return newElements;
}

export function fillInInputs(elements: XastElement[]) {
	let lastUnsetResult = "SourceGraphic";

	const newElements = elements.map((element) => {
		const in1 = element.attributes.in1;
		const in2 = element.attributes.in2;
		const result = element.attributes.result;

		if (in1) {
			// noop
		} else {
			const metadata = nodeMetadata[element.name];
			if (metadata.targets.includes("in1")) {
				element.attributes.in1 = lastUnsetResult;
			}
		}

		if (in2) {
			// noop
		} else {
			const metadata = nodeMetadata[element.name];
			if (metadata.targets.includes("in2")) {
				element.attributes.in2 = lastUnsetResult;
			}
		}

		if (result) {
			// noop
		} else {
			const newId = uuid(element.name);
			element.attributes.result = newId;
			lastUnsetResult = newId;
		}

		return element;
	});

	return newElements;
}

function removeSingularResultAttributes(elements: XastElement[]) {
	// Create a set to store all 'in1' and 'in2' attribute values
	const references = new Set<string>();

	// Populate the set with 'in1' and 'in2' values from all elements
	elements.forEach((element) => {
		const attrs = element.attributes;
		if (attrs.in1) references.add(attrs.in1);
		if (attrs.in2) references.add(attrs.in2);
	});

	// Check each element's 'result' attribute to see if it exists in the references set
	elements.forEach((element) => {
		const resultValue = element.attributes.result;
		if (resultValue && !references.has(resultValue)) {
			// If the 'result' value is not found in the references, delete it
			delete element.attributes.result;
		}
	});
	return elements;
}

// function createEdgeList(filterElements: FilterElement[]): Edge[] {
//   let edges: Edge[] = [];
//   let lastResult: string | undefined;

//   filterElements.forEach((element, index) => {
//     const result = element.attributes.result || `implicitResult${index}`;
//     const inputs = ["in", "in1", "in2"]; // List of possible input attributes

//     // Establish the default input if none provided
//     let inputSource = index === 0 ? "SourceGraphic" : lastResult;

//     inputs.forEach(input => {
//       if (element.attributes[input]) {
//         // If the input is explicitly defined, use it
//         edges.push([element.attributes[input], result]);
//       } else if (input === "in" || input === "in1") {
//         // The "in" or "in1" attribute falls back to the previous result or SourceGraphic
//         edges.push([inputSource, result]);
//       }
//     });

//     // Track the last result for subsequent primitives that don't define an input
//     lastResult = result;

//     // Account for elements which do not have 'result' attribute by creating an implicit result
//     if (!element.attributes.result) {
//       edges = edges.map(edge => {
//         if (edge[1] === lastResult) {
//           return [edge[0], result];
//         }
//         return edge;
//       });
//     }
//   });

//   // Remove any self-referencing edges where input equals output
//   edges = edges.filter(edge => edge[0] !== edge[1]);

//   return edges;
// }
