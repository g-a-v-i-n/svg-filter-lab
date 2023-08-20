import * as RS from "@radix-ui/react-switch"
import clsx from "clsx"
import { forwardRef, Ref } from "react"

export type SwitchProps = {
  className?: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export const Switch = forwardRef(
  ({ className = "", ...props }: SwitchProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <RS.Root
        ref={ref}
        className={clsx("w-6 h-[14px] rounded-full flex p-[1px] ", className)}
        {...props}
      >
        <RS.Thumb className="bg-inversePrimary dark:bg-inversePrimary w-[12px] h-[12px] rounded-full content-none" />
      </RS.Root>
    )
  }
)
