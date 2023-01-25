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
import { uuid } from "../lib/uuid";
import { defaultNodeData } from "./nodeDefaults";

type Node = (BlendNodeState
  | ColorMatrixNodeState | ComponentTransferNodeState | CompositeNodeState | ConvolutionMatrixNodeState)[]


export type State = {
  nodes: Node[] | [];
  edges: Edge[] | [];

  onNodesChange: () => null;
  onEdgesChange: () => null;
  onConnect: OnConnect;

  // Node-specific updaters
  blendNode: BlendNodeSlice;
  colorMatrixNode: ColorMatrixNodeSlice;
  componentTransferNode: ComponentTransferNodeSlice;
  compositeNode: CompositeNodeSlice;
  convolutionMatrixNode: ConvolutionMatrixNodeSlice;
};

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create()(
  immer((set) => ({
    rfInstance: null,

    setReactFlowInstance: (instance) => set((state) => {
      state.rfInstance = instance
    }),

    nodes: initialNodes,
    edges: initialEdges,

    svg: render(initialNodes, initialEdges),

    onNodesChange: (changes: NodeChange[]) => {
      // console.log('onNodesChange: ', 'fired')
      set((state: State) => {
        state.nodes = applyNodeChanges(changes, state.nodes);
      });
    },

    deleteNode: (nodeId: string) => {
      console.log('deleteNode: ', 'fired')
      set((state: State) => {
        state.nodes = state.nodes.filter((node) => node.id !== nodeId);
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
        state.svg = render(state.nodes, newEdges)
        console.log(state.svg)
        state.edges = newEdges;
        // console.log('render: ', render(state.nodes, state.edges))
      });
    },

    onDragOver: (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    },
      
    onDrop: (event, RFWrapper) => {
      event.preventDefault();

      const reactFlowBounds = RFWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      set((state: State) => {
        
      const position = state.rfInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: uuid(type),
        type,
        position,
        data: structuredClone(defaultNodeData[type]),
      };

      state.nodes.push(newNode);

      // setNodes((nds) => nds.concat(newNode));
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
