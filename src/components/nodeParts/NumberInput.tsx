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
	precision = 3,
	className,
	allowNegative = false,
	value,
	max = Infinity,
	min = -Infinity,
	labelSpan,
	inputSpan,
}: NumberInputProps) {
	const [shiftHeld, setShiftHeld] = useState(false);
	const [altHeld, setAltHeld] = useState(false);

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

	useHotkeys(
		"alt",
		(event) => {
			setAltHeld(event.type === "keydown");
		},
		{
			keydown: true,
			keyup: true,
		},
		[altHeld],
	);

	return (
		<InputRow label={title} labelSpan={labelSpan} inputSpan={inputSpan}>
			<div className="flex gap-1 w-full items-center h-8">
				<NumericFormat
					className={clsx(
						"input w-full flex rounded items-center h-[22px] cs-text text-right bg-transparent px-1",
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

				<div className="flex flex-col divide-y divide-gray-50 rounded-full button h-[22px] w-[14px]">
					<DetentButton
						onClick={() =>
							onChange(
								calculateAndFormat(
									value,
									step,
									precision,
									"add",
									shiftHeld,
									altHeld,
								),
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
									altHeld,
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
			<span className="cs-text-xxxs text-gray-500 text-center font-black font-gray-900 hover:text-gray-900">
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
	altHeld: boolean,
) {
	let result;
	const multiplier = shiftHeld ? 10 : altHeld ? 0.1 : 1;

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

	return parseFloat(result.toFixed(precision));
}
