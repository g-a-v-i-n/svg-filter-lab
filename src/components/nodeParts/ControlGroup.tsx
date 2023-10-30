import { Separator } from "./Separator";
import React from "react";

export type ControlGroupProps = {
	className?: string;
	children: React.ReactNode;
};

export function ControlGroup({
	className,
	children,
	...props
}: ControlGroupProps) {
	return (
		<div
			{...props}
			className={`flex flex-col bg-gray-50 w-full nodrag overflow-hidden rounded-b-xl ${className}`}
		>
			{children}
		</div>
	);
}

ControlGroup.defaultProps = {
	className: "",
};
