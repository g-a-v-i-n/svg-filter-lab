import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import clsx from "clsx";
import { forwardRef, Ref } from "react";
import FieldLabel from "./FieldLabel";

export type SelectProps = {
	title: string;
	className?: string;
	children?: React.ReactNode;
	value: string;
	hasValue: boolean;
	hasError: boolean;
	defaultValue: string;
	onValueChange: (val: string) => void;
};

export const Select = forwardRef(
	(
		{ children, title, className, ...props }: SelectProps,
		forwardedRef: Ref<HTMLButtonElement>,
	) => {
		return (
			<SelectPrimitive.Root {...props}>
				<SelectPrimitive.Trigger
					ref={forwardedRef}
					className={clsx(
						"w-full flex justify-between items-center h-8 text-sm p-2 cursor-pointer",
						className,
					)}
				>
					<FieldLabel>{title}</FieldLabel>
					<div className="group flex items-center justify-center gap-x-1 pl-2">
						<SelectPrimitive.Value className="cs-text text-2" />
						<SelectPrimitive.Icon className="cs-text-xs pressable flex items-center justify-center h-[18px] w-[18px] rounded text-3 text-center font-bold group-hover:text-1">
							􀆈
						</SelectPrimitive.Icon>
					</div>
				</SelectPrimitive.Trigger>
				<SelectPrimitive.Portal>
					<SelectPrimitive.Content
						data-side={"bottom"}
						className="elevated text-1 rounded-lg shadow-lg backdrop-blur-3xl border border-primary"
					>
						<SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
					</SelectPrimitive.Content>
				</SelectPrimitive.Portal>
			</SelectPrimitive.Root>
		);
	},
);

export type SelectItemProps = {
	value: string;
	className?: string;
	children?: React.ReactNode;
};

export const SelectItem = forwardRef(
	(
		{ children, className, ...props }: SelectItemProps,
		forwardedRef: Ref<HTMLDivElement>,
	) => {
		return (
			<div className="p-1">
				<SelectPrimitive.Item
					{...props}
					ref={forwardedRef}
					className={clsx(
						"textSecondary hover:textPrimary hover:bg-black-200 dark:hover:bg-white-200 rounded w-full user-select-none cursor-pointer outline-none flex items-center relative px-8 py-2 hover:bg-inverseTheme",
						className,
					)}
				>
					<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
					<SelectPrimitive.ItemIndicator className="absolute left-0 h-8 w-8 flex items-center justify-center">
						<span className="user-select-none">􀆅</span>
					</SelectPrimitive.ItemIndicator>
				</SelectPrimitive.Item>
			</div>
		);
	},
);

type SeparatorProps = {
	className?: string;
};

export const Separator = forwardRef(
	({ className = "", ...props }: SeparatorProps, ref: Ref<HTMLDivElement>) => {
		return (
			<SelectPrimitive.Separator
				ref={ref}
				className="w-full border-t borderPrimary"
				{...props}
			/>
		);
	},
);
