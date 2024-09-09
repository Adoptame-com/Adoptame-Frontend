"use client"
import { Avatar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Navbar as NextuiNavbar } from '@nextui-org/react'
import Link from 'next/link'
import { useState } from 'react';
import { menuItems } from '@/components/layout/header/MenuItems';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NextuiNavbar
      maxWidth='full'
      className='bg-[#84DBB8]'
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >

      {/* Logo */}
      <NavbarBrand>
        <span className='text-white font-extrabold text-xl'>Adoptame</span>
      </NavbarBrand>

      {/* MenuItems Desktop */}
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {menuItems.map(({ name, path }) => (
          <NavbarItem key={`${name}-${path}`}>
            <Link href={path}>
              {name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent as="div" justify='end'>
        {/* Avatar example */}
        <Avatar
          isBordered
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />

        {/* Menu toggle */}
        <NavbarMenuToggle
          className='text-white md:hidden'
          aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* MenuItems Mobile */}
      <NavbarMenu>
        {menuItems.map(({ name, path }) => (
          <NavbarMenuItem key={`${name}-${path}`}>
            <Link href={path}>
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextuiNavbar>
  )
}

export default Navbar
