import React from "react";
import FieldLabel from "./FieldLabel"

export type TextInputProps = {
  className?: string
  label: string
  onChange: (value: string) => void
  value: string
}

export function TextInput({
  className = "",
  label,
  value,
  onChange,
}: TextInputProps) {
  return (
    <div className="flex w-full items-center justify-center pl-2">
      <FieldLabel>{label}</FieldLabel>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full flex items-center h-8 px-2 bg-transparent relative z-10 ${className}`}
      />
    </div>
  )
}
