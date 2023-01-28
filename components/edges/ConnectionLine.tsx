import React from "react"
import { getBezierPath } from "reactflow"
import { theme } from "../../tailwind.config"

export default function CustomEdge({
  id,
  fromX,
  fromY,
  toX,
  toY,
  fromPosition,
  toPosition,
  style = {},
  data,
  markerEnd,
}) {
  const [edgePath] = getBezierPath({
    sourceX: fromX,
    sourceY: fromY,
    sourcePosition: fromPosition,
    targetX: toX,
    targetY: toY,
    targetPosition: toPosition,
  })

  return (
    <>
      <path
        id={id}
        style={style}
        d={edgePath}
        markerEnd={markerEnd}
        strokeWidth="4px"
        fill="none"
        strokeLinecap="round"
        className="stroke-connection dark:stroke-inverseConnection"
      />
      <path
        id={id}
        style={style}
        d={edgePath}
        markerEnd={markerEnd}
        strokeWidth="4px"
        fill="none"
        strokeDasharray="6 6"
        className="stroke-stroke dark:stroke-inverseStroke"
      />
    </>
  )
}
