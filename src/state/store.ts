import create from "zustand";
import { temporal } from "zundo";
import { immer } from "zustand/middleware/immer";
import { createSidebarSlice } from "./panels/sidebar";
import { createXyFlowSlice } from "./xyFlow";
import { set as _set } from "lodash";
import { NodeInstance, State } from "@/types";
import { importer } from "./importer";
import { warpedRainbow as testImportFilter } from "../lib/inkscape/warped-rainbow";

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<any>()(
	temporal(
		immer((set) => ({
			// React Flow / xyFlow
			...createXyFlowSlice(set),

			// Panel slices
			...createSidebarSlice(set),

			// Handles node attribute changes
			setAttr: (id: string) => (path: string, value: any) => {
				set((state: State) => {
					// Find the index of the node with the given ID
					const index = state.nodes.findIndex(
						(node: NodeInstance) => node.id === id,
					);
					const root = state.nodes[index].data.ast;
					_set(root, path, value);
				});
			},

			importFilter: (filter: string) => {
				set((state: State) => {
					const { nodes, edges } = importer(testImportFilter);
					state.edges = edges;
					state.nodes = nodes;
				});
			},

			exportFilter: () => {
				set((state: State) => {
					// exporter(state.nodes, state.edges);
				});
			},

			// svgText: ``,
			// setSvgText: (text: string) => {
			// 	set((state: State) => {
			// 		state.svgText = text;
			// 	});
			// }

			// ...Object.values(nodeDefinitions).reduce((acc: { [key: string]: any }, node: NodeDefinition) => {
			//   return {
			//     ...acc,
			//     ...createNodeSlice(set, node.specification),
			//   }
			// }, {}),
			// Outer filter tag slice
			// filter: createNodeSlice(set, filter.specification),
		})),
	),
);

export default useStore;
