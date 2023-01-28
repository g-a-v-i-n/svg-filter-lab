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
                "flex w-full items-center justify-between py-2 px-4",
                className
            )}
        >
            <label {...props} className={"w-16 flex-none font-medium"}>
                {label}
            </label>
            {children}
        </div>
    )
}
