import React from "react"
import { getBezierPath, EdgeLabelRenderer } from "reactflow"
import { theme } from "../../tailwind.config"

function angle(cx, cy, ex, ey) {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  // theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  //if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
}

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
 
  // approximate 'radius' of the arc
  const r = (targetX - sourceX) / 5 > 24 ? 24 : (targetX - sourceX) / 5
  // offset from the edge of the node
  const o = 2


  const theta = angle(
    sourceX + r + o, sourceY, 
    targetX - r - o, targetY
  );

  // const r = 32

  
  console.log(targetX - sourceX)

  const a1 = r * Math.sin(theta)
  const b1 = r * Math.cos(theta)

  const edgePath = `
    M${sourceX} ${sourceY}
    H${sourceX + o}
    Q${sourceX + r + o} ${sourceY} ${sourceX + b1 + r + o} ${sourceY + a1}
    L${targetX - b1 - r - o} ${targetY - a1}
    Q${targetX - r - o} ${targetY} ${targetX - o} ${targetY}
    H${targetX}
  `

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


