import Card from "./Card"
import { nodeMetadata } from "../../state/store"

export function Tray() {
    return (
        <aside className="fixed bottom-0 left-0 w-full surfaceBase border-t borderPrimary backdrop-blur-3xl flex gap-x-2 p-2">
            {nodeMetadata.map((node) => {
                return <Card key={node.type} node={node} />
            })}
        </aside>
    )
}
