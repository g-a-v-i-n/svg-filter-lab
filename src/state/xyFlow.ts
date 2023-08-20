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

                state.edges.push(edge)
            })
        },

        // Called on select and remove - handler for adding interactivity for a controlled flow
        onEdgesChange: (changes: EdgeChange[]) => {
            set((state: State) => {
                state.edges = applyEdgeChanges(changes, state.edges)
            })
        },

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