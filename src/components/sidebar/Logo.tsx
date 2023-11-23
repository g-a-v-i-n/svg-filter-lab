export function Logo() {
	return (
		<div
			className="w-8 h-8"
			dangerouslySetInnerHTML={{
				__html: /*svg*/ `
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_d_679_2152)">
			<g clip-path="url(#clip0_679_2152)">
			<rect x="4" width="24" height="24" rx="4.8" fill="white" fill-opacity="0.1" shape-rendering="crispEdges"/>
			<rect x="4" width="24" height="24" rx="4.8" fill="url(#paint0_linear_679_2152)" fill-opacity="0.5" shape-rendering="crispEdges"/>
			<g style="mix-blend-mode:screen">
			<circle cx="25" cy="12" r="7" fill="#F97316"/>
			</g>
			<g style="mix-blend-mode:screen">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M9.72363 5.54963C8.88645 5.19571 7.96608 5 7 5C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19C7.96608 19 8.88645 18.8043 9.72363 18.4504C8.04355 16.8153 7 14.5295 7 12C7 9.47047 8.04355 7.18467 9.72363 5.54963Z" fill="#58A6FF"/>
			</g>
			<g style="mix-blend-mode:screen">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7236 5.54963C17.8864 5.19571 16.9661 5 16 5C12.134 5 9 8.13401 9 12C9 15.866 12.134 19 16 19C16.9661 19 17.8864 18.8043 18.7236 18.4504C17.0436 16.8153 16 14.5295 16 12C16 9.47047 17.0436 7.18467 18.7236 5.54963Z" fill="#22C55E"/>
			</g>
			</g>
			<rect x="4.5" y="0.5" width="23" height="23" rx="4.3" stroke="white" stroke-opacity="0.1" style="mix-blend-mode:plus-lighter" shape-rendering="crispEdges"/>
			</g>
			<defs>
			<filter id="filter0_d_679_2152" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset dy="4"/>
			<feGaussianBlur stdDeviation="2"/>
			<feComposite in2="hardAlpha" operator="out"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_679_2152"/>
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_679_2152" result="shape"/>
			</filter>
			<linearGradient id="paint0_linear_679_2152" x1="16" y1="0" x2="16" y2="24" gradientUnits="userSpaceOnUse">
			<stop/>
			<stop offset="1" stop-opacity="0"/>
			</linearGradient>
			<clipPath id="clip0_679_2152">
			<rect x="4" width="24" height="24" rx="4.8" fill="white"/>
			</clipPath>
			</defs>
		</svg>

		`,
			}}
		/>
	);
}
