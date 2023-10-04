import FieldLabel from "./FieldLabel";

export type StringInputProps = {
	className?: string;
	title: string;
	onChange: (value: string) => void;
	value: string;
	hasValue?: boolean;
	hasError?: boolean;
	defaultValue?: string;
};

export function StringInput({
	className = "",
	title,
	value,
	onChange,
}: StringInputProps) {
	return (
		<div className="flex w-full px-2 h-8 items-center justify-between z-10">
			<FieldLabel>{title}</FieldLabel>
			<input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className={`inputable w-full flex items-center h-6 px-2 relative z-10 text-right ${className}`}
			/>
		</div>
	);
}
