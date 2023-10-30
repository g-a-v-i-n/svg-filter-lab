import {
	Handle as RFHandle,
	Position,
	HandleProps as RFHandleProps,
} from "reactflow";
import clsx from "clsx";

export type HandleProps = {
	selected: boolean;
	className?: string;
	isConnected: boolean;
} & RFHandleProps;

export function Handle({
	className = "",
	selected,
	isConnected,
	...props
}: HandleProps) {
	return (
		<RFHandle
			className={clsx(
				{
					"rounded-l-sm": props.position === Position.Right,
					"rounded-r-sm": props.position === Position.Left,
					"bg-gray-500": isConnected,
					// "bg-blue": props.selected,
				},
				"h-6 w-[4px] flex-none transition-colors bg-gray-200 hover:bg-gray-max",
				className,
			)}
			{...props}
		/>
	);
}
