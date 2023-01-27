import React from "react";

export default function Card({ isDragging, node }) {
  return (
    <div
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("application/reactflow", node.type);
        event.dataTransfer.effectAllowed = "move";
      }}
      className="rounded-xl surfaceMiddle borderPrimary flex items-center justify-center h-full gap-x-2 px-4 p-2 cursor-grab hover:scale-110 transition-transform shadow-field"
    >
      <span className="select-none">{node.icon}</span>
      <span className="select-none">{node.title}</span>
    </div>
  );
}
