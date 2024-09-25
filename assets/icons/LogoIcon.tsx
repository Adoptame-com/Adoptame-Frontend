import * as React from 'react'
import type { SVGProps } from 'react'
const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
	// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2.2}
		{...props}
	>
		<circle cx={11} cy={4} r={2} />
		<circle cx={18} cy={8} r={2} />
		<circle cx={20} cy={16} r={2} />
		<path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045q-.64-2.065-2.7-2.705A3.5 3.5 0 0 1 5.5 10Z" />
	</svg>
)
export default LogoIcon
