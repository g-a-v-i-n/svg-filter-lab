import React from "react"
import clsx from "clsx"
import { rubberbandPath } from "./rubberbandPath"

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style = {},
  markerEnd,
  selected,
}) {
  return (
    <>
      <path
        id={id}
        style={style}
        d={rubberbandPath(sourceX, sourceY, targetX, targetY)}
        markerEnd={markerEnd}
        strokeWidth="5px"
        className={
          clsx({
            "transition-colors": true,
            "strokePrimary hover:stroke-black hover:dark:stroke-white": !selected,
            "stroke-blue-500 dark:stroke-blue-400": selected,
          })
        }
        fill="none"
        strokeLinecap="round"
      />
    </>
  )
}


