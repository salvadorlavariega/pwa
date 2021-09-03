import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
	{ label: 'Home', href: '/' },
	{ label: 'Profile', href: '/profile' },
]

const Appbar = () => {
	const router = useRouter()

	return (
		<div className='pt-safe w-full bg-gray-900 fixed top-0'>
			<header className='bg-gray-100 border-b dark:bg-gray-900 dark:border-gray-800'>
				<div className='mx-auto px-6 max-w-screen-md h-20 flex items-center justify-between'>
					<Link href='/'>
                        <a href="#" className="mt-1 group flex items-center pl-6 md:px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                            <svg className="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"></path>
                            </svg>
                            <p>Home</p>
                        </a>
                                
					</Link>

					<nav className='space-x-6 flex items-center'>
						<div className='hidden sm:block'>
							<div className='space-x-6 flex items-center'>
								{links.map(({ label, href }) => (
									<Link key={label} href={href}>
										<a
											className={`text-sm ${
												router.pathname === href
													? 'text-indigo-500 dark:text-indigo-400'
													: 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
											}`}
										>
											{label}
										</a>
									</Link>
								))}
							</div>
						</div>

						<div
							title='Gluten Free'
							className='w-10 h-10 bg-gray-200 dark:bg-gray-800 bg-cover bg-center rounded-full shadow-inner'
							style={{
								backgroundImage:
									'url(https://images.unsplash.com/photo-1612480797665-c96d261eae09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)',
							}}
						/>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Appbar
