'use client'
import { NextUIProvider } from '@nextui-org/react'
import type React from 'react'

export type ProvidersProps = {
	children: React.ReactNode
}
const Layout = ({ children }: ProvidersProps) => {
	return (
		<NextUIProvider>
			<div>{children}</div>
		</NextUIProvider>
	)
}

export default Layout
