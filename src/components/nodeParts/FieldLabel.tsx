import React from "react";

export type FieldLabelProps = {
	className?: string;
	children: React.ReactNode;
};

export default function FieldLabel({
	className,
	children,
	...props
}: FieldLabelProps) {
	return (
		<div className={`flex items-center ${className}`}>
			<label
				{...props}
				className={"text-gray-500 cs-text flex-none text-left pr-2"}
			>
				{children}
			</label>
		</div>
	);
}

FieldLabel.defaultProps = {
	className: "",
};
