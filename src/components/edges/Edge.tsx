import clsx from "clsx"
import { rubberbandPath } from "./rubberbandPath"
import { EdgeProps } from "reactflow"

export default function CustomEdge(props: EdgeProps) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    style = {},
    markerEnd,
    selected,
  } = props;
  
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


