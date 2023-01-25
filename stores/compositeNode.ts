import { Node } from "reactflow";
import { updateNodeProp } from "../lib/updateNodeProp";

export const compositeOperators = [
  { label: "Over", key: "over", category: "preset" },
  { label: "In", key: "in", category: "preset" },
  { label: "Out", key: "out", category: "preset" },
  { label: "Atop", key: "atop", category: "preset" },
  { label: "XOR", key: "xor", category: "preset" },
  { label: "Arithmetic", key: "arithmetic", category: "preset" },
  { label: "Lighter", key: "lighter", category: "preset" },
];

export type CompositeOperators = typeof compositeOperators;

export type CompositeOperator = CompositeOperators[number];

export type CompositeNodeData = {
  operator: CompositeOperator;
  k1: number;
  k2: number;
  k3: number;
  k4: number;
};

export type CompositeNodeState = Node<CompositeNodeData>;

export type CompositeNodeSlice = {
  updateOperator: (nodeId: string, type: CompositeOperator) => void;
  updateK1: (nodeId: string, newK1: number) => void;
  updateK2: (nodeId: string, newK2: number) => void;
  updateK3: (nodeId: string, newK3: number) => void;
  updateK4: (nodeId: string, newK4: number) => void;
};

export const createCompositeNodeSlice = (set) => ({
  compositeNode: {
    updateOperator: (nodeId: string, newOperator: CompositeOperator) => updateNodeProp(set, nodeId, "operator", newOperator),
    updateK1: (nodeId: string, newK1: number) => updateNodeProp(set, nodeId, "k1", newK1),
    updateK2: (nodeId: string, newK2: number) => updateNodeProp(set, nodeId, "k2", newK2),
    updateK3: (nodeId: string, newK3: number) => updateNodeProp(set, nodeId, "k3", newK3),
    updateK4: (nodeId: string, newK4: number) => updateNodeProp(set, nodeId, "k4", newK4),
  },
});
