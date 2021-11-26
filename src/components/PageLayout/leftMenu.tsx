import Link from 'next/link'
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'

const links = [
	{ label: 'Home', href: '/' },
	{ label: 'Profile', href: '/profile' },
]

const LeftMenu = () => {
	return (
		<header className='hidden sm:block sm:h-full sm:w-28 md:w-60 h-12 text-gray-200 pt-20'>
			<div className='w-28 md:w-60'>
				<div className='overflow-y-auto fixed h-screen pr-3 w-24 md:w-60'>
					<nav className='mt-1 px-2'>
						<div className='block'>
							<div className='flex-shrink-0 flex hover:bg-gray-800 rounded-full pl-5 md:px-4 pb-5 mr-2'>
								<Link key='owner' href='/owner'>
									<a className='flex-shrink-0 group block'>
										<div className='flex items-center'>
											<div>
												<img
													className='inline-block h-10 w-10 rounded-full'
													src='https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg'
													alt=''
												/>
											</div>
											<div className='hidden md:block md:ml-3'>
												<p className='text-base leading-6 font-medium text-white'>
													Sharon Stone
												</p>
												<p className='text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150'>
													@thesharonstone
												</p>
											</div>
										</div>
									</a>
								</Link>
							</div>
						</div>
						<Link key='home' href='/'>
							<a
								href='#'
								className='mt-1 group flex items-center pl-6 md:px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300'
							>
								<svg
									className='mr-4 h-6 w-6 '
									stroke='currentColor'
									fill='none'
									viewBox='0 0 24 24'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6'
									></path>
								</svg>
								<p className='hidden md:block'>Home</p>
							</a>
						</Link>
						<Link key='notifications' href='/notifications'>
							<a className='mt-1 group flex items-center pl-6 md:px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300'>
								<svg
									className='mr-4 h-6 w-6'
									fill='none'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'></path>
								</svg>
								<p className='hidden md:block'>Notifications</p>
							</a>
						</Link>
						<Link key='messages' href='/messages'>
							<a className='mt-1 group flex items-center pl-6 md:px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300'>
								<svg
									className='mr-4 h-6 w-6'
									fill='none'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path>
								</svg>
								<p className='hidden md:block'>Messages</p>
							</a>
						</Link>
						<Link key='profile' href='/profile'>
							<a className='mt-1 group flex items-center pl-6 md:px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300'>
								<svg
									className='mr-4 h-6 w-6'
									fill='none'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'></path>
								</svg>
								<p className='hidden md:block'>Profile</p>
							</a>
						</Link>
						<Link key='more' href='/more'>
							<a className='mt-1 group flex items-center pl-6 md:px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300'>
								<svg
									className='mr-4 h-6 w-6'
									fill='none'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
								</svg>
								<p className='hidden md:block'>More</p>
							</a>
						</Link>
						<button
							className='bg-blue-400 hover:bg-blue-500 w-16 md:w-full mt-5 text-white font-bold py-2 px-4 rounded-full'
							onClick={() => Auth.signOut()}
						>
							Log out
						</button>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default LeftMenu
