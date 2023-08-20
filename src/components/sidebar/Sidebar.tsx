import nodes from '@state/nodes/index'
import { version } from "@/package.json";
import { byAlpha } from '@lib/byAlpha'

  // conver the nodes import to a dictionary
  const nodesArray = Object.entries(nodes).map(([key, value]:[string, any]) => {
    return {
      definition: value.definition,
      create: value.createData,
    }
  }).sort((a, b) => byAlpha(a.definition.meta.title, b.definition.meta.title))


export function Sidebar() {
  return (
    <aside className="relative w-full h-full bg-white-900 dark:bg-black-900 backdrop-blur-3xl flex flex-col gap-1 p-1 flex-none">
      <span className="p-2 font-semibold">Filter Elements</span>
      {nodesArray.map((n) => {
        return <Card key={n.definition.meta.nodeType} metadata={n.definition.meta} />
      })}
      <div className="absolute left-0 bottom-0 p-3">
        <span className="textTertiary">{version}</span>
      </div>
    </aside>
  )
}

type CardProps = {
  metadata: {
    type: string
    title: string
    icon: string
    mdn: string | null
  }
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
