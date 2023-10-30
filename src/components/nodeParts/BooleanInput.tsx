import clsx from "clsx";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { NumericFormat } from "react-number-format";
import FieldLabel from "./FieldLabel";
import { Separator } from "./Separator";
import { InputRow } from "./InputRow";
import { Switch } from "./Switch";

export type BooleanInputProps = {
	title: string;
	onChange: (value: boolean) => void;
	checked: boolean;
	className: string;
	hasValue: boolean;
	hasError: boolean;
	defaultValue?: number;
};

export function NumberInput({
	title,
	onChange,
	className,
	value,
	labelSpan,
	inputSpan,
}: BooleanInputProps) {
	return (
		<InputRow label={title} labelSpan={labelSpan} inputSpan={inputSpan}>
			<Switch checked={value} onCheckedChange={onChange} />
		</InputRow>
	);
}
