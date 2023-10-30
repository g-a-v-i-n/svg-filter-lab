import clsx from "clsx";
import { rubberbandPath } from "./rubberbandPath";
import { EdgeProps } from "reactflow";

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
