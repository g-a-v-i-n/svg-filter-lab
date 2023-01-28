import clsx from "clsx"

export type HandlePositionerProps = {
    left?: boolean
    right?: boolean
    className?: string
    children: React.ReactNode
}

export function HandlePositioner({
    className,
    left,
    right,
    children,
    ...props
}: HandlePositionerProps) {
    const positioningCns = clsx({
        "left-[-3px]": left,
        "right-[-3px]": right,
    })

    return (
        <div
            {...props}
            className={`absolute top-0 py-8 h-full flex flex-col gap-y-4 ${positioningCns} ${className}`}
        >
            {children}
        </div>
    )
}

HandlePositioner.defaultProps = {
    className: "",
}
