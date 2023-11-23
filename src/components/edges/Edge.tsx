import clsx from "clsx";
import { rubberbandPath } from "./rubberbandPath";
import { EdgeProps, getBezierPath } from "reactflow";

export default function CustomEdge(props: EdgeProps) {
	const {
		id,
		sourceX,
		sourceY,
		targetX,
		targetY,
		style = {},
		markerEnd,
		sourcePosition,
		targetPosition,
		selected,
	} = props;
	const [edgePath] = getBezierPath({
		sourceX: sourceX - 5,
		sourceY,
		sourcePosition,
		targetX: targetX + 5,
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
				strokeLinecap="round"
				strokeWidth="6px"
				className={clsx({
					"transition-colors": true,
					"stroke-[#8c8c8c] dark:stroke-[#737373]": !selected,
					"stroke-gray-max": selected,
				})}
				fill="none"
			/>
		</>
	);
}
