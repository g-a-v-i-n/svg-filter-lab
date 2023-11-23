import { Position, HandleProps as RFHandleProps } from "reactflow";
import { Handle } from "./Handle";

export type HandleProps = {
	selected: boolean;
	isConnected: boolean;
	label: string;
	className?: string;
	filterText: string;
	filterId: string;
} & RFHandleProps;

export function SourceHandleRow({
	className = "",
	type,
	position,
	isSelected,
	isConnected,
	id,
	filterText,
	filterId,
	label,
	...props
}: HandleProps) {
	return (
		<div className="relative w-full">
			<svg className="w-full h-auto" viewBox="0 0 1000 1000">
				<defs dangerouslySetInnerHTML={{ __html: filterText }} />
				<g filter={`url(#filter-${filterId})`}>
					<circle cx="500" cy="500" r="400" fill="blue" />
				</g>
			</svg>

			<Handle
				id={id}
				type="source"
				position={Position.Right}
				isSelected={isSelected}
				isConnected={isConnected}
				className="absolute top-1.5 -right-7 ml-auto"
				label={label}
				{...props}
			/>
		</div>
	);
}
