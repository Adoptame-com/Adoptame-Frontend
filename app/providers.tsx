'use client'
import type { Children } from '@/interfaces/common/Children'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const Providers = ({ children }: Children) => {
	return (
		<NextUIProvider>
			<NextThemesProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	)
}

export default Providers
