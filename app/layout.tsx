import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/app/providers'
import Navbar from '@/components/layout/header/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Adoptame | Home Page',
	description:
		'Adoptame is a simple app that connects people with animals in need of adoption, helping you find and adopt your perfect pet.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	)
}
