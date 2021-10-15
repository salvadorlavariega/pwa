import Link from 'next/link'
import { useRouter } from 'next/router'
import {
	MESSAGES_ICON,
	HOME_ICON,
	BELL_NOTIFICATION_ICON,
	MORE_VERTICAL_ICON,
} from 'src/components/icons'

const BottomNav = () => {
	const router = useRouter()

	return (
		<div className='sm:hidden'>
			<nav className='pb-safe w-full bg-gray-100 border-t dark:bg-gray-900 dark:border-gray-800 fixed bottom-0'>
				<div className='mx-auto px-0 max-w-md h-16 flex items-center justify-between'>
					{links.map(({ href, label, icon }) => (
						<Link key={label} href={href}>
							<a
								className={`space-y-1 w-full h-full flex flex-col items-center justify-center ${
									router.pathname === href
										? 'text-indigo-500 dark:text-indigo-400'
										: 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
								}`}
							>
								{icon}
								<span className='text-xs text-gray-600 dark:text-gray-400'>
									{label}
								</span>
							</a>
						</Link>
					))}
				</div>
			</nav>
		</div>
	)
}

export default BottomNav

const links = [
	{
		label: 'Home',
		href: '/',
		icon: HOME_ICON,
	},
	{
		label: 'Messages',
		href: '/messages',
		icon: MESSAGES_ICON,
	},

	{
		label: 'Notifications',
		href: '/notifications',
		icon: BELL_NOTIFICATION_ICON,
	},
	{
		label: 'More',
		href: '/more',
		icon: MORE_VERTICAL_ICON,
	},
]
