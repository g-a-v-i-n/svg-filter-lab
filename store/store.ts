import create from "zustand";
import { immer } from "zustand/middleware/immer";

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

// export type NodeData = {
//   // color: string;
// };

export type NamedKey = {
  key: string;
  label: string;
  category?: string;
};

export type State = {
  nodes: Node[];
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
const useStore = create(
  immer((set) => ({
    nodes: initialNodes,
    edges: initialEdges,
    // This is the function that React Flow calls every time a node gets updated
    onNodesChange: (changes: NodeChange[]) => {
      set((state: State) => {
        state.nodes = applyNodeChanges(changes, state.nodes);
      });
    },
    // This is the function that React Flow calls every time an edge gets updated
    onEdgesChange: (changes: EdgeChange[]) => {
      set((state: State) => {
        state.edges = applyEdgeChanges(changes, state.edges);
      });
    },
    // This is the function that React Flow calls every time a connection gets created
    onConnect: (params: Connection) => {
      set((state: State) => {
        state.edges = addEdge(params, state.edges);
      });
    },
    // Node-specific updaters
    blendNode: {
      updateMode: (nodeId: string, newMode: NamedKey) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.mode = newMode;
        });
      },
    },
    colorMatrixNode: {
      updateType: (nodeId: string, newType: NamedKey) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.type = newType;
        });
      },
      updateValues: (nodeId: string, newValues: number[][]) => {
        set((state: State) => {
          const index = state.nodes.findIndex((node) => node.id === nodeId);
          state.nodes[index].data.values = newValues;
        });
      },
    },
    //type, tableValues, slope, intercept, amplitude, exponent, offset
    componentTransferNode: {
      red: {
        updateIsOn: (nodeId: string, newIsOn: boolean) => {
          set((state: State) => {
            const index = state.nodes.findIndex((node) => node.id === nodeId);
            state.nodes[index].data.red.isOn = newIsOn;
          });
        },
        updateType: (nodeId: string, newType: NamedKey) => {
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
        updateType: (nodeId: string, newType: NamedKey) => {
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
        updateType: (nodeId: string, newType: NamedKey) => {
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
        updateType: (nodeId: string, newType: NamedKey) => {
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
  }))
);
const selector = (state: RFState) => state.componentTransferNode.updateMode;

// function setNodeDataById(
//   nodes: Node[],
//   nodeId: string,
//   data: any,
//   selector: Function
// ) {
//   const index = nodes.findIndex((node) => node.id === nodeId);

//   nodes[index].data = {};
// }

// // return nodes.map((node) => {
// //   if (node.id === nodeId) {
// //     selector = data;
// //   }
// //   return node;
// // });

// function genericUpdater(node, nodeId, key, data) {
//   produce((state) => {
//     state.lush.forest.contains = null;
//   });
// }

// function updateData(
//   node: Node<NodeData>,
//   nodeId: string,
//   key: string,
//   data: any
// ) {
//   if (node.id === nodeId) {
//     // it's important to create a new object here, to inform React Flow about the changes
//     node.data = { ...node.data, [key]: data };
//   }
//   return node;
// }

// function setPath(obj: object, value: any, path: string) {
//   var i;
//   const pathArr = path.split(".");
//   for (i = 0; i < pathArr.length - 1; i++) obj = obj[pathArr[i]];

//   obj[pathArr[i]] = value;
// }

export default useStore;
