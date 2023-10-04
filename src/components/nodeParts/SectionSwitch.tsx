import clsx from "clsx";

export type SwitchRowProps = {
	label: string;
	className?: string;
	children: React.ReactNode;
	checked: boolean;
};

export function SectionSwitch({
	label,
	className,
	children,
	checked,
	...props
}: SwitchRowProps) {
	return (
		<div
			className={clsx(className, {
				"flex w-full items-center justify-between py-1 px-2": true,
			})}
		>
			<label
				{...props}
				className={clsx({
					"flex-none text-sm": true,
					"opacity-70": !checked,
					"opacity-100": checked,
				})}
			>
				{label}
			</label>
			{children}
		</div>
	);
}
