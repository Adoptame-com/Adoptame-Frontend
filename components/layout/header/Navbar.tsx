'use client'
import { menuItems } from '@/components/layout/header/MenuItems'
import Logo from '@/components/shared/Logo'
import ThemeToggle from '@/components/shared/ThemeToogle'
import {
	Avatar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Navbar as NextuiNavbar,
	cn,
} from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const pathName = usePathname()
	return (
		<NextuiNavbar
			maxWidth="full"
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			isBordered
		>
			{/* Logo */}
			<NavbarBrand>
				<Logo />
			</NavbarBrand>

			{/* MenuItems Desktop */}
			<NavbarContent className="hidden md:flex gap-4" justify="center">
				{menuItems.map(({ name, path }) => (
					<NavbarItem key={`${name}-${path}`}>
						<Link
							href={path}
							className={cn(
								'text-gray-800 dark:text-gray-300',
								pathName === path &&
									'text-primary dark:text-primary font-semibold underline',
							)}
						>
							{name}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent as="div" justify="end">
				<ThemeToggle />
				{/* Avatar example */}
				<Avatar
					isBordered
					color="primary"
					name="Jason Hughes"
					size="sm"
					src="https://i.pravatar.cc/150?img=58"
				/>

				{/* Menu toggle */}
				<NavbarMenuToggle
					className="text-gray-800 dark:text-gray-300 md:hidden"
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				/>
			</NavbarContent>

			{/* MenuItems Mobile */}
			<NavbarMenu>
				{menuItems.map(({ name, path }) => (
					<NavbarMenuItem key={`${name}-${path}`}>
						<Link href={path}>{name}</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</NextuiNavbar>
	)
}

export default Navbar
