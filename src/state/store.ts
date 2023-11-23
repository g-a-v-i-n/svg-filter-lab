import create from "zustand";
import { temporal } from "zundo";
import { immer } from "zustand/middleware/immer";
import { createSidebarSlice } from "./panels/sidebar";
import { createReactFlowSlice } from "./reactFlow";
import { set as _set } from "lodash";
import { NodeInstance, State } from "@/types";
import { importer } from "./importer";
// import { warpedRainbow as testImportFilter } from "../lib/inkscape/warped-rainbow"; // works
// import { gardenOfDelights as testImportFilter } from "../lib/inkscape/garden-of-delights"; // missing edges
// import { neon as testImportFilter } from "../lib/inkscape/neon"; // cyclic graph
// import { pencil as testImportFilter } from "../lib/inkscape/pencil"; // small, missing edges
// import { watercolor as testImportFilter } from "../lib/inkscape/watercolor"; // bizarre edges, maybe missing edges. Source graphic set on input when there is actually an edge
// import { swissCheese as testImportFilter } from "../lib/inkscape/swiss-cheese"; // seems to work?
// import { tigerFur as testImportFilter } from "../lib/inkscape/tiger-fur"; // seems to work?
// import { riddled as testImportFilter } from "../lib/inkscape/riddled"; // works
import { marble as testImportFilter } from "../lib/inkscape/marble"; //
import { getNodeIndexById } from "../lib/node";

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<any>()(
	temporal(
		immer((set) => ({
			...createReactFlowSlice(set),
			...createSidebarSlice(set),

			data: {},

			// Handles node attribute changes
			setAttr: (id: string) => (path: string, value: any) => {
				set((state: State) => {
					// console.log(id, path, value);
					// Find the index of the node with the given ID
					// const root = state[id];
					_set(state.data[id].ast, path, value);
				});
			},

			importFilter: (filter: string) => {
				set((state: State) => {
					const { nodes, edges, data } = importer(testImportFilter);
					state.edges = edges;
					state.nodes = nodes;
					state.data = data;
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
