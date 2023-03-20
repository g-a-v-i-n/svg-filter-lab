import React from "react"
import { getBezierPath, EdgeLabelRenderer } from "reactflow"
import { theme } from "../../tailwind.config"

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  markerEnd,
  removeEdge,
}) {
  // const [edgePath, labelX, labelY] = getBezierPath({
  //   sourceX,
  //   sourceY,
  //   sourcePosition,
  //   targetX,
  //   targetY,
  //   targetPosition,
  // })

  // console.log(edgePath, sourceX, sourceY, targetX, targetY)

  // const edgePath = `M0 0H27.2727L122.727 95H150`
//   Q x1 y1, x y
// (or)
// q dx1 dy1, dx dy

  const edgePath = `
    M${sourceX} ${sourceY}
    H${sourceX + 32}
    L${targetX - 32} ${targetY}
    H${targetX}`

  //   ctx.quadraticCurveTo(
  //     x + w, 
  //     y, 
  //     x + w,
  //     y + r
  // )

  return (
    <>
      <path
        id={id}
        style={style}
        d={edgePath}
        markerEnd={markerEnd}
        strokeWidth="5px"
        className="stroke-connection dark:stroke-inverseConnection"
        fill="none"
        strokeLinecap="round"
      />
      {/* <path
        id={id}
        style={style}
        d={edgePath}
        markerEnd={markerEnd}
        strokeWidth="5px"
        className="stroke-primary dark:stroke-inversePrimary"
        fill="none"
        strokeDasharray="6 6"
      /> */}
      {/* 
        <EdgeLabelRenderer>
        <button
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
          className="transition-none nodrag nopan bg-white dark:bg-[#080808] rounded-full w-6 h-6 flex items-center justify-center"
          onClick={() => removeEdge(id)}>
          <span className="cs-text font-extrabold text-primary dark:text-inversePrimary hover:text-primary dark:hover:text-inversePrimary ">􀁡</span>
        </button>

      </EdgeLabelRenderer> */}
    </>
  )
}


