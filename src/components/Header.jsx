import Link from 'next/link'
import { Button } from './ui/button'

//Components
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
	return (
		<header className='py-8 xl:py-12 text-white'>
			<div className='container mx-auto flex justify-between items-center'>
				{/* Logo */}
				<Link href='/'>
					<h1 className='text-4xl font-semibold'>
						Даниил<span className='text-accent'>.</span>
					</h1>
				</Link>

				{/* Desktop navigation */}
				<div className='hidden xl:flex items-center gap-8'>
					<Nav />
					<Button asChild>
						<Link href='/contact'>Написать мне</Link>
					</Button>
				</div>

				{/* Mobile nav */}
				<div className='xl:hidden'>
					<MobileNav />
				</div>
			</div>
		</header>
	)
}

export default Header
