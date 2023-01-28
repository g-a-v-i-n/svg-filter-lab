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
    <div {...props} className={`flex flex-col px-2 ${className}`}>
      <div className="surfaceMiddle border borderPrimary shadow-field dark:shadow-black/20 flex flex-col w-full rounded-lg nodrag">
        {children}
      </div>
    </div>
  )
}

ControlGroup.defaultProps = {
  className: "",
}
