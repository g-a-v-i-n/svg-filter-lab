import FieldLabel from "./FieldLabel"

export type NodeTextInputProps = {
  className?: string
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  children: React.ReactNode
}

export function NodeTextInput({
  className,
  label,
  onChange,
  ...props
}: NodeTextInputProps) {
  return (
    <div className="flex w-full items-center justify-center pl-2">
      <FieldLabel>{label}</FieldLabel>
      <input
        type="text"
        onChange={(event) => onChange(event)}
        className={`w-full flex items-center h-8 px-2 rounded-lg bg-transparent relative z-10 ${className}`}
      />
    </div>
  )
}

NodeTextInput.defaultProps = {
  className: "",
}
