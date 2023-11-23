import { Handle as RFHandle, HandleProps as RFHandleProps } from "reactflow";
import clsx from "clsx";

export type HandleProps = {
	isSelected: boolean;
	className?: string;
	isConnected: boolean;
	label: string;
} & RFHandleProps;

export function Handle({
	className = "",
	isSelected,
	isConnected,
	label,
	...props
}: HandleProps) {
	return (
		<RFHandle
			className={clsx(
				"rounded-full w-5 h-5 flex-none flex border-gray-400 justify-center items-center bg-transparent z-40 ",
				{
					"border-gray-300": !isSelected,
					"border-gray-700": isSelected,
					"hover:border-gray-700": !isConnected,
				},
				className,
			)}
			{...props}
		>
			{isConnected ? (
				<div
					className={clsx("w-3 h-3 rounded-full", {
						"bg-gray-400": !isSelected,
						"bg-gray-700": isSelected,
					})}
				/>
			) : (
				<div />
			)}
		</RFHandle>
	);
}
