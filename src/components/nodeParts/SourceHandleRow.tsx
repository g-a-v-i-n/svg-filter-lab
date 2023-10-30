import { Position, HandleProps as RFHandleProps } from "reactflow";
import { Handle } from "./Handle";

export type HandleProps = {
	selected: boolean;
	isConnected: boolean;
	title: string;
	className?: string;
	filterText: string;
	filterId: string;
} & RFHandleProps;

export function SourceHandleRow({
	className = "",
	title,
	type,
	position,
	selected,
	isConnected,
	id,
	filterText,
	filterId,
	...props
}: HandleProps) {
	return (
		<div className="flex">
			<div className="">
				<svg className="p-0 w-full h-auto" viewBox="0 0 1000 1000">
					<defs dangerouslySetInnerHTML={{ __html: filterText }} />
					<g filter={`url(#filter-${filterId})`}>
						<circle cx="500" cy="500" r="400" fill="blue" />
					</g>
				</svg>
			</div>
			{/* <div className="flex flex-col gap-2 w-8">
				<button
					type="button"
					className="w-4 h-4 text-gray-500 hover:text-gray-900"
				>
					<div className="cs-text">􀅋</div>
				</button>
				<button
					type="button"
					className="w-4 h-4 text-gray-500 hover:text-gray-900"
				>
					<div className="cs-text">􀈄</div>
				</button>
			</div> */}
			<Handle
				id={id}
				type="source"
				position={Position.Right}
				selected={selected}
				isConnected={isConnected}
				className="mt-1"
				{...props}
			/>
		</div>
	);
}

// className="w-full h-auto image-border rounded"
