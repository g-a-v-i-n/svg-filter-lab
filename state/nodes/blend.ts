import { Node } from "reactflow";

import { updateNodeProp } from "../../lib/updateNodeProp";

export const metadata = {
  type: "blend",
  title: "Blend",
  tagName: "feBlend",
  icon: "􀟗",
  mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBlend",
};

export type NodeData = {
  mode: string;
};

export type NodeState = Node<NodeData>;

export type Slice = {
  updateMode: (nodeId: string, type: string) => void;
};

export const createSlice = (set) => ({
  blendNode: {
    updateMode: (nodeId: string, newMode: string) =>
      updateNodeProp(set, nodeId, "mode", newMode),
  },
});

export const defaultData: NodeData = {
  mode: "normal",
};
