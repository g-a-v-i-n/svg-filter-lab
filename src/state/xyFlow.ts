import {
    EdgeChange,
    NodeChange,
    Connection,
    applyNodeChanges,
    applyEdgeChanges,
    ReactFlowInstance,
} from "reactflow"
import { uuid } from "../lib/uuid"

export function createXyFlowSlice(set) {
    return {
        nodes: [],
        edges: [],
        // These are used to store any nodes connected to selected edges, or any edges connected to selected nodes
        connectedNodes: [],
        connectedEdges: [],

        // Used to store the ReactFlowInstance ref for the drag-and-drop flow
        xyfInstance: null,

        // Called when the ReactFlowInstance ref is set on mount
        setXyfInstance: (instance: ReactFlowInstance) => {
            set((state: State) => {
                state.xyfInstance = instance
            })
        },

        // Called on drag, select and remove - handler for adding interactivity for a controlled flow
        onNodesChange: (changes: NodeChange[]) => {
            set((state: State) => {
                state.nodes = applyNodeChanges(changes, state.nodes)
            })
        },

        // Called when user connects two nodes in a controlled flow
        onConnect: (params: Connection) => {
            const { source, target, sourceHandle, targetHandle } = params


            set((state: State) => {
                // if the source node is the same as the target node, return
                if (source === target) return

                // if the source and target are already connected, return
                if (
                    state.edges.find(
                        (edge) =>
                            edge.source === source && edge.target === target
                    )
                ) {
                    return
                }

                // constrain to a single connection per input
                // if the target node already has a connection on the targetHandle, return
                if (
                    state.nodes.find(
                        (node) =>
                            node.id === target &&
                            node.data[targetHandle] !== null &&
                            node.data[targetHandle] !== undefined
                    )
                ) {
                    return
                }

                const edge = {
                    ...params,
                    id: uuid("edge"),
                    type: "custom",
                }

                // when two nodes get connected, the target node's in1 or in2 property is set to the source node's id
                // get the source node
                // const sourceNode = state.nodes.find(
                //     (node) => node.id === source
                // ) as Node

                // // get the index of the target node
                // const index = state.nodes.findIndex((node) => node.id === target)

                // // if the source node's type is `source`.
                // if (sourceNode.type === "source") {
                //     // set the target node's in1 or in2 property to the source node's source property
                //     state.nodes[index].data[targetHandle] = sourceNode.data.source
                // } else {
                //     // set the target node's in1 or in2 property to the source node's id
                //     state.nodes[index].data[targetHandle] = source
                // }

                // add the edge to state
                state.edges.push(edge)
            })
        },

        // Called on select and remove - handler for adding interactivity for a controlled flow
        onEdgesChange: (changes: EdgeChange[]) => {
            set((state: State) => {
                // when a connection is deleted, the target node's in1 or in2 property is set to null
                // changes
                //     .filter((change) => change.type === "remove")
                //     .forEach((removalChange) => {
                //         const edge = state.edges.find(
                //             (edge) => edge.id === removalChange.id
                //         ) as Edge

                //         // find all nodes with which this edge is connected as a target
                //         state.nodes
                //             .filter((node) => node.id === edge.target)
                //             .forEach((node) => {
                //                 console.log(node)
                //                 node.data[edge.targetHandle] = null
                //             })
                //     })

                state.edges = applyEdgeChanges(changes, state.edges)
            })
        },

        // onSelectionChange: ({ nodes, edges }: OnSelectionChangeParams) => {
        //   // console.log("onSelectionChange: ", "fired", nodes, edges)
        //   set((state: State) => {
        //     if (nodes.length !== 0) {
        //       // console.log(nodes)
        //       state.filterText = nodes[0]?.data.filterText || "none"
        //     }
        //   })
        // },

        deleteNode: (nodeId: string) => {
            set((state: State) => {
                state.nodes = state.nodes.filter((node) => node.id !== nodeId)
                state.edges = state.edges.filter(
                    (edge) => edge.source !== nodeId && edge.target !== nodeId
                )
            })
        },

        onSelectionChange: ({ nodes, edges }: OnSelectionChangeParams) => {
            set((state: State) => {
                // Get any nodes that are connected to the selected edges
                state.connectedNodes = edges.map((edge) => {
                    const node = state.nodes.filter(
                        (node) => node.id === edge.source || node.id === edge.target
                    )
                    return node
                })

                state.connectedEdges = nodes.map((node) => {
                    const edge = state.edges.filter(
                        (edge) => edge.source === node.id || edge.target === node.id
                    )
                    return edge
                })
            })
        },
    }
}