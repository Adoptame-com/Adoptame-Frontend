import type { ReactNode } from 'react'

type props = {
	children: ReactNode
}
const Button = ({ children }: props) => {
	return (
		<button
			type="button"
			className="px-4 py-1 rounded-sm bg-red-500 text-white"
		>
			{children}
		</button>
	)
}

export default Button
