import { Node } from "reactflow";
import { State } from "./store";

export const componentTransferTypes = [
  { label: "Identity", key: "identity", category: "preset" },
  { label: "Table", key: "table", category: "custom" },
  { label: "Discrete", key: "discrete", category: "custom" },
  { label: "Linear", key: "linear", category: "custom" },
  { label: "Gamma", key: "gamma", category: "custom" },
];

export type ComponentTransferTypes = typeof componentTransferTypes;

export type ComponentTransferType = ComponentTransferTypes[number];

export type Channel = {
    isOn: boolean;
    type: ComponentTransferType;
    amplitude: number;
    exponent: number;
    offset: number;
    slope: number;
    intercept: number;
    tableValues: number[][];
}

export type ChannelLabel = "red" | "green" | "blue" | "alpha";

export type ComponentTransferNodeData = {
  red: Channel,
  green: Channel,
  blue: Channel,
  alpha: Channel,
};

export type ComponentTransferNodeState = Node<ComponentTransferNodeData>;

export type ComponentTransferNodeSlice = {
  updateComponentTransfer: (
    nodeId: string,
    type: ComponentTransferType
  ) => void;
};

export const createComponentTransferNodeSlice = (set) => ({
  componentTransferNode: {
    red: {
      updateIsOn: (nodeId: string, newIsOn: boolean) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.red.isOn = newIsOn;
        });
      },
      updateType: (nodeId: string, newType: ComponentTransferType) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.red.type = newType;
        });
      },
      // Type = table or discrete
      updateTableValues: (nodeId: string, newTableValues: number[][]) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.red.tableValues = newTableValues;
        });
      },
      // Type = linear
      updateSlope: (nodeId: string, newSlope: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.red.slope = newSlope;
        });
      },
      updateIntercept: (nodeId: string, newIntercept: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.red.intercept = newIntercept;
        });
      },
      // Type = Gamma
      updateAmplitude: (nodeId: string, newAmplitude: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.red.amplitude = newAmplitude;
        });
      },
      updateExponent: (nodeId: string, newExponent: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.red.exponent = newExponent;
        });
      },
      updateOffset: (nodeId: string, newOffset: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.red.offset = newOffset;
        });
      },
    },
    green: {
      updateIsOn: (nodeId: string, newIsOn: boolean) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.green.isOn = newIsOn;
        });
      },
      updateType: (nodeId: string, newType: ComponentTransferType) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.green.type = newType;
        });
      },
      // Type = table or discrete
      updateTableValues: (nodeId: string, newTableValues: number[][]) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.green.tableValues = newTableValues;
        });
      },
      // Type = linear
      updateSlope: (nodeId: string, newSlope: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.green.slope = newSlope;
        });
      },
      updateIntercept: (nodeId: string, newIntercept: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.green.intercept = newIntercept;
        });
      },
      // Type = Gamma
      updateAmplitude: (nodeId: string, newAmplitude: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.green.amplitude = newAmplitude;
        });
      },
      updateExponent: (nodeId: string, newExponent: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.green.exponent = newExponent;
        });
      },
      updateOffset: (nodeId: string, newOffset: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.green.offset = newOffset;
        });
      },
    },
    blue: {
      updateIsOn: (nodeId: string, newIsOn: boolean) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.blue.isOn = newIsOn;
        });
      },
      updateType: (nodeId: string, newType: ComponentTransferType) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.blue.type = newType;
        });
      },
      // Type = table or discrete
      updateTableValues: (nodeId: string, newTableValues: number[][]) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.blue.tableValues = newTableValues;
        });
      },
      // Type = linear
      updateSlope: (nodeId: string, newSlope: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.blue.slope = newSlope;
        });
      },
      updateIntercept: (nodeId: string, newIntercept: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.blue.intercept = newIntercept;
        });
      },
      // Type = Gamma
      updateAmplitude: (nodeId: string, newAmplitude: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.blue.amplitude = newAmplitude;
        });
      },
      updateExponent: (nodeId: string, newExponent: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.blue.exponent = newExponent;
        });
      },
      updateOffset: (nodeId: string, newOffset: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.blue.offset = newOffset;
        });
      },
    },
    alpha: {
      updateIsOn: (nodeId: string, newIsOn: boolean) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.alpha.isOn = newIsOn;
        });
      },
      updateType: (nodeId: string, newType: ComponentTransferType) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.alpha.type = newType;
        });
      },
      // Type = table or discrete
      updateTableValues: (nodeId: string, newTableValues: number[][]) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.alpha.tableValues = newTableValues;
        });
      },
      // Type = linear
      updateSlope: (nodeId: string, newSlope: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.alpha.slope = newSlope;
        });
      },
      updateIntercept: (nodeId: string, newIntercept: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.alpha.intercept = newIntercept;
        });
      },
      // Type = Gamma
      updateAmplitude: (nodeId: string, newAmplitude: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.alpha.amplitude = newAmplitude;
        });
      },
      updateExponent: (nodeId: string, newExponent: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.alpha.exponent = newExponent;
        });
      },
      updateOffset: (nodeId: string, newOffset: number) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.alpha.offset = newOffset;
        });
      },
    },
  },
});
