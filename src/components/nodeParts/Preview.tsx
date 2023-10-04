export function Preview(props) {
	return (
		<div className="flex items-center justify-between relative border-t borderPrimary">
			<svg className="w-full h-auto" viewBox="0 0 20 20">
				<defs dangerouslySetInnerHTML={{ __html: props.filterText }} />
				<g filter={`url(#filter-${props.filterId})`}>
					<circle cx="10" cy="10" r="9" fill="orangered" />
				</g>
			</svg>
		</div>
	);
}
