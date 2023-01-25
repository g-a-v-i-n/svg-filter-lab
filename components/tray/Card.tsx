
import React from 'react'
import { useDrag } from 'react-dnd'


/**
 * Your Component
 */
export default function Card({ isDragging, nodeIdentity }) {
  return (
    <div
        key={nodeIdentity.id}
        draggable
        onDragStart={(event) => {
            event.dataTransfer.setData('application/reactflow', nodeIdentity.id);
            event.dataTransfer.effectAllowed = 'move';
        }}
        className="rounded-xl bg-white/10 flex items-center justify-center h-full w-32 p-2 cursor-grab">
        <span className="select-none">{nodeIdentity.title}</span>
    </div>
  )
}


// export default () => {

  
//     return (
//       <aside>
//         <div className="description">You can drag these nodes to the pane on the right.</div>
//         <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
//           Input Node
//         </div>
//         <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
//           Default Node
//         </div>
//         <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
//           Output Node
//         </div>
//       </aside>
//     );
//   };