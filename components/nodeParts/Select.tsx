import * as SelectPrimitive from "@radix-ui/react-select"
import clsx from "clsx"
import { forwardRef, Ref } from "react"
import FieldLabel from "./FieldLabel"

export type SelectProps = {
  name: string
  className?: string
  children?: React.ReactNode
  value: string
  onValueChange: (val: string) => void
}

export const Select = forwardRef(
  (
    { children, name, className, ...props }: SelectProps,
    forwardedRef: Ref<HTMLButtonElement>
  ) => {
    return (
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger
          ref={forwardedRef}
          className={clsx(
            "w-full flex justify-between items-center h-8 text-sm p-2 cursor-default",
            className
          )}
        >
          <FieldLabel>{name}</FieldLabel>
          <div className="flex items-center gap-x-1">
            <SelectPrimitive.Value className="cs-text" />
            <SelectPrimitive.Icon>
              <span className="textSecondary cs-text-sm font-bold">􀆈</span>
            </SelectPrimitive.Icon>
          </div>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className="bg-primary text-inversePrimary rounded-lg shadow-high">
            <SelectPrimitive.ScrollUpButton className="w-full flex surfaceHigh items-center justify-center">
              <span className="textSecondary cs-text-sm font-bold">􀆈</span>
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton className="w-full flex surfaceHigh items-center justify-center">
              <span className="textSecondary cs-text-sm font-bold">􀆈</span>
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    )
  }
)

export type SelectItemProps = {
  value: string
  className?: string
  children?: React.ReactNode
}

export const SelectItem = forwardRef(
  (
    { children, className, ...props }: SelectItemProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    return (
      <div className="px-1 py-0.5">
        <SelectPrimitive.Item
          {...props}
          ref={forwardedRef}
          className={clsx(
            "rounded w-full user-select-none cursor-pointer outline-none flex items-center relative px-8 py-3 hover:bg-inverseTheme",
            className
          )}
        >
          <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
          <SelectPrimitive.ItemIndicator className="absolute left-0 h-8 w-8 flex items-center justify-center">
            <span className="text-inversePrimary user-select-none">􀆅</span>
          </SelectPrimitive.ItemIndicator>
        </SelectPrimitive.Item>
      </div>
    )
  }
)

type SeparatorProps = {
  className?: string
}

export const Separator = forwardRef(
  ({ className = "", ...props }: SeparatorProps, ref: Ref<HTMLDivElement>) => {
    return (
      <SelectPrimitive.Separator
        ref={ref}
        className="w-full bg-inverseStroke h-[1px]"
        {...props}
      />
    )
  }
)
