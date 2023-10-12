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
			className={`flex flex-col surface-2 w-full nodrag ${className}`}
		>
			{children}
		</div>
	);
}

ControlGroup.defaultProps = {
	className: "",
};
