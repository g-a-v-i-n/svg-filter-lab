import clsx from "clsx";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { NumericFormat } from "react-number-format";
import FieldLabel from "./FieldLabel";
import { Separator } from "./Separator";
import { InputRow } from "./InputRow";

export type NumberInputProps = {
	title: string;
	onChange: (value: number) => void;
	value: number;
	step: number;
	precision: number;
	min: number;
	max: number;
	allowNegative: boolean;
	className: string;
	hasValue: boolean;
	hasError: boolean;
	defaultValue?: number;
	labelSpan?: string;
	inputSpan?: string;
};

export function NumberInput({
	title,
	onChange,
	step = 1,
	precision = 0.1,
	className,
	allowNegative = false,
	value,
	max = Infinity,
	min = -Infinity,
	labelSpan,
	inputSpan,
}: NumberInputProps) {
	const [shiftHeld, setShiftHeld] = useState(false);

	useHotkeys(
		"shift",
		(event) => {
			setShiftHeld(event.type === "keydown");
		},
		{
			keydown: true,
			keyup: true,
		},
		[shiftHeld],
	);

	return (
		<InputRow label={title} labelSpan={labelSpan} inputSpan={inputSpan}>
			<div className="flex gap-1 w-full">
				<div className="inputable w-full flex rounded items-center h-[22px]">
					<NumericFormat
						className={clsx(
							"flex cs-text items-center text-right bg-transparent px-1 w-full ",
							className,
						)}
						type={"text"}
						value={value}
						isAllowed={(values) => {
							const { floatValue } = values;
							if (floatValue === undefined) return false;
							return floatValue <= max && floatValue >= min;
						}}
						onChange={(e) => onChange(Number(e.target.value))}
						allowNegative={allowNegative}
					/>
				</div>

				<div className="flex flex-col fieldDivY rounded-full pressable h-[22px] w-[14px]">
					<DetentButton
						onClick={() =>
							onChange(
								calculateAndFormat(value, step, precision, "add", shiftHeld),
							)
						}
						className=""
					>
						􀆇
					</DetentButton>
					<Separator />
					<DetentButton
						onClick={() =>
							onChange(
								calculateAndFormat(
									value,
									step,
									precision,
									"subtract",
									shiftHeld,
								),
							)
						}
						className=""
					>
						􀆈
					</DetentButton>
				</div>
			</div>
		</InputRow>
	);
}

type DetentButtonProps = {
	onClick: () => void;
	className?: string;
	children: React.ReactNode;
};

function DetentButton(props: DetentButtonProps) {
	return (
		<button
			type="button"
			onClick={props.onClick}
			className={clsx(
				"h-full w-full flex items-center justify-center px-0.5",
				props.className,
			)}
		>
			<span className="cs-text-xxxs text-3 text-center font-black hover:text-1">
				{props.children}
			</span>
		</button>
	);
}

function calculateAndFormat(
	value: number,
	step: number,
	precision: number,
	operation: "add" | "subtract",
	shiftHeld: boolean,
) {
	let result;
	const multiplier = shiftHeld ? 10 : 1;

	switch (operation) {
		case "add":
			result = Number(value) + step * multiplier;
			break;
		case "subtract":
			result = Number(value) - step * multiplier;
			break;
		default:
			throw new Error("Invalid operation. Use 'add' or 'subtract'.");
	}

	// console.log(value, step, result, precision, result.toFixed(precision));

	return parseFloat(result.toFixed(precision));
}
