import { Position, HandleProps as RFHandleProps } from "reactflow";
import clsx from "clsx";
import { SelectItem, Separator } from "./Select";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Handle } from "./Handle";

export type HandleProps = {
	handleId: string;
	nodeId: string;
	selected: boolean;
	isConnected: boolean;
	connectedTo: string | false;
	dropdown: {
		value: string;
		onValueChange: (val: string) => void;
	};
	filter: {
		id: string;
	};
} & RFHandleProps;

export function TargetHandleRow({
	type,
	position,
	selected,
	isConnected,
	connectedTo,
	handleId,
	nodeId,
	dropdown,
	...props
}: HandleProps) {
	const unitFilterId = `filter-unit-${nodeId}-${handleId}`;
	const unitFilterText = `
		<filter id="${unitFilterId}" x="0" y="0" width="100%" height="100%">
			<feBlend mode="normal" in="${dropdown.value}" in2="bg" />
		</filter>
	`;

	const filterId = isConnected ? `filter-${connectedTo}` : unitFilterId;

	return (
		<div className="h-8 flex items-center justify-between gap-1 pr-2">
			<div className="flex items-center gap-1">
				<Handle
					id={handleId}
					type={"target"}
					position={Position.Left}
					selected={selected}
					isConnected={isConnected}
					{...props}
				/>

				<div className="shadow-inset size-6 rounded-sm overflow-hidden">
					<svg className="size-6" viewBox="0 0 1000 1000">
						<defs dangerouslySetInnerHTML={{ __html: unitFilterText }} />
						<g filter={`url(#${filterId})`}>
							<circle cx="500" cy="500" r="400" fill="blue" />
						</g>
					</svg>
				</div>
			</div>
			{isConnected ? (
				<div />
			) : (
				<SelectPrimitive.Root
					value={dropdown.value}
					onValueChange={dropdown.onValueChange}
				>
					<SelectPrimitive.Trigger
						className={clsx("flex items-center gap-1 flex-none")}
					>
						<div className="group flex items-center justify-center gap-x-2 pl-2">
							<SelectPrimitive.Value className="cs-text text-gray-700" />
							<SelectPrimitive.Icon className="button cs-text-xs flex items-center justify-center h-[18px] w-[18px] rounded text-gray-500 text-center font-bold group-hover:text-gray-900">
								􀆈
							</SelectPrimitive.Icon>
						</div>
					</SelectPrimitive.Trigger>
					<SelectPrimitive.Portal>
						<SelectPrimitive.Content
							data-side={"bottom"}
							className="elevated text-gray-900 rounded-lg shadow-lg backdrop-blur-3xl border border-primary"
						>
							<SelectPrimitive.Viewport>
								<SelectItem value="SourceGraphic">Source graphic</SelectItem>
								<SelectItem value="SourceAlpha">Source alpha</SelectItem>
								<Separator />
								<SelectItem value="BackgroundImage">
									Background image
								</SelectItem>
								<SelectItem value="BackgroundAlpha">
									Background alpha
								</SelectItem>
								<Separator />
								<SelectItem value="FillPaint">Fill paint</SelectItem>
								<SelectItem value="StrokePaint">Stroke paint</SelectItem>
							</SelectPrimitive.Viewport>
						</SelectPrimitive.Content>
					</SelectPrimitive.Portal>
				</SelectPrimitive.Root>
			)}
		</div>
	);
}
