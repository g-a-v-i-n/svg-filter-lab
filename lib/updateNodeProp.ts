import { set as _set } from 'lodash';
import { State, } from "../stores/store";
import {
    Node
  } from "reactflow";

export function updateNodeProp<T extends keyof Node["data"]>(set, nodeId: string, path: T, newValue: Node["data"][T]) {
    set((state:State) => {
      const index = state.nodes.findIndex((node) => node.id === nodeId);
      const root = state.nodes[index].data;
      _set(root, path, newValue);
    });
  }