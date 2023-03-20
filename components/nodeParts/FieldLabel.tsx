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
      className={`textTertiary cs-text flex-none text-left pr-2 ${className}`}
    >
      {children}
    </label>
  )
}

FieldLabel.defaultProps = {
  className: "",
}
