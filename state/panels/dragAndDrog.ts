import { uuid } from "../../lib/uuid"
import { defaultNodeData } from "../store"

export type OnDragOver = (event: React.DragEvent) => void
export type OnDrop = (
  event: React.DragEvent,
  RFWrapper: React.Ref<HTMLDivElement>
) => void

export const createDragAndDropSlice = (set: Function) => ({
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
      const position = state.rfInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })

      const newNode = {
        id: uuid(type),
        type,
        position,
        data: structuredClone(defaultNodeData[type]),
      }

      state.nodes.push(newNode)
    })
  },
})
