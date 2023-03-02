import React from "react"

type CardProps = {
    metadata: {
        type: string
        title: string
        icon: string
        mdn: string | null
    }
}


export default function Card({ metadata }:CardProps) {
  return (
    <div
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("application/reactflow", metadata.type)
        event.dataTransfer.effectAllowed = "move"
      }}
      className="rounded-xl surfaceMiddle hover:surfaceHigh border borderPrimary flex items-center justify-center gap-x-2 p-4 cursor-grab shadow-field"
    >
      <span className="select-none">{metadata.icon}</span>
      <span className="select-none">{metadata.title}</span>
    </div>
  )
}
