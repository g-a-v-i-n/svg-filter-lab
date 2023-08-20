import React from "react";
import {
  Handle as RFHandle,
  Position,
  HandleProps as RFHandleProps,
} from "reactflow"
import clsx from "clsx"

export type HandleProps = {
  selected: boolean
  title: string
  className?: string
} & RFHandleProps

export function Handle({ className, title, ...props }: HandleProps) {

  title = title === 'in1'
    ? 'In'
    : title === 'in2'
    ? 'In2'
    : 'Result'

  return (
    <RFHandle
      className={clsx({
        "flex gap-x-1 items-center bg-transparent relative left-0 top-auto transform-none group ": true,
        "flex-row-reverse": props.position === Position.Right,
      })}
      {...props}
      title={title}
    >
      <div className={clsx({
        "w-[4px] h-4 pointer-events-none transition-colors": true,
        'bg-blue-500 dark:bg-blue-300': props.selected,
        "bg-black-500 dark:bg-white-500 group-hover:bg-black group-hover:dark:bg-white": !props.selected,
        "rounded-r-sm translate-x-[-1px]": props.position === Position.Left,
        "rounded-l-sm translate-x-[1px]": props.position === Position.Right
      })} />
      <span className="text-sm group-hover:textPrimary textTertiary pointer-events-none transition-colors">{title}</span>
    </RFHandle>
  )
}


Handle.defaultProps = {
  className: "",
}
