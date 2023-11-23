import { uuid } from "@lib/uuid";
import { State, ZustandSet } from "@/types";
import { initialState } from "@components/nodes";

export const createSidebarSlice = (set: ZustandSet) => ({
	onDragOver: (event: React.DragEvent) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	},

	createNodeViaDrop: (
		event: React.DragEvent,
		RFWrapper: React.RefObject<HTMLDivElement>,
	) => {
		event.preventDefault();

		if (RFWrapper === null || RFWrapper.current === null) {
			return;
		}

		const reactFlowBounds = RFWrapper.current.getBoundingClientRect();
		const nodeType = event.dataTransfer.getData("application/reactflow");

		set((state: State) => {
			const position = state.reactFlowInstance?.project({
				x: event.clientX - reactFlowBounds.left,
				y: event.clientY - reactFlowBounds.top,
			});

			const newNode = {
				id: uuid(nodeType),
				type: nodeType,
				position: position,
			};

			state.data[newNode.id] = {
				id: newNode.id,
				ast: initialState[nodeType],
			};
			state.nodes.push(newNode);
		});
	},
});
