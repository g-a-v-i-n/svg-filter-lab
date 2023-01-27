import { Node } from "reactflow";
import { updateNodeProp } from "../../lib/updateNodeProp";

export const metadata = {
  type: "source",
  title: "Source",
  tagName: "",
  icon: "􀮟",
  mdn: "",
};

export type NodeData = {
  source: string;
};

export type NodeState = Node<NodeData>;

export type Slice = {
  updateSource: (nodeId: string, source: string) => void;
  updateSVG: (nodeId: string, svg: string) => void;
};

export const createSlice = (set) => ({
  sourceNode: {
    updateSource: (nodeId: string, newSource: string) =>
      updateNodeProp(set, nodeId, "source", newSource),
    updateSVG: (nodeId: string, newSVG: string) =>
      updateNodeProp(set, nodeId, "svg", newSVG),
  },
});

export const defaultData: NodeData = {
  source: "SourceGraphic",
};
