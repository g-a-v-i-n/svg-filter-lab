import { Node } from "reactflow";
import { updateNodeProp } from "../../lib/updateNodeProp";

export const metadata = {
  type: "composite",
  title: "Composite",
  tagName: "feComposite",
  icon: "􀯮",
  mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite",
};

export type NodeData = {
  operator: string;
  k1: number;
  k2: number;
  k3: number;
  k4: number;
};

export type NodeState = Node<NodeData>;

export type Slice = {
  updateOperator: (nodeId: string, type: string) => void;
  updateK1: (nodeId: string, newK1: number) => void;
  updateK2: (nodeId: string, newK2: number) => void;
  updateK3: (nodeId: string, newK3: number) => void;
  updateK4: (nodeId: string, newK4: number) => void;
};

export const createSlice = (set) => ({
  compositeNode: {
    updateOperator: (nodeId: string, newOperator: string) =>
      updateNodeProp(set, nodeId, "operator", newOperator),
    updateK1: (nodeId: string, newK1: number) =>
      updateNodeProp(set, nodeId, "k1", newK1),
    updateK2: (nodeId: string, newK2: number) =>
      updateNodeProp(set, nodeId, "k2", newK2),
    updateK3: (nodeId: string, newK3: number) =>
      updateNodeProp(set, nodeId, "k3", newK3),
    updateK4: (nodeId: string, newK4: number) =>
      updateNodeProp(set, nodeId, "k4", newK4),
  },
});

export const defaultData: NodeData = {
  operator: "atop",
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
};
