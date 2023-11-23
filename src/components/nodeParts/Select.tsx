import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import clsx from "clsx";
import { forwardRef, Ref } from "react";
import { InputRow } from "./InputRow";

export type SelectProps = {
	title: string;
	className?: string;
	children?: React.ReactNode;
	value: string;
	hasValue: boolean;
	hasError: boolean;
	defaultValue: string;
	labelSpan?: string;
	inputSpan?: string;
	onValueChange: (val: string) => void;
};

export const Select = forwardRef(
	(
		{ children, title, className, labelSpan, inputSpan, ...props }: SelectProps,
		forwardedRef: Ref<HTMLButtonElement>,
	) => {
		return (
			<InputRow label={title} labelSpan={labelSpan} inputSpan={inputSpan}>
				<div className="flex justify-end items-center w-full h-8">
					<SelectPrimitive.Root {...props}>
						<SelectPrimitive.Trigger
							ref={forwardedRef}
							className={clsx(
								"flex items-center justify-end cursor-pointer",
								className,
							)}
						>
							<div className="group flex items-center justify-center gap-x-2 pl-2">
								<SelectPrimitive.Value className="cs-text text-gray-700" />
								<SelectPrimitive.Icon className="button cs-text-xs flex items-center justify-center h-[18px] w-[18px] rounded text-gray-500 text-center font-bold group-hover:text-gray-900 flex-none">
									􀆈
								</SelectPrimitive.Icon>
							</div>
						</SelectPrimitive.Trigger>
						<SelectPrimitive.Portal>
							<SelectPrimitive.Content
								data-side={"bottom"}
								className="slide-up text-gray-900 rounded-lg shadow-lg backdrop-blur-3xl border border-gray-200"
							>
								<SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
							</SelectPrimitive.Content>
						</SelectPrimitive.Portal>
					</SelectPrimitive.Root>
				</div>
			</InputRow>
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
						"text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded w-full user-select-none cursor-pointer outline-none flex items-center relative px-8 py-2",
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
				className="w-full border-t border-gray-100"
				{...props}
			/>
		);
	},
);
