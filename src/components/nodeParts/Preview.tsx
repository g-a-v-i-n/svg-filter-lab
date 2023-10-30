export function Preview(props) {
	return (
		<div className="flex justify-between relative p-2 gap-2">
			<svg className="w-full h-auto image-border rounded" viewBox="0 0 20 20">
				<defs dangerouslySetInnerHTML={{ __html: props.filterText }} />
				<g filter={`url(#filter-${props.filterId})`}>
					<circle cx="10" cy="10" r="9" fill="blue" />
				</g>
			</svg>
			<div className="flex flex-col gap-2">
				<button
					type="button"
					className="w-4 h-4 text-gray-500 hover:text-gray-900"
				>
					<div className="cs-text">􀅋</div>
				</button>
				<button
					type="button"
					className="w-4 h-4 text-gray-500 hover:text-gray-900"
				>
					<div className="cs-text">􀈄</div>
				</button>
			</div>
		</div>
	);
}
