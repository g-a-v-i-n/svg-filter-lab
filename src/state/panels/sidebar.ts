import { uuid } from "@lib/uuid";
import { State, ZustandSet } from "@/types";
import { initialState } from "@components/nodes";

// export type OnDragOver = (event: React.DragEvent) => void
// export type OnDrop = (
//   event: React.DragEvent,
//   RFWrapper: React.RefObject<HTMLDivElement>
// ) => void

export const createSidebarSlice = (set: ZustandSet) => ({
	onDragOver: (event: React.DragEvent) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	},

	onDrop: (
		event: React.DragEvent,
		RFWrapper: React.RefObject<HTMLDivElement>,
	) => {
		event.preventDefault();

		if (RFWrapper === null || RFWrapper.current === null) {
			console.warn("RFWrapper is null or undefined");
			return;
		}

		const reactFlowBounds = RFWrapper.current.getBoundingClientRect();
		const nodeType = event.dataTransfer.getData("application/reactflow");

		// check if the dropped element is valid
		// if (typeof nodeType === "undefined" || !nodeType) {
		// 	return;
		// }

		set((state: State) => {
			if (state.xyfInstance?.project === undefined) {
				// console.log(state);
			}
			const position = state.xyfInstance?.project({
				x: event.clientX - reactFlowBounds.left,
				y: event.clientY - reactFlowBounds.top,
			});

			const newNode = {
				id: uuid(nodeType),
				// xyFlow specific, key must be called type
				type: nodeType,
				position: position,
				data: initialState[nodeType],
			};

			state.nodes.push(newNode);
		});
	},
});
