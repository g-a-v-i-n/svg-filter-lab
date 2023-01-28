import clsx from "clsx"
import FieldLabel from "./FieldLabel"

export type TextAreaProps = {
    className?: string
    label: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    children: React.ReactNode
}

const inputCns = `
    w-full 
    flex 
    items-center 
    h-16 
    px-2 
    bg-transparent 
    text-primary 
    border 
    border-stroke 
    rounded
  `

export function TextArea({
    className = "",
    label,
    onChange,
    ...props
}: TextAreaProps) {
    return (
        <div
            className={clsx(
                "flex w-full items-center justify-center pl-2 relative z-10",
                className
            )}
        >
            <FieldLabel>{label}</FieldLabel>
            <div className="p-2">
                <input
                    type="textarea"
                    onChange={(event) => onChange(event)}
                    className={inputCns}
                />
            </div>
        </div>
    )
}
