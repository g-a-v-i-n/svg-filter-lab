import React from "react"

export default function Card({ isDragging, node }) {
  return (
    <div
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("application/reactflow", node.type)
        event.dataTransfer.effectAllowed = "move"
      }}
      className="rounded-xl surfaceMiddle hover:surfaceHigh border borderPrimary flex items-center justify-center gap-x-2 p-4 cursor-grab shadow-field"
    >
      <span className="select-none">{node.icon}</span>
      <span className="select-none">{node.title}</span>
    </div>
  )
}
