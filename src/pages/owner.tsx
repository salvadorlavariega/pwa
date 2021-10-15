import { useState, useEffect } from 'react'
import Page from 'src/components/page'
import PageTw from 'src/components/page-tw'
import Portrait from 'src/components/Owner/portait'
import classnames from 'classnames'
import BordeTab from 'src/components/Owner/components/border-tab'

const Profile = () => {
	const PHOTOS = 'photos'
	const VIDEOS = 'videos'
	const VIP = 'vip'

	const [showTab, setShowTab] = useState(PHOTOS)
	const [margin, setMargin] = useState(PHOTOS)

	useEffect(() => {
		console.log('showTAb:', showTab)
		setMargin(showTab)
	}, [showTab])

	return (
		<PageTw>
			<section
				className='border border-y-0 border-gray-800 pb-16 sm:pb-0'
				style={{ maxWidth: '600px;' }}
			>
				<aside>
					<Portrait />
					<hr className='border-gray-800 border-4' />

					<div className='grid grid-cols-3 w-full px-5 px-5 my-3 '>
						<button
							className={classnames(
								'flex flex-row justify-center items-center w-full space-x-3 hover:text-blue-400 ',
								{
									'text-blue-400': showTab === PHOTOS,
								}
							)}
							onClick={() => setShowTab(PHOTOS)}
						>
							<svg
								className='text-center h-7 w-6'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'></path>
							</svg>
							<span className='font-semibold text-lg text-gray-600'>Pics</span>
						</button>

						<button
							className={classnames(
								'flex flex-row justify-center items-center w-full space-x-3 hover:text-green-400 ',
								{
									'text-green-400': showTab === VIDEOS,
								}
							)}
							onClick={() => setShowTab(VIDEOS)}
						>
							<svg
								className='text-center h-7 w-6'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'></path>
								<path d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
							</svg>
							<span className='font-semibold text-lg text-gray-600'>Video</span>
						</button>

						<button
							className={classnames(
								'flex flex-row justify-center items-center w-full space-x-3 hover:text-red-600',
								{
									'text-red-600': showTab === VIP,
								}
							)}
							onClick={() => setShowTab(VIP)}
						>
							<svg
								className='text-center h-7 w-6'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'></path>
							</svg>
							<span className='font-semibold text-lg text-gray-600'>vip</span>
						</button>
					</div>
					<BordeTab className='border-2 w-1/3' margin={margin} />
				</aside>

				<hr className='border-gray-800 border-4' />

				<div>
					<div className={PHOTOS === showTab ? 'block' : 'hidden'}>
						<div className='container grid grid-cols-3 gap-1 md:gap-1.5 mx-auto'>
							<div className='w-full rounded'>
								<img
									src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
									alt='image'
								/>
							</div>
							<div className='w-full rounded'>
								<img
									src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
									alt='image'
								/>
							</div>
							<div className='w-full rounded'>
								<img
									src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
									alt='image'
								/>
							</div>
							<div className='w-full rounded'>
								<img
									src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
									alt='image'
								/>
							</div>
							<div className='w-full rounded'>
								<img
									src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
									alt='image'
								/>
							</div>
							<div className='w-full rounded'>
								<img
									src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
									alt='image'
								/>
							</div>
							<div className='w-full rounded'>
								<img
									src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
									alt='image'
								/>
							</div>
						</div>
					</div>
					<div className={VIDEOS === showTab ? 'block' : 'hidden'}>
						<h2>Videos</h2>
					</div>
					<div className={VIP === showTab ? 'block' : 'hidden'}>
						<h2>VIP</h2>
					</div>
				</div>
			</section>
		</PageTw>
	)
}

export default Profile
