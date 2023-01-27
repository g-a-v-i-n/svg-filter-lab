import { Node } from "reactflow";
import { updateNodeProp } from "../../lib/updateNodeProp";

export const metadata = {
  type: "componentTransfer",
  title: "Component Transfer",
  tagName: "feComponentTransfer",
  icon: "􀊝",
  mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComponentTransfer",
};

export type Channel = {
  isOn: boolean;
  type: string;
  amplitude: number;
  exponent: number;
  offset: number;
  slope: number;
  intercept: number;
  tableValues: number[][];
};

export type ChannelLabel = "red" | "green" | "blue" | "alpha";

export type NodeData = {
  red: Channel;
  green: Channel;
  blue: Channel;
  alpha: Channel;
};

export type NodeState = Node<NodeData>;

export type Slice = {
  updateComponentTransfer: (nodeId: string, type: string) => void;
};

export const createSlice = (set) => ({
  componentTransferNode: {
    red: {
      updateIsOn: (nodeId: string, newIsOn: Boolean) =>
        updateNodeProp(set, nodeId, "red.isOn", newIsOn),
      updateType: (nodeId: string, newType: string) =>
        updateNodeProp(set, nodeId, "red.type", newType),
      updateTableValues: (nodeId: string, newTableValues: number[][]) =>
        updateNodeProp(set, nodeId, "red.tableValues", newTableValues),
      updateSlope: (nodeId: string, newSlope: number) =>
        updateNodeProp(set, nodeId, "red.slope", newSlope),
      updateIntercept: (nodeId: string, newIntercept: number) =>
        updateNodeProp(set, nodeId, "red.intercept", newIntercept),
      updateAmplitude: (nodeId: string, newAmplitude: number) =>
        updateNodeProp(set, nodeId, "red.amplitude", newAmplitude),
      updateExponent: (nodeId: string, newExponent: number) =>
        updateNodeProp(set, nodeId, "red.exponent", newExponent),
      updateOffset: (nodeId: string, newOffset: number) =>
        updateNodeProp(set, nodeId, "red.offset", newOffset),
    },
    green: {
      updateIsOn: (nodeId: string, newIsOn: Boolean) =>
        updateNodeProp(set, nodeId, "green.isOn", newIsOn),
      updateType: (nodeId: string, newType: string) =>
        updateNodeProp(set, nodeId, "green.type", newType),
      updateTableValues: (nodeId: string, newTableValues: number[][]) =>
        updateNodeProp(set, nodeId, "green.tableValues", newTableValues),
      updateSlope: (nodeId: string, newSlope: number) =>
        updateNodeProp(set, nodeId, "green.slope", newSlope),
      updateIntercept: (nodeId: string, newIntercept: number) =>
        updateNodeProp(set, nodeId, "green.intercept", newIntercept),
      updateAmplitude: (nodeId: string, newAmplitude: number) =>
        updateNodeProp(set, nodeId, "green.amplitude", newAmplitude),
      updateExponent: (nodeId: string, newExponent: number) =>
        updateNodeProp(set, nodeId, "green.exponent", newExponent),
      updateOffset: (nodeId: string, newOffset: number) =>
        updateNodeProp(set, nodeId, "green.offset", newOffset),
    },
    blue: {
      updateIsOn: (nodeId: string, newIsOn: Boolean) =>
        updateNodeProp(set, nodeId, "blue.isOn", newIsOn),
      updateType: (nodeId: string, newType: string) =>
        updateNodeProp(set, nodeId, "blue.type", newType),
      updateTableValues: (nodeId: string, newTableValues: number[][]) =>
        updateNodeProp(set, nodeId, "blue.tableValues", newTableValues),
      updateSlope: (nodeId: string, newSlope: number) =>
        updateNodeProp(set, nodeId, "blue.slope", newSlope),
      updateIntercept: (nodeId: string, newIntercept: number) =>
        updateNodeProp(set, nodeId, "blue.intercept", newIntercept),
      updateAmplitude: (nodeId: string, newAmplitude: number) =>
        updateNodeProp(set, nodeId, "blue.amplitude", newAmplitude),
      updateExponent: (nodeId: string, newExponent: number) =>
        updateNodeProp(set, nodeId, "blue.exponent", newExponent),
      updateOffset: (nodeId: string, newOffset: number) =>
        updateNodeProp(set, nodeId, "blue.offset", newOffset),
    },
    alpha: {
      updateIsOn: (nodeId: string, newIsOn: Boolean) =>
        updateNodeProp(set, nodeId, "alpha.isOn", newIsOn),
      updateType: (nodeId: string, newType: string) =>
        updateNodeProp(set, nodeId, "alpha.type", newType),
      updateTableValues: (nodeId: string, newTableValues: number[][]) =>
        updateNodeProp(set, nodeId, "alpha.tableValues", newTableValues),
      updateSlope: (nodeId: string, newSlope: number) =>
        updateNodeProp(set, nodeId, "alpha.slope", newSlope),
      updateIntercept: (nodeId: string, newIntercept: number) =>
        updateNodeProp(set, nodeId, "alpha.intercept", newIntercept),
      updateAmplitude: (nodeId: string, newAmplitude: number) =>
        updateNodeProp(set, nodeId, "alpha.amplitude", newAmplitude),
      updateExponent: (nodeId: string, newExponent: number) =>
        updateNodeProp(set, nodeId, "alpha.exponent", newExponent),
      updateOffset: (nodeId: string, newOffset: number) =>
        updateNodeProp(set, nodeId, "alpha.offset", newOffset),
    },
  },
});

export const defaultChannel = {
  isOn: true,
  type: "identity",
  amplitude: 1,
  exponent: 1,
  offset: 0,
  slope: 1,
  intercept: 0,
  tableValues: [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ],
};

export const defaultData: NodeData = {
  red: { ...defaultChannel },
  green: { ...defaultChannel },
  blue: { ...defaultChannel },
  alpha: { ...defaultChannel },
};
