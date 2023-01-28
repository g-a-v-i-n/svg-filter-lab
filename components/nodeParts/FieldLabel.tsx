export type FieldLabelProps = {
  className?: string
  children: React.ReactNode
}

export default function FieldLabel({
  className,
  children,
  ...props
}: FieldLabelProps) {
  return (
    <label
      {...props}
      className={`textSecondary cs-text w-16 flex-none text-left ${className}`}
    >
      {children}
    </label>
  )
}

FieldLabel.defaultProps = {
  className: "",
}
