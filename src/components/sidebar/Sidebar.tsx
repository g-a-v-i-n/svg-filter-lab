import nodeDefinitions from '@state/nodes/index'
import { version } from "@/package.json";
import { byAlpha } from '@lib/byAlpha'
import { NodeDefinition } from '@/types';

  // conver the nodes import to a dictionary
  const orderedDefinitions = Object
    .values(nodeDefinitions)
    .sort((a, b) => byAlpha(a.specification.meta.title, b.specification.meta.title))


export function Sidebar() {
  return (
    <aside className="relative w-full h-full bg-white-900 dark:bg-black-900 backdrop-blur-3xl flex flex-col gap-1 p-1 flex-none">
      <span className="p-2 font-semibold">Filter Elements</span>
      {orderedDefinitions.map((nodeDefinition: NodeDefinition) => {
        return <Card key={nodeDefinition.specification.meta.nodeType} metadata={nodeDefinition.specification.meta} />
      })}
      <div className="absolute left-0 bottom-0 p-3">
        <span className="textTertiary">{version}</span>
      </div>
    </aside>
  )
}

type CardProps = {
  metadata: NodeDefinition["specification"]["meta"]
}

export default function Card({ metadata }: CardProps) {
  return (
    <div
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("application/reactflow", metadata.nodeType)
        event.dataTransfer.effectAllowed = "move"
      }}
      className="rounded-lg flex items-center gap-x-2 p-2 cursor-grab"
    >
      <span className="select-none">{metadata.icon}</span>
      <span className="select-none">{metadata.title}</span>
    </div>
  )
}
