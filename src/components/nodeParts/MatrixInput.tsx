import clsx from "clsx";
import { NumericFormat } from "react-number-format";
import FieldLabel from "./FieldLabel";

type MatrixInputProps = {
	rows: number;
	cols: number;
	className?: string;
	title: string;
	disabled?: boolean;
	onChange: (v: number, i: number, j: number) => void;
	value: number[][];
	hasValue: boolean;
	hasError: boolean;
	defaultValue: boolean;
};

export function MatrixInput({
	rows,
	cols,
	className,
	value,
	hasValue,
	hasError,
	onChange,
	disabled,
	...props
}: MatrixInputProps) {
	return (
		<div
			className={clsx(
				"flex w-full items-center justify-between p-2",
				className,
			)}
		>
			<FieldLabel>{props.title}</FieldLabel>
			<div className={`flex flex-col  p-0.5 ${disabled ? "opacity-50" : ""}`}>
				{[...Array(rows)].map((_, i) => {
					return (
						<div className="flex" key={`${props.title}-rows-${i}`}>
							{[...Array(cols)].map((_, j) => {
								const inputCns = clsx(
									// {
									// 	"rounded-tl-sm": i === 0 && j === 0,
									// 	"rounded-tr-sm": i === 0 && j === cols - 1,
									// 	"rounded-bl-sm": i === rows - 1 && j === 0,
									// 	"rounded-br-sm": i === rows - 1 && j === cols - 1,
									// },
									"input w-full h-5 text-center font-mono cs-text bg-transparent relative focus:z-10",
								);
								return (
									<NumericFormat
										key={`${props.title}-rows${i}-cols${j}`}
										className={inputCns}
										value={value[i][j]}
										onChange={(e) => {
											onChange(Number(e.target.value), i, j);
										}}
										allowNegative
									/>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
}

MatrixInput.defaultProps = {
	className: "",
	disabled: false,
};
