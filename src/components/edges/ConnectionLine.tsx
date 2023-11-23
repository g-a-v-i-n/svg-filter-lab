import { rubberbandPath } from "./rubberbandPath";
import { ConnectionLineComponentProps, getBezierPath } from "reactflow";

export default function CustomEdge(props: ConnectionLineComponentProps) {
	const { fromX, fromY, toX, toY, toPosition, fromPosition } = props;

	// const dir = fromPosition === "right" ? -1 : 1;
	// const nubWidth = 0;
	// const offsetX = (((fromHandle?.width || 0) + nubWidth) / 2) * dir;

	const [edgePath] = getBezierPath({
		sourceX: fromX,
		sourceY: fromY,
		targetX: toX,
		targetY: toY,
		sourcePosition: fromPosition,
		targetPosition: toPosition,
	});
	return (
		<>
			<path
				d={edgePath}
				className="stroke-gray-max"
				strokeWidth="3px"
				fill="none"
				strokeLinecap="round"
			/>
		</>
	);
}
