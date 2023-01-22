import React from "react";
import { getBezierPath } from "reactflow";
import { theme } from "../../tailwind.config";

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
}) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        d={edgePath}
        markerEnd={markerEnd}
        strokeWidth="4px"
        className="stroke-quinary dark:stroke-inverseSecondary"
        fill="none"
        strokeLinecap="round"
      />
      <path
        id={id}
        style={style}
        d={edgePath}
        markerEnd={markerEnd}
        strokeWidth="4px"
        className="stroke-primary dark:stroke-inversePrimary"
        fill="none"
        strokeDasharray="6 6"
      />
    </>
  );
}
