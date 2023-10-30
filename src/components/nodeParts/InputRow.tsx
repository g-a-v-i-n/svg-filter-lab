import FieldLabel from "./FieldLabel";
import clsx from "clsx";

export type InputRowProps = {
	className?: string;
	label: string;
	labelSpan?: string;
	inputSpan?: string;
	children: React.ReactNode;
};

export function InputRow({
	className = "",
	labelSpan = "col-span-2",
	inputSpan = "col-span-4",
	label,
	children,
}: InputRowProps) {
	return (
		<div
			className={clsx("grid grid-cols-6 gap-1 grid-flow-auto px-2", className)}
		>
			<FieldLabel className={clsx(labelSpan)}>{label}</FieldLabel>
			<div className={clsx(inputSpan)}>{children}</div>
		</div>
	);
}
