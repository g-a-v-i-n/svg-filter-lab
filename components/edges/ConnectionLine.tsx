import React from "react"
import { rubberbandPath } from "./rubberbandPath"

export default function CustomEdge({
  id,
  fromX,
  fromY,
  toX,
  toY,
  style = {},
  markerEnd,
}) {
  return (
    <>
      <path
        id={id}
        style={style}
        d={rubberbandPath(fromX, fromY, toX, toY)}
        markerEnd={markerEnd}
        strokeWidth="4px"
        fill="none"
        strokeLinecap="round"
        className="stroke-connection dark:stroke-inverseConnection"
      />
    </>
  )
}
