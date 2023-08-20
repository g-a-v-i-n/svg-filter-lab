import { uuid } from '@lib/uuid'
import nodes from '@state/nodes/index'

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
    const nodeType = event.dataTransfer.getData("application/reactflow")

    // check if the dropped element is valid
    if (typeof nodeType === "undefined" || !nodeType) {
      return
    }


    set((state: State) => {
      if (state.xyfInstance?.project === undefined) {
        console.log(state)
      }
      const position = state.xyfInstance?.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })

      const newNode = {
        id: uuid(nodeType),
        // xyFlow specific, key must be called type
        type: nodeType,
        position: position,
        data: nodes[nodeType].createData(),
      }

      state.nodes.push(newNode)
    })
  },
})
