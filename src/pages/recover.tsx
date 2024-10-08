import Page from 'src/components/page'
import Link from 'next/link'

export default function Example() {
	return (
		<div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-md w-full space-y-8'>
				<div>
					<img
						className='mx-auto h-12 w-auto'
						src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
						alt='Workflow'
					/>
					<h2 className='mt-6 text-center text-3xl font-extrabold'>
						Recover your password
					</h2>

					<p className='mt-2 text-center text-sm'>
						Enter your email, and we will send you an email to reset your
						password
					</p>
				</div>
				<form className='mt-8 space-y-6' action='#' method='POST'>
					<input type='hidden' name='remember' defaultValue='true' />
					<div className='shadow-sm -space-y-px'>
						<div>
							<label htmlFor='email-address' className='sr-only'>
								Email address
							</label>
							<input
								id='email-address'
								name='email'
								type='email'
								autoComplete='email'
								required
								className='bg-gray-800 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
								placeholder='Email address'
							/>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							<span className='absolute left-0 inset-y-0 flex items-center pl-3'>
								<span
									className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
									aria-hidden='true'
								/>
							</span>
							Recover
						</button>
					</div>

					<div className='flex items-center justify-between'>
						<div className='text-sm'>
							<Link href='/signin'>
								<a
									href='#'
									className='font-medium text-indigo-600 hover:text-indigo-500'
								>
									Back to signin
								</a>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
