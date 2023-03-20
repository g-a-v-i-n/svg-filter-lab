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
      <div className="surfaceMiddle border-y borderPrimary flex flex-col w-full nodrag">
        {children}
      </div>
    </div>
  )
}

ControlGroup.defaultProps = {
  className: "",
}
