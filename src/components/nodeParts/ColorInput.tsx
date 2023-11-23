import { HexColorPicker, RgbColorPicker } from "react-colorful";
import * as Popover from "@radix-ui/react-popover";
import { InputRow } from "./InputRow";
import { Color, HexColor } from "@/types";
import string from "@/src/lib/string";

export type ColorInputProps = {
	className?: string;
	title: string;
	labelSpan?: string;
	inputSpan?: string;
	onChange: (value: string) => void;
	value: Color;
	hasValue?: boolean;
	hasError?: boolean;
	defaultValue?: string;
};

export function ColorInput({
	className = "",
	title,
	value,
	labelSpan,
	inputSpan,
	onChange,
}: ColorInputProps) {

	return (
		<InputRow label={title} labelSpan={labelSpan} inputSpan={inputSpan}>
			<div className="flex gap-1 w-full items-center justify-end h-8">
				<Popover.Root>
					<Popover.Trigger asChild>
						<button
							type="button"
							style={{
								backgroundColor: string.fromColor(value),
							}}
							className="w-10 h-5 rounded-[4px] shadow-inset flex flex-row-reverse items-center px-1"
							aria-label="Color picker"
						>
							<span className="cs-text-xxs text-gray-500 text-center font-black font-gray-900 hover:text-gray-900 mix-blend-difference saturate-0">
								􀆈
							</span>
						</button>
					</Popover.Trigger>
					<Popover.Portal>
						<Popover.Content className="PopoverContent" sideOffset={5}>
							{value.type === "hex" && (
								<HexColorPicker
									color={value.value}
									onChange={(v) =>
										onChange({ type: "hex", value: v } as HexColor)
									}
								/>
							)}
							{value.type === "rgb" && (
								<RgbColorPicker
									color={value.value}
									onChange={(v) =>
										onChange({ type: "rgb", value: v } as RgbColor)
									}
								/>
							)}
						</Popover.Content>
					</Popover.Portal>
				</Popover.Root>
			</div>
		</InputRow>
	);
}
