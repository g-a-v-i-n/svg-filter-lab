import * as Tooltip from "@radix-ui/react-tooltip"
import { Handle as RFHandle, Position, HandleType } from "reactflow"
import clsx from "clsx"
import { theme } from "../../tailwind.config"

export type HandleProps = {
    type: HandleType
    position: Position
    selected: boolean,
    id?: string
    title: string
    className?: string
}

const handleCns = `
    rounded-full
    w-[5px] 
    h-6 
    flex-none 
    !relative 
    !top-auto 
    !left-auto 
    !right-auto 
    !bottom-auto 
    !translate-0
`

const tooltipContentCns = `
    bg-inverseSurfaceHigh
    text-inversePrimary
    rounded-lg 
    p-3
    font-medium 
    shadow-high
  `

export function Handle({ className, type, position, ...props }: HandleProps) {
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <RFHandle
                        type={type}
                        position={position}
                        className={clsx(handleCns, className, {
                            "bg-theme dark:bg-inverseTheme": props.selected,
                            "bg-Tertiary dark:bg-inverseTertiary": !props.selected,
                        })}
                        {...props}
                        title={undefined} // Removing the title because of custom tooltip
                    />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        side={position === Position.Left ? "left" : "right"}
                        className={tooltipContentCns}
                        sideOffset={2}
                    >
                        <span>{props.title}</span>
                        <Tooltip.Arrow asChild>
                            <svg
                                width="10"
                                height="7"
                                viewBox="0 0 10 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    transform="translate(0,-1)"
                                    d="M6.45216 6.18543C5.82919 7.27153 4.17081 7.27152 3.54784 6.18542L0 0H10L6.45216 6.18543Z"
                                    className="fill-inverseSurfaceHigh"
                                />
                            </svg>
                        </Tooltip.Arrow>
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}

Handle.defaultProps = {
    className: "",
}
