import create from "zustand";
import { immer } from "zustand/middleware/immer";


import {
  Connection,
  Edge,
  EdgeChange,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";

import { initialNodes, initialEdges } from "./defaultState";

import { BlendNodeSlice, createBlendNodeSlice, BlendNodeState } from "./blendNode";

import { CompositeNodeSlice, createCompositeNodeSlice, CompositeNodeState } from "./compositeNode";

import {
  ColorMatrixNodeSlice,
  createColorMatrixNodeSlice,
  ColorMatrixNodeState,
} from "./colorMatrixNode";

import {
  ComponentTransferNodeSlice,
  createComponentTransferNodeSlice,
  ComponentTransferNodeState,
} from "./componentTransferNode";

import {
  ConvolutionMatrixNodeSlice,
  createConvolutionMatrixNodeSlice,
  ConvolutionMatrixNodeState,
} from "./convolutionMatrixNode";
import { render } from "../lib/render";

type Node = (BlendNodeState
  | ColorMatrixNodeState | ComponentTransferNodeState | CompositeNodeState | ConvolutionMatrixNodeState)[]


// export type State = {
//   nodes: Node[] | [];
//   edges: Edge[] | [];

//   onNodesChange: () => null;
//   onEdgesChange: () => null;
//   onConnect: OnConnect;

//   // Node-specific updaters
//   blendNode: BlendNodeSlice;
//   colorMatrixNode: ColorMatrixNodeSlice;
//   componentTransferNode: ComponentTransferNodeSlice;
//   compositeNode: CompositeNodeSlice;
//   convolutionMatrixNode: ConvolutionMatrixNodeSlice;
// };

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create()(
  immer((set) => ({
    nodes: initialNodes,
    edges: initialEdges,

    svg: render(initialNodes, initialEdges),

    onNodesChange: (changes: NodeChange[]) => {
      console.log('onNodesChange: ', 'fired')
      set((state: State) => {
        state.nodes = applyNodeChanges(changes, state.nodes);
      });
    },

    onEdgesChange: (changes: EdgeChange[]) => {
      console.log('onEdgesChange: ', 'fired')
      set((state: State) => {
        state.edges = applyEdgeChanges(changes, state.edges);
        // console.log('render: ', render(state.nodes, state.edges))
      });
    },

    onConnect: (params: Connection) => {

      console.log('onConnect: ', 'fired')

      set((state: State) => {
        const newEdges = addEdge({ ...params, type: "custom" }, state.edges);
        console.log('newEdges: ', newEdges, typeof newEdges)
        state.svg = render(state.nodes, newEdges)
        state.edges = newEdges;
        // console.log('render: ', render(state.nodes, state.edges))
      });
    },
    // Node-specific slices
    ...createBlendNodeSlice(set),
    ...createColorMatrixNodeSlice(set),
    ...createComponentTransferNodeSlice(set),
    ...createCompositeNodeSlice(set),
    ...createConvolutionMatrixNodeSlice(set),

    // ...createGaussianBlurNodeSlice(set),
  }))
);


export default useStore;
