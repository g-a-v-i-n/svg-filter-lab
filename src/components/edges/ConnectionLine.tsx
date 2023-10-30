import { rubberbandPath } from "./rubberbandPath";
import { ConnectionLineComponentProps } from "reactflow";

export default function CustomEdge(props: ConnectionLineComponentProps) {
	const { fromX, fromY, toX, toY, fromHandle, fromPosition } = props;

	const dir = fromPosition === "right" ? -1 : 1;
	const nubWidth = 0;
	const offsetX = (((fromHandle?.width || 0) + nubWidth) / 2) * dir;
	return (
		<>
			<path
				d={rubberbandPath(fromX - offsetX, fromY, toX, toY)}
				className="stroke-gray-max"
				strokeWidth="4px"
				fill="none"
				strokeLinecap="round"
			/>
		</>
	);
}
