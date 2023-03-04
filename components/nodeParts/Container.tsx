import clsx from "clsx"

export type ContainerProps = {
  selected?: boolean
  className?: string
  children?: React.ReactNode
  id?: string
}

export function Container({
  className,
  children,
  selected,
  id,
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      className={clsx(
        "relative flex flex-col rounded-2xl border outline-none transition-all",
        "group-focus-within:ring-4 group-focus-within:ring-theme dark:group-focus-within:ring-inverseTheme/50",
        {
        "border-theme dark:borderInverseTheme surfaceBaseTheme": selected === true,
        "borderPrimary dark:bordesrInverseTheme surfaceBase": selected === false,
        },
        className
      )}
    >
      {children}
      <div className="absolute bottom-[-16px] text-xs text-secondary pl-3">{id}</div>
    </div>
  )
}

Container.defaultProps = {
  className: "",
}
