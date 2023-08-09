import React from "react"
import { rubberbandPath } from "./rubberbandPath"

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style = {},
  markerEnd,
}) {
  return (
    <>
      <path
        id={id}
        style={style}
        d={rubberbandPath(sourceX, sourceY, targetX, targetY)}
        markerEnd={markerEnd}
        strokeWidth="5px"
        className="stroke-connection dark:stroke-inverseConnection"
        fill="none"
        strokeLinecap="round"
      />
    </>
  )
}


