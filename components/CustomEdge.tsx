import React from "react";
import { getBezierPath } from "reactflow";
import { theme } from "../tailwind.config";

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
        stroke={theme.extend.colors.quaternary}
        fill="none"
        strokeLinecap="round"
      />
      <path
        id={id}
        style={style}
        d={edgePath}
        markerEnd={markerEnd}
        strokeWidth="4px"
        stroke={theme.extend.colors.primary}
        fill="none"
        strokeDasharray="6 6"
      />
    </>
  );
}
