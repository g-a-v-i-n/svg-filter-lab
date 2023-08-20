import { rubberbandPath } from "./rubberbandPath"
import { ConnectionLineComponentProps } from "reactflow"

export default function CustomEdge(props:ConnectionLineComponentProps) {
  const {
    fromX,
    fromY,
    toX,
    toY,
    fromHandle,
    fromPosition,
  } = props;


  const dir = fromPosition === "right" ? -1 : 1
  const nubWidth = 0
  const offsetX = ((fromHandle?.width || 0) + nubWidth) / 2 * dir
  return (
    <>
      <path
        d={rubberbandPath(fromX - offsetX, fromY, toX, toY)}
        className="stroke-black dark:stroke-white"
        strokeWidth="4px"
        fill="none"
      />
      <circle cx={toX} cy={toY} r="2" fill="black"/>
      <circle cx={fromX-offsetX} cy={fromY} r="2" fill="black"/>
      <circle cx={toX} cy={toY} r="25" fill="#000" fillOpacity={0.04}/>
    </>
  )
}
