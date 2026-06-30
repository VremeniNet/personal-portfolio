import Link from 'next/link'

import { FaGithub, FaInstagram, FaTelegram, FaVk } from 'react-icons/fa'

const socials = [
	{
		icon: <FaGithub />,
		path: 'https://github.com/VremeniNet',
	},
	{
		icon: <FaTelegram />,
		path: 'https://t.me/daniil_zhelanov',
	},
	{
		icon: <FaInstagram />,
		path: 'https://instagram.com/daniil.zhelanov',
	},
	{
		icon: <FaVk />,
		path: 'https://vk.com/daniil.zhelanov',
	},
]

const Social = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<Link key={index} href={item.path} className={iconStyles}>
						{item.icon}
					</Link>
				)
			})}
		</div>
	)
}

export default Social
