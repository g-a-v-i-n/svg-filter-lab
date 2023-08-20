import React from "react"

export type ControlGroupProps = {
  className?: string
  children: React.ReactNode
}

export function ControlGroup({
  className,
  children,
  ...props
}: ControlGroupProps) {
  return (
    <div {...props} className={`flex flex-col ${className}`}>
      <div className="surfaceSecondary border-y borderSecondary flex flex-col w-full nodrag py-1">
        {children}
      </div>
    </div>
  )
}

ControlGroup.defaultProps = {
  className: "",
}
