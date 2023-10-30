import { NodeState } from "@/types";

export function getNodeIndexById(nodes: NodeState[], id: string) {
	const index = nodes.findIndex((node: NodeState) => node.id === id);
	// If index is -1, the node was not found
	if (index === -1) {
		// Log a warning and exit the function
		console.warn(`Node with ID ${id} not found`);
		return index;
	}
	return index;
}

export function getNodeById(nodes: NodeState[], id: string) {
	const index = getNodeIndexById(nodes, id);
	return nodes[index];
}
