import clsx from "clsx"
import { Position } from "reactflow"
import { ControlGroup } from "./ControlGroup"
import { Footer } from "./Footer"
import { Handle } from "./Handle"
import { Header } from "./Header"

export type ContainerProps = {
  selected?: boolean
  className?: string
  children?: React.ReactNode,
  metadata: any,
  dragging: boolean | undefined,
  id?: string
}

export function Container({
  className,
  children,
  selected,
  metadata,
  dragging,
  id,
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      style={{ width: metadata.width + 'px'}}
      className={clsx(
        "relative flex flex-col rounded-xl border outline-none surface  transition-all",
        { "shadow-2xl surfaceSecondary": dragging,
          "shadow-sm": !dragging,
          "borderPrimary": !selected,
          "borderTheme ring-4 ring-blue-500/20 dark:ring-blue-400/40" : selected
        },
        className
      )}
    >
      <Header metadata={metadata} id={id} />

      <div className="flex w-full justify-between py-1">
        <div className="flex flex-col gap-y-1">
          {metadata.inputs.map((input, index) => (
              <Handle
                key={index + '-' + input} 
                selected={selected}   
                type="target"
                id={input}
                title={input}
                position={Position.Left}
              />
          ))}
        </div>
        <div className="flex flex-col gap-y-1">
          {metadata.outputs.map((output, index) => (
              <Handle
                key={index + '-' + output}
                selected={selected}   
                type="source"
                id={output}
                title={output}
                position={Position.Right}
              />
          ))}
        </div>
      </div>
      <ControlGroup>
        {children}
      </ControlGroup>
      <Footer />
      <div className="absolute bottom-[-16px] text-xs text-primary opacity-20 font-mono pl-3">
        {id}
      </div>
    </div>
  )
}

Container.defaultProps = {
  className: "",
}
