import LogoIcon from '@/assets/icons/LogoIcon'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link
			href="/"
			className="text-primary font-bold text-xl flex items-center gap-x-1"
		>
			<LogoIcon />
			<span>Adoptame</span>
		</Link>
	)
}

export default Logo
