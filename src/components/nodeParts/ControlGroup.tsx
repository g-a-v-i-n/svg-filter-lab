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
		<div {...props} className={`flex flex-col ${className}`}>
			<div className="surfaceSecondary border-t borderPrimary flex flex-col w-full nodrag pt-1 rounded-b-xl">
				{children}
			</div>
		</div>
	);
}

ControlGroup.defaultProps = {
	className: "",
};
