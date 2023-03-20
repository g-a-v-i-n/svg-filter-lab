import {
  Handle as RFHandle,
  Position,
  HandleProps as RFHandleProps,
} from "reactflow"
import clsx from "clsx"

export type HandleProps = {
  // selected: boolean
  title: string
  className?: string
} & RFHandleProps

export function Handle({ className, title, ...props }: HandleProps) {
  return (
    <RFHandle
      className={clsx({
        "flex gap-x-2 items-center bg-transparent relative left-0 top-auto transform-none": true,
        "flex-row-reverse": props.position === Position.Right,
      })}
      {...props}
      title={title}
    >
      <div className={clsx({
        "bg-Tertiary dark:bg-inverseTertiary w-[4px] h-5 ": true,
        "rounded-r translate-x-[-1px]": props.position === Position.Left,
        "rounded-l translate-x-[1px]": props.position === Position.Right
      })} />
      <span className="text-sm textTertiary">{title}</span>
    </RFHandle>
  )
}


Handle.defaultProps = {
  className: "",
}
