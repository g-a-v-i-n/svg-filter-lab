import { set as _set } from "lodash";
import { ZustandSet, State } from "@/types";
import { getNodeIndexById } from "../lib/node";

export const setNodeWithPath =
	(set: ZustandSet) => (id: string) => (path: string, value: any) =>
		set((state: State) => {
			const index = getNodeIndexById(state.nodes, id);
			const root = state.nodes[index].data.attributes;
			_set(root, `${path}.value`, value);
		});

// export function createNodeMatrixSetter(set: ZustandSet, key: string) {
// 	const setter = (id: string, newValue: number, i: number, j: number) => {
// 		set((state: State) => {
// 			// Find the index of the node with the given ID
// 			const index = getNodeIndexById(state.nodes, id);
// 			const root = state.nodes[index].data.attributes;
// 			_set(root, `${key}.value[${i}][${j}]`, newValue);
// 		});
// 	};
// 	return setter;
// }

// export function createNodeArraySetter(set: ZustandSet, key: string) {
//     const setter = (
//         id: string,
//         newValue: number,
//         i: number,
//     ) => {
//         set((state: State) => {
//             // Find the index of the node with the given ID
//             const index = getNodeIndexById(state.nodes, id)
//             const root = state.nodes[index].data.attributes;
//             _set(root, `${key}.value[${i}]`, newValue)
//         })
//     }
//     return setter
// }

// export const attributeSetter(set, path) => set((state: State) => {
//     // Find the index of the node with the given ID
//     const index = getNodeIndexById(state.nodes, id)
//     const root = state.nodes[index].data.attributes;
//     _set(root, `${path}.value`, newValue)

// })
// }

// Function to create a node slice for Zustand
// export function createNodeSlice(
// 	set: ZustandSet,
// 	specification: NodeSpecification,
// ) {
// 	const slice = {} as {
// 		[key: string]: any;
// 	};
// 	const nodeType = specification.meta.nodeType;
// 	const attributes = specification.attributes;

// 	// Create a setter for each attribute
// 	Object.keys(attributes).forEach((key) => {
// 		let setter;

// 		switch (attributes[key].input.type) {
// 			case "string":
// 			case "number":
// 			// case 'boolean':
// 			case "sectionSwitch":
// 			case "enum":
// 			case "color":
// 				setter = genericSetter(set, key);
// 				// setter = attributeSetter(set, (i, j) => `${key}.value[${i}][${j}]`)
// 				break;
// 			case "matrix":
// 				setter = createNodeMatrixSetter(set, key);
// 				break;
// 			case "array":
// 				setter = genericSetter(set, key);
// 				break;
// 			default:
// 				console.error(`Unknown input type: ${key}`);
// 			// throw new Error(`Unknown input type: ${attributes[key].input}`);
// 		}

// 		slice[key] = {
// 			set: setter,
// 		};
// 	});

// 	return {
// 		[nodeType]: slice,
// 	};
// }

// export function createNodeCreator(specification: NodeSpecification) {
// 	return function (): NodeState["data"] {
// 		let out = {
// 			attributes: {},
// 		} as NodeState["data"];

// 		// read the inputs entry from node metadata and create a property for each
// 		specification.meta.inputs.forEach((inputKey: NodeInputKey) => {
// 			out[inputKey] = null;
// 		});

// 		// read the attributes entry and create a property for each
// 		Object.values(specification.attributes).forEach(
// 			(attr: AttributeDefinition) => {
// 				const key = attr.key;
// 				out.attributes[key] = {
// 					value: specification.attributes[key].defaultValue,
// 					input: specification.attributes[key].input,
// 					hasValue: true,
// 					hasError: false,
// 				};
// 			},
// 		);

// 		return out;
// 	};
// }
