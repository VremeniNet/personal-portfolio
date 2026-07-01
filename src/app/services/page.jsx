'use client'

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { section } from 'framer-motion/client'
import { motion } from 'framer-motion'

const services = [
	{
		num: '01',
		title: 'Адаптивная верстка',
		description:
			'Создаю интерфейсы, которые корректно выглядят на разных экранах: от мобильных устройств до десктопа.',
		href: '',
	},
	{
		num: '02',
		title: 'React-компоненты',
		description:
			'Разрабатываю переиспользуемые компоненты, разделяю интерфейс на понятные части и слежу за структурой проекта.',
		href: '',
	},
	{
		num: '03',
		title: 'Интерфейсы на Next.js',
		description:
			'Собираю страницы на Next.js, работаю с маршрутизацией, layout-структурой и оптимизированными изображениями.',
		href: '',
	},
	{
		num: '04',
		title: 'Работа с API',
		description:
			'Подключаю данные из API, отображаю их в интерфейсе и обрабатываю состояния загрузки, ошибок и пустых данных.',
		href: '',
	},
]

const Services = () => {
	return (
		<section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
			<div className='container mx-auto'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' },
					}}
					className='grid grid-cols-1 md:grid-cols-2 gap-15'
				>
					{services.map((service, index) => {
						return (
							<div
								key={index}
								className='flex-1 flex flex-col justify-center gap-6 group'
							>
								{/* top */}
								<div className='w-full flex justify-between items-center'>
									<div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
										{service.num}
									</div>
									<Link
										href={service.href}
										className='w-17.5 h-17.5 rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45'
									>
										<BsArrowDownRight className='text-primary text-3xl' />
									</Link>
								</div>
								{/* title */}
								<h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
									{service.title}
								</h2>
								{/* description */}
								<p className='text-white/60'>{service.description}</p>
								{/* border */}
								<div className='border-b border-white/20 w-full'></div>
							</div>
						)
					})}
				</motion.div>
			</div>
		</section>
	)
}

export default Services
