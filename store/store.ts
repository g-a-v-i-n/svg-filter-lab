import create from "zustand";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";

import { initialNodes, initialEdges } from "./defaultState";

export type NodeData = {
  // color: string;
};

export type NamedKey = {
  key: string;
  label: string;
  category?: string;
};

export type RFState = {
  nodes: Node<NodeData>[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  // Node-specific updaters
  blendNode: {
    updateMode: (nodeId: string, mode: NamedKey) => void;
  };
  colorMatrixNode: {
    updateType: (nodeId: string, type: NamedKey) => void;
    updateValues: (nodeId: string, values: number[][]) => void;
  };
};

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  blendNode: {
    updateMode: (nodeId: string, modeProp: NamedKey) => {
      set({
        nodes: get().nodes.map((node) =>
          updateData(node, nodeId, "mode", modeProp)
        ),
      });
    },
  },
  colorMatrixNode: {
    updateType: (nodeId: string, typeProp: NamedKey) => {
      set({
        nodes: get().nodes.map((node) =>
          updateData(node, nodeId, "type", typeProp)
        ),
      });
    },
    updateValues: (nodeId: string, valuesProp: number[][]) => {
      set({
        nodes: get().nodes.map((node) =>
          updateData(node, nodeId, "values", valuesProp)
        ),
      });
    },
  },
}));

function updateData(
  node: Node<NodeData>,
  nodeId: string,
  key: string,
  data: any
) {
  if (node.id === nodeId) {
    // it's important to create a new object here, to inform React Flow about the changes
    node.data = { ...node.data, [key]: data };
  }
  return node;
}

export default useStore;
