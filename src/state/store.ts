import create from "zustand"
import { temporal } from 'zundo';
import { immer } from "zustand/middleware/immer"
import nodeDefinitions from './nodes/index'
import { createSidebarSlice } from "./panels/sidebar"
import { createNodeSlice } from "./common"
import filter from "./filter"
import { createXyFlowSlice } from "./xyFlow"
import { NodeDefinition } from "@/types";

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<any>()(
  temporal(
    immer((set) => ({
      // React Flow / xyFlow
      ...createXyFlowSlice(set),

      // Panel slices
      ...createSidebarSlice(set),

      // Node slices
      ...Object.values(nodeDefinitions).reduce((acc: { [key: string]: any }, node: NodeDefinition) => {
        return {
          ...acc,
          ...createNodeSlice(set, node.specification),
        }
      }, {}),
      // Outer filter tag slice
      filter: createNodeSlice(set, filter.specification),

    }))
  )
)

export default useStore;