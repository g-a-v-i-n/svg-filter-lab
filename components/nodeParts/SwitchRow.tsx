import clsx from "clsx"

export type SwitchRowProps = {
  label: string
  className?: string
  children: React.ReactNode
}

export function SwitchRow({
  label,
  className,
  children,
  ...props
}: SwitchRowProps) {
  return (
    <div
      className={clsx(
        "flex w-full items-center justify-between py-1 px-2",
        className
      )}
    >
      <label {...props} className={"flex-none font-medium text-sm"}>
        {label}
      </label>
      {children}
    </div>
  )
}
