import { InputRow } from "./InputRow";

export type StringInputProps = {
	className?: string;
	title: string;
	labelSpan?: string;
	inputSpan?: string;
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
	labelSpan,
	inputSpan,
	onChange,
}: StringInputProps) {
	return (
		<InputRow label={title} labelSpan={labelSpan} inputSpan={inputSpan}>
			<div className="flex gap-1 w-full items-center h-8">
				<input
					type="text"
					value={value}
					onChange={(e) => onChange(e.target.value)}
					className={`input w-full flex rounded items-center h-[22px] cs-text text-right bg-transparent px-1 ${className}`}
				/>
			</div>
		</InputRow>
	);
}
