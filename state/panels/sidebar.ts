import { createNode } from "../common"

export type OnDragOver = (event: React.DragEvent) => void
export type OnDrop = (
  event: React.DragEvent,
  RFWrapper: React.Ref<HTMLDivElement>
) => void

export const createSidebarSlice = (set: Function) => ({
  onDragOver: (event: React.DragEvent) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  },

  onDrop: (event: React.DragEvent, RFWrapper: React.Ref<HTMLDivElement>) => {
    event.preventDefault()

    const reactFlowBounds = RFWrapper.current.getBoundingClientRect()
    const type = event.dataTransfer.getData("application/reactflow")

    // check if the dropped element is valid
    if (typeof type === "undefined" || !type) {
      return
    }

    set((state: State) => {
      if (state.xyfInstance.project === undefined) {
        console.log(state)
      }
      const position = state.xyfInstance?.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })

      const newNode = createNode({
        nodeType: type,
        position,
      })

      state.nodes.push(newNode)
    })
  },
})
