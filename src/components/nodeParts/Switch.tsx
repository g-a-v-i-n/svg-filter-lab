import * as RS from "@radix-ui/react-switch";
import clsx from "clsx";
import { forwardRef, Ref } from "react";

export type SwitchProps = {
	className?: string;
	checked: boolean;
	onCheckedChange: (checked: boolean) => void;
};

export const Switch = forwardRef(
	(
		{ className = "", checked, ...props }: SwitchProps,
		ref: Ref<HTMLButtonElement>,
	) => {
		return (
			<RS.Root
				ref={ref}
				className={clsx(className, {
					"w-7 h-[16px] rounded-full flex p-[0px] shadow-input border transition-all": true,
					"bg-gray-200": !checked,
				})}
				{...props}
			>
				<RS.Thumb
					className={clsx(
						" bg-white w-[14px] h-[14px] rounded-full content-none transition-all",
						{
							"translate-x-0": !checked,
							"translate-x-[12px]": checked,
						},
					)}
				/>
			</RS.Root>
		);
	},
);
