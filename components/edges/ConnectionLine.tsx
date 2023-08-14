import React from "react"
import { rubberbandPath } from "./rubberbandPath"

export default function CustomEdge(props) {
  const {
    id,
    fromX,
    fromY,
    toX,
    toY,
    style = {},
    markerEnd,
    fromHandle,
    fromPosition,
  } = props
  console.log('CustomEdge props', props)
  const dir = fromPosition === "right" ? -1 : 1
  const nubWidth = 0
  const offsetX = (fromHandle.width+nubWidth)/2 * dir
  return (
    <>
      <path
        id={id}
        style={style}
        d={rubberbandPath(fromX - offsetX, fromY, toX, toY)}
        // markerEnd={markerEnd}
        strokeWidth="4px"
        fill="none"
        stroke="black"
      />
      <circle cx={toX} cy={toY} r="2" fill="black"/>
      <circle cx={fromX-offsetX} cy={fromY} r="2" fill="black"/>
      <circle cx={toX} cy={toY} r="25" fill="#000" fillOpacity={0.04}/>
    </>
  )
}
